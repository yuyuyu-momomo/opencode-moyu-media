import { load } from "cheerio/slim"
import { cleanText } from "../library/text-reader.mjs"
import { httpUrl } from "../core/http.mjs"
import { setTimeout as delay } from "node:timers/promises"

const MAX_CHAPTERS = 20000
const MAX_CATALOG_PAGES = 50

const chapterLink = /第[零〇一二三四五六七八九十百千万两\d]+[章节回卷部篇集]|chapter\s*\d+/iu
function titleOf($) {
  return cleanText($("meta[property='og:novel:book_name']").attr("content") || $("h1").first().text() || $("title").text() || "未命名小说").trim().slice(0, 200)
}
export function parseCatalog(html, url, selector) {
  const $ = load(html)
  const items = [], seen = new Set()
  let truncated = false, nextUrl, nextBlocked = false
  const base = httpUrl(url)
  $(selector || "a[href]").each((_index, element) => {
    const anchor = $(element)
    const title = cleanText(anchor.text()).replace(/\s+/g, " ").trim()
    if (/^(?:上一页|上页|下一页|下页|下一页目录|下一页章节目录|next(?:\s*page)?)[>›»→]?$/i.test(title)) return
    if (!title || (!selector && !chapterLink.test(title))) return
    try {
      const target = httpUrl(new URL(anchor.attr("href"), base).href)
      if (target.origin !== base.origin || target.href === base.href || seen.has(target.href)) return
      if (items.length >= MAX_CHAPTERS) { truncated = true; return }
      seen.add(target.href)
      items.push({ id: target.href, title, url: target.href, kind: "novel" })
    } catch { /* Ignore navigation and non-HTTP links. */ }
  })
  $("a[href],link[rel='next'][href]").each((_index, element) => {
    const anchor = $(element), label = anchor.text().replace(/\s+/g, "").trim()
    if (chapterLink.test(label) || /^下一[章节回]/.test(label)) return
    if (!anchor.attr("rel")?.split(/\s+/).includes("next") && !/^(?:下一页|下页|下一页目录|下一页章节目录|next(?:page)?)[>›»→]?$/i.test(label)) return
    try {
      const target = httpUrl(new URL(anchor.attr("href"), base).href)
      // Never follow a chapter, external host or arbitrary navigation as a catalog page.
      if (target.origin !== base.origin || seen.has(target.href)) { nextBlocked = true; return }
      nextUrl ||= target.href
    } catch { nextBlocked = true }
  })
  return { title: titleOf($), url: base.href, kind: "novel", items, nextUrl, truncated, nextBlocked }
}

export function parseContent(html, selector) {
  const $ = load(html)
  const title = titleOf($)
  $("script,style,noscript,iframe,nav,header,footer,form,.ads,.advertisement,[hidden]").remove()
  const candidates = $(selector || "#chaptercontent,#content,.chapter-content,.read-content,.content,article,main")
  let body = candidates.first(), length = 0
  candidates.each((_index, element) => {
    const size = $(element).text().length
    if (size > length) { body = $(element); length = size }
  })
  if (!body.length) {
    if (selector) throw new Error(`正文选择器没有匹配元素：${selector}`)
    body = $("body").length ? $("body") : $.root()
  }
  body.find("br").replaceWith("\n")
  body.find("p,div,section,h1,h2,h3,li").each((_index, element) => { $(element).append("\n") })
  const text = cleanText(body.text()).split("\n").map((line) => line.replace(/[ \t]+/g, " ").trim()).join("\n").replace(/\n{3,}/g, "\n\n").trim()
  if (text.length < 30) throw new Error("可提取的正文不足；请指定正文选择器，或换用可直接访问的文字页面")
  return { title, text, mime: "text/plain" }
}

/** @type {import('../domain/contracts.ts').SourceAdapter} */
export const htmlNovel = {
  id: "html-novel",
  name: "通用 HTML 小说 / 章节目录",
  kinds: ["novel"],
  capabilities: ["catalog", "fetch"],
  matches: (url) => /^https?:\/\//i.test(url),
  async catalog(url, context) {
    const visited = new Set(), seen = new Set(), items = []
    let next = httpUrl(url).href, result, catalogError
    while (next) {
      context.signal?.throwIfAborted()
      if (visited.has(next)) { catalogError = "目录翻页出现循环，已保留已获取目录"; break }
      if (visited.size >= MAX_CATALOG_PAGES) { catalogError = "目录超过 50 页采集上限，请按卷拆分或使用专用适配器"; break }
      if (visited.size) await delay(context.delayMs ?? 800, undefined, { signal: context.signal })
      visited.add(next)
      try {
        const page = await context.page(next)
        if (httpUrl(page.url).origin !== httpUrl(url).origin) throw new Error("目录跳转到其他站点，已停止采集")
        const listing = parseCatalog(page.text, page.url, context.selectors?.catalog)
        result ||= listing
        for (const item of listing.items) {
          if (seen.has(item.url)) continue
          if (items.length >= MAX_CHAPTERS) { catalogError = "目录超过 20000 章采集上限，请按卷拆分"; break }
          seen.add(item.url); items.push(item)
        }
        if (listing.truncated) catalogError = "目录超过 20000 章采集上限，请按卷拆分"
        if (listing.nextBlocked) catalogError = "目录翻页目标超出来源范围，已保留已获取目录"
        if (!listing.items.length) catalogError = "目录分页未解析到章节，已保留已获取目录"
        if (catalogError) break
        next = listing.nextUrl
      } catch (error) {
        if (context.signal?.aborted || !items.length) throw error
        catalogError = error instanceof Error ? error.message : String(error)
        break
      }
    }
    return { ...result, items, catalogComplete: !catalogError, catalogError }
  },
  async fetch(item, context) {
    const page = await context.page(item.url)
    if (/^text\/plain/i.test(page.contentType)) return { title: item.title, text: cleanText(page.text), mime: "text/plain" }
    return parseContent(page.text, context.selectors?.content)
  },
}
