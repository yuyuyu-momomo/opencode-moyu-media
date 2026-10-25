import test from "node:test"
import assert from "node:assert/strict"
import { fork } from "node:child_process"
import { mkdtemp, readFile, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { randomUUID } from "node:crypto"
import { setTimeout as sleep } from "node:timers/promises"
import { SharedMediaClient } from "../src/runtime/media-client.mjs"
import { LibraryStore } from "../src/library/store.mjs"
import { MusicSettings } from "../src/music/settings.mjs"
import { musicTrack } from "../src/music/providers.mjs"

const song = (id) => musicTrack({ platform: "qq", id, title: "共享歌曲 " + id, artist: "夹具", duration: 30 })
async function until(predicate, timeout = 8000) { const end = Date.now() + timeout; while (Date.now() < end) { if (await predicate()) return; await sleep(20) } throw Error("Shared state timed out") }
function worker(root) {
  const child = fork(fileURLToPath(new URL("./helpers/shared-media-worker.mjs", import.meta.url)), [root], { stdio: ["ignore", "pipe", "pipe", "ipc"], windowsHide: true })
  const pending = new Map(), result = { child, pending, errors: "" }
  child.stderr.on("data", (chunk) => { result.errors += chunk })
  result.ready = new Promise((resolve, reject) => {
    child.on("message", (message) => {
      if (message.state) result.state = message.state
      if (message.type === "ready") { result.host = message.host; resolve(result) }
      if (message.type === "reply") { const job = pending.get(message.id); if (job) { pending.delete(message.id); message.error ? job.reject(new Error(message.error)) : job.resolve(message.value) } }
    })
    child.once("error", reject); child.once("exit", (code) => { if (!result.state) reject(new Error(result.errors || "Worker exited: " + code)); for (const job of pending.values()) job.reject(new Error("Worker exited")); pending.clear() })
  })
  result.call = (method, ...args) => new Promise((resolve, reject) => { const id = randomUUID(); pending.set(id, { resolve, reject }); child.send({ id, method, args }) })
  result.close = async () => { if (child.exitCode !== null || child.signalCode) return; const exited = new Promise(resolve => child.once("exit", resolve)); await result.call("close").catch(() => {}); await exited }
  return result
}
async function fixture(run) {
  const root = await mkdtemp(join(tmpdir(), "moyu-shared-test-")), clients = []
  try { await run(root, clients) }
  finally { for (const client of clients.filter(c => c !== clients.find(c => c.host))) await client.close(); await clients.find(c => c.host)?.close(); await rm(root, { recursive: true, force: true, maxRetries: 3 }) }
}

test("三个独立进程共用一个播放器，并发加歌与设置不覆盖，跨窗口看视频先停音乐", { timeout: 20000 }, async () => fixture(async (root, clients) => {
  clients.push(worker(root), worker(root), worker(root)); await Promise.all(clients.map(c => c.ready))
  assert.equal(clients.filter(c => c.host).length, 1); assert.equal(new Set(clients.map(c => c.state.epoch)).size, 1)
  await Promise.all([clients[0].call("add", song("a")), clients[1].call("add", song("b"))])
  await until(() => clients.every(c => c.state.queue.length === 2))
  await Promise.all([clients[0].call("setPreference", "opencode-moyu:heightPercent", 80), clients[1].call("setPreference", "opencode-moyu:video:widthPercent", 65)])
  await until(() => clients.every(c => c.state.preferences["opencode-moyu:heightPercent"] === 80 && c.state.preferences["opencode-moyu:video:widthPercent"] === 65))
  await Promise.all([clients[0].call("play", "qq:a"), clients[1].call("play", "qq:b")])
  await until(() => clients.every(c => c.state.playing))
  await clients[2].call("claimVideo"); await until(() => clients.every(c => !c.state.playing && c.state.videoOwner))
  await assert.rejects(clients[1].call("play", "qq:a"), /正在看视频/)
  await clients[0].call("claimVideo")
  const events = (await readFile(join(root, "events.jsonl"), "utf8")).trim().split("\n").map(line => JSON.parse(line))
  assert.equal(new Set(events.filter(e => e.type === "play").map(e => e.pid)).size, 1)
  assert.ok(events.some(e => e.type === "pause")); assert.ok(events.some(e => e.type === "videoPaused" && e.pid === clients[2].child.pid))
  await clients[0].call("releaseVideo"); await clients[2].call("play", "qq:a"); await until(() => clients.every(c => c.state.current.id === "a" && c.state.playing))
  const library = new LibraryStore(join(root, "books")); assert.equal((await readFile(library.vault.keyFile)).length, 32)
}))

test("播放器宿主关闭后其他进程接管，保留共享队列和偏好并保持暂停", { timeout: 20000 }, async () => fixture(async (root, clients) => {
  clients.push(worker(root), worker(root)); await Promise.all(clients.map(c => c.ready))
  const host = clients.find(c => c.host), follower = clients.find(c => !c.host), epoch = follower.state.epoch
  await follower.call("add", song("kept")); await follower.call("volume", 20); await follower.call("cycleRepeat"); await follower.call("play", "qq:kept")
  await host.close()
  await until(() => follower.state.epoch !== epoch && follower.state.queue.length === 1)
  assert.equal(follower.state.playing, false); assert.equal(follower.state.volume, 20); assert.equal(follower.state.repeat, "one")
  await follower.call("play", "qq:kept"); await until(() => follower.state.playing)
}))

test("跨窗口账号版本阻止退出后的旧扫码覆盖，账号和共享设置仍加密保存", { timeout: 12000 }, async () => {
  const root = await mkdtemp(join(tmpdir(), "moyu-shared-accounts-")), library = new LibraryStore(join(root, "books"))
  const a = new SharedMediaClient(library), b = new SharedMediaClient(library)
  try {
    await Promise.all([a.ready, b.ready]); const version = await a.accountVersion("qq")
    await b.logout("qq")
    await assert.rejects(a.saveAccount("qq", "uin=12345678; qqmusic_key=private-fixture", { method: "qr", expectedVersion: version }), /其他窗口/)
    const settings = new MusicSettings(library); assert.equal((await settings.account("qq")).configured, false)
    await a.saveAccount("qq", "uin=12345678; qqmusic_key=private-fixture")
    assert.equal((await settings.account("qq")).configured, true)
    assert.equal((await readFile(settings.path("qq"))).includes(Buffer.from("private-fixture")), false)
    await b.setPreference("opencode-moyu:mode", "novel"); assert.equal((await settings.read("preferences", {}))["opencode-moyu:mode"], "novel")
  } finally { await b.dispose(); await a.dispose(); await rm(root, { recursive: true, force: true }) }
})

test("快速视频切换中迟到的释放不会清除较新的播放资格", { timeout: 12000 }, async () => {
  const root = await mkdtemp(join(tmpdir(), "moyu-shared-video-")), library = new LibraryStore(join(root, "books"))
  const a = new SharedMediaClient(library), b = new SharedMediaClient(library)
  try {
    await Promise.all([a.ready, b.ready]); await a.claimVideo()
    let release; const stopped = new Promise(resolve => { release = resolve })
    const oldRelease = a.releaseVideo(stopped)
    await a.claimVideo(); release(); await oldRelease
    assert.equal(a.state.videoOwner, a.id)
    await b.add(song("blocked")); await assert.rejects(b.play("qq:blocked"), /正在看视频/)
    await a.releaseVideo(); await until(() => b.state.videoOwner === "")
  } finally { await b.dispose(); await a.dispose(); await rm(root, { recursive: true, force: true }) }
})
