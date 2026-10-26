/** @jsxImportSource @opentui/solid */
import { createSignal, For, Show } from "solid-js"
import type { TuiPlugin } from "@opencode-ai/plugin/tui"
import type { JSX } from "@opentui/solid"
import stringWidth from "string-width"
import { LibraryStore } from "../library/store.mjs"
import { ShoppingService } from "../shopping/service.mjs"
import { SHOPPING_SOURCES, shoppingOffer, shoppingSource, shoppingUrl, offerKey, money, cents, couponAvailable } from "../shopping/contracts.mjs"
import { openMusicPage as openPage } from "../music/login.mjs"
import { SHOPPING_ACCOUNTS, shoppingAccount } from "../shopping/accounts.mjs"

type API = Parameters<TuiPlugin>[0]
type Offer = ReturnType<typeof shoppingOffer>
type Button = (props: { label: string; action: () => unknown; muted?: boolean }) => JSX.Element

export function createShoppingReader(api: API, library: LibraryStore, settings: {
  rows: () => number; active: () => boolean; canDialog: () => boolean; dialog: (render: () => JSX.Element) => void; close: () => void
}) {
  const service = new ShoppingService(library)
  const [results, setResults] = createSignal<Offer[]>([])
  const [source, setSource] = createSignal("all")
  const [platform, setPlatform] = createSignal("all")
  const [onlyCoupons, setOnlyCoupons] = createSignal(false)
  const [maxPrice, setMaxPrice] = createSignal<number | null>(null)
  const [busy, setBusy] = createSignal(false)
  const [notice, setNotice] = createSignal("搜索商品，查看好价与优惠条件")
  const [lastQuery, setLastQuery] = createSignal("")
  const [page, setPage] = createSignal(1)
  const [loginStatus, setLoginStatus] = createSignal("")
  const [loginBusy, setLoginBusy] = createSignal(false)
  let pending: AbortController | undefined, loginAbort: AbortController | undefined, disposed = false
  const loginTasks = new Set<Promise<void>>()
  function toast(message: string, error = false) { if (!disposed && !api.lifecycle.signal.aborted) api.ui.toast({ title: "墨鱼购物", message, variant: error ? "error" : "info" }) }
  function fail(error: unknown) { toast(error instanceof Error ? error.message : "购物操作失败", true) }
  function cancelLogin() { loginAbort?.abort(new Error("扫码登录已取消")); loginAbort = undefined; setLoginBusy(false); setLoginStatus("") }
  function startLogin(id: string) {
    cancelLogin()
    const account = shoppingAccount(id), abort = loginAbort = new AbortController()
    setLoginBusy(true); setLoginStatus(`${account.name}：正在打开独立登录窗口…`)
    const task = (async () => {
      try {
        await service.login(id, { signal: abort.signal, onStatus(status) {
          if (abort.signal.aborted || disposed) return
          setLoginStatus(`${account.name}：${status === "opening" ? "正在打开官方登录窗口…" : status === "saving" ? "手机已确认，正在加密保存…" : `请在官方窗口选择扫码，用${account.scanner}扫描并确认`}`)
        } })
        if (!abort.signal.aborted && !disposed) { setLoginStatus(`${account.name}登录态已加密保存`); toast(`${account.name}登录态已加密保存`) }
      } catch (error) {
        if (!abort.signal.aborted && !disposed) { setLoginStatus(error instanceof Error ? error.message : "扫码登录失败"); fail(error) }
      } finally { if (loginAbort === abort) { loginAbort = undefined; setLoginBusy(false) } }
    })()
    loginTasks.add(task); void task.finally(() => loginTasks.delete(task)).catch(() => {})
  }
  async function accountMenu(id: string) {
    const account = shoppingAccount(id), state = await service.settings.account(id)
    if (disposed || api.lifecycle.signal.aborted) return
    settings.dialog(() => <api.ui.DialogSelect title={`${account.name} · ${state.configured ? "已扫码保存" : "未保存登录态"}`} placeholder="使用独立的临时 Chrome / Edge 窗口，手机确认后本地加密保存"
      options={[
        { title: "扫码登录", value: "qr", description: `打开官方页面，用${account.scanner}扫码；需要验证时在该页面完成` },
        ...(loginBusy() ? [{ title: "取消正在等待的扫码", value: "cancel", description: "关闭本次独立登录窗口，停止接收结果" }] : []),
        { title: "只打开官方登录页", value: "page", description: "使用默认浏览器；此方式不把登录态保存到插件" },
        ...(state.configured ? [{ title: "退出本地账号", value: "logout", description: "删除该平台保存的登录态，保留其他账号和收藏" }] : []),
      ]} onSelect={(item) => {
        settings.close()
        if (item.value === "qr") return startLogin(id)
        if (item.value === "cancel") return cancelLogin()
        if (item.value === "page") return void open(account.loginUrl).catch(fail)
        settings.dialog(() => <api.ui.DialogConfirm title={`退出${account.name}本地账号`} message="删除插件里保存的该平台登录态？其他平台、收藏和联盟应用凭据保留。" onCancel={settings.close}
          onConfirm={() => { settings.close(); cancelLogin(); void service.settings.logout(id).then(() => toast("已删除本地登录态")).catch(fail) }} />)
      }} />)
  }
  async function accounts() {
    try {
      const states = await Promise.all(SHOPPING_ACCOUNTS.map((account) => service.settings.account(account.id)))
      if (disposed || api.lifecycle.signal.aborted) return
      settings.dialog(() => <api.ui.DialogSelect title="购物账号 · 扫码登录" placeholder="京东、淘宝 / 天猫、拼多多分别保存；不需要联盟 API Key"
        options={SHOPPING_ACCOUNTS.map((account, i) => ({ title: account.name, value: account.id, description: states[i].configured ? `已扫码保存 · ${states[i].savedAt}` : `未保存 · 支持${account.scanner}扫码` }))}
        onSelect={(item) => { settings.close(); void accountMenu(item.value).catch(fail) }} />)
    } catch (error) { fail(error) }
  }
  async function open(url: string) {
    const target = shoppingUrl(url)
    if (!target) throw new Error("无效的购物平台链接")
    await openPage(target)
  }
  function notes(offer: Offer, saved: boolean) {
    const lines = [`${offer.priceLabel} ${money(offer.priceCents)}`, `运费：${offer.shippingCents === null ? "待确认" : money(offer.shippingCents)}`, `来源：${shoppingSource(offer.source).name}`, `店铺：${offer.shop || offer.platform}`, `发布：${offer.publishedAt || "来源未注明"}`, `查询：${offer.observedAt}`, "优惠条件：", offer.conditions || "来源未注明，请到平台页面核对"]
    const wrapped: string[] = []
    for (const line of lines) {
      let part = ""
      for (const char of line) {
        if (stringWidth(part + char) > 44) { wrapped.push(part); part = "" }
        part += char
      }
      if (part) wrapped.push(part)
    }
    settings.dialog(() => <api.ui.DialogSelect title="完整报价与优惠说明" placeholder="可滚动查看；点击任一行返回商品操作"
      options={wrapped.map((title, i) => ({ title, value: String(i) }))}
      onSelect={() => { settings.close(); detail(offer, saved) }} />)
  }
  function detail(offer: Offer, saved = false) {
    settings.dialog(() => <api.ui.DialogSelect title={offer.title} placeholder={`${offer.priceLabel} ${money(offer.priceCents)} · ${offer.conditions}`}
      options={[
        { title: `${offer.priceLabel} ${money(offer.priceCents)}`, value: "info", description: `${offer.shop || offer.platform} · 运费${offer.shippingCents === null ? "待确认" : money(offer.shippingCents)}` },
        { title: offer.conditions || "优惠条件请到来源页核对", value: "conditions", description: `发布 ${offer.publishedAt || "来源未注明"} · 查询 ${offer.observedAt}` },
        { title: "打开商品 / 好价来源页", value: "source", description: shoppingSource(offer.source).name + " · 在平台页面登录、领券或购买" },
        ...offer.coupons.filter((coupon) => couponAvailable(coupon)).map((coupon, i) => ({ title: `打开优惠券：${coupon.title}`, value: `coupon:${i}`, description: coupon.endsAt ? `到期 ${coupon.endsAt}，领取资格由平台确认` : "优惠资格与叠加条件由平台确认" })),
        { title: saved ? "删除这条收藏" : "收藏此报价", value: saved ? "remove" : "save", description: "仅在本地加密保存，收藏价格不会自动更新" },
        { title: "搜索同款关键词…", value: "search", description: "输入品牌、型号、容量 / 数量，核对相同规格" },
      ]} onSelect={(item) => {
        settings.close()
        if (item.value === "info" || item.value === "conditions") return notes(offer, saved)
        if (item.value === "source") return void open(offer.sourceUrl).catch(fail)
        if (item.value.startsWith("coupon:")) { const coupon = offer.coupons.filter((coupon) => couponAvailable(coupon))[Number(item.value.slice(7))]; if (coupon) void open(coupon.url).catch(fail); return }
        if (item.value === "search") return promptSearch()
        void (item.value === "remove" ? service.settings.removeFavorite(offer) : service.settings.saveFavorite(offer)).then(() => toast(item.value === "remove" ? "已删除收藏" : "报价已加密收藏")).catch(fail)
      }} />)
  }
  function showResults() {
    if (!results().length) return promptSearch()
    settings.dialog(() => <api.ui.DialogSelect title={`购物结果 · 第 ${page()} 页 · ${results().length} 条`} placeholder="按本次报价排序，选择查看优惠条件、领券入口或收藏"
      options={results().map((offer) => ({ title: `${money(offer.priceCents)} · ${offer.title}`, value: offerKey(offer), description: `${offer.priceLabel} · ${offer.shop || offer.platform} · ${offer.conditions}` }))}
      onSelect={(item) => { settings.close(); const offer = results().find((offer) => offerKey(offer) === item.value); if (offer) detail(offer) }} />)
  }
  async function search(query: string, nextPage = 1) {
    pending?.abort(); const controller = pending = new AbortController()
    setBusy(true); setNotice("正在查询好价…"); setResults([])
    try {
      const response = await service.search(query, { source: source(), platform: platform(), onlyCoupons: onlyCoupons(), maxPriceCents: maxPrice(), page: nextPage, limit: 20, signal: controller.signal })
      if (controller.signal.aborted || disposed || api.lifecycle.signal.aborted) return
      setLastQuery(query); setPage(nextPage); setResults(response.offers)
      setNotice(response.errors.length ? response.errors.map((e) => `${shoppingSource(e.source).name}：${e.message}`).join("；") : response.offers.length ? `找到 ${response.offers.length} 条报价；未配置的联盟来源不参与聚合` : "本页没有符合筛选的好价，可换关键词、筛选或下一页")
      if (response.offers.length && settings.active() && settings.canDialog()) showResults()
      else toast(response.offers.length ? "查询完成，点击「结果」查看" : notice(), !response.offers.length && Boolean(response.errors.length))
    } catch (error) { if (!controller.signal.aborted) fail(error) }
    finally { if (pending === controller) { pending = undefined; setBusy(false) } }
  }
  function promptSearch() {
    settings.dialog(() => <api.ui.DialogPrompt title="搜索商品 / 优惠券" placeholder="品牌 + 型号 + 规格，例如：蓝牙耳机，256GB，12瓶装" onCancel={settings.close}
      onConfirm={(input) => { if (!input.trim()) return toast("请输入商品名称", true); settings.close(); void search(input.trim()) }} />)
  }
  async function favorites() {
    try {
      const offers = await service.settings.favorites()
      if (disposed || api.lifecycle.signal.aborted) return
      if (!offers.length) return toast("还没有收藏；在搜索结果中选择商品后收藏")
      settings.dialog(() => <api.ui.DialogSelect title={`购物收藏 · ${offers.length} 条`} placeholder="收藏的是查询时的报价，选择可查看来源或删除"
        options={offers.map((offer) => ({ title: `${money(offer.priceCents)} · ${offer.title}`, value: offerKey(offer), description: `${offer.shop} · ${offer.priceLabel} · 查询 ${offer.observedAt}` }))}
        onSelect={(item) => { settings.close(); const offer = offers.find((offer) => offerKey(offer) === item.value); if (offer) detail(offer, true) }} />)
    } catch (error) { fail(error) }
  }
  function filters() {
    settings.dialog(() => <api.ui.DialogSelect title="购物筛选" options={[
      { title: `来源：${source() === "all" ? "所有可用来源" : shoppingSource(source()).name}`, value: "source" },
      { title: `平台：${({ all: "全部", jd: "京东", taobao: "淘宝 / 天猫", tmall: "仅天猫" } as Record<string, string>)[platform()]}`, value: "platform" },
      { title: `只看有券或提到券的好价：${onlyCoupons() ? "开" : "关"}`, value: "coupon", description: "爆料提到券不代表已核验领取资格" },
      { title: `预算上限：${maxPrice() === null ? "不限" : money(maxPrice())}`, value: "budget", description: "按报价筛选，不含未确认的配送费用" },
    ]} onSelect={(item) => {
      settings.close()
      if (item.value === "coupon") { setOnlyCoupons(!onlyCoupons()); return filters() }
      if (item.value === "budget") return settings.dialog(() => <api.ui.DialogPrompt title="单件预算上限 · 元" placeholder="例如 199.90；输入 0 取消上限" onCancel={settings.close} onConfirm={(input) => {
        const value = cents(input.trim()); if (value === null) return toast("请输入有效金额，最多两位小数", true)
        setMaxPrice(value || null); settings.close(); filters()
      }} />)
      const choices = item.value === "source" ? [{ id: "all", name: "所有可用来源" }, ...SHOPPING_SOURCES] : [{ id: "all", name: "全部平台" }, { id: "jd", name: "京东" }, { id: "taobao", name: "淘宝 / 天猫" }, { id: "tmall", name: "仅天猫" }]
      settings.dialog(() => <api.ui.DialogSelect title={item.value === "source" ? "选择来源" : "选择平台"} options={choices.map((choice) => ({ title: choice.name, value: choice.id }))}
        onSelect={(choice) => { item.value === "source" ? setSource(choice.value) : setPlatform(choice.value); settings.close(); filters() }} />)
    }} />)
  }
  async function sources() {
    try {
      const states = await service.sources()
      if (disposed || api.lifecycle.signal.aborted) return
      settings.dialog(() => <api.ui.DialogSelect title="购物查询来源" placeholder="联盟应用凭据与买家扫码账号分别管理；公开好价无需密钥"
        options={[
          ...states.map((item) => ({ title: `${item.name} · ${!item.credential ? "公开网页" : item.configured ? "应用已配置" : "应用未配置"}`, value: item.id, description: item.credential ? "配置 / 删除联盟应用凭据" : "直接搜索公开折扣爆料；遇到验证时停止" })),
          { title: "购物账号 · 扫码登录…", value: "accounts", description: "管理京东、淘宝 / 天猫、拼多多的本地账号" },
        ]} onSelect={(item) => {
          settings.close()
          if (item.value === "accounts") return void accounts()
          if (item.value === "manmanbuy") { setSource("manmanbuy"); return promptSearch() }
          configure(item.value)
        }} />)
    } catch (error) { fail(error) }
  }
  function configure(id: string) {
    settings.dialog(() => <api.ui.DialogSelect title={`${shoppingSource(id).name} · 应用设置`} options={[
      { title: "填写应用凭据（本地加密）", value: "save", description: "填联盟开发者 AppKey / AppSecret，和买家登录分开" },
      { title: "打开官方开发者平台", value: "docs" },
      { title: "删除已保存的应用凭据", value: "remove" },
    ]} onSelect={(item) => {
      settings.close()
      if (item.value === "docs") return void open(id === "jd" ? "https://union.jd.com/" : "https://pub.alimama.com/").catch(fail)
      if (item.value === "remove") return void service.settings.removeCredentials(id).then(() => toast("已删除该来源的应用凭据")).catch(fail)
      settings.dialog(() => <api.ui.DialogPrompt title={`${shoppingSource(id).name} · 本地加密配置，不回显`} placeholder={id === "jd" ? '{"appKey":"...","appSecret":"..."}' : '{"appKey":"...","appSecret":"...","adzoneId":"推广位ID"}'} onCancel={settings.close}
        onConfirm={(input) => { settings.close(); void service.settings.saveCredentials(id, input).then(() => toast("应用凭据已加密保存；查询时确认接口权限")).catch(fail) }} />)
    }} />)
  }
  function View(props: { Button: Button }) {
    const Button = props.Button, theme = () => api.theme.current
    const textRows = () => settings.rows() < 8 ? 1 : 2
    const count = () => Math.max(0, Math.floor((settings.rows() - 2 - textRows() * 2) / 3))
    return <box flexDirection="column" height={settings.rows()} flexShrink={0}>
      <box height={1} flexShrink={0} flexDirection="row" gap={1}><Button label="[筛选]" action={filters} /><Button label="[来源]" action={sources} /><Button label="[账号]" action={accounts} /></box>
      <text fg={theme().textMuted} height={textRows()}>{loginStatus() || (busy() ? "正在查询，可点击取消" : notice())}</text>
      <For each={results().slice(0, count())}>{(offer) => <box height={3} flexShrink={0}>
        <Button label={`${money(offer.priceCents)} ${offer.title}`} action={() => detail(offer)} />
        <text fg={theme().textMuted} height={1} wrapMode="none">{offer.priceLabel} · {offer.shop || offer.platform}</text>
        <text fg={theme().textMuted} height={1} wrapMode="none">{offer.conditions}</text>
      </box>}</For>
      <box flexGrow={1} />
      <box height={1} flexShrink={0} flexDirection="row" gap={1}>
        <Show when={loginBusy()} fallback={<Show when={busy()} fallback={<Show when={lastQuery()}><Button label="[刷新]" action={() => search(lastQuery(), page())} /><Button label="[下一页]" action={() => search(lastQuery(), page() + 1)} muted={page() >= 100} /></Show>}><Button label="[取消]" action={() => { pending?.abort(); setNotice("已取消查询") }} /></Show>}><Button label="[取消扫码]" action={cancelLogin} /></Show>
      </box>
      <text fg={theme().textMuted} height={textRows()}>报价需核对规格和优惠条件；领券、登录及购买在平台页面完成</text>
    </box>
  }
  return { search: promptSearch, results: showResults, favorites, sources, accounts, login: startLogin, View, async dispose() { disposed = true; pending?.abort(); cancelLogin(); await Promise.allSettled([...loginTasks]) } }
}
