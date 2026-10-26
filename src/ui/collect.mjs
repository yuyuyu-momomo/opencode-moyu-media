import { collectionKind } from "../domain/collection-task.mjs"

/** Slash completion may pass either the full input or only its arguments. */
export function collectionQuery(input) {
  return typeof input === "string" ? input.trim().replace(/^\/?moyu(?:\s+|$)/iu, "").trim() : ""
}

/** Exact section names navigate locally; longer requests still use the current model. */
export function moyuNavigation(input) {
  const query = collectionQuery(input).toLowerCase()
  const sections = { "小说": "novel", "阅读": "novel", novel: "novel", "视频": "video", video: "video", "音乐": "music", music: "music", "购物": "shopping", "比价": "shopping", shopping: "shopping", shop: "shopping" }
  return Object.hasOwn(sections, query) ? sections[query] : undefined
}
export function shoppingLoginRequest(input) {
  const query = collectionQuery(input).replace(/\s+/gu, "").replace(/[。！!]+$/u, "")
  const name = "(京东|jd|淘宝|天猫|tb|taobao|tmall|拼多多|pdd|pinduoduo)"
  const match = new RegExp(`^(?:请)?(?:帮我)?(?:扫码)?登录${name}(?:账号)?$`, "iu").exec(query) || new RegExp(`^${name}(?:扫码)?登录$`, "iu").exec(query)
  if (!match) return
  return /京东|^jd$/i.test(match[1]) ? "jd" : /拼多多|pdd|pinduoduo/i.test(match[1]) ? "pdd" : "taobao"
}

/** Account commands stay local and do not require a selected language model. */
export function musicLoginRequest(input) {
  const query = collectionQuery(input).replace(/\s+/gu, "").replace(/[。！!]+$/u, "")
  const platform = "(qq(?:音乐|music)?|网易云(?:音乐)?|酷狗(?:音乐)?|netease|kugou)"
  const match = new RegExp(`^(?:请)?(?:帮我)?(?:扫码)?登录${platform}(?:账号)?$`, "iu").exec(query)
    || new RegExp(`^${platform}(?:扫码)?登录$`, "iu").exec(query)
    || new RegExp(`^(?:login|signin)${platform}$`, "iu").exec(query)
  if (!match) return
  return /^(?:qq)/i.test(match[1]) ? "qq" : /网易|netease/i.test(match[1]) ? "netease" : "kugou"
}

/** @param {any} host @param {string} input @param {{login?: (platform: string) => void | Promise<void>, shoppingLogin?: (platform: string) => void | Promise<void>, navigate?: (mode: string) => void | Promise<void>}} handlers */
export async function dispatchMoyu(host, input, { login, shoppingLogin, navigate } = {}) {
  const mode = moyuNavigation(input)
  if (mode) {
    if (!navigate) throw new Error("墨鱼功能入口尚未准备好，请稍后重试")
    await navigate(mode)
    return { kind: "navigation", mode }
  }
  const shopping = shoppingLoginRequest(input)
  if (shopping) {
    if (!shoppingLogin) throw new Error("购物登录入口尚未准备好，请稍后重试或打开 /moyu 购物 的账号菜单")
    await shoppingLogin(shopping)
    return { kind: "shopping-login", platform: shopping }
  }
  const platform = musicLoginRequest(input)
  if (platform) {
    if (!login) throw new Error("音乐登录入口尚未准备好，请稍后重试或打开 /music 的账号菜单")
    await login(platform)
    return { kind: "music-login", platform }
  }
  return { kind: "collection", sessionID: await requestCollection(host, input) }
}

export function collectionPrompt(query) {
  return `${collectionKind(query) === "shopping" ? "购物比价" : collectionKind(query) === "music" ? "音乐任务" : collectionKind(query) === "video" ? "视频任务" : "采集小说"}：${query.replace(/\s+/gu, " ")}`
}

/** Submit through OpenCode itself; credentials and generation stay with the host. */
export async function requestCollection(host, input) {
  const query = collectionQuery(input)
  if (!query || query.length > 2000) throw new Error("请输入 1–2000 字的小说、视频、音乐或购物比价要求")
  const selected = host.ui.model.current()
  if (!selected) throw new Error("请先在 OpenCode 中选择可用模型")
  const model = { providerID: selected.providerID, id: selected.modelID, ...(selected.variant ? { variant: selected.variant } : {}) }
  const route = host.ui.router.current()
  // Keep the task in an ordinary session: native parentID would turn it into a
  // subagent view whose composer is hidden. Link the source through metadata.
  const session = await host.client.session.create({ title: `Moyu · ${query.slice(0, 50)}`, location: host.location ?? host.data.location.default(), model, metadata: { origin: "moyu", ...(route.type === "session" ? { sourceSessionID: route.sessionID } : {}) } })
  const sessionID = session.id
  host.ui.router.navigate({ type: "session", sessionID })
  await host.client.session.prompt({ sessionID, text: collectionPrompt(query), delivery: "queue", metadata: { origin: "moyu", query, kind: collectionKind(query) } })
  return sessionID
}
