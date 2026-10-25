import { createServer } from "node:net"
import { randomUUID } from "node:crypto"
import { MusicController } from "../music/player.mjs"
import { MusicService } from "../music/service.mjs"
import { normalizeMusicCookie } from "../music/settings.mjs"
import { channel } from "./channel.mjs"

const methods = new Set(["add", "addMany", "play", "toggle", "pause", "next", "seek", "volume", "cycleRepeat", "remove", "clear", "startRadio", "stopRadio"])
const startsAudio = new Set(["play", "toggle", "next", "startRadio"])

/** One engine and one writer for a library, elected by the OS pipe/socket bind. */
export class SharedMediaServer {
  constructor(library, { service = new MusicService(library), player } = {}) {
    this.library = library; this.service = service; this.peers = new Set(); this.epoch = randomUUID(); this.sequence = 0
    this.preferences = {}; this.videoOwner = ""; this.mediaWrites = Promise.resolve(); this.settingsWrites = Promise.resolve()
    this.controller = new MusicController(service, { player, onChange: () => this.publish() })
    this.server = createServer((socket) => this.connect(socket))
  }
  async listen(path) {
    try {
      await new Promise((resolve, reject) => { this.server.once("error", reject); this.server.listen(path, () => { this.server.off("error", reject); resolve() }) })
    } catch (error) { await this.controller.dispose(); throw error }
    this.ready = Promise.all([this.controller.restore(), this.service.settings.read("preferences", {}).then((value) => { this.preferences = value })])
    try { await this.ready } catch (error) { await this.close(); throw error }
    return this
  }
  snapshot() { return { ...this.controller.state, currentKey: this.controller.currentKey, preferences: this.preferences, videoOwner: this.videoOwner, epoch: this.epoch, sequence: ++this.sequence } }
  sendState(peer, state) {
    const update = { ...state }
    if (peer.queue === state.queue) delete update.queue
    if (peer.preferences === state.preferences) delete update.preferences
    peer.queue = state.queue; peer.preferences = state.preferences
    return peer.channel.send({ type: "state", state: update })
  }
  publish() {
    if (this.closing) return
    const state = this.snapshot()
    for (const peer of this.peers) if (peer.id) void this.sendState(peer, state)
  }
  connect(socket) {
    const peer = { socket, id: "", requests: new Map(), calls: new Map(), seen: new Set() }
    this.peers.add(peer)
    const timer = setTimeout(() => { if (!peer.id) socket.destroy() }, 5000); timer.unref?.()
    peer.channel = channel(socket, this.library.vault, (message) => this.receive(peer, message), () => {})
    socket.once("close", () => {
      clearTimeout(timer); this.peers.delete(peer)
      for (const request of peer.requests.values()) request.abort()
      for (const call of peer.calls.values()) { clearTimeout(call.timer); call.reject(new Error("视频窗口已关闭")) }
      if (this.videoOwner === peer.id) { this.videoOwner = ""; this.publish() }
    })
  }
  async receive(peer, message) {
    if (this.closing && message?.type !== "callback") return
    if (message?.type === "hello") {
      if (peer.id || !/^[\w-]{16,80}$/.test(message.clientId)) throw new Error("无效共享会话")
      peer.id = message.clientId; await this.ready
      await this.sendState(peer, this.snapshot()); return
    }
    if (!peer.id || message?.epoch !== this.epoch) throw new Error("共享会话已更换")
    if (message.type === "callback") {
      const pending = peer.calls.get(message.id)
      if (pending) { peer.calls.delete(message.id); clearTimeout(pending.timer); message.error ? pending.reject(new Error(message.error)) : pending.resolve() }
      return
    }
    if (message.type === "cancel") { peer.requests.get(message.id)?.abort(); return }
    if (message.type !== "request" || typeof message.id !== "string" || peer.seen.has(message.id)) throw new Error("无效共享命令")
    peer.seen.add(message.id); if (peer.seen.size > 512) peer.seen.delete(peer.seen.values().next().value)
    const abort = new AbortController(); peer.requests.set(message.id, abort)
    try {
      const value = await this.execute(peer, message.method, message.args || [], abort.signal)
      await peer.channel.send({ type: "reply", id: message.id, value })
    } catch (error) { await peer.channel.send({ type: "reply", id: message.id, error: error instanceof Error ? error.message : "共享操作失败" }) }
    finally { peer.requests.delete(message.id) }
  }
  serialize(kind, operation) {
    const pending = this[kind].catch(() => {}).then(operation)
    this[kind] = pending.then(() => {}, () => {})
    return pending
  }
  pauseVideo(peer) {
    if (!peer) return Promise.resolve()
    const id = randomUUID()
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => { peer.calls.delete(id); reject(new Error("另一个视频窗口未响应，请先暂停该窗口")) }, 5000)
      peer.calls.set(id, { resolve, reject, timer })
      void peer.channel.send({ type: "pauseVideo", id, epoch: this.epoch })
    })
  }
  async execute(peer, method, args, signal) {
    if (method === "video.claim") return this.serialize("mediaWrites", async () => {
      if (!Number.isSafeInteger(args[0]) || args[0] < (peer.videoRevision || 0)) return false
      peer.videoRevision = args[0]
      signal.throwIfAborted()
      await this.controller.pause()
      if (this.videoOwner && this.videoOwner !== peer.id) {
        await this.pauseVideo([...this.peers].find((item) => item.id === this.videoOwner))
        this.videoOwner = ""; this.publish()
      }
      signal.throwIfAborted(); this.videoOwner = peer.id; this.publish(); return true
    })
    if (method === "video.release") return this.serialize("mediaWrites", () => {
      if (!Number.isSafeInteger(args[0]) || args[0] < (peer.videoRevision || 0)) return
      peer.videoRevision = args[0]
      if (this.videoOwner === peer.id) { this.videoOwner = ""; this.publish() }
    })
    if (method === "preference.set") return this.serialize("settingsWrites", async () => {
      const [key, value] = args
      if (typeof key !== "string" || !key.startsWith("opencode-moyu:") || key.length > 180 || JSON.stringify(value)?.length > 4096) throw new Error("无效阅读设置")
      signal.throwIfAborted()
      const next = { ...this.preferences, [key]: value }
      await this.service.settings.write("preferences", next); this.preferences = next; this.publish()
    })
    if (method === "account.version") return (await this.service.settings.read("accounts", {}))[args[0]] || "0"
    if (method === "account.save" || method === "account.logout") return this.serialize("settingsWrites", async () => {
      const [platform, cookie, options = {}] = args
      if (!["netease", "qq", "kugou"].includes(platform)) throw new Error("无效音乐平台")
      const versions = await this.service.settings.read("accounts", {})
      if (options.expectedVersion !== undefined && options.expectedVersion !== (versions[platform] || "0")) throw new Error("其他窗口已修改该账号，请重新登录")
      if (method === "account.save") normalizeMusicCookie(platform, cookie)
      signal.throwIfAborted()
      await this.service.settings.write("accounts", { ...versions, [platform]: randomUUID() })
      signal.throwIfAborted()
      return method === "account.save" ? this.service.settings.saveAccount(platform, cookie, options) : this.service.settings.logout(platform)
    })
    if (!methods.has(method)) throw new Error("未知共享操作")
    const begin = () => {
      if (this.closing) throw new Error("共享播放器正在切换窗口，请重试")
      signal.throwIfAborted()
      const pausing = method === "toggle" && (this.controller.state.playing || this.controller.state.busy)
      if (startsAudio.has(method) && !pausing && this.videoOwner) throw new Error("有窗口正在看视频，请先暂停视频或切回小说 / 音乐")
      return { pending: this.controller[method](...args) }
    }
    const { pending } = startsAudio.has(method) ? await this.serialize("mediaWrites", begin) : begin()
    try { return await pending } finally { this.publish() }
  }
  async close() {
    if (this.closing) return this.closed
    this.closing = true
    this.closed = (async () => {
      for (const peer of this.peers) for (const request of peer.requests.values()) request.abort()
      if (this.videoOwner) await this.pauseVideo([...this.peers].find((peer) => peer.id === this.videoOwner))
      await this.controller.dispose()
      await Promise.allSettled([this.mediaWrites, this.settingsWrites])
      for (const peer of this.peers) { await peer.channel.send({ type: "reconnect" }); peer.socket.destroy() }
      await new Promise((resolve) => this.server.close(resolve))
    })()
    return this.closed
  }
}
