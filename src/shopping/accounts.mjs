export const SHOPPING_ACCOUNTS = [
  { id: "jd", name: "京东", loginUrl: "https://passport.jd.com/new/login.aspx", home: "https://www.jd.com/", domains: ["jd.com"], scanner: "京东 App" },
  { id: "taobao", name: "淘宝 / 天猫", loginUrl: "https://login.taobao.com/member/login.jhtml", home: "https://www.taobao.com/", domains: ["taobao.com", "tmall.com"], scanner: "手机淘宝 / 天猫" },
  { id: "pdd", name: "拼多多", loginUrl: "https://mobile.yangkeduo.com/login.html", home: "https://mobile.yangkeduo.com/", domains: ["yangkeduo.com", "pinduoduo.com"], scanner: "拼多多 App" },
]
export function shoppingAccount(platform) {
  const account = SHOPPING_ACCOUNTS.find((item) => item.id === platform)
  if (!account) throw new Error("不支持的购物账号平台")
  return account
}
/** Project only platform cookies from our new, isolated browser profile. */
export function accountCookies(platform, input, now = Date.now()) {
  const account = shoppingAccount(platform)
  if (!Array.isArray(input) || input.length > 500) throw new Error("登录信息格式异常")
  const cookies = []
  let bytes = 0
  for (const value of input) {
    const domain = String(value?.domain || "").toLowerCase().replace(/^\./, "")
    if (!account.domains.some((allowed) => domain === allowed || domain.endsWith("." + allowed))) continue
    if (typeof value.name !== "string" || !/^[!#$%&'*+.^_`|~\w-]{1,100}$/.test(value.name) || typeof value.value !== "string" || /[\x00-\x20\x7f;]/.test(value.value) || !value.value || /^(deleted|expired|undefined|null)$/i.test(value.value)) continue
    const expires = Number(value.expires)
    if (Number.isFinite(expires) && expires >= 0 && expires * 1000 <= now) continue
    const path = typeof value.path === "string" && value.path.startsWith("/") && !/[\x00-\x1f\x7f]/.test(value.path) ? value.path.slice(0, 300) : "/"
    bytes += value.name.length + value.value.length
    if (bytes > 65536 || cookies.length >= 100) throw new Error("登录信息超过大小限制")
    cookies.push({ name: value.name, value: value.value, domain: String(value.domain).toLowerCase(), path, expires: Number.isFinite(expires) ? expires : -1, secure: value.secure === true, httpOnly: value.httpOnly === true, sameSite: ["Strict", "Lax", "None"].includes(value.sameSite) ? value.sameSite : "Lax" })
  }
  return cookies
}
/** Cookie markers from a successful platform login, not anonymous page cookies. */
export function accountAuthorized(platform, input) {
  const cookies = accountCookies(platform, input), values = Object.fromEntries(cookies.map((cookie) => [cookie.name, cookie.value]))
  if (platform === "jd") return Boolean(values.thor && (values.pin || values.pinId) || values.pt_key && values.pt_pin)
  if (platform === "taobao") return Boolean(values.cookie2 && /^\d+$/.test(values.unb || "") && values.unb !== "0")
  return Boolean((values.PASS_ID || values.PDDAccessToken) && /^\d+$/.test(values.pdd_user_id || "") && values.pdd_user_id !== "0")
}
