import { createHash } from "node:crypto"

export const SHOPPING_SOURCES = [
  { id: "manmanbuy", name: "慢慢买好价", origin: "https://s.manmanbuy.com", credential: false },
  { id: "jd", name: "京东联盟", origin: "https://api.jd.com", credential: true },
  { id: "taobao", name: "淘宝 / 天猫联盟", origin: "https://eco.taobao.com", credential: true },
]
export function shoppingSource(id) {
  const source = SHOPPING_SOURCES.find((item) => item.id === id)
  if (!source) throw new Error("不支持的购物来源")
  return source
}
export function cleanText(input, max = 300) {
  return String(input ?? "").replace(/<[^>]*>/g, "").replace(/[\x00-\x1f\x7f-\x9f\u202a-\u202e\u2066-\u2069]/g, "").replace(/\s+/gu, " ").trim().slice(0, max)
}
export function cents(input) {
  const text = String(input ?? "").trim()
  if (!/^\d{1,9}(?:\.\d{1,2})?$/.test(text)) return null
  const [whole, fraction = ""] = text.split(".")
  return Number(whole) * 100 + Number(fraction.padEnd(2, "0"))
}
export const money = (value) => Number.isSafeInteger(value) && value >= 0 ? `¥${(value / 100).toFixed(2)}` : "价格待确认"
const domains = ["jd.com", "3.cn", "taobao.com", "tmall.com", "tb.cn", "alimama.com", "manmanbuy.com"]
export function shoppingUrl(input, base) {
  try {
    if (typeof input !== "string" || !input || input.length > 4000) return ""
    const url = new URL(input.startsWith("//") ? "https:" + input : input, base)
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.port) return ""
    if (!domains.some((domain) => url.hostname === domain || url.hostname.endsWith("." + domain))) return ""
    url.protocol = "https:"
    return url.href
  } catch { return "" }
}
export function offerKey(offer) {
  shoppingSource(offer.source)
  return createHash("sha256").update(offer.source + ":" + offer.id).digest("hex").slice(0, 32)
}
/** @typedef {{title: string, amountCents: number|null, thresholdCents: number|null, url: string, startsAt: string, endsAt: string}} ShoppingCoupon */
/** @typedef {{source: string, id: string, title: string, platform: string, shop: string, sourceUrl: string, priceCents: number|null, priceLabel: string, shippingCents: number|null, conditions: string, publishedAt: string, observedAt: string, couponMentioned: boolean, coupons: ShoppingCoupon[]}} ShoppingOffer */
/** Explicit projection keeps credentials, scripts and arbitrary provider fields out of the UI/model.
 * @returns {ShoppingOffer}
 */
export function shoppingOffer(value) {
  shoppingSource(value.source)
  const id = cleanText(value.id, 120), title = cleanText(value.title, 180), sourceUrl = shoppingUrl(value.sourceUrl)
  if (!id || !title || !sourceUrl) throw new Error("商品资料缺少有效来源或标题")
  const amount = (v) => Number.isSafeInteger(v) && v >= 0 && v <= 99999999999 ? v : null
  const coupons = (Array.isArray(value.coupons) ? value.coupons : []).slice(0, 8).map((coupon) => ({
    title: cleanText(coupon.title, 120), amountCents: amount(coupon.amountCents), thresholdCents: amount(coupon.thresholdCents),
    url: shoppingUrl(coupon.url), startsAt: cleanText(coupon.startsAt, 40), endsAt: cleanText(coupon.endsAt, 40),
  }))
  return { source: value.source, id, title, platform: cleanText(value.platform, 24), shop: cleanText(value.shop, 80), sourceUrl,
    priceCents: amount(value.priceCents), priceLabel: cleanText(value.priceLabel, 30), shippingCents: amount(value.shippingCents),
    conditions: cleanText(value.conditions, 500), publishedAt: cleanText(value.publishedAt, 40), observedAt: cleanText(value.observedAt, 40),
    couponMentioned: value.couponMentioned === true, coupons }
}
export function couponAvailable(coupon, now = Date.now()) {
  const start = Date.parse(coupon.startsAt), end = Date.parse(coupon.endsAt)
  return Boolean(coupon.url) && (!Number.isFinite(start) || start <= now) && (!Number.isFinite(end) || end >= now)
}
