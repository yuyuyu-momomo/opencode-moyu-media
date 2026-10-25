import { randomBytes } from "node:crypto"

const loginOrigin = "https://ssl.ptlogin2.qq.com"
const musicOrigin = "https://y.qq.com/"
const redirectUri = musicOrigin + "portal/wx_redirect.html?login_type=1&surl=https://y.qq.com/"
const paramsUrl = (base, params) => { const url = new URL(base); url.search = new URLSearchParams(params).toString(); return url.href }
export function qqHash(value, seed = 0) { let hash = seed; for (const char of value) hash = (hash * 33 + char.charCodeAt(0)) | 0; return hash & 0x7fffffff }

/** Parse ptuiCB data, never execute the platform's JavaScript response. */
export function parseQQCallback(text) {
  const match = /^\s*ptuiCB\s*\(([^]*)\)\s*;?\s*$/.exec(text)
  if (!match || text.length > 16384) throw new Error("QQ扫码响应格式异常，请重新生成二维码")
  const args = [], pattern = /\s*'((?:\\.|[^'\\])*)'\s*(,|$)/gy
  let offset = 0
  while (offset < match[1].length) {
    pattern.lastIndex = offset
    const item = pattern.exec(match[1])
    if (!item || args.length >= 8) throw new Error("QQ扫码响应格式异常，请重新生成二维码")
    args.push(item[1].replace(/\\(?:x([\da-f]{2})|u([\da-f]{4})|(['"\\/])|([nrt]))/gi, (_all, hex, unicode, literal, control) => hex || unicode ? String.fromCharCode(parseInt(hex || unicode, 16)) : literal || ({ n: "\n", r: "\r", t: "\t" })[control]))
    offset = pattern.lastIndex
    if (!item[2]) break
    if (offset === match[1].length) throw new Error("QQ扫码响应格式异常，请重新生成二维码")
  }
  if (args.length < 3 || !/^\d{1,6}$/.test(args[0])) throw new Error("QQ扫码响应格式异常，请重新生成二维码")
  return { code: Number(args[0]), callback: args[2], nickname: args[5] || "" }
}

/** Combined Set-Cookie headers may include commas in Expires. */
export function qqResponseCookies(headers = [], target) {
  const jar = new Map(), values = Object.create(null), destination = target ? new URL(target) : undefined
  for (const header of headers) for (const cookie of header.split(/,(?=\s*[\w-]+=)/)) {
    const match = /^\s*([\w-]+)=([^;]*)/.exec(cookie)
    if (!match || /[\x00-\x20\x7f-\uffff]/.test(match[2])) continue
    const domain = /;\s*domain=([^;]+)/i.exec(cookie)?.[1].trim().replace(/^\./, "").toLowerCase() || ""
    const path = /;\s*path=([^;]+)/i.exec(cookie)?.[1].trim() || "/"
    const expires = /;\s*expires=([^;]+)/i.exec(cookie)?.[1]
    const maxAge = /;\s*max-age=([^;]+)/i.exec(cookie)?.[1]
    const key = `${match[1]}\n${domain}\n${path}`
    if (!match[2] || (maxAge !== undefined && Number(maxAge) <= 0) || (expires && Date.parse(expires) <= Date.now())) { jar.delete(key); continue }
    jar.set(key, { name: match[1], value: match[2], domain, path })
  }
  const candidates = [...jar.values()].filter((item) => !destination || ((!item.domain || destination.hostname === item.domain || destination.hostname.endsWith("." + item.domain)) && (destination.pathname === item.path || destination.pathname.startsWith(item.path.endsWith("/") ? item.path : item.path + "/"))))
  // A deletion for qq.com must not erase a live graph.qq.com cookie.
  candidates.sort((a, b) => a.domain.length - b.domain.length || a.path.length - b.path.length)
  for (const item of candidates) values[item.name] = item.value
  return values
}
const bodyText = (response) => response.text ?? response.bytes?.toString("utf8") ?? ""
const safeText = (value) => String(value || "").replace(/[\x00-\x1f\x7f-\x9f]/g, "").slice(0, 80)

/** Ordinary QQ SSO -> QQ Music OAuth exchange; only the final music key is saved. */
export function createQQLogin(request) {
  async function read(url, options = {}) {
    const response = await request(url, { ...options, asBytes: true, redirect: "manual", headers: { "User-Agent": "Mozilla/5.0", Referer: "https://xui.ptlogin2.qq.com/", ...options.headers } })
    options.signal?.throwIfAborted()
    return response
  }
  async function begin({ signal } = {}) {
    const response = await read(paramsUrl(loginOrigin + "/ptqrshow", { appid: "716027609", e: "2", l: "M", s: "3", d: "72", v: "4", t: String(Math.random()), daid: "383", pt_3rd_aid: "100497308" }), { signal })
    const cookies = qqResponseCookies(response.cookies), bytes = response.bytes
    if (!cookies.qrsig || !bytes || bytes.length > 1024 * 1024 || bytes.length < 8 || !bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) throw new Error("QQ未返回有效二维码，请稍后重试")
    return { platform: "qq", qrsig: cookies.qrsig, state: randomBytes(18).toString("hex"), image: "data:image/png;base64," + bytes.toString("base64") }
  }
  async function authorize(session, callback, signal, onProgress) {
    // Rebuild a fixed endpoint: no upstream callback URL is ever fetched.
    let url
    try { url = new URL(callback) } catch { throw new Error("QQ授权地址异常，请重新扫码") }
    if (url.protocol !== "https:" || url.port || url.username || url.password || !["ssl.ptlogin2.graph.qq.com", "ssl.ptlogin2.qq.com", "ptlogin2.qq.com", "ptlogin2.music.qq.com"].includes(url.hostname) || url.pathname !== "/check_sig") throw new Error("QQ授权地址异常，请重新扫码")
    const uin = url.searchParams.get("uin"), sig = url.searchParams.get("ptsigx")
    if (!/^\d{5,20}$/.test(uin || "") || !sig || sig.length > 512 || /[^\x21-\x7e]/.test(sig)) throw new Error("QQ授权参数不完整，请重新扫码")
    const checked = await read(paramsUrl("https://ssl.ptlogin2.graph.qq.com/check_sig", { uin, ptsigx: sig, pttype: "1", service: "ptqrlogin", nodirect: "0", s_url: "https://graph.qq.com/oauth2.0/login_jump", ptlang: "2052", ptredirect: "100", aid: "716027609", daid: "383", j_later: "0", low_login_hour: "0", regmaster: "0", pt_login_type: "3", pt_aid: "0", pt_aaid: "16", pt_light: "0", pt_3rd_aid: "100497308" }), { signal })
    const sso = qqResponseCookies(checked.cookies, "https://graph.qq.com/oauth2.0/authorize")
    if (!sso.p_skey) throw new Error("QQ授权尚未完成，请重新扫码并在手机确认")
    const gtk = qqHash(sso.p_skey, 5381)
    // Keep all cookies scoped to graph.qq.com, including pt_oauth_token.
    const cookie = Object.entries(sso).map(([key, value]) => `${key}=${value}`).join("; ")
    const authorization = await read("https://graph.qq.com/oauth2.0/authorize", { signal, method: "POST", body: new URLSearchParams({ response_type: "code", client_id: "100497308", redirect_uri: redirectUri, scope: "get_user_info", state: session.state, switch: "", from_ptlogin: "1", src: "1", update_auth: "1", openapi: "1010_1030", g_tk: String(gtk), auth_time: String(Date.now()), ui: session.state }).toString(), headers: { Cookie: cookie, "Content-Type": "application/x-www-form-urlencoded", Referer: "https://graph.qq.com/" } })
    let location
    try { location = new URL(authorization.redirect) } catch { throw new Error("QQ授权未返回登录结果，请重新扫码") }
    if (location.origin === "https://graph.qq.com" && location.pathname === "/oauth2.0/show") throw new Error("QQ授权未完成，平台返回了登录页，请重新扫码")
    const code = location.searchParams.get("code")
    if (location.origin !== "https://y.qq.com" || location.pathname !== "/portal/wx_redirect.html" || location.searchParams.get("state") !== session.state || !/^[\w-]{8,512}$/.test(code || "")) throw new Error("QQ授权结果不匹配，请重新扫码")
    onProgress("exchanging")
    const result = await read("https://u.y.qq.com/cgi-bin/musicu.fcg", { signal, method: "POST", body: JSON.stringify({ comm: { ct: 24, cv: 4747474, platform: "yqq.json", format: "json", g_tk: gtk, tmeLoginType: 2 }, req: { module: "QQConnectLogin.LoginServer", method: "QQLogin", param: { code } } }), headers: { "Content-Type": "application/json", Referer: musicOrigin } })
    let data
    try { data = JSON.parse(bodyText(result)) } catch { throw new Error("QQ音乐授权结果异常，请重新扫码") }
    const info = data.req?.data, cookies = qqResponseCookies(result.cookies)
    if (data.code || data.req?.code) throw new Error(`QQ音乐拒绝了本次授权${Number.isInteger(data.req?.code) ? `（${data.req.code}）` : ""}，请在官方客户端检查账号状态`)
    const musicid = String(info?.str_musicid || info?.musicid || cookies.uin?.replace(/^o/, "") || ""), musickey = info?.musickey || cookies.qqmusic_key || cookies.qm_keyst
    if (!/^\d{5,24}$/.test(musicid) || typeof musickey !== "string" || !/^[\x21-\x3a\x3c-\x7e]{1,8192}$/.test(musickey)) throw new Error("QQ音乐未返回完整登录态，请重新扫码")
    return { cookie: `uin=${musicid}; qqmusic_key=${musickey}`, nickname: safeText(info?.nick || info?.nickname) }
  }
  async function check(session, { signal, onProgress = (_status) => {} } = {}) {
    const response = await read(paramsUrl(loginOrigin + "/ptqrlogin", { u1: "https://graph.qq.com/oauth2.0/login_jump", ptqrtoken: String(qqHash(session.qrsig)), ptredirect: "0", h: "1", t: "1", g: "1", from_ui: "1", ptlang: "2052", action: `0-0-${Date.now()}`, js_ver: "20102616", js_type: "1", pt_uistyle: "40", aid: "716027609", daid: "383", pt_3rd_aid: "100497308", has_onekey: "1" }), { signal, headers: { Cookie: `qrsig=${session.qrsig}` } })
    const result = parseQQCallback(bodyText(response))
    if (result.code === 66) return { status: "waiting" }
    if (result.code === 67) return { status: "scanned" }
    if (result.code === 65) return { status: "expired" }
    if (result.code !== 0) return { status: "failed" }
    onProgress("authorizing")
    const account = await authorize(session, result.callback, signal, onProgress)
    return { status: "authorized", ...account, nickname: account.nickname || safeText(result.nickname) }
  }
  return { begin, check }
}
