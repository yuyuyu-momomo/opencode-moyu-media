import { httpUrl } from "../core/http.mjs"
import { stableId } from "../library/store.mjs"
import { cleanText } from "../library/text-reader.mjs"

export const MAX_NOVEL_CHAPTERS = 20000
export const chapterKey = (item) => stableId(item.url)
export const partKey = (job, index) => job.items[index].partId ?? index
export const savedSelectors = (previous, next) => ({ ...previous, ...Object.fromEntries(Object.entries(next || {}).filter(([, value]) => typeof value === "string")) })
export function pendingIndexes(job, retry = false) {
  const completed = new Set(job.completed)
  return job.items.flatMap((item, index) => !completed.has(index) && (retry || !job.failures?.[chapterKey(item)]) ? [index] : [])
}
export function novelSummary(job, added = 0) {
  const missing = pendingIndexes(job, true), fresh = pendingIndexes(job)
  return { id: job.id, title: job.title, url: job.url, sourceId: job.sourceId, status: job.status, added, downloaded: job.completed.length, total: job.items.length, remaining: missing.length,
    nextStart: fresh[0] ?? missing[0] ?? -1, nextPendingStart: fresh[0] ?? -1,
    missing: Object.keys(job.failures || {}).length, catalogComplete: job.catalogComplete === true, catalogError: job.catalogError || (job.catalogComplete === undefined ? "历史目录尚未核验，可刷新目录补全" : undefined),
    path: job.path, error: job.error,
    nextAction: job.error ? "目录和成功正文已保留；检查错误后再补采，不要自动无限重试" : missing.length ? "使用同一 URL 调用 moyu_import 补采，或在阅读区点击补采；已完成章节不会重复下载" : "输入 /moyu，在书架打开小说",
  }
}
export function normalizeListing(listing, url) {
  if (listing.kind !== "novel") throw new Error(`文字采集暂不支持 ${listing.kind}`)
  const origin = new URL(url).origin, seen = new Set(), items = []
  let truncated = Boolean(listing.truncated)
  for (const item of listing.items || []) {
    let target
    try { target = httpUrl(new URL(item.url, url).href) } catch { continue }
    if (target.origin !== origin || seen.has(target.href)) continue
    if (items.length >= MAX_NOVEL_CHAPTERS) { truncated = true; break }
    seen.add(target.href)
    items.push({ id: stableId(target.href), partId: stableId(target.href), url: target.href, title: cleanText(String(item.title || "未命名章节")).trim().slice(0, 200), kind: "novel" })
  }
  return { title: cleanText(String(listing.title || "未命名小说")).trim().slice(0, 200), items, catalogComplete: !truncated && listing.catalogComplete !== false, catalogError: listing.catalogError || (truncated ? "目录达到采集上限，尚未完整；请按卷拆分或使用专用适配器" : undefined) }
}

/** Refresh by URL identity, preserving downloaded chapters even after insertion/reordering. */
export async function mergeNovelCatalog(store, previous, listing, { id, sourceId, url, title, selectors }) {
  const parsed = normalizeListing(listing, url)
  if (!parsed.items.length) throw new Error("未解析到章节目录，原目录和已采正文保持不变；请检查来源或目录选择器")
  const job = { ...(previous || {}), schemaVersion: 1, id, sourceId, url, kind: "novel", title: title || previous?.title || parsed.title,
    items: parsed.items, completed: [], failures: {}, status: "pending", selectors: savedSelectors(previous?.selectors, selectors),
    catalogComplete: parsed.catalogComplete, catalogError: parsed.catalogError, catalogUpdatedAt: new Date().toISOString(), createdAt: previous?.createdAt || new Date().toISOString() }
  const old = new Map((previous?.items || []).map((item, index) => [item.url, { item, index, complete: previous.completed.includes(index) }]))
  const known = new Set(job.items.map(item => item.url))
  for (const item of previous?.items || []) if (!known.has(item.url)) {
    if (job.items.length >= MAX_NOVEL_CHAPTERS) throw new Error("合并历史章节后目录超过上限，请按卷拆分")
    job.items.push({ ...item, id: chapterKey(item), partId: chapterKey(item), historical: true })
  }
  for (let index = 0; index < job.items.length; index++) {
    const item = job.items[index], saved = old.get(item.url)
    if (saved?.complete) {
      try {
        const content = await store.readPart(id, partKey(previous, saved.index))
        if (saved.item.partId !== item.partId) await store.writePart(id, item.partId, content)
        job.completed.push(index)
      } catch (error) { if (error.code !== "ENOENT") throw error }
    }
    if (!job.completed.includes(index) && previous?.failures?.[chapterKey(item)]) job.failures[chapterKey(item)] = previous.failures[chapterKey(item)]
  }
  delete job.error
  if (job.completed.length) job.status = job.completed.length === job.items.length ? "complete" : "partial"
  return job
}

/** The readable book always has the full saved table of contents, including gaps. */
export async function publishNovel(store, job) {
  const chunks = [job.title], chapters = [], completed = new Set(job.completed)
  let offset = job.title.length, bytes = Buffer.byteLength(job.title)
  job.failures ||= {}
  for (let index = 0; index < job.items.length; index++) {
    const item = job.items[index], id = chapterKey(item)
    let text
    if (completed.has(index)) {
      try { text = await store.readPart(job.id, partKey(job, index)) }
      catch (error) { if (error.code !== "ENOENT") throw error; completed.delete(index); job.failures[id] = { message: "正文缓存缺失，可重新补采", at: new Date().toISOString() } }
    }
    const status = completed.has(index) ? "ready" : job.failures[id] ? "failed" : "pending"
    text ??= `${item.title}\n\n【${status === "failed" ? "正文暂缺" : "正文待补"}】\n本章目录已保存，正文可稍后补采。`
    offset += 2
    chapters.push({ id, index, title: item.title, offset, status, ...(item.historical ? { historical: true } : {}) })
    chunks.push(text); offset += text.length; bytes += Buffer.byteLength(text) + 2
    if (bytes > 32 * 1024 * 1024) throw new Error("单本超过 32 MiB，请按卷拆分采集")
  }
  job.completed = [...completed].sort((a, b) => a - b)
  if (job.status === "complete" && completed.size < job.items.length) job.status = "partial"
  const catalog = { url: job.url, sourceId: job.sourceId, total: job.items.length, downloaded: completed.size, status: job.status, complete: job.catalogComplete === true, error: job.catalogError || (job.catalogComplete === undefined ? "历史目录尚未核验，可刷新目录补全" : undefined) }
  job.path = await store.writeBook(job.id, job.title, chunks.join("\n\n"), { chapters, catalog })
  await store.putResource({ schemaVersion: 1, id: job.id, kind: "novel", title: job.title, source: { adapter: job.sourceId, url: job.url }, assets: [{ role: "body", mime: "application/x-moyu-book", path: job.path }],
    metadata: { chapters: completed.size, totalChapters: job.items.length, missingChapters: Object.keys(job.failures).length, status: job.status, catalogComplete: catalog.complete }, updatedAt: new Date().toISOString() })
  await store.writeJob(job)
  return job.path
}
