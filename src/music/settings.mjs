import { readFile, mkdir, unlink } from "node:fs/promises"
import { join } from "node:path"
import { atomicWrite } from "../library/store.mjs"
import { musicPlatform, musicTrack, cookieValues, trackKey } from "./providers.mjs"

export function normalizeMusicCookie(platform, input) {
  musicPlatform(platform)
  if (typeof input !== "string" || input.length > 16384 || /[\x00-\x1f\x7f]/.test(input)) throw new Error("登录态格式不正确，请粘贴单行 Cookie")
  const values = cookieValues(input.trim().replace(/^cookie:\s*/i, ""))
  const required = platform === "netease" ? values.MUSIC_U : platform === "qq" ? (values.uin || values.wxuin) && (values.qqmusic_key || values.qm_keyst) : values.token && values.userid
  if (!required) throw new Error(platform === "netease" ? "需要网易云网页登录后的 MUSIC_U" : platform === "qq" ? "需要 QQ音乐的 uin（或 wxuin）和 qqmusic_key（或 qm_keyst）" : "需要酷狗登录后的 userid 和 token")
  const allowed = platform === "netease" ? ["MUSIC_U", "__csrf", "NMTID", "MUSIC_A"] : platform === "qq" ? ["uin", "wxuin", "qqmusic_key", "qm_keyst", "qqmusic_fromtag"] : ["userid", "token", "mid", "kg_mid", "dfid"]
  return allowed.filter((key) => values[key]).map((key) => `${key}=${values[key]}`).join("; ")
}

export class MusicSettings {
  constructor(library) { this.library = library; this.directory = join(library.internal, "settings") }
  path(name) { return join(this.directory, `music-${name}.enc`) }
  async read(name, fallback) {
    try { return await this.library.vault.unseal(await readFile(this.path(name))) }
    catch (error) { if (error.code === "ENOENT") return fallback; throw error }
  }
  async write(name, value) { await mkdir(this.directory, { recursive: true, mode: 0o700 }); await atomicWrite(this.path(name), await this.library.vault.seal(value)) }
  async cookie(platform) { musicPlatform(platform); return (await this.read(platform, {})).cookie || "" }
  async account(platform) {
    musicPlatform(platform)
    const value = await this.read(platform, {})
    return { platform, configured: Boolean(value.cookie), method: value.method || "", nickname: value.nickname || "", savedAt: value.savedAt || "" }
  }
  async saveAccount(platform, input, { method = "cookie", nickname = "" } = {}) {
    const cookie = normalizeMusicCookie(platform, input)
    await this.write(platform, { cookie, method, nickname: String(nickname).replace(/[\x00-\x1f\x7f-\x9f]/g, "").slice(0, 80), savedAt: new Date().toISOString() })
    return this.account(platform)
  }
  async logout(platform) { musicPlatform(platform); await unlink(this.path(platform)).catch((error) => { if (error.code !== "ENOENT") throw error }); return this.account(platform) }
  async player() {
    const value = await this.read("player", {})
    const queue = (Array.isArray(value.queue) ? value.queue : []).slice(0, 100).flatMap((track) => { try { return [musicTrack(track)] } catch { return [] } })
    return { queue, currentKey: queue.some((track) => trackKey(track) === value.currentKey) ? value.currentKey : "", volume: Number.isFinite(value.volume) ? Math.max(0, Math.min(100, value.volume)) : 50, repeat: value.repeat === "one" ? "one" : "all" }
  }
  savePlayer(value) { return this.write("player", { queue: value.queue.slice(0, 100).map(musicTrack), currentKey: value.currentKey, volume: value.volume, repeat: value.repeat }) }
}
