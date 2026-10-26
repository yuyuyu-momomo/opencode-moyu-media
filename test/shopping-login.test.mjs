import test from "node:test"
import assert from "node:assert/strict"
import { mkdtemp, readFile, readdir, rm } from "node:fs/promises"
import { join } from "node:path"
import { tmpdir } from "node:os"
import { LibraryStore } from "../src/library/store.mjs"
import { ShoppingSettings } from "../src/shopping/settings.mjs"
import { ShoppingService } from "../src/shopping/service.mjs"
import { accountCookies, accountAuthorized, shoppingAccount } from "../src/shopping/accounts.mjs"
import { browserEndpoint, openShoppingLogin } from "../src/shopping/browser.mjs"
import { dispatchMoyu, shoppingLoginRequest } from "../src/ui/collect.mjs"

const cookie = (name, value, domain = ".jd.com", extra = {}) => ({ name, value, domain, path: "/", secure: true, httpOnly: true, expires: -1, ...extra })
const valid = (platform) => platform === "jd" ? [cookie("thor", "private-jd"), cookie("pin", "private-user")] : platform === "taobao" ? [cookie("cookie2", "private-tb", ".taobao.com"), cookie("unb", "123", ".taobao.com")] : [cookie("PDDAccessToken", "private-pdd", ".yangkeduo.com"), cookie("pdd_user_id", "456", ".yangkeduo.com")]
async function fixture(run) {
  const root = await mkdtemp(join(tmpdir(), "moyu-shopping-login-test-")), library = new LibraryStore(join(root, "books"), { keyFile: join(root, "keys/library.key") })
  await library.ready()
  try { await run(library) } finally { await rm(root, { recursive: true, force: true }) }
}

test("购物账号只接收平台域内的有效 Cookie，拒绝控制字符、过期及超大数据", () => {
  const input = [...valid("jd"), cookie("other", "private", ".jd.com.evil.test"), cookie("other", "private", ".taobao.com"), cookie("gone", "private", ".jd.com", { expires: 1 }), cookie("bad", "a;b"), cookie("gone", "deleted")]
  assert.deepEqual(accountCookies("jd", input).map((item) => item.name), ["thor", "pin"])
  assert.equal(accountCookies("jd", [cookie("empty", "")]).length, 0)
  assert.throws(() => accountCookies("jd", [cookie("big", "x".repeat(70000))]), /大小/)
  assert.throws(() => shoppingAccount("https://evil.test"), /不支持/)
})

test("匿名页面、已清空 Cookie 及其他平台的凭据不能被判为扫码成功", () => {
  for (const platform of ["jd", "taobao", "pdd"]) assert.equal(accountAuthorized(platform, valid(platform)), true)
  assert.equal(accountAuthorized("jd", [cookie("pin", "user")]), false)
  assert.equal(accountAuthorized("taobao", [cookie("cookie2", "anon", ".taobao.com")]), false)
  assert.equal(accountAuthorized("pdd", [cookie("PDDAccessToken", "deleted", ".yangkeduo.com"), cookie("pdd_user_id", "0", ".yangkeduo.com")]), false)
  assert.equal(accountAuthorized("pdd", valid("jd")), false)
})

test("三个购物账号独立加密，公开状态没有账号标识或 Cookie，退出不影响应用凭据", async () => fixture(async (library) => {
  const settings = new ShoppingSettings(library)
  for (const platform of ["jd", "taobao", "pdd"]) {
    const result = await settings.saveAccount(platform, valid(platform), { expectedVersion: "0" })
    assert.equal(result.configured, true); assert.doesNotMatch(JSON.stringify(result), /private|cookie|user_id/)
    assert.deepEqual(Object.keys(result).sort(), ["configured", "method", "platform", "savedAt"])
    const bytes = await readFile(join(settings.directory, `account-${platform}.enc`))
    assert.equal(bytes.subarray(0, 5).toString(), "MOYU1"); assert.equal(bytes.includes(Buffer.from("private-")), false)
  }
  await settings.saveCredentials("jd", { appKey: "key", appSecret: "private-app" })
  await settings.logout("jd")
  assert.equal((await settings.account("jd")).configured, false)
  assert.equal((await settings.account("taobao")).configured, true)
  assert.equal((await settings.status("jd")).configured, true)
  await assert.rejects(readFile(join(settings.directory, "account-jd.enc")), { code: "ENOENT" })
}))

test("其他窗口退出账号后，迟到的扫码结果不能重新写回旧登录态", async () => fixture(async (library) => {
  const first = new ShoppingSettings(library), second = new ShoppingSettings(library)
  const version = await first.accountVersion("pdd")
  await second.logout("pdd")
  await assert.rejects(first.saveAccount("pdd", valid("pdd"), { expectedVersion: version }), /其他窗口/)
  assert.equal((await first.account("pdd")).configured, false)
}))

test("登录轮询只在平台确认后加密保存，并关闭临时窗口；来源工具不返回凭据", async () => fixture(async (library) => {
  let closed = 0, checks = 0
  const phases = [], service = new ShoppingService(library, { loginWindow: async () => ({ async cookies() { return ++checks < 2 ? [] : valid("taobao") }, async close() { closed++ } }) })
  const result = await service.login("taobao", { intervalMs: 10, timeoutMs: 1000, onStatus: (value) => phases.push(value) })
  assert.equal(result.configured, true); assert.equal(closed, 1); assert.deepEqual(phases, ["opening", "waiting", "saving"])
  assert.doesNotMatch(JSON.stringify(await service.sources()), /private-tb|cookie2|unb/)
}))

test("扫码取消、超时与关闭窗口不写入账号，且等待窗口清理完成", async () => fixture(async (library) => {
  const controller = new AbortController(); let closed = 0
  const service = new ShoppingService(library, { loginWindow: async () => ({ async cookies() { controller.abort(new Error("user cancelled")); return valid("jd") }, async close() { await new Promise((r) => setTimeout(r, 10)); closed++ } }) })
  await assert.rejects(service.login("jd", { signal: controller.signal }), /user cancelled/)
  assert.equal(closed, 1); assert.equal((await service.settings.account("jd")).configured, false)
  const timeout = new ShoppingService(library, { loginWindow: async () => ({ async cookies() { return [] }, async close() { closed++ } }) })
  await assert.rejects(timeout.login("jd", { timeoutMs: 100, intervalMs: 10 }), /超时/)
  assert.equal(closed, 2)
  const gone = new ShoppingService(library, { loginWindow: async () => ({ async cookies() { throw new Error("window closed") }, async close() { closed++ } }) })
  await assert.rejects(gone.login("jd"), /window closed/); assert.equal(closed, 3)
  assert.equal((await gone.settings.account("jd")).configured, false)
}))

test("本地浏览器控制地址仅接受回环端口和新浏览器路径；启动失败释放临时目录", async () => {
  assert.equal(browserEndpoint("12345\n/devtools/browser/test-id\n"), "ws://127.0.0.1:12345/devtools/browser/test-id")
  for (const text of ["0\n/devtools/browser/id", "65536\n/devtools/browser/id", "1\nws://evil.test", "123\n/devtools/page/id", "123\n/devtools/browser/../../etc"]) assert.throws(() => browserEndpoint(text), /地址异常/)
  const before = (await readdir(tmpdir())).filter((name) => name.startsWith(`moyu-shopping-login-${process.pid}-`))
  await assert.rejects(openShoppingLogin("jd", { browser: { path: "/moyu-no-such-browser", windows: false } }), /无法启动/)
  const after = (await readdir(tmpdir())).filter((name) => name.startsWith(`moyu-shopping-login-${process.pid}-`))
  assert.deepEqual(after, before)
})

test("/moyu 三平台扫码命令本地执行，不选择模型或创建聊天", async () => {
  const host = { ui: { model: { current() { throw new Error("must not select model") } } } }, calls = []
  for (const [query, platform] of [["/moyu 登录京东", "jd"], ["/moyu 京东扫码登录", "jd"], ["登录tb", "taobao"], ["天猫登录", "taobao"], ["/moyu 登录拼多多", "pdd"], ["扫码登录PDD", "pdd"]]) {
    assert.equal(shoppingLoginRequest(query), platform)
    assert.deepEqual(await dispatchMoyu(host, query, { shoppingLogin: (id) => { calls.push(id) } }), { kind: "shopping-login", platform })
  }
  assert.equal(calls.length, 6)
  for (const query of ["搜索京东登录教程", "登录qq音乐", "小说 登录拼多多的故事", "登录淘宝并搜索耳机"]) assert.equal(shoppingLoginRequest(query), undefined)
  await assert.rejects(dispatchMoyu(host, "登录淘宝"), /尚未准备好/)
})
