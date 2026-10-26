import { spawn } from "node:child_process"
import { release } from "node:os"
import { fileURLToPath } from "node:url"

const windowsPowerShell = "/mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe"
const payloadScript = "$ErrorActionPreference='Stop';try{$payload=([Text.Encoding]::UTF8.GetString([Convert]::FromBase64String([Console]::In.ReadToEnd().Trim()))|ConvertFrom-Json);"
const openScript = payloadScript + "Start-Process -FilePath ([string]$payload.target) -ErrorAction Stop;exit 0}catch{exit 1}"
const copyScript = payloadScript + "Set-Clipboard -Value ([string]$payload.target) -ErrorAction Stop;exit 0}catch{exit 1}"

/** Wait for the opener's result, rather than treating a spawned process as success. */
export function runLinkCommand(command, args, { input = "", timeout = 8000 } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: ["pipe", "pipe", "ignore"], windowsHide: true })
    let output = "", finished = false
    const finish = (error) => {
      if (finished) return
      finished = true; clearTimeout(timer)
      if (error) { child.kill(); reject(error) } else resolve(output)
    }
    const timer = setTimeout(() => finish(new Error("命令未在限定时间内完成")), timeout)
    child.stdout.on("data", (chunk) => {
      output += chunk.toString()
      if (output.length > 65536) finish(new Error("命令输出过长"))
    })
    child.once("error", () => finish(new Error("命令不可用")))
    child.once("close", (code) => finish(code === 0 ? undefined : new Error("命令执行失败")))
    child.stdin.on("error", () => {})
    child.stdin.end(input)
  })
}

function environment(options) {
  const platform = options.platform ?? process.platform
  return { platform, wsl: platform === "linux" && (options.wsl ?? Boolean(process.env.WSL_DISTRO_NAME || process.env.WSL_INTEROP || /microsoft/i.test(release()))), run: options.run ?? runLinkCommand }
}
function targetUrl(target) {
  if (typeof target !== "string" || target.length > 16384 || /[\x00-\x20\x7f]/.test(target)) throw new Error("无效的页面链接")
  let url; try { url = new URL(target) } catch { throw new Error("无效的页面链接") }
  if (!["https:", "http:", "file:"].includes(url.protocol) || url.username || url.password) throw new Error("无效的页面链接")
  return url
}
async function powershell(run, wsl, script, target) {
  const input = Buffer.from(JSON.stringify({ target })).toString("base64")
  const args = ["-NoProfile", "-NonInteractive", "-STA", "-EncodedCommand", Buffer.from(script, "utf16le").toString("base64")]
  const commands = wsl ? [windowsPowerShell, "powershell.exe"] : ["powershell.exe"]
  for (const command of commands) {
    try { await run(command, args, { input }); return } catch {}
  }
  throw new Error("Windows 页面或剪贴板命令不可用")
}

/** URL data travels through stdin, never through an interpolated shell command. */
export async function openExternalPage(target, options = {}) {
  const url = targetUrl(target), { platform, wsl, run } = environment(options)
  try {
    if (platform === "win32" || wsl) {
      const page = url.protocol === "file:" ? wsl ? String(await run("wslpath", ["-w", fileURLToPath(url)])).trim() : fileURLToPath(url) : url.href
      if (!page) throw new Error("本地页面路径转换失败")
      await powershell(run, wsl, openScript, page)
    } else await run(platform === "darwin" ? "open" : "xdg-open", [url.href])
  } catch { throw new Error("浏览器未能确认打开，请复制链接到浏览器访问") }
}

export async function copyExternalLink(target, options = {}) {
  const url = targetUrl(target), { platform, wsl, run } = environment(options)
  try {
    if (platform === "win32" || wsl) return await powershell(run, wsl, copyScript, url.href)
    const commands = platform === "darwin" ? [["pbcopy", []]] : [["wl-copy", []], ["xclip", ["-selection", "clipboard"]], ["xsel", ["--clipboard", "--input"]]]
    for (const [command, args] of commands) {
      try { await run(command, args, { input: url.href }); return } catch {}
    }
  } catch {}
  throw new Error("自动复制不可用，请在完整链接框中手动复制")
}
