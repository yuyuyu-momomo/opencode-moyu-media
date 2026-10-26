import { mkdir, readFile, readdir, unlink } from "node:fs/promises"
import { join } from "node:path"
import { atomicWrite } from "../library/store.mjs"
import { shoppingSource, shoppingOffer, offerKey } from "./contracts.mjs"

export class ShoppingSettings {
  constructor(library) { this.library = library; this.directory = join(library.internal, "shopping") }
  async read(name, fallback) {
    try { return await this.library.vault.unseal(await readFile(join(this.directory, name + ".enc"))) }
    catch (error) { if (error.code === "ENOENT") return fallback; throw error }
  }
  async write(name, value) {
    await mkdir(this.directory, { recursive: true, mode: 0o700 })
    await atomicWrite(join(this.directory, name + ".enc"), await this.library.vault.seal(value))
  }
  async credentials(source) { shoppingSource(source); return this.read("config-" + source, null) }
  async status(source) { return { source, configured: Boolean(await this.credentials(source)) } }
  async saveCredentials(source, input) {
    if (!shoppingSource(source).credential) throw new Error("这个来源不需要密钥")
    if (typeof input === "string" && input.length > 4096) throw new Error("应用配置过长")
    let value
    try { value = typeof input === "string" ? JSON.parse(input) : input } catch { throw new Error("配置需要完整 JSON，包含 appKey、appSecret；淘宝还需要 adzoneId") }
    const keys = source === "taobao" ? ["appKey", "appSecret", "adzoneId"] : ["appKey", "appSecret"]
    const config = {}
    for (const key of keys) {
      const field = typeof value?.[key] === "string" ? value[key].trim() : ""
      if (!/^[A-Za-z0-9_-]{1,200}$/.test(field) || (key === "adzoneId" && !/^\d{1,20}$/.test(field))) throw new Error(`请填写有效的 ${key}`)
      config[key] = field
    }
    await this.write("config-" + source, config)
    return this.status(source)
  }
  async removeCredentials(source) { shoppingSource(source); await this.remove("config-" + source); return this.status(source) }
  async remove(name) { await unlink(join(this.directory, name + ".enc")).catch((error) => { if (error.code !== "ENOENT") throw error }) }
  async favorites() {
    let names
    try { names = await readdir(this.directory) } catch (error) { if (error.code === "ENOENT") return []; throw error }
    const offers = []
    for (const name of names.filter((name) => /^favorite-[a-f0-9]{32}\.enc$/.test(name))) {
      const item = await this.read(name.slice(0, -4), null)
      if (item) offers.push(shoppingOffer(item))
    }
    return offers.sort((a, b) => b.observedAt.localeCompare(a.observedAt))
  }
  saveFavorite(offer) { const value = shoppingOffer(offer); return this.write("favorite-" + offerKey(value), value) }
  removeFavorite(offer) { return this.remove("favorite-" + offerKey(offer)) }
}
