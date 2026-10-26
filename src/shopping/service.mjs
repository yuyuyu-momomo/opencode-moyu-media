import { ShoppingSettings } from "./settings.mjs"
import { createShoppingProviders } from "./providers.mjs"
import { SHOPPING_SOURCES, shoppingSource, shoppingOffer, offerKey, couponAvailable } from "./contracts.mjs"
import { openShoppingLogin } from "./browser.mjs"
import { shoppingAccount, accountAuthorized } from "./accounts.mjs"
import { setTimeout as sleep } from "node:timers/promises"

export class ShoppingService {
  constructor(library, { providers = createShoppingProviders(), loginWindow = openShoppingLogin } = {}) { this.settings = new ShoppingSettings(library); this.providers = providers; this.loginWindow = loginWindow }
  /** @param {string} platform @param {{signal?: AbortSignal, onStatus?: (status: string) => void, timeoutMs?: number, intervalMs?: number}} options */
  async login(platform, { signal, onStatus = () => {}, timeoutMs = 180000, intervalMs = 2000 } = {}) {
    shoppingAccount(platform)
    const expectedVersion = await this.settings.accountVersion(platform)
    signal?.throwIfAborted(); onStatus("opening")
    let session
    try {
      session = await this.loginWindow(platform, { signal })
      const until = Date.now() + Math.min(300000, Math.max(100, timeoutMs))
      onStatus("waiting")
      while (Date.now() < until) {
        signal?.throwIfAborted()
        const cookies = await session.cookies()
        signal?.throwIfAborted()
        if (accountAuthorized(platform, cookies)) {
          onStatus("saving")
          return await this.settings.saveAccount(platform, cookies, { expectedVersion })
        }
        await sleep(Math.max(10, intervalMs), undefined, { signal })
      }
      throw new Error("等待扫码超时，请重新打开官方登录窗口")
    } finally { await session?.close() }
  }
  async sources() {
    return Promise.all(SHOPPING_SOURCES.map(async (source) => ({ ...source, ...await this.settings.status(source.id), capabilities: ["search", "offers", "favorites"], login: "isolated-platform-window" })))
  }
  /** @param {string} query @param {{source?: string, platform?: string, onlyCoupons?: boolean, maxPriceCents?: number|null, limit?: number, page?: number, signal?: AbortSignal}} options */
  async search(query, { source = "all", platform = "all", onlyCoupons = false, maxPriceCents = null, limit = 10, page = 1, signal } = {}) {
    if (typeof query !== "string" || !query.trim() || query.length > 200) throw new Error("请输入 1–200 字的商品关键词、品牌型号与规格")
    if (!["all", "jd", "taobao", "tmall"].includes(platform)) throw new Error("不支持的平台筛选")
    if (!Number.isInteger(limit) || limit < 1 || limit > 20 || !Number.isInteger(page) || page < 1 || page > 100) throw new Error("每次查询 1–20 条，页码 1–100")
    if (maxPriceCents !== null && (!Number.isSafeInteger(maxPriceCents) || maxPriceCents < 0)) throw new Error("预算格式不正确")
    const states = await this.sources(), selected = source === "all" ? states.filter((s) => !s.credential || s.configured) : [states.find((s) => s.id === shoppingSource(source).id)]
    signal?.throwIfAborted()
    const completed = await Promise.allSettled(selected.map(async (item) => {
      const credentials = item.credential ? await this.settings.credentials(item.id) : null
      const offers = await this.providers.search(item.id, query.trim(), { credentials, signal, page, limit: 20, onlyCoupons, tmallOnly: platform === "tmall" })
      return offers.map(shoppingOffer)
    }))
    signal?.throwIfAborted()
    const offers = [], errors = [], keys = new Set()
    completed.forEach((result, index) => {
      if (result.status === "rejected") { errors.push({ source: selected[index].id, message: result.reason instanceof Error ? result.reason.message : "来源查询失败" }); return }
      for (const offer of result.value) {
        const matchPlatform = platform === "all" || offer.platform === platform || platform === "taobao" && offer.platform === "tmall"
        if (!matchPlatform || onlyCoupons && !offer.coupons.some((coupon) => couponAvailable(coupon)) && !offer.couponMentioned) continue
        if (maxPriceCents !== null && (offer.priceCents === null || offer.priceCents > maxPriceCents)) continue
        const key = offerKey(offer)
        if (!keys.has(key)) { offers.push(offer); keys.add(key) }
      }
    })
    offers.sort((a, b) => (a.priceCents ?? Infinity) - (b.priceCents ?? Infinity))
    return { query: query.trim(), page, offers: offers.slice(0, limit), matched: offers.length, errors,
      skipped: source === "all" ? states.filter((s) => s.credential && !s.configured).map((s) => ({ source: s.id, reason: "未配置联盟应用凭据" })) : [],
      notice: "按本次查到的报价排序；商品规格可能不同，爆料及预估价需核对优惠条件。不是全网最低价或结算价保证。" }
  }
}
