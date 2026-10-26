import QRCode from "qrcode/lib/core/qrcode.js"
import { writeFile } from "node:fs/promises"
import { join } from "node:path"
import { pathToFileURL } from "node:url"
import { musicPlatform } from "./providers.mjs"
import { createMusicTemp, removeMusicTemp } from "./temp.mjs"
export { openExternalPage as openMusicPage } from "../core/external-links.mjs"

export function musicQRCode(url) {
  const { modules } = QRCode.create(url, { errorCorrectionLevel: "M" })
  const size = modules.size, commands = []
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (modules.data[y * size + x]) commands.push(`M${x + 4} ${y + 4}h1v1h-1z`)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size + 8} ${size + 8}" shape-rendering="crispEdges"><rect width="100%" height="100%" fill="white"/><path fill="black" d="${commands.join("")}"/></svg>`
  return "data:image/svg+xml;base64," + Buffer.from(svg).toString("base64")
}

/** A local, static page. No network QR service, cookie form or web listener. */
export async function musicLoginPage(session) {
  const name = musicPlatform(session.platform).name
  const directory = await createMusicTemp("login")
  try {
    const image = session.image || musicQRCode(session.url)
    if (session.image && (session.image.length > 2 * 1024 * 1024 || !/^data:image\/png;base64,[A-Za-z0-9+/]+={0,2}$/.test(session.image))) throw new Error("登录二维码格式不正确")
    const scanner = session.platform === "qq" ? "手机 QQ" : name + "手机 App"
    const path = join(directory, "login.html")
    await writeFile(path, `<!doctype html><html lang="zh-CN">
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data:; style-src 'unsafe-inline'">
<title>${name} · 摸鱼音乐</title>
<style>body{margin:0;background:#101820;color:#e8edef;font:18px system-ui;display:grid;min-height:100vh;place-items:center}main{text-align:center;padding:28px}img{width:300px;max-width:80vw;image-rendering:pixelated;border-radius:16px}p{color:#acbec7;line-height:1.8;max-width:440px}h1{font-size:26px}</style>
<main><h1>${name} · 扫码登录</h1><img alt="登录二维码" src="${image}">
<p>请用${scanner}扫码并确认。<br>完成后返回 OpenCode 查看账号状态。<br>扫码等待最多 3 分钟，取消后软件不再接收登录。</p></main></html>`, { mode: 0o600 })
    return { url: pathToFileURL(path).href, release: () => removeMusicTemp(directory) }
  } catch (error) { await removeMusicTemp(directory); throw error }
}
