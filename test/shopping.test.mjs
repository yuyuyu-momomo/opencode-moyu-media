import test from "node:test"
import assert from "node:assert/strict"
import { mkdtemp, rm, readFile, readdir } from "node:fs/promises"
import { join } from "node:path"
import { tmpdir } from "node:os"
import { LibraryStore } from "../src/library/store.mjs"
import { ShoppingSettings } from "../src/shopping/settings.mjs"
import { ShoppingService } from "../src/shopping/service.mjs"
import { cents, money, shoppingUrl, shoppingOffer, couponAvailable } from "../src/shopping/contracts.mjs"
import { parseManmanbuy, parseJD, parseTaobao, createShoppingProviders } from "../src/shopping/providers.mjs"
import { collectionKind } from "../src/domain/collection-task.mjs"
import { collectionPrompt, dispatchMoyu, moyuNavigation } from "../src/ui/collect.mjs"
import { injectCollectionInstructions } from "../src/server/collection-context.mjs"

const card = (id, price = "99.90元（需领券，晒单返现5元）", mall = "京东商城") => `<div class="DiscountItemPC_discountItem__new"><div class="DiscountItemPC_itemTitle__new"><a href="https://cu.manmanbuy.com/discuxiao_${id}.aspx">耳机 ${id}</a></div><div class="DiscountItemPC_itemSubTitle__new">${price}</div><span class="DiscountItemPC_itemMall__new">${mall}</span><span class="DiscountItemPC_itemTime__new">10-26 08:00</span></div>`
const offer = (id = "1", source = "manmanbuy", priceCents = 9990) => shoppingOffer({ source, id, title: "耳机 " + id, platform: "jd", sourceUrl: `https://item.jd.com/${id}.html`, priceCents, priceLabel: "报价", conditions: "需领券，以结算为准", observedAt: "2026-10-26T00:00:00Z" })
async function fixture(run) {
  const directory = await mkdtemp(join(tmpdir(), "moyu-shopping-test-")), library = new LibraryStore(join(directory, "books"), { keyFile: join(directory, "keys/library.key") })
  await library.ready()
  try { await run(library) } finally { await rm(directory, { recursive: true, force: true }) }
}

test("金额使用分，不截取价格区间或运算表达式；链接只允许真实购物域", () => {
  assert.equal(cents("0.29"), 29); assert.equal(cents("199"), 19900); assert.equal(money(29), "¥0.29")
  for (const input of ["", "1~99", "NaN", "1e3", "-1", "10-5", "12.123"]) assert.equal(cents(input), null)
  for (const url of ["javascript:alert(1)", "https://jd.com.evil.com", "https://user:password@item.jd.com/1.html", "https://127.0.0.1", "https://item.jd.com:8888/"]) assert.equal(shoppingUrl(url), "")
  assert.equal(shoppingUrl("//uland.taobao.com/coupon/edetail?e=a"), "https://uland.taobao.com/coupon/edetail?e=a")
  const safe = shoppingOffer({ ...offer(), title: "耳机\x1b[31m\u202e", cookie: "private", appSecret: "secret" })
  assert.doesNotMatch(JSON.stringify(safe), /private|secret|\u001b|\u202e/)
})

test("慢慢买保留返现、淘金币、会员条件，不从爆料价再次扣减；去重并拒绝验证页", () => {
  const results = parseManmanbuy(card("123") + card("123") + card("124", "124.7元+14.64元淘金币（88VIP，返现后119.7元）", "天猫旗舰店"))
  assert.equal(results.length, 2); assert.equal(results[0].priceCents, 9990); assert.equal(results[0].couponMentioned, true)
  assert.equal(results[0].coupons.length, 0); assert.equal(results[1].priceCents, 12470); assert.equal(results[1].platform, "tmall")
  assert.match(results[1].conditions, /14.64元淘金币.*88VIP.*119.7/)
  assert.equal(parseManmanbuy(card("125", "10-99元"))[0].priceCents, null)
  assert.throws(() => parseManmanbuy('<title>访问验证</title><div id="captcha-element"></div>'), /验证/)
  assert.throws(() => parseManmanbuy(card("123"), { url: "https://alival.manmanbuy.com/" }), /验证/)
  assert.throws(() => parseManmanbuy("<main>页面已经改版</main>"), /未解析/)
  assert.deepEqual(parseManmanbuy("<main>暂无相关结果</main>"), [])
})

test("联盟预估价不二次减券，过期券和恶意链接不提供领取入口", () => {
  const [jd] = parseJD([{ skuId: 123, skuName: "耳机", priceInfo: { price: 99.9, lowestCouponPrice: 79.9 }, couponInfo: { couponList: [{ quota: 80, discount: 20, link: "https://coupon.m.jd.com/coupons/1", useEndTime: 1 }] } }])
  assert.equal(jd.priceCents, 7990); assert.equal(jd.coupons[0].amountCents, 2000); assert.equal(couponAvailable(jd.coupons[0]), false)
  assert.equal(parseJD([{ skuId: 124, skuName: "耳机", priceInfo: { price: 99.9, lowestCouponPrice: 0 } }])[0].priceCents, 9990)
  assert.deepEqual(parseJD([{ skuId: "../", skuName: "bad" }]), [])
  const [tb] = parseTaobao([{ item_id: "xyz", item_basic_info: { title: "耳机", user_type: 1, real_post_fee: "0.00" }, publish_info: { click_url: "https://s.click.taobao.com/abc" }, price_promotion_info: { zk_final_price: "99.90", final_promotion_price: "79.90", final_promotion_path_list: { final_promotion_path_map_data: [{ promotion_title: "商品券", promotion_desc: "满80减20" }] }, more_promotion_list: { more_promotion_map_data: [{ promotion_title: "商品券", promotion_url: "javascript:alert(1)" }] } } }])
  assert.equal(tb.priceCents, 7990); assert.equal(tb.shippingCents, 0); assert.equal(tb.platform, "tmall"); assert.match(tb.conditions, /满80减20/)
  assert.equal(tb.coupons[0].url, "")
})

test("联盟请求使用 HTTPS POST，固定官方接口，响应错误不会回显请求或凭据", async () => {
  const calls = [], providers = createShoppingProviders({ now: () => new Date("2026-10-26T00:01:02Z"), http: async (url, input) => {
    calls.push({ url, input })
    return { text: JSON.stringify(url.includes("jd.com") ? { jd_union_open_goods_query_responce: { queryResult: JSON.stringify({ code: 200, data: [{ skuId: 123, skuName: "耳机", priceInfo: { price: 10 } }] }) } } : { tbk_dg_material_optional_upgrade_response: { result_list: { map_data: [] } } }) }
  } })
  assert.equal((await providers.search("jd", "耳机", { credentials: { appKey: "key", appSecret: "private-secret" }, onlyCoupons: true }))[0].priceCents, 1000)
  const request = new URLSearchParams(calls[0].input.body)
  assert.equal(calls[0].url, "https://api.jd.com/routerjson"); assert.equal(calls[0].input.method, "POST"); assert.equal(calls[0].input.redirect, "manual")
  assert.equal(request.get("timestamp"), "2026-10-26 08:01:02"); assert.match(request.get("sign"), /^[A-F0-9]{32}$/)
  assert.equal(JSON.parse(request.get("param_json")).goodsReqDTO.isCoupon, 1); assert.doesNotMatch(calls[0].input.body, /private-secret/)
  await providers.search("taobao", "耳机", { credentials: { appKey: "key", appSecret: "private-secret", adzoneId: "1234" }, tmallOnly: true })
  assert.equal(new URLSearchParams(calls[1].input.body).get("is_tmall"), "true")
  const rejected = createShoppingProviders({ http: async () => ({ text: JSON.stringify({ error_response: { msg: "private-secret app_key" } }) }) })
  await assert.rejects(rejected.search("jd", "耳机", { credentials: { appKey: "key", appSecret: "secret" } }), (error) => /拒绝/.test(error.message) && !error.message.includes("private-secret"))
})

test("应用凭据、收藏逐项加密，删除不影响其他来源或其他资料", async () => fixture(async (library) => {
  const settings = new ShoppingSettings(library)
  await settings.saveCredentials("jd", { appKey: "jd-key", appSecret: "private-jd" })
  await settings.saveCredentials("taobao", { appKey: "tb-key", appSecret: "private-tb", adzoneId: "123" })
  await Promise.all([settings.saveFavorite(offer("1")), settings.saveFavorite(offer("2"))])
  assert.equal((await new ShoppingSettings(library).favorites()).length, 2)
  for (const file of await readdir(settings.directory)) {
    const raw = await readFile(join(settings.directory, file)); assert.equal(raw.subarray(0, 5).toString(), "MOYU1"); assert.equal(raw.includes(Buffer.from("private-")), false)
  }
  assert.deepEqual(await settings.status("jd"), { source: "jd", configured: true })
  await settings.removeCredentials("jd"); assert.equal((await settings.status("taobao")).configured, true)
  await settings.removeFavorite(offer("1")); assert.equal((await settings.favorites()).length, 1)
  await assert.rejects(settings.saveCredentials("jd", '{"appSecret":"private-secret"'), (error) => !error.message.includes("private-secret"))
}))

test("默认只查询公开和已配置来源；来源失败、预算及平台筛选分别保留", async () => fixture(async (library) => {
  const calls = [], service = new ShoppingService(library, { providers: { async search(source) { calls.push(source); if (source === "taobao") throw new Error("接口不可用"); return [offer("1", source, 9000), offer("2", source, 20000), { ...offer("3", source, 1000), platform: "tmall" }] } } })
  assert.equal((await service.search("耳机")).offers.length, 3); assert.deepEqual(calls, ["manmanbuy"])
  await service.settings.saveCredentials("taobao", { appKey: "key", appSecret: "secret", adzoneId: "123" })
  const result = await service.search("耳机", { platform: "jd", maxPriceCents: 10000 })
  assert.deepEqual(result.offers.map((item) => item.priceCents), [9000]); assert.deepEqual(result.errors, [{ source: "taobao", message: "接口不可用" }])
  const abort = new AbortController(); abort.abort(); await assert.rejects(service.search("耳机", { signal: abort.signal }), /abort/i)
}))

test("购物任务正确路由并注入购物规则，不继承小说采集工具", () => {
  for (const query of ["购物 耳机优惠", "查券：咖啡", "京东哪家便宜", "淘宝领券", "慢慢买比价"]) assert.equal(collectionKind(query), "shopping")
  assert.equal(collectionKind("小说目录"), "novel"); assert.equal(collectionKind("视频 搜索淘宝广告"), "video")
  assert.equal(collectionPrompt("购物 耳机"), "购物比价：购物 耳机")
  const context = { system: [], messages: [{ role: "user", metadata: { origin: "moyu", query: "购物 耳机" }, content: [] }], tools: { webfetch: {}, websearch: {} } }
  injectCollectionInstructions(context)
  assert.match(context.system[0].text, /moyu_shopping_search/); assert.doesNotMatch(context.system[0].text, /moyu_import/)
  assert.deepEqual(context.tools, {})
})

test("/moyu 精确模块名只在本地导航，无需模型；带搜索要求不误作导航", async () => {
  const visited = [], host = { ui: { model: { current() { throw new Error("不应读取模型") } } } }
  for (const [query, mode] of [["/moyu 购物", "shopping"], ["购物", "shopping"], ["/moyu 比价", "shopping"], ["/moyu 小说", "novel"], ["/moyu 视频", "video"], ["/moyu 音乐", "music"]]) {
    assert.equal(moyuNavigation(query), mode)
    assert.deepEqual(await dispatchMoyu(host, query, { navigate: (value) => { visited.push(value) } }), { kind: "navigation", mode })
  }
  for (const query of ["购物 搜索耳机", "小说 采集20章", "登录qq音乐", "/moyu", "购物链接小说", "constructor", "__proto__"]) assert.equal(moyuNavigation(query), undefined)
  assert.equal(visited.length, 6)
  await assert.rejects(dispatchMoyu(host, "/moyu 购物"), /尚未准备好/)
})
