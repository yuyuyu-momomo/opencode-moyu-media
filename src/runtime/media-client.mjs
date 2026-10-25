import { createConnection } from "node:net"
import { randomUUID } from "node:crypto"
import { channel, runtimeAddress } from "./channel.mjs"
import { SharedMediaServer } from "./media-server.mjs"

export class SharedMediaClient {
  constructor(library, { onChange = (_state) => {}, onError = (_error) => {}, service, player, reconnectMs = 150 } = {}) {
    this.library = library; this.onChange = onChange; this.onError = onError; this.serverOptions = { service, player }; this.reconnectMs = reconnectMs
    this.onPauseVideo = async () => {}; this.videoRevision = 0
    this.id = randomUUID(); this.pending = new Map(); this.preferenceWrites = new Map(); this.preferenceTasks = new Set(); this.listeners = new Set(); this.ready = this.ensure()
  }
  async ensure() {
    if (this.disposed) throw new Error("共享播放器已关闭")
    if (this.connecting) return this.connecting
    this.connecting = this.connect().finally(() => { this.connecting = undefined })
    return this.connecting
  }
  async connect() {
    const address = this.address ||= await runtimeAddress(this.library)
    for (let attempt = 0; attempt < 40 && !this.disposed; attempt++) {
      try { await this.open(address.path); return } catch (error) {
        if (!["ENOENT", "ECONNREFUSED", "EPIPE", "ECONNRESET"].includes(error.code)) throw error
        try { this.host = await new SharedMediaServer(this.library, this.serverOptions).listen(address.path) }
        catch (error) {
          if (error.code !== "EADDRINUSE") throw error
        }
        await new Promise((resolve) => setTimeout(resolve, 25))
      }
    }
    throw new Error("共享播放器连接失败，请重新打开音乐面板")
  }
  open(path) {
    return new Promise((resolve, reject) => {
      const socket = createConnection(path), timeout = setTimeout(() => { socket.destroy(); reject(new Error("共享播放器连接超时")) }, 8000)
      let accepted = false
      socket.once("error", reject)
      const transport = channel(socket, this.library.vault, async (message) => {
        if (message.type === "state") {
          if (this.epoch === message.state.epoch && this.state?.sequence > message.state.sequence) return
          this.state = this.epoch === message.state.epoch ? { ...this.state, ...message.state } : message.state
          this.epoch = message.state.epoch
          this.preferences = { ...this.state.preferences, ...Object.fromEntries([...this.preferenceWrites].map(([key, entry]) => [key, entry.value])) }
          this.onChange(this.state)
          for (const listener of this.listeners) listener(this.state)
          if (!accepted) { accepted = true; clearTimeout(timeout); this.socket = socket; this.transport = transport; resolve() }
        } else if (message.type === "reply") {
          const pending = this.pending.get(message.id)
          if (pending) { this.pending.delete(message.id); pending.cleanup(); message.error ? pending.reject(new Error(message.error)) : pending.resolve(message.value) }
        } else if (message.type === "pauseVideo") {
          try { await this.onPauseVideo?.(); await transport.send({ type: "callback", id: message.id, epoch: this.epoch }) }
          catch { await transport.send({ type: "callback", id: message.id, epoch: this.epoch, error: "视频暂停失败，请先在原窗口暂停" }) }
        } else if (message.type === "reconnect") socket.destroy()
      }, reject)
      socket.once("connect", () => { void transport.send({ type: "hello", clientId: this.id }) })
      socket.once("close", () => {
        clearTimeout(timeout)
        if (!accepted) reject(Object.assign(new Error("共享连接已关闭"), { code: "ECONNRESET" }))
        if (this.socket !== socket) return
        this.socket = undefined
        const stoppedVideo = Promise.resolve(this.onPauseVideo()).catch(() => {})
        for (const request of this.pending.values()) { request.cleanup(); request.reject(new Error("共享播放器正在切换窗口，请重试")) }
        this.pending.clear()
        if (!this.disposed) this.reconnectTimer = setTimeout(() => { void stoppedVideo.then(() => this.ensure()).catch(this.onError) }, this.reconnectMs)
      })
    })
  }
  async request(method, args = [], { signal, timeoutMs = 90000 } = {}) {
    signal?.throwIfAborted()
    if (!this.socket) await this.ensure()
    signal?.throwIfAborted()
    const id = randomUUID()
    return new Promise((resolve, reject) => {
      const abort = () => { this.pending.delete(id); cleanup(); void this.transport.send({ type: "cancel", id, epoch: this.epoch }); reject(signal?.reason || new Error("共享操作超时")) }
      const timer = setTimeout(abort, timeoutMs), cleanup = () => { clearTimeout(timer); signal?.removeEventListener("abort", abort) }
      this.pending.set(id, { resolve, reject, cleanup }); signal?.addEventListener("abort", abort, { once: true })
      void this.transport.send({ type: "request", id, epoch: this.epoch, method, args })
    })
  }
  get currentKey() { return this.state?.currentKey || "" }
  subscribe(listener) { this.listeners.add(listener); if (this.state) listener(this.state); return () => this.listeners.delete(listener) }
  add(track) { return this.request("add", [track]) }
  addMany(tracks) { return this.request("addMany", [tracks]) }
  play(key) { return this.request("play", key === undefined ? [] : [key]) }
  toggle() { return this.request("toggle") }
  pause() { return this.request("pause") }
  next(direction = 1) { return this.request("next", [direction]) }
  seek(delta) { return this.request("seek", [delta]) }
  volume(value) { return this.request("volume", [value]) }
  cycleRepeat() { return this.request("cycleRepeat") }
  remove() { return this.request("remove") }
  clear() { return this.request("clear") }
  startRadio() { return this.request("startRadio") }
  stopRadio() { return this.request("stopRadio") }
  claimVideo(options = {}) { return this.request("video.claim", [++this.videoRevision], options) }
  releaseVideo(stopped = Promise.resolve()) { const revision = ++this.videoRevision; return stopped.then(() => this.request("video.release", [revision])) }
  accountVersion(platform) { return this.request("account.version", [platform]) }
  saveAccount(platform, cookie, options = {}) { const { signal, ...settings } = options; return this.request("account.save", [platform, cookie, settings], { signal }) }
  logout(platform) { return this.request("account.logout", [platform]) }
  setPreference(key, value) {
    const entry = { value }; this.preferenceWrites.set(key, entry); this.preferences = { ...this.preferences, [key]: value }
    const writing = this.request("preference.set", [key, value], { timeoutMs: 5000 }).finally(() => { if (this.preferenceWrites.get(key) === entry) this.preferenceWrites.delete(key); this.preferences = { ...this.state?.preferences, ...Object.fromEntries([...this.preferenceWrites].map(([name, pending]) => [name, pending.value])) } })
    this.preferenceTasks.add(writing); void writing.finally(() => this.preferenceTasks.delete(writing)).catch(() => {})
    return writing
  }
  async dispose() {
    if (this.disposed) return
    this.disposed = true; clearTimeout(this.reconnectTimer)
    await this.onPauseVideo?.()
    await Promise.allSettled([...this.preferenceTasks])
    this.socket?.destroy()
    if (this.host) await this.host.close()
    for (const request of this.pending.values()) { request.cleanup(); request.reject(new Error("共享播放器已关闭")) }
    this.pending.clear()
  }
}
