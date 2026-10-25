import { mkdtemp, readdir, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join, resolve, dirname, basename } from "node:path"

const pattern = /^moyu-music-(?:audio|login)-(\d+)-[\w-]+$/
export function createMusicTemp(kind) {
  if (!["audio", "login"].includes(kind)) throw new Error("无效音乐缓存类型")
  return mkdtemp(join(tmpdir(), `moyu-music-${kind}-${process.pid}-`))
}
export async function removeMusicTemp(path) {
  const absolute = resolve(path)
  if (dirname(absolute) !== resolve(tmpdir()) || !pattern.test(basename(absolute))) throw new Error("音乐缓存路径越界")
  await rm(absolute, { recursive: true, force: true, maxRetries: 4, retryDelay: 100 })
}
export async function cleanupMusicTemps() {
  for (const entry of await readdir(tmpdir(), { withFileTypes: true })) {
    const match = pattern.exec(entry.name)
    if (!entry.isDirectory() || !match) continue
    try { process.kill(Number(match[1]), 0); continue } catch (error) { if (error.code !== "ESRCH") continue }
    await removeMusicTemp(join(tmpdir(), entry.name))
  }
}
