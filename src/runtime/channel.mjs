import { createHash } from "node:crypto"
import { realpath, mkdir } from "node:fs/promises"
import { join } from "node:path"
import { tmpdir } from "node:os"

const MAX_FRAME = 512 * 1024
export async function runtimeAddress(library) {
  await library.ready()
  const directory = await realpath(library.directory), key = await library.vault.key()
  const identity = process.platform === "win32" ? directory.toLowerCase() : directory
  const scope = createHash("sha256").update(identity).update(key).digest("hex").slice(0, 32)
  if (process.platform === "win32") return { path: "\\\\.\\pipe\\opencode-moyu-" + scope, scope }
  if (process.platform === "linux") return { path: "\0opencode-moyu-" + scope, scope }
  const folder = join(tmpdir(), `moyu-${process.getuid?.() ?? "user"}-${scope}`)
  await mkdir(folder, { recursive: true, mode: 0o700 })
  return { path: join(folder, "media.sock"), scope }
}

/** Framed, authenticated local IPC. Account values never travel in plaintext. */
export function channel(socket, vault, receive, failed) {
  let buffer = "", reads = Promise.resolve(), writes = Promise.resolve(), ended = false
  const fail = (error) => { if (ended) return; ended = true; failed(error); socket.destroy() }
  socket.on("error", fail)
  socket.on("data", (chunk) => {
    buffer += chunk.toString("utf8")
    if (Buffer.byteLength(buffer) > MAX_FRAME) { fail(new Error("共享播放器消息过大")); return }
    let index
    while ((index = buffer.indexOf("\n")) >= 0) {
      const frame = buffer.slice(0, index); buffer = buffer.slice(index + 1)
      reads = reads.then(async () => {
        const message = await vault.unseal(Buffer.from(frame, "base64"))
        // Do not await application work: pause/cancel must overtake downloads.
        void Promise.resolve(receive(message)).catch(fail)
      }).catch(fail)
    }
  })
  return {
    send(message) {
      writes = writes.then(async () => {
        if (ended || socket.destroyed) return
        const bytes = await vault.seal(message)
        if (bytes.length * 4 / 3 > MAX_FRAME || socket.writableLength > MAX_FRAME * 2) throw new Error("共享播放器连接积压")
        socket.write(bytes.toString("base64") + "\n")
      }).catch(fail)
      return writes
    },
  }
}
