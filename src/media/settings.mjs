import { readFile, unlink, mkdir } from "node:fs/promises"
import { join } from "node:path"
import { atomicWrite } from "../library/store.mjs"
import { DEFAULT_VIDEO_QUALITY, videoQuality } from "./video-quality.mjs"

export class MediaSettings {
  constructor(library) { this.library = library; this.path = join(library.internal, "settings", "youtube.enc") }
  async key() {
    try { return (await this.library.vault.unseal(await readFile(this.path))).apiKey || "" }
    catch (error) { if (error.code !== "ENOENT") throw error }
    return process.env.YOUTUBE_API_KEY || ""
  }
  async status() {
    return { youtubeApiKeyConfigured: Boolean(await this.key()) }
  }
  async saveKey(input) {
    const apiKey = input.trim()
    if (!/^[A-Za-z0-9_-]{20,200}$/.test(apiKey)) throw new Error("API Key 格式不正确，请粘贴完整密钥")
    await mkdir(join(this.library.internal, "settings"), { recursive: true, mode: 0o700 })
    await atomicWrite(this.path, await this.library.vault.seal({ apiKey }))
    return this.status()
  }
  async removeKey() {
    await unlink(this.path).catch((error) => { if (error.code !== "ENOENT") throw error })
    return this.status()
  }
  async downloadQuality() {
    try {
      const settings = await this.library.vault.unseal(await readFile(join(this.library.internal, "settings", "video.enc")))
      return videoQuality(settings.downloadQuality)
    } catch (error) { if (error.code !== "ENOENT") throw error }
    return DEFAULT_VIDEO_QUALITY
  }
  async saveDownloadQuality(input) {
    const downloadQuality = videoQuality(input)
    await mkdir(join(this.library.internal, "settings"), { recursive: true, mode: 0o700 })
    await atomicWrite(join(this.library.internal, "settings", "video.enc"), await this.library.vault.seal({ downloadQuality }))
    return downloadQuality
  }
}
