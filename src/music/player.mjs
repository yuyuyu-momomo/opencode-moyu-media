import { execFile } from "node:child_process"
import { promisify } from "node:util"
import { performance } from "node:perf_hooks"
import { mediaBinary, nativeMediaPath, launchMedia, stopMedia } from "../media/runtime.mjs"
import { musicTrack, trackKey } from "./providers.mjs"

const execute = promisify(execFile)
export async function inspectAudio(path) {
  const binary = await mediaBinary("ffprobe")
  const { stdout } = await execute(binary, ["-v", "error", "-protocol_whitelist", "file,pipe", "-show_entries", "stream=codec_type:format=duration", "-of", "json", await nativeMediaPath(binary, path)], { timeout: 15000, maxBuffer: 65536, windowsHide: true })
  const data = JSON.parse(stdout), duration = Number(data.format?.duration)
  if (!data.streams?.some((stream) => stream.codec_type === "audio") || !Number.isFinite(duration) || duration <= 0) throw new Error("平台返回的文件没有可播放的音轨")
  return { duration }
}
function stopChild(child) {
  if (!child || child.exitCode !== null || child.signalCode) return Promise.resolve()
  return new Promise((resolve) => { child.once("close", resolve); stopMedia(child) })
}

/** Audio uses its own clock and process; video frames are never decoded. */
export class AudioPlayer {
  constructor({ onState = () => {}, onEnded = () => {}, onError = (_error) => {}, inspect = inspectAudio, binary = mediaBinary, launch = launchMedia } = {}) {
    Object.assign(this, { onState, onEnded, onError, inspect, binary, launch })
    this.duration = 0; this.volume = 50; this.playing = false; this.offset = 0; this.generation = 0; this.stopping = Promise.resolve()
    this.timer = setInterval(() => { if (this.playing) this.onState() }, 500); this.timer.unref?.()
  }
  get position() { return Math.min(this.duration, this.offset + (this.playing ? (performance.now() - this.anchor) / 1000 : 0)) }
  pause() {
    this.offset = this.position; this.playing = false; ++this.generation
    const child = this.child; this.child = undefined
    this.stopping = Promise.all([this.stopping, stopChild(child)]).then(() => {})
    this.onState()
    return this.stopping
  }
  async open(path) {
    const stopped = this.pause(), generation = this.generation
    await stopped
    if (generation !== this.generation) return false
    const { duration } = await this.inspect(path)
    if (generation !== this.generation) return false
    this.path = path; this.duration = duration; this.offset = 0; this.onState()
    return true
  }
  async play() {
    if (!this.path || this.playing || this.child) return
    const generation = ++this.generation
    await this.stopping
    const binary = await this.binary("ffplay"), path = await nativeMediaPath(binary, this.path)
    if (generation !== this.generation) return
    if (this.offset >= this.duration) this.offset = 0
    const child = this.child = this.launch(binary, ["-nodisp", "-autoexit", "-loglevel", "error", "-volume", String(this.volume), "-ss", String(this.offset), "-protocol_whitelist", "file,pipe", "-i", path])
    child.stdout?.resume()
    child.stderr?.resume()
    const failed = () => {
      if (generation !== this.generation || child !== this.child) return
      this.offset = this.position; this.playing = false; this.child = undefined; this.onState()
      this.onError(new Error("音频播放失败，请检查 FFmpeg、系统音量和音频设备"))
    }
    child.once("error", failed)
    child.once("spawn", () => { if (generation !== this.generation) return; this.anchor = performance.now(); this.playing = true; this.onState() })
    child.once("close", (code) => {
      if (generation !== this.generation || child !== this.child) return
      if (code !== 0) { failed(); return }
      this.offset = this.duration; this.playing = false; this.child = undefined; this.onState(); this.onEnded()
    })
  }
  async seek(position) {
    const playing = this.playing
    const stopped = this.pause(), generation = this.generation
    await stopped
    if (generation !== this.generation) return
    this.offset = Math.max(0, Math.min(this.duration, Number(position) || 0)); this.onState()
    if (playing) await this.play()
  }
  async setVolume(volume) {
    const next = Math.max(0, Math.min(100, Math.round(Number(volume) || 0)))
    if (next === this.volume) return
    const playing = this.playing
    const stopped = this.pause(), generation = this.generation
    await stopped
    if (generation !== this.generation) return
    this.volume = next; this.onState()
    if (playing) await this.play()
  }
  async dispose() { clearInterval(this.timer); await this.pause(); this.path = undefined }
}

export class MusicController {
  constructor(service, { onChange = (_state) => {}, player, onError = (_error) => {} } = {}) {
    this.service = service; this.onChange = onChange; this.onError = onError
    this.queue = []; this.currentKey = ""; this.repeat = "all"; this.busy = false; this.error = ""; this.preview = false; this.generation = 0; this.writes = Promise.resolve(); this.tasks = new Set()
    this.player = player || new AudioPlayer({ onState: () => this.emit(), onEnded: () => { void this.next(1, true) }, onError: (error) => this.fail(error) })
  }
  get current() { return this.radio ? this.radio.history[this.radio.index] : this.queue.find((track) => trackKey(track) === this.currentKey) }
  get state() { return { queue: this.queue, current: this.current, radio: Boolean(this.radio), playing: this.player.playing, position: this.player.position, duration: this.player.duration, volume: this.player.volume, repeat: this.repeat, busy: this.busy, error: this.error, preview: this.preview } }
  emit() { if (!this.disposed) this.onChange(this.state) }
  fail(error) { this.error = error instanceof Error ? error.message : "音乐操作失败"; this.busy = false; this.emit(); if (!this.disposed) this.onError(this.error) }
  async restore() {
    const value = await this.service.settings.player()
    if (this.disposed) return
    this.queue = value.queue; this.currentKey = value.currentKey; this.player.volume = value.volume; this.repeat = value.repeat; this.emit()
  }
  save() {
    const value = { queue: this.queue, currentKey: this.currentKey, volume: this.player.volume, repeat: this.repeat }
    this.writes = this.writes.catch(() => {}).then(() => this.service.settings.savePlayer(value)).catch((error) => this.fail(error))
    return this.writes
  }
  add(input) {
    const track = musicTrack(input)
    this.addMany([track]); return track
  }
  addMany(inputs) {
    const tracks = inputs.map(musicTrack), known = new Set(this.queue.map(trackKey)), additions = []
    for (const track of tracks) if (!known.has(trackKey(track))) { known.add(trackKey(track)); additions.push(track) }
    if (this.queue.length + additions.length > 100) throw new Error(`播放队列最多 100 首，还剩 ${100 - this.queue.length} 个位置，请先整理队列`)
    if (additions.length) {
      this.queue = [...this.queue, ...additions]; if (!this.currentKey) this.currentKey = trackKey(this.queue[0])
      this.emit(); void this.save()
    }
    return { added: additions.length, duplicates: tracks.length - additions.length }
  }
  play(key) {
    if (this.disposed) return Promise.resolve()
    const track = key !== undefined ? this.queue.find((item) => trackKey(item) === key) : this.current || (!this.radio ? this.queue[0] : undefined)
    if (!track) return Promise.resolve()
    if (key !== undefined && this.radio) { this.radioAbort?.abort(); this.radioAbort = undefined; this.radio = undefined; this.error = ""; this.emit() }
    if (trackKey(track) === this.preparedKey && this.prepared && !this.busy) return this.player.play().catch((error) => this.fail(error))
    return this.task(this.load(track))
  }
  task(task) {
    this.tasks.add(task); void task.finally(() => this.tasks.delete(task)).catch(() => {})
    return task
  }
  async load(track) {
    const key = trackKey(track)
    this.abort?.abort(); const abort = this.abort = new AbortController(), generation = ++this.generation
    const previous = this.prepared; this.prepared = undefined; this.preparedKey = undefined
    if (!this.radio) this.currentKey = key
    this.busy = true; this.error = ""; this.preview = false; this.emit(); void this.save()
    let prepared
    try {
      await this.player.pause()
      await previous?.release()
      abort.signal.throwIfAborted()
      this.player.path = undefined; this.player.duration = 0; this.player.offset = 0
      prepared = await this.service.prepare(track, { signal: abort.signal })
      if (abort.signal.aborted || generation !== this.generation || this.disposed) return
      if (!await this.player.open(prepared.path)) return
      if (abort.signal.aborted || generation !== this.generation || this.disposed) return
      this.prepared = prepared; this.preparedKey = key; this.preview = prepared.preview || Boolean(track.duration && this.player.duration < track.duration - 3)
      await this.player.play()
    } catch (error) { if (!abort.signal.aborted && generation === this.generation && !this.disposed) this.fail(error) }
    finally {
      if (prepared && this.prepared !== prepared) await prepared.release().catch(() => {})
      if (generation === this.generation) { this.busy = false; this.abort = undefined; this.emit() }
    }
  }
  pause() { this.abort?.abort(); this.abort = undefined; this.radioAbort?.abort(); this.radioAbort = undefined; ++this.generation; this.busy = false; this.emit(); return this.player.pause() }
  toggle() { return this.player.playing || this.busy ? this.pause() : this.radio && !this.current ? this.next() : this.play() }
  startRadio() {
    if (this.disposed) return Promise.resolve()
    this.radio = { history: [], index: -1, seen: [] }
    return this.next()
  }
  async stopRadio() {
    if (!this.radio) return
    const stopped = this.pause(), prepared = this.prepared
    this.radio = undefined; this.prepared = undefined; this.preparedKey = undefined
    this.player.path = undefined; this.player.duration = 0; this.player.offset = 0; this.error = ""; this.preview = false; this.emit()
    await stopped; await prepared?.release()
  }
  async advanceRadio(direction) {
    const session = this.radio, stopped = this.pause(), abort = this.radioAbort = new AbortController()
    this.busy = true; this.error = ""; this.emit()
    try {
      await stopped; abort.signal.throwIfAborted()
      let index = Math.max(0, session.index + (direction < 0 ? -1 : 1))
      if (index >= session.history.length) {
        // Bound retries when the platform returns only previously seen tracks.
        for (let attempt = 0; attempt < 3; attempt++) {
          const result = await this.service.radio({ exclude: session.seen, signal: abort.signal })
          abort.signal.throwIfAborted()
          if (this.radio !== session || this.disposed) return
          const seen = new Set(session.seen), tracks = result.tracks.map(musicTrack).filter((track) => { if (seen.has(track.id)) return false; seen.add(track.id); return true })
          if (!tracks.length) continue
          session.history.push(...tracks); session.seen = [...seen].slice(-100)
          const trim = Math.max(0, session.history.length - 100)
          if (trim) { session.history.splice(0, trim); session.index -= trim; index -= trim }
          break
        }
      }
      if (index >= session.history.length) throw new Error("QQ音乐暂未返回新的推荐，请稍后点下一首重试")
      session.index = index
      if (this.preparedKey === trackKey(this.current) && this.prepared) await this.player.seek(0)
      abort.signal.throwIfAborted()
      if (this.radio !== session || this.disposed) return
      this.radioAbort = undefined; this.busy = false
      await this.play()
    } catch (error) { if (!abort.signal.aborted && this.radio === session && !this.disposed) this.fail(error) }
    finally { if (this.radioAbort === abort) { this.radioAbort = undefined; this.busy = false; this.emit() } }
  }
  async next(direction = 1, natural = false) {
    if (this.radio && !this.disposed) return this.task(this.advanceRadio(direction))
    if (!this.queue.length || this.disposed) return
    const index = Math.max(0, this.queue.findIndex((track) => trackKey(track) === this.currentKey))
    const next = natural && this.repeat === "one" ? index : (index + direction + this.queue.length) % this.queue.length
    const target = this.queue[next], stopped = this.pause(), generation = this.generation
    await stopped
    if (generation !== this.generation || this.disposed || !this.queue.some((track) => trackKey(track) === trackKey(target))) return
    if (trackKey(target) === this.currentKey && this.prepared) await this.player.seek(0)
    return this.play(trackKey(target))
  }
  async seek(delta) { if (!this.prepared || this.busy) return; try { await this.player.seek(this.player.position + delta) } catch (error) { this.fail(error) } }
  async volume(value) { try { await this.player.setVolume(value); await this.save() } catch (error) { this.fail(error) } }
  cycleRepeat() { this.repeat = this.repeat === "all" ? "one" : "all"; this.emit(); void this.save() }
  async remove(key = this.currentKey) {
    let stopped, prepared
    if (!this.radio && key === this.currentKey) {
      stopped = this.pause(); prepared = this.prepared; this.prepared = undefined; this.preparedKey = undefined; this.player.path = undefined; this.player.duration = 0; this.player.offset = 0
    }
    this.queue = this.queue.filter((track) => trackKey(track) !== key)
    if (key === this.currentKey) this.currentKey = this.queue[0] ? trackKey(this.queue[0]) : ""
    if (!this.radio) { this.error = ""; this.preview = false }
    this.emit(); await this.save()
    await stopped; await prepared?.release()
  }
  async clear() { await this.stopRadio(); const removing = this.remove(this.currentKey); this.queue = []; this.currentKey = ""; this.emit(); await this.save(); await removing }
  async dispose() {
    this.disposed = true; await this.pause(); await this.player.dispose(); await Promise.allSettled([...this.tasks]); await this.prepared?.release(); this.prepared = undefined; await this.writes
  }
}
