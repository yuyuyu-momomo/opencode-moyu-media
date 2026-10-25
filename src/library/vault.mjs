import { randomBytes, createCipheriv, createDecipheriv, createHash } from "node:crypto"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"

const magic = Buffer.from("MOYU1")
const aad = Buffer.from("opencode-moyu:library:v1")
export const defaultKeyFile = (directory) => resolve(directory, "../keys/library.key")
export class LibraryVault {
  #key
  #pending
  constructor(keyFile) { this.keyFile = keyFile }
  async key(create = true) {
    if (this.#key) return this.#key
    if (!this.#pending) this.#pending = this.loadKey(create).finally(() => { this.#pending = undefined })
    return this.#pending
  }
  async loadKey(create) {
    let key
    try { key = await readFile(this.keyFile) } catch (error) {
      if (error.code !== "ENOENT") throw error
      if (!create) throw new Error("缺少资料库密钥，请恢复原密钥文件")
      await mkdir(dirname(this.keyFile), { recursive: true, mode: 0o700 })
      try { await writeFile(this.keyFile, randomBytes(32), { flag: "wx", mode: 0o600 }) } catch (error) { if (error.code !== "EEXIST") throw error }
      key = await readFile(this.keyFile)
    }
    // Another process can observe a newly opened wx file before its bytes land.
    for (let attempt = 0; key.length !== 32 && attempt < 20; attempt++) {
      await new Promise((resolve) => setTimeout(resolve, 10)); key = await readFile(this.keyFile)
    }
    if (key.length !== 32) throw new Error("资料库密钥长度异常")
    this.#key = key
    return this.#key
  }
  async seal(value) {
    const nonce = randomBytes(12)
    const cipher = createCipheriv("aes-256-gcm", await this.key(), nonce)
    cipher.setAAD(aad)
    const encrypted = Buffer.concat([cipher.update(JSON.stringify(value), "utf8"), cipher.final()])
    return Buffer.concat([magic, nonce, cipher.getAuthTag(), encrypted])
  }
  async unseal(bytes) {
    if (bytes.length < 33 || !bytes.subarray(0, 5).equals(magic)) throw new Error("不是受支持的加密资料文件")
    try {
      const decipher = createDecipheriv("aes-256-gcm", await this.key(false), bytes.subarray(5, 17))
      decipher.setAAD(aad)
      decipher.setAuthTag(bytes.subarray(17, 33))
      return JSON.parse(Buffer.concat([decipher.update(bytes.subarray(33)), decipher.final()]).toString("utf8"))
    } catch { throw new Error("资料解密失败：密钥不匹配，或文件已损坏") }
  }
}
