import { createCipheriv, createHash, randomBytes } from "node:crypto"
import { createHttpClient, httpUrl } from "../core/http.mjs"
import { createQQLogin } from "./qq-login.mjs"
import { createPlaylistProviders } from "./playlists.mjs"

export const MUSIC_PLATFORMS = Object.freeze([
  { id: "netease", name: "网易云", qr: true, home: "https://music.163.com/" },
  { id: "qq", name: "QQ音乐", qr: true, home: "https://y.qq.com/" },
  { id: "kugou", name: "酷狗", qr: true, home: "https://www.kugou.com/" },
])
export function musicPlatform(id) {
  const platform = MUSIC_PLATFORMS.find((item) => item.id === id)
  if (!platform) throw new Error("不支持的音乐平台")
  return platform
}
export const trackKey = (track) => track.platform + ":" + track.id
const clean = (value) => String(value ?? "").replace(/<[^>]*>/g, "").replace(/&(?:amp|lt|gt|quot|#39);/g, (s) => ({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" })[s]).replace(/[\x00-\x1f\x7f-\x9f]/g, " ").slice(0, 180).trim()
export function musicTrack(input) {
  const platform = musicPlatform(input?.platform).id, id = String(input.id ?? "")
  if (!(platform === "netease" ? /^\d{1,24}$/ : platform === "kugou" ? /^[a-f0-9]{32}$/i : /^[a-z0-9]{1,40}$/i).test(id)) throw new Error("无效歌曲 ID")
  const duration = Number(input.duration)
  return { platform, id, title: clean(input.title) || "未知歌曲", artist: clean(input.artist) || "未知歌手", album: clean(input.album), duration: Number.isFinite(duration) && duration > 0 ? Math.min(duration, 86400) : 0,
    albumId: /^\d{1,24}$/.test(String(input.albumId)) ? String(input.albumId) : "", mediaId: /^[a-z0-9]{1,40}$/i.test(input.mediaId ?? "") ? input.mediaId : "", sourceUrl: platform === "netease" ? `https://music.163.com/#/song?id=${id}` : platform === "qq" ? `https://y.qq.com/n/ryqq/songDetail/${id}` : `https://www.kugou.com/song/#hash=${id}` }
}
export function parseSearch(platform, data) {
  const list = platform === "netease" ? data.result?.songs : platform === "qq" ? data.data?.song?.list : data.data?.lists
  if (!Array.isArray(list)) throw new Error("搜索接口未返回歌曲，请稍后重试")
  return list.flatMap((song) => {
    try { return [musicTrack(platform === "netease" ? { platform, id: song.id, title: song.name, artist: (song.ar ?? song.artists ?? []).map((s) => s.name).join(" / "), album: (song.al ?? song.album)?.name, duration: (song.dt ?? song.duration) / 1000 }
      : platform === "qq" ? { platform, id: song.mid ?? song.songmid, title: song.name ?? song.songname, artist: (song.singer ?? []).map((s) => s.name).join(" / "), album: song.album?.name ?? song.albumname, duration: song.interval, mediaId: song.file?.media_mid ?? song.media_mid }
        : { platform, id: song.FileHash, title: song.SongName, artist: song.SingerName, album: song.AlbumName, albumId: song.AlbumID, duration: song.Duration })] } catch { return [] }
  })
}
export function cookieValues(cookie = "") {
  return Object.fromEntries(cookie.split(";").map((s) => s.trim()).filter(Boolean).map((s) => { const at = s.indexOf("="); return [s.slice(0, at), s.slice(at + 1)] }).filter(([key]) => /^[\w-]+$/.test(key)))
}
const md5 = (text) => createHash("md5").update(text).digest("hex")
// The ordinary web API protocols documented by Listen1 / KuGouMusicApi.
// Only platform-issued playback URLs are used; no alternate-source unlocking.
export function neteaseForm(payload, secret = randomBytes(12).toString("base64")) {
  const encrypt = (text, key) => { const cipher = createCipheriv("aes-128-cbc", key, "0102030405060708"); return Buffer.concat([cipher.update(text), cipher.final()]).toString("base64") }
  const modulus = BigInt("0x00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7")
  let value = BigInt("0x" + Buffer.from(secret).reverse().toString("hex")), exponent = 65537n, encoded = 1n
  while (exponent) { if (exponent & 1n) encoded = encoded * value % modulus; value = value * value % modulus; exponent >>= 1n }
  return new URLSearchParams({ params: encrypt(encrypt(JSON.stringify(payload), "0CoJUm6Qyw8W8jud"), secret), encSecKey: encoded.toString(16).padStart(256, "0") }).toString()
}
export function kugouSignature(params) {
  const salt = "NVPh5oo715z5DIWAeQlhMDsWXXQV4hwt"
  return md5(salt + Object.keys(params).map((key) => `${key}=${params[key]}`).sort().join("") + salt)
}
const urlWith = (base, params) => { const url = new URL(base); for (const [key, value] of Object.entries(params)) url.searchParams.set(key, String(value)); return url.href }
function playResult(url, preview = false, duration) {
  if (!url) throw new Error("平台未提供播放地址，请检查登录、会员或地区权限")
  return { url: httpUrl(url).href, preview: Boolean(preview), duration: Number(duration) || 0 }
}

export function createMusicProviders({ request = createHttpClient() } = {}) {
  const kugouMid = randomBytes(16).toString("hex")
  const qqLogin = createQQLogin(request)
  async function json(url, options = {}) {
    const result = await request(url, { ...options, asBytes: true, headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json,text/plain,*/*", ...options.headers } })
    let data
    try { data = JSON.parse(result.text ?? result.bytes.toString("utf8")) } catch { throw new Error("平台返回了非 JSON 响应，请稍后重试") }
    return { data, cookies: result.cookies || [] }
  }
  const netease = (path, payload, cookie = "", signal) => json("https://music.163.com/weapi/" + path, { method: "POST", body: neteaseForm({ ...payload, csrf_token: cookieValues(cookie).__csrf || "" }), signal, headers: { Referer: "https://music.163.com/", Cookie: cookie, "Content-Type": "application/x-www-form-urlencoded" } })
  async function kugou(path, params, session, signal) {
    const query = { dfid: "-", mid: session.mid, uuid: "-", appid: 1005, clientver: 20489, clienttime: Math.floor(Date.now() / 1000), ...params }
    query.signature = kugouSignature(query)
    return json(urlWith("https://login-user.kugou.com" + path, query), { signal, headers: { Referer: "https://h5.kugou.com/", mid: session.mid } })
  }
  async function search(platform, query, { limit = 8, cookie = "", signal } = {}) {
    musicPlatform(platform)
    if (!String(query).trim() || query.length > 120) throw new Error("请输入 1–120 字的歌曲或歌手名称")
    limit = Math.max(1, Math.min(30, Math.trunc(Number(limit)) || 8))
    const url = platform === "netease" ? urlWith("https://music.163.com/api/search/get/web", { s: query, type: 1, limit, offset: 0 })
      : platform === "qq" ? urlWith("https://c.y.qq.com/soso/fcgi-bin/client_search_cp", { w: query, format: "json", p: 1, n: limit })
        : urlWith("https://songsearch.kugou.com/song_search_v2", { keyword: query, page: 1, pagesize: limit })
    const { data } = await json(url, { signal, headers: { Cookie: cookie, Referer: musicPlatform(platform).home } })
    return parseSearch(platform, data).slice(0, limit)
  }
  async function resolve(input, { cookie = "", signal } = {}) {
    const track = musicTrack(input), values = cookieValues(cookie)
    if (track.platform === "netease") {
      const { data } = await netease("song/enhance/player/url/v1", { ids: JSON.stringify([track.id]), level: "higher", encodeType: "mp3" }, cookie, signal)
      const item = data.data?.[0]
      return playResult(item?.url, item?.freeTrialInfo, item?.freeTrialInfo ? (item.freeTrialInfo.end - item.freeTrialInfo.start) / 1000 : item?.time / 1000)
    }
    if (track.platform === "qq") {
      const uin = (values.uin || values.wxuin || "0").replace(/^o/, ""), key = values.qqmusic_key || values.qm_keyst || ""
      let gtk = 5381; for (const c of key) gtk = (gtk + (gtk << 5) + c.charCodeAt(0)) & 0x7fffffff
      const payload = { comm: { uin, authst: key, g_tk: gtk, ct: 24, cv: 0, format: "json" }, req_1: { module: "vkey.GetVkeyServer", method: "CgiGetVkey", param: { guid: "10000", songmid: [track.id], songtype: [0], uin, loginflag: cookie ? 1 : 0, platform: "20", filename: [`M500${track.mediaId || track.id}.mp3`] } } }
      const { data } = await json("https://u.y.qq.com/cgi-bin/musicu.fcg", { signal, method: "POST", body: JSON.stringify(payload), headers: { Cookie: cookie, Referer: "https://y.qq.com/", "Content-Type": "application/json" } })
      const result = data.req_1?.data, item = result?.midurlinfo?.[0]
      return playResult(item?.purl ? new URL(item.purl, result.sip?.[0] || "https://isure.stream.qqmusic.qq.com/").href : "")
    }
    const mid = values.mid || values.kg_mid || kugouMid, hash = track.id.toLowerCase(), userid = values.userid || 0
    const params = { dfid: values.dfid || "-", mid, uuid: "-", appid: 1005, clientver: 11430, clienttime: Math.floor(Date.now() / 1000),
      album_id: Number(track.albumId || 0), area_code: 1, hash, version: 11430, quality: 128, album_audio_id: 0,
      behavior: "play", pid: 2, cmd: 26, pidversion: 3001, IsFreePart: 0, cdnBackup: 1, module: "", page_id: 151369488, ppage_id: "463467626,350369493,788954147",
      ...(values.token ? { token: values.token, userid } : {}), key: md5(`${hash}57ae12eb6890223e355ccfcb74edf70d1005${mid}${userid}`) }
    const salt = "OIlwieks28dk2k092lksi2UIkp"
    params.signature = md5(salt + Object.keys(params).sort().map((key) => `${key}=${params[key]}`).join("") + salt)
    const { data } = await json(urlWith("https://gateway.kugou.com/v5/url", params), { signal, headers: { "x-router": "trackercdn.kugou.com", mid, dfid: params.dfid } })
    if (data["SSA-CODE"] || data.data?.["SSA-CODE"] || data.error_code === 30020) throw new Error("酷狗要求额外验证，请先在官方 App 完成验证后重试")
    return playResult(Array.isArray(data.url) ? data.url[0] : data.url, data.is_free_part, data.timeLength)
  }
  async function beginLogin(platform, { signal } = {}) {
    musicPlatform(platform)
    if (platform === "qq") return qqLogin.begin({ signal })
    if (platform === "netease") {
      const { data } = await netease("login/qrcode/unikey", { type: 3 }, "", signal)
      const key = data.unikey ?? data.data?.unikey
      if (!key) throw new Error("网易云未返回扫码凭据，请稍后重试")
      return { platform, key, url: urlWith("https://music.163.com/login", { codekey: key }) }
    }
    const session = { platform, mid: randomBytes(16).toString("hex") }
    const { data } = await kugou("/v2/qrcode", { appid: 1001, type: 1, plat: 4, srcappid: 2919, qrcode_txt: "https://h5.kugou.com/apps/loginQRCode/html/index.html?appid=1005&" }, session, signal)
    const key = data.data?.qrcode
    if (!key) throw new Error("酷狗未返回扫码凭据，请稍后重试")
    return { ...session, key, url: urlWith("https://h5.kugou.com/apps/loginQRCode/html/index.html", { qrcode: key }) }
  }
  async function checkLogin(session, { signal, onProgress = (_status) => {} } = {}) {
    if (session.platform === "qq") return qqLogin.check(session, { signal, onProgress })
    if (session.platform === "netease") {
      const { data, cookies } = await netease("login/qrcode/client/login", { key: session.key, type: 3 }, "", signal)
      if (data.code === 803) {
        const cookie = cookies.map((c) => c.split(";")[0]).join("; ")
        if (!cookieValues(cookie).MUSIC_U) throw new Error("扫码完成但平台未返回有效登录态")
        return { status: "authorized", cookie }
      }
      return { status: data.code === 800 ? "expired" : data.code === 802 ? "scanned" : data.code === 801 ? "waiting" : "failed" }
    }
    musicPlatform(session.platform)
    const { data } = await kugou("/v2/get_userinfo_qrcode", { plat: 4, appid: 1005, srcappid: 2919, qrcode: session.key, dev: "Web" }, session, signal)
    const info = data.data
    if (Number(info?.status) === 4) {
      if (!info.token || !info.userid) throw new Error("扫码完成但平台未返回有效登录态")
      return { status: "authorized", cookie: `token=${info.token}; userid=${info.userid}; mid=${session.mid}`, nickname: clean(info.nickname) }
    }
    return { status: Number(info?.status) === 0 ? "expired" : Number(info?.status) === 2 ? "scanned" : Number(info?.status) === 1 ? "waiting" : "failed" }
  }
  return { search, resolve, beginLogin, checkLogin, ...createPlaylistProviders({ json, netease, parseSongs: parseSearch, normalizeTrack: musicTrack, cookies: cookieValues, page: request }) }
}
