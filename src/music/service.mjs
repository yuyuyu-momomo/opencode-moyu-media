import { writeFile } from "node:fs/promises"
import { join } from "node:path"
import { createHttpClient } from "../core/http.mjs"
import { MUSIC_PLATFORMS, createMusicProviders, musicPlatform, musicTrack } from "./providers.mjs"
import { MusicSettings } from "./settings.mjs"
import { createMusicTemp, removeMusicTemp } from "./temp.mjs"
import { musicPlaylist } from "./playlists.mjs"

export class MusicService {
  constructor(library, { providers = createMusicProviders(), download = createHttpClient({ maxBytes: 64 * 1024 * 1024, timeoutMs: 60000 }), accountCoordinator = /** @type {any} */ (undefined) } = {}) {
    this.settings = new MusicSettings(library); this.providers = providers; this.download = download
    this.accountWrites = new Map(); this.accountCoordinator = accountCoordinator
  }
  /** @param {string} query @param {{platform?: string, limit?: number, signal?: AbortSignal}} options */
  async search(query, { platform = "all", limit = 8, signal } = {}) {
    const selected = platform === "all" ? MUSIC_PLATFORMS : [musicPlatform(platform)]
    const results = await Promise.allSettled(selected.map(async (source) => this.providers.search(source.id, query.trim(), { limit, cookie: await this.settings.cookie(source.id), signal })))
    signal?.throwIfAborted()
    const tracks = [], errors = [], batches = []
    for (let i = 0; i < results.length; i++) {
      const result = results[i]
      if (result.status === "fulfilled") batches.push(result.value)
      else errors.push({ platform: selected[i].id, message: result.reason instanceof Error ? result.reason.message : "平台暂不可用" })
    }
    // Interleave providers so a short terminal shows all platforms immediately.
    for (let index = 0; index < Math.max(0, ...batches.map((batch) => batch.length)); index++) for (const batch of batches) if (batch[index]) tracks.push(batch[index])
    return { tracks, errors }
  }
  async prepare(input, { signal } = {}) {
    const track = musicTrack(input), cookie = await this.settings.cookie(track.platform)
    const source = await this.providers.resolve(track, { cookie, signal })
    signal?.throwIfAborted()
    // Account cookies stay on API requests, never on CDN/media redirects.
    const result = await this.download(source.url, { signal, asBytes: true, headers: { Referer: musicPlatform(track.platform).home } })
    signal?.throwIfAborted()
    const directory = await createMusicTemp("audio")
    try {
      const path = join(directory, "track.audio")
      await writeFile(path, result.bytes, { mode: 0o600, signal })
      signal?.throwIfAborted()
      return { path, track, preview: source.preview, release: () => removeMusicTemp(directory) }
    } catch (error) { await removeMusicTemp(directory); throw error }
  }
  /** @param {{mode?: string, query?: string, platform?: string, collection?: string, page?: number, limit?: number, signal?: AbortSignal}} options */
  async playlists({ mode = "search", query = "", platform = "all", collection = "created", page = 1, limit = 5, signal } = {}) {
    let selected = platform === "all" ? MUSIC_PLATFORMS : [musicPlatform(platform)]
    if (mode === "mine" && platform === "all") {
      const configured = await Promise.all(selected.map((item) => this.settings.account(item.id)))
      selected = selected.filter((item, index) => configured[index].configured)
      if (!selected.length) throw new Error("请先在 /music 的账号菜单登录音乐平台")
    }
    const results = await Promise.allSettled(selected.map(async (item) => this.providers.playlists(item.id, { mode, query, collection, page, limit, cookie: await this.settings.cookie(item.id), signal })))
    signal?.throwIfAborted()
    const playlists = [], errors = [], pages = []
    for (let i = 0; i < results.length; i++) {
      const result = results[i]
      if (result.status === "fulfilled") pages.push(result.value)
      else errors.push({ platform: selected[i].id, message: result.reason instanceof Error ? result.reason.message : "平台歌单暂不可用" })
    }
    for (let index = 0; index < Math.max(0, ...pages.map((batch) => batch.playlists.length)); index++) for (const batch of pages) if (batch.playlists[index]) playlists.push(batch.playlists[index])
    return { playlists, errors, page, limit, hasMore: pages.some((item) => item.hasMore) }
  }
  /** @param {string} platform @param {string} id @param {{page?: number, limit?: number, signal?: AbortSignal}} options */
  async playlist(platform, id, { page = 1, limit = 20, signal } = {}) {
    musicPlaylist({ platform, id })
    const result = await this.providers.playlist(platform, id, { page, limit, signal, cookie: await this.settings.cookie(platform) })
    signal?.throwIfAborted()
    return result
  }
  /** @param {{limit?: number, exclude?: string[], signal?: AbortSignal}} options */
  async radio({ limit = 5, exclude = [], signal } = {}) {
    const result = await this.providers.radio({ limit, exclude, signal, cookie: await this.settings.cookie("qq") })
    signal?.throwIfAborted()
    return result
  }
  accountWrite(platform, operation) {
    const pending = (this.accountWrites.get(platform) || Promise.resolve()).catch(() => {}).then(operation)
    this.accountWrites.set(platform, pending)
    void pending.finally(() => { if (this.accountWrites.get(platform) === pending) this.accountWrites.delete(platform) }).catch(() => {})
    return pending
  }
  saveAccount(platform, cookie, options) { return this.accountWrite(platform, () => this.accountCoordinator ? this.accountCoordinator.saveAccount(platform, cookie, options) : this.settings.saveAccount(platform, cookie, options)) }
  logout(platform) { return this.accountWrite(platform, () => this.accountCoordinator ? this.accountCoordinator.logout(platform) : this.settings.logout(platform)) }
  /** Cancelling before a scan completes can never save a late login response. */
  /** @param {string} platform @param {{signal?: AbortSignal, onSession?: (session: any) => Promise<void>, onStatus?: (status: string) => void, intervalMs?: number, expiresMs?: number}} options */
  async login(platform, { signal, onSession = async (_session) => {}, onStatus = (_status) => {}, intervalMs = 2500, expiresMs = 180000 } = {}) {
    signal?.throwIfAborted()
    const expectedVersion = await this.accountCoordinator?.accountVersion(platform)
    const session = await this.providers.beginLogin(platform, { signal })
    signal?.throwIfAborted()
    await onSession(session)
    const deadline = Date.now() + expiresMs
    while (Date.now() < deadline) {
      signal?.throwIfAborted()
      const state = await this.providers.checkLogin(session, { signal, onProgress: onStatus })
      signal?.throwIfAborted()
      if (state.status === "authorized") return this.accountWrite(platform, async () => {
        signal?.throwIfAborted()
        const options = { method: "qr", nickname: state.nickname }
        return this.accountCoordinator ? this.accountCoordinator.saveAccount(platform, state.cookie, { ...options, expectedVersion, signal }) : this.settings.saveAccount(platform, state.cookie, options)
      })
      if (state.status === "expired" || state.status === "failed") throw new Error(state.status === "expired" ? "二维码已过期，请重新扫码" : "平台拒绝了扫码请求，请稍后重试")
      onStatus(state.status)
      await new Promise((resolve, reject) => {
        const abort = () => { clearTimeout(timer); reject(signal.reason) }
        const timer = setTimeout(() => { signal?.removeEventListener("abort", abort); resolve() }, intervalMs)
        signal?.addEventListener("abort", abort, { once: true })
        if (signal?.aborted) abort()
      })
    }
    throw new Error("二维码已过期，请重新扫码")
  }
}
