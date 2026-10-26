import { createHash } from "node:crypto"
import { load } from "cheerio/slim"
import { createHttpClient } from "../core/http.mjs"
import { shoppingOffer, shoppingUrl, cents, cleanText } from "./contracts.mjs"

export const shoppingTimestamp = (date = new Date()) => new Date(date.getTime() + 8 * 3600000).toISOString().slice(0, 19).replace("T", " ")
export function signShopping(params, secret) {
  const text = Object.keys(params).filter((key) => key !== "sign").sort().map((key) => key + params[key]).join("")
  return createHash("md5").update(secret + text + secret, "utf8").digest("hex").toUpperCase()
}
const isoTime = (value) => {
  const number = Number(value)
  if (!number || !Number.isFinite(number)) return ""
  const date = new Date(number < 1e11 ? number * 1000 : number)
  return Number.isNaN(date.getTime()) ? "" : date.toISOString()
}

export function parseManmanbuy(html, { url = "https://s.manmanbuy.com/", now = new Date().toISOString() } = {}) {
  const $ = load(html)
  if (new URL(url).hostname !== "s.manmanbuy.com" || /验证码|访问验证|安全验证/.test($("title").text()) || $("#captcha-element, [id*=captcha]").length) throw new Error("慢慢买需要人机验证，已停止该来源")
  $("script, style, noscript").remove()
  const offers = [], seen = new Set()
  $('[class*="DiscountItemPC_discountItem__"]').each((_, element) => {
    const card = $(element), titleLink = card.find('[class*="itemTitle__"] a').first()
    const sourceUrl = shoppingUrl(titleLink.attr("href"), url), id = /discuxiao_(\d+)\.aspx/.exec(sourceUrl)?.[1]
    if (!id || seen.has(id)) return
    const conditions = cleanText(card.find('[class*="itemSubTitle__"]').text(), 500)
    const price = /^(\d+(?:\.\d{1,2})?)\s*元(?:[^\d]|$)/u.exec(conditions)?.[1]
    const title = titleLink.text(), mall = cleanText(card.find('[class*="itemMall__"]').text())
    const platform = /京东/.test(mall) ? "jd" : /天猫/.test(mall) ? "tmall" : /淘宝/.test(mall) ? "taobao" : mall
    offers.push(shoppingOffer({ source: "manmanbuy", id, title, sourceUrl, priceCents: cents(price), priceLabel: "爆料价", platform, shop: mall,
      conditions, couponMentioned: /券/.test(title + conditions), publishedAt: card.find('[class*="itemTime__"]').text(), observedAt: now }))
    seen.add(id)
  })
  if (!offers.length && !/暂无|没有找到|无相关|未找到/.test($.root().text())) throw new Error("慢慢买未解析出商品，可能页面结构已变化；请打开来源页核对")
  return offers
}

export function parseJD(data, now = new Date().toISOString()) {
  return (Array.isArray(data) ? data : []).slice(0, 50).flatMap((item) => {
    try {
      if (!/^\d{1,25}$/.test(String(item.skuId))) return []
      const coupons = (item.couponInfo?.couponList || []).slice(0, 8).map((coupon) => ({ title: `满${coupon.quota ?? "?"}减${coupon.discount ?? "?"}`,
        amountCents: cents(coupon.discount), thresholdCents: cents(coupon.quota), url: coupon.link, startsAt: isoTime(coupon.useStartTime), endsAt: isoTime(coupon.useEndTime) }))
      const estimate = cents(item.priceInfo?.lowestCouponPrice), listed = cents(item.priceInfo?.price)
      const final = estimate !== null && estimate > 0 ? estimate : null
      return [shoppingOffer({ source: "jd", id: item.skuId, title: item.skuName, sourceUrl: `https://item.jd.com/${item.skuId}.html`,
        platform: "jd", shop: item.shopInfo?.shopName, priceCents: final ?? listed, priceLabel: final !== null ? "预估券后价" : "销售价",
        conditions: "联盟报价；核对规格、配送、会员与优惠券使用条件，以平台结算为准", observedAt: now, coupons })]
    } catch { return [] }
  })
}
export function parseTaobao(data, now = new Date().toISOString()) {
  return (Array.isArray(data) ? data : []).slice(0, 50).flatMap((item) => {
    try {
      const basic = item.item_basic_info || {}, price = item.price_promotion_info || {}, publish = item.publish_info || {}
      const promotion = price.final_promotion_path_list?.final_promotion_path_map_data || []
      const coupons = (price.more_promotion_list?.more_promotion_map_data || []).filter((p) => /券/.test(p.promotion_title || "")).map((p) => ({ title: cleanText(p.promotion_title + " " + p.promotion_desc), url: p.promotion_url, startsAt: isoTime(p.promotion_start_time), endsAt: isoTime(p.promotion_end_time) }))
      const estimate = cents(price.final_promotion_price)
      const final = estimate !== null && estimate > 0 ? estimate : null
      return [shoppingOffer({ source: "taobao", id: item.item_id, title: basic.title, sourceUrl: publish.click_url || publish.coupon_share_url || basic.item_url,
        platform: Number(basic.user_type) === 1 ? "tmall" : "taobao", shop: basic.shop_title,
        priceCents: final ?? cents(price.zk_final_price), priceLabel: final !== null ? "预估促销价" : "销售价", shippingCents: cents(basic.real_post_fee),
        conditions: ["核对规格、运费和账号权益，以平台结算为准", ...promotion.map((p) => cleanText(p.promotion_title + " " + p.promotion_desc))].join("；"),
        couponMentioned: promotion.some((p) => /券/.test(p.promotion_title || "")), coupons, observedAt: now })]
    } catch { return [] }
  })
}

export function createShoppingProviders({ http = createHttpClient({ timeoutMs: 15000, maxBytes: 2 * 1024 * 1024 }), now = () => new Date() } = {}) {
  async function api(url, params, signal) {
    const response = await http(url, { method: "POST", body: new URLSearchParams(params).toString(), headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" }, signal, redirect: "manual" })
    let data
    try { data = JSON.parse(response.text) } catch { throw new Error("购物接口没有返回有效 JSON") }
    // Do not echo remote errors: gateways can reflect signed parameters or secrets.
    if (data.error_response) throw new Error("平台接口拒绝请求，请在来源设置检查应用凭据与接口权限")
    return data
  }
  return {
    async search(source, query, { credentials, signal, page = 1, limit = 20, onlyCoupons = false, tmallOnly = false } = {}) {
      if (source === "manmanbuy") {
        const url = new URL("https://s.manmanbuy.com/pc/search/result")
        url.search = new URLSearchParams({ c: "discount", keyword: query, pageId: String(page) }).toString()
        const response = await http(url.href, { signal, redirect: "manual" })
        if (response.redirect) throw new Error("慢慢买要求跳转或访问验证，已停止该来源；可打开官方来源页查看")
        return parseManmanbuy(response.text, { url: response.url, now: now().toISOString() })
      }
      if (!credentials) throw new Error("请在购物「来源」中配置联盟应用凭据；买家网页登录不能替代接口授权")
      const params = { app_key: credentials.appKey, format: "json", sign_method: "md5", timestamp: shoppingTimestamp(now()) }
      if (source === "jd") {
        Object.assign(params, { method: "jd.union.open.goods.query", v: "1.0", param_json: JSON.stringify({ goodsReqDTO: { keyword: query, pageIndex: page, pageSize: limit, ...(onlyCoupons ? { isCoupon: 1 } : {}) } }) })
        params.sign = signShopping(params, credentials.appSecret)
        const data = await api("https://api.jd.com/routerjson", params, signal)
        let result
        try { const outer = data.jd_union_open_goods_query_responce || data.jd_union_open_goods_query_response; result = typeof outer?.queryResult === "string" ? JSON.parse(outer.queryResult) : outer?.queryResult } catch {}
        if (!result || Number(result.code) !== 200) throw new Error("京东联盟查询失败，请检查商品查询接口权限与额度")
        return parseJD(result.data, now().toISOString())
      }
      if (source !== "taobao") throw new Error("不支持的购物来源")
      Object.assign(params, { method: "taobao.tbk.dg.material.optional.upgrade", v: "2.0", q: query, adzone_id: credentials.adzoneId, page_no: String(page), page_size: String(limit), has_coupon: String(onlyCoupons), is_tmall: String(tmallOnly) })
      params.sign = signShopping(params, credentials.appSecret)
      const data = await api("https://eco.taobao.com/router/rest", params, signal)
      const response = data.tbk_dg_material_optional_upgrade_response
      if (!response) throw new Error("淘宝联盟查询失败，请检查应用凭据、推广位和接口权限")
      return parseTaobao(response.result_list?.map_data || [], now().toISOString())
    },
  }
}
