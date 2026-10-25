import test from "node:test"
import assert from "node:assert/strict"
import { mkdtemp, readFile, rm, access } from "node:fs/promises"
import { join } from "node:path"
import { tmpdir } from "node:os"
import { fileURLToPath } from "node:url"
import { LibraryStore } from "../src/library/store.mjs"
import { MusicService } from "../src/music/service.mjs"
import { createMusicProviders } from "../src/music/providers.mjs"
import { parseQQCallback, qqResponseCookies } from "../src/music/qq-login.mjs"
import { musicLoginPage } from "../src/music/login.mjs"
import { dispatchMoyu, musicLoginRequest } from "../src/ui/collect.mjs"

const image = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y9ZbWQAAAAASUVORK5CYII=", "base64")
function fixture({ noKey = false, wrongState = false, badCallback = false, gate, exchangeStarted } = {}) {
  const calls = [], codes = ["66", "67", "0"]
  let state
  const providers = createMusicProviders({ request: async (input, options = {}) => {
    const url = new URL(input); calls.push({ url, options })
    assert.equal(options.redirect, "manual")
    if (url.pathname === "/ptqrshow") return { bytes: image, cookies: ["qrsig=qr-secret; Path=/; Domain=ptlogin2.qq.com; Secure"] }
    if (url.pathname === "/ptqrlogin") {
      assert.equal(options.headers.Cookie, "qrsig=qr-secret")
      const callback = badCallback ? "https://evil.example/check_sig?uin=12345678&ptsigx=private" : "https://ssl.ptlogin2.graph.qq.com/check_sig?uin=12345678&ptsigx=sig-private&service=ptqrlogin"
      return { text: `ptuiCB('${codes.shift() || "0"}','0','${callback}','0','message','昵称');` }
    }
    if (url.pathname === "/check_sig") {
      assert.equal(url.hostname, "ssl.ptlogin2.graph.qq.com")
      return { status: 302, redirect: "https://graph.qq.com/oauth2.0/login_jump", cookies: ["p_skey=sso-secret; Expires=Wed, 21 Oct 2037 07:28:00 GMT; Path=/; Domain=graph.qq.com, uin=o12345678; Path=/; Domain=qq.com", "pt_oauth_token=oauth-session-secret; Domain=graph.qq.com; Path=/; HttpOnly", "p_skey=; Domain=qq.com; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT"] }
    }
    if (url.pathname === "/oauth2.0/authorize") {
      const form = new URLSearchParams(options.body); state = form.get("state")
      assert.equal(form.get("client_id"), "100497308")
      assert.equal(form.get("scope"), "get_user_info")
      assert.match(options.headers.Cookie, /p_skey=sso-secret/)
      assert.match(options.headers.Cookie, /pt_oauth_token=oauth-session-secret/)
      assert.doesNotMatch(options.headers.Cookie, /qr-secret/)
      return { status: 302, redirect: `https://y.qq.com/portal/wx_redirect.html?login_type=1&code=code-private-123&state=${wrongState ? "wrong" : state}`, cookies: [] }
    }
    if (url.pathname === "/cgi-bin/musicu.fcg") {
      assert.equal(options.headers.Cookie, undefined)
      const payload = JSON.parse(options.body)
      assert.equal(payload.req.module, "QQConnectLogin.LoginServer")
      assert.equal(payload.req.param.code, "code-private-123")
      exchangeStarted?.()
      if (gate) await gate
      return { text: JSON.stringify({ code: 0, req: { code: 0, data: { musicid: 12345678, ...(!noKey ? { musickey: "music-secret" } : {}), nick: "测试用户" } } }), cookies: [] }
    }
    throw new Error("Unexpected endpoint")
  } })
  return { providers, calls }
}

test("QQ扫码数据按文本解析，处理转义，不执行回调或接受附加脚本", () => {
  const parsed = parseQQCallback("ptuiCB('67','0','','0','等待','a\\'b\\u4f60');")
  assert.equal(parsed.code, 67); assert.equal(parsed.nickname, "a'b你")
  for (const input of ["eval('private')", "ptuiCB('0','0',''); globalThis.leaked=true", "ptuiCB('0','0',alert('x'));", "ptuiCB('0',)"]) assert.throws(() => parseQQCallback(input), /格式异常/)
  assert.deepEqual({ ...qqResponseCookies(["p_skey=a; Expires=Wed, 21 Oct 2037 07:28:00 GMT, uin=o12345678; Path=/"]) }, { p_skey: "a", uin: "o12345678" })
})

test("QQ从未扫码、已扫码到完整授权后才加密保存，SSO凭据不入库", async () => {
  const root = await mkdtemp(join(tmpdir(), "moyu-qq-login-test-"))
  const library = new LibraryStore(join(root, "books"), { keyFile: join(root, "keys/library.key") })
  await library.ready()
  const { providers, calls } = fixture(), service = new MusicService(library, { providers }), states = []
  let page
  try {
    const result = await service.login("qq", { intervalMs: 1, onStatus: (status) => states.push(status), onSession: async (session) => {
      assert.equal((await service.settings.account("qq")).configured, false)
      page = await musicLoginPage(session)
      const html = await readFile(fileURLToPath(page.url), "utf8")
      assert.match(html, /data:image\/png;base64,/); assert.match(html, /手机 QQ/)
      assert.doesNotMatch(html, /qr-secret|sso-secret|script|https:\/\/ssl\.ptlogin2/)
    } })
    assert.deepEqual(states, ["waiting", "scanned", "authorizing", "exchanging"])
    assert.equal(result.configured, true); assert.equal(result.method, "qr")
    assert.doesNotMatch(JSON.stringify(result), /secret|cookie/)
    assert.equal(await service.settings.cookie("qq"), "uin=12345678; qqmusic_key=music-secret")
    const encrypted = await readFile(service.settings.path("qq"))
    assert.equal(encrypted.includes(Buffer.from("secret")), false)
    const decoded = await library.vault.unseal(encrypted)
    assert.doesNotMatch(JSON.stringify(decoded), /sso-secret|sig-private|qr-secret|code-private|oauth-session-secret/)
    assert.equal(calls.filter((call) => call.url.pathname === "/check_sig").length, 1)
  } finally { await page?.release(); if (page) await assert.rejects(access(fileURLToPath(page.url)), { code: "ENOENT" }); await rm(root, { recursive: true, force: true }) }
})

test("QQ同名 Cookie 按域和路径处理，清理另一个域不会覆盖有效授权 Cookie", () => {
  const headers = [
    "p_skey=valid-graph; Domain=.graph.qq.com; Path=/; Secure; HttpOnly",
    "pt_oauth_token=oauth-fixture; Domain=graph.qq.com; Path=/",
    "p_skey=; Domain=.qq.com; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
    "private_other=unrelated; Domain=other.example; Path=/",
    "path_cookie=wrong-path; Domain=graph.qq.com; Path=/account",
  ]
  assert.deepEqual({ ...qqResponseCookies(headers, "https://graph.qq.com/oauth2.0/authorize") }, { p_skey: "valid-graph", pt_oauth_token: "oauth-fixture" })
  assert.equal(qqResponseCookies([...headers, "p_skey=; Domain=graph.qq.com; Path=/; Max-Age=0"], "https://graph.qq.com/").p_skey, undefined)
  assert.equal(qqResponseCookies(headers, "https://graph.qq.com.evil.example/").p_skey, undefined)
})

test("QQ拒绝不完整登录态、错配授权结果和非官方回调，不把秘密放进错误", async () => {
  for (const options of [{ noKey: true }, { wrongState: true }, { badCallback: true }]) {
    const { providers, calls } = fixture(options), session = await providers.beginLogin("qq")
    await providers.checkLogin(session); await providers.checkLogin(session)
    await assert.rejects(providers.checkLogin(session), (error) => { assert.doesNotMatch(error.message, /secret|private|evil\.example/); return true })
    if (options.badCallback) assert.equal(calls.length, 4)
    if (options.wrongState) assert.equal(calls.some((call) => call.url.pathname === "/cgi-bin/musicu.fcg"), false)
  }
})

test("QQ二维码失效及取消登录丢弃迟到的凭据", async () => {
  const expired = createMusicProviders({ request: async () => ({ text: "ptuiCB('65','0','','0','expired','');" }) })
  assert.equal((await expired.checkLogin({ platform: "qq", qrsig: "fixture" })).status, "expired")
  let release, exchange
  const gate = new Promise((resolve) => { release = resolve }), exchanging = new Promise((resolve) => { exchange = resolve })
  const { providers } = fixture({ gate, exchangeStarted: exchange })
  const root = await mkdtemp(join(tmpdir(), "moyu-qq-cancel-test-")), library = new LibraryStore(join(root, "books"), { keyFile: join(root, "keys/library.key") })
  await library.ready()
  const service = new MusicService(library, { providers }), abort = new AbortController()
  try {
    const pending = service.login("qq", { signal: abort.signal, intervalMs: 1 })
    await exchanging; abort.abort(); release()
    await assert.rejects(pending, /abort/i)
    assert.equal((await service.settings.account("qq")).configured, false)
  } finally { release(); await rm(root, { recursive: true, force: true }) }
})

test("/moyu 登录音乐账号直接走本地扫码，不选择模型、不创建会话、不发送 Cookie", async () => {
  const logins = [], host = new Proxy({}, { get() { throw new Error("Login must not access model/session APIs") } })
  for (const [query, platform] of [["/moyu 登录qq音乐", "qq"], ["登录 QQ 音乐", "qq"], ["QQ音乐扫码登录", "qq"], ["请帮我登录网易云", "netease"], ["登录酷狗音乐", "kugou"], ["login qqmusic", "qq"]]) {
    assert.equal(musicLoginRequest(query), platform)
    assert.deepEqual(await dispatchMoyu(host, query, { login: (id) => { logins.push(id) } }), { kind: "music-login", platform })
  }
  assert.equal(logins.length, 6)
  for (const query of ["/moyu", "音乐 搜索 登录", "搜索 QQ音乐登录教程", "登录QQ音乐并搜索歌曲", "小说 QQ音乐登录故事"]) assert.equal(musicLoginRequest(query), undefined)
  await assert.rejects(dispatchMoyu(host, "登录qq音乐"), /尚未准备好/)
})
