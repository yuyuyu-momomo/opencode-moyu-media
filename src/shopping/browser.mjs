import { spawn, execFile } from "node:child_process"
import { access, mkdtemp, readFile, rm } from "node:fs/promises"
import { join, basename } from "node:path"
import { tmpdir } from "node:os"
import { promisify } from "node:util"
import { createInterface } from "node:readline"
import { setTimeout as sleep } from "node:timers/promises"
import { shoppingAccount } from "./accounts.mjs"
import { windowsLoginScript } from "./windows-login.mjs"

const runFile = promisify(execFile)
const winPowerShell = "/mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe"
export async function findShoppingBrowser() {
  const candidates = [process.env.MOYU_SHOPPING_BROWSER,
    ...(process.platform === "win32" ? [join(process.env.PROGRAMFILES || "C:\\Program Files", "Google/Chrome/Application/chrome.exe"), join(process.env["PROGRAMFILES(X86)"] || "C:\\Program Files (x86)", "Microsoft/Edge/Application/msedge.exe")] :
      process.platform === "darwin" ? ["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"] : ["/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser", "/opt/google/chrome/chrome", "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe", "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"])]
  for (const path of candidates.filter(Boolean)) { try { await access(path); return { path, windows: process.platform === "win32" || /^\/mnt\/[a-z]\/.*\.exe$/i.test(path) } } catch {} }
  throw new Error("未找到 Chrome / Edge，请安装浏览器，或用 MOYU_SHOPPING_BROWSER 指定其程序路径")
}
function bridgeError(code) { return new Error(code === "window-closed" ? "登录窗口已关闭或连接断开，请重新打开扫码" : "无法启动独立登录窗口，请确认 Chrome / Edge 及 WSL 的 Windows 程序调用可用") }

/** @param {any} browser @param {string} url @param {{signal?: AbortSignal}} options */
async function windowsSession(browser, url, { signal } = {}) {
  const executable = process.platform === "win32" ? "powershell.exe" : winPowerShell
  const target = process.platform === "win32" ? browser.path : (await runFile("wslpath", ["-w", browser.path])).stdout.trim()
  signal?.throwIfAborted()
  const child = spawn(executable, ["-NoProfile", "-NonInteractive", "-EncodedCommand", Buffer.from(windowsLoginScript, "utf16le").toString("base64")], { stdio: ["pipe", "pipe", "ignore"], windowsHide: true })
  const lines = createInterface({ input: child.stdout, crlfDelay: Infinity }), pending = new Map()
  let id = 0, closing = false, closed = false, readyResolve, readyReject, closeTask
  const ready = new Promise((resolve, reject) => { readyResolve = resolve; readyReject = reject })
  const timer = setTimeout(() => readyReject(bridgeError("browser-startup")), 35000)
  function fail(error) { readyReject(error); for (const item of pending.values()) { clearTimeout(item.timer); item.reject(error) } pending.clear() }
  lines.on("line", (line) => {
    if (line.length > 3 * 1024 * 1024) { fail(bridgeError("window-closed")); return }
    let value; try { value = JSON.parse(line.replace(/^\uFEFF/, "")) } catch { return }
    if (value.event === "ready") { clearTimeout(timer); readyResolve(); return }
    if (value.event === "error") { fail(bridgeError(value.code)); return }
    const task = pending.get(value.id)
    if (task) { clearTimeout(task.timer); pending.delete(value.id); task.resolve(value.cookies) }
  })
  child.once("error", () => fail(bridgeError("browser-startup")))
  child.once("close", () => { closed = true; fail(bridgeError("window-closed")) })
  child.stdin.on("error", () => { if (!closing) fail(bridgeError("window-closed")) })
  function close() { return closeTask ||= finishClose() }
  async function finishClose() {
    closing = true; clearTimeout(timer); signal?.removeEventListener("abort", aborted)
    if (!closed) { child.stdin.end(JSON.stringify({ command: "close" }) + "\n"); for (let i = 0; i < 450 && !closed; i++) await sleep(100); if (!closed) child.kill() }
    lines.close(); fail(new Error("扫码登录已取消"))
  }
  const aborted = () => { fail(signal.reason || new Error("扫码登录已取消")); void close() }
  signal?.addEventListener("abort", aborted, { once: true })
  child.stdin.write(JSON.stringify({ browser: target, url }) + "\n")
  try { await ready; signal?.throwIfAborted() } catch (error) { await close(); throw error }
  return { async cookies() {
    if (closed || closing) throw bridgeError("window-closed")
    const request = ++id
    return new Promise((resolve, reject) => {
      pending.set(request, { resolve, reject, timer: setTimeout(() => { pending.delete(request); reject(bridgeError("window-closed")) }, 12000) })
      child.stdin.write(JSON.stringify({ command: "cookies", id: request }) + "\n")
    })
  }, close }
}

/** Strict CDP endpoint parser; only an isolated browser's loopback endpoint. */
export function browserEndpoint(text) {
  const [port, path] = text.trim().split(/\r?\n/)
  if (!/^\d{1,5}$/.test(port) || Number(port) < 1 || Number(port) > 65535 || !/^\/devtools\/browser\/[\w-]+$/.test(path || "")) throw new Error("独立登录窗口的控制地址异常")
  return `ws://127.0.0.1:${port}${path}`
}
async function nativeSession(browser, url, { signal } = {}) {
  const directory = await mkdtemp(join(tmpdir(), `moyu-shopping-login-${process.pid}-`))
  const child = spawn(browser.path, ["--no-first-run", "--no-default-browser-check", "--disable-sync", "--disable-extensions", "--remote-debugging-address=127.0.0.1", "--remote-debugging-port=0", "--user-data-dir=" + directory, "--new-window", url], { stdio: "ignore" })
  let error, exited = false, socket, closing = false, id = 0, closeTask
  const pending = new Map()
  child.once("error", () => { error = bridgeError("browser-startup") })
  child.once("exit", () => { exited = true })
  child.once("close", () => { exited = true })
  function fail(error) { for (const task of pending.values()) { clearTimeout(task.timer); task.reject(error) } pending.clear() }
  function request(method) {
    if (socket?.readyState !== WebSocket.OPEN) return Promise.reject(bridgeError("window-closed"))
    const key = ++id
    return new Promise((resolve, reject) => {
      pending.set(key, { resolve, reject, timer: setTimeout(() => { pending.delete(key); reject(bridgeError("window-closed")) }, 8000) })
      socket.send(JSON.stringify({ id: key, method }))
    })
  }
  function close() { return closeTask ||= finishClose() }
  async function finishClose() {
    closing = true; signal?.removeEventListener("abort", aborted)
    try { if (socket?.readyState === WebSocket.OPEN) await Promise.race([request("Browser.close").catch(() => {}), sleep(1500)]) } finally { socket?.close() }
    if (!exited) child.kill("SIGTERM")
    for (let i = 0; i < 30 && !exited; i++) await sleep(100)
    if (!exited) { child.kill("SIGKILL"); for (let i = 0; i < 10 && !exited; i++) await sleep(100) }
    fail(new Error("扫码登录已取消"))
    if (exited && basename(directory).startsWith("moyu-shopping-login-")) await rm(directory, { recursive: true, force: true, maxRetries: 10, retryDelay: 100 })
  }
  const aborted = () => { void close() }
  signal?.addEventListener("abort", aborted, { once: true })
  try {
    const until = Date.now() + 25000
    let endpoint
    while (Date.now() < until) {
      signal?.throwIfAborted(); if (error || exited) throw error || bridgeError("browser-startup")
      try { endpoint = browserEndpoint(await readFile(join(directory, "DevToolsActivePort"), "utf8")); break } catch (err) { if (err.code !== "ENOENT") throw err }
      await sleep(100, undefined, { signal })
    }
    if (!endpoint) throw bridgeError("browser-startup")
    socket = new WebSocket(endpoint)
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(bridgeError("browser-startup")), 8000)
      socket.addEventListener("open", () => { clearTimeout(timer); resolve() }, { once: true })
      socket.addEventListener("error", () => { clearTimeout(timer); reject(bridgeError("browser-startup")) }, { once: true })
    })
    socket.addEventListener("message", (event) => {
      if (typeof event.data !== "string" || event.data.length > 2 * 1024 * 1024) { fail(bridgeError("window-closed")); return }
      let data; try { data = JSON.parse(event.data) } catch { return }
      const task = pending.get(data.id)
      if (task) { clearTimeout(task.timer); pending.delete(data.id); data.error ? task.reject(bridgeError("window-closed")) : task.resolve(data.result) }
    })
    socket.addEventListener("close", () => fail(bridgeError("window-closed")))
    signal?.throwIfAborted()
    return { async cookies() { return (await request("Storage.getCookies")).cookies || [] }, close }
  } catch (error) { await close(); throw error }
}
/** No arbitrary URLs or connection to an existing browser are accepted. */
export async function openShoppingLogin(platform, { signal, browser } = {}) {
  const account = shoppingAccount(platform)
  signal?.throwIfAborted()
  const binary = browser || await findShoppingBrowser()
  return binary.windows ? windowsSession(binary, account.loginUrl, { signal }) : nativeSession(binary, account.loginUrl, { signal })
}
