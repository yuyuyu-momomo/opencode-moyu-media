import { appendFile } from "node:fs/promises"
import { join } from "node:path"
import { setTimeout as sleep } from "node:timers/promises"
import { LibraryStore } from "../../src/library/store.mjs"
import { MusicService } from "../../src/music/service.mjs"
import { SharedMediaClient } from "../../src/runtime/media-client.mjs"

const root = process.argv[2], eventPath = join(root, "events.jsonl")
const event = (type, data = {}) => appendFile(eventPath, JSON.stringify({ type, pid: process.pid, ...data }) + "\n")
const library = new LibraryStore(join(root, "books")), service = new MusicService(library)
service.prepare = async (track, { signal }) => { await sleep(50, undefined, { signal }); return { path: track.id, release: async () => {} } }
const player = {
  playing: false, position: 0, duration: 30, volume: 50,
  async pause() { if (this.playing) await event("pause"); this.playing = false },
  async open(path) { this.path = path; return true },
  async play() { this.playing = true; await event("play", { track: this.path }) },
  async seek(value) { this.position = value },
  async setVolume(value) { this.volume = value },
  async dispose() { await this.pause() },
}
const client = new SharedMediaClient(library, { service, player, onChange(state) { process.send?.({ type: "state", state }) } })
client.onPauseVideo = async () => { await sleep(30); await event("videoPaused") }
await client.ready
process.send?.({ type: "ready", host: Boolean(client.host), pid: process.pid, state: client.state })
process.on("message", (message) => {
  void (async () => {
    try {
      if (message.method === "close") { await client.dispose(); process.send?.({ type: "reply", id: message.id }); process.disconnect(); return }
      const value = await client[message.method](...(message.args || []))
      process.send?.({ type: "reply", id: message.id, value })
    } catch (error) { process.send?.({ type: "reply", id: message.id, error: error.message }) }
  })()
})
