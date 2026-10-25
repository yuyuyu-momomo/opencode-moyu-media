import { setTimeout as delay } from "node:timers/promises"
import { createHttpClient, httpUrl } from "../core/http.mjs"
import { LibraryStore, stableId } from "../library/store.mjs"
import { createSourceRegistry } from "../sources/index.mjs"
import { chapterKey, partKey, pendingIndexes, novelSummary, mergeNovelCatalog, publishNovel, savedSelectors } from "./novel-snapshot.mjs"

/** All transports and registries are injectable; no OpenCode objects enter this layer.
 * @param {{directory: string, keyFile?: string, registry?: any, readPage?: Function, delayMs?: number}} options
 */
export function createIngestion({ directory, keyFile, registry = createSourceRegistry(), readPage = createHttpClient(), delayMs = 800 } = {}) {
  const store = new LibraryStore(directory, { keyFile })
  function context(input) {
    const cache = new Map()
    return {
      signal: input.signal,
      selectors: input.selectors,
      delayMs,
      page(url) {
        const key = httpUrl(url).href
        if (!cache.has(key)) cache.set(key, readPage(key, { signal: input.signal }))
        return cache.get(key)
      },
    }
  }
  async function catalog(input) {
    const url = httpUrl(input.url).href
    const adapter = registry.resolve(url, input.sourceId)
    if (!adapter.capabilities.includes("catalog")) throw new Error("这个来源不提供目录能力")
    const id = stableId(adapter.id + ":" + url)
    return store.withJobLock(id, async () => {
      let job = await store.readJob(id)
      if (!job || input.refresh) {
        const listing = await adapter.catalog(url, context({ ...input, selectors: savedSelectors(job?.selectors, input.selectors) }))
        job = await mergeNovelCatalog(store, job, listing, { id, sourceId: adapter.id, url, title: input.title, selectors: input.selectors })
        await store.writeJob(job)
        await publishNovel(store, job)
      } else if (!job.path || !(await store.resource(id))) await publishNovel(store, job)
      const completed = new Set(job.completed)
      return { ...novelSummary(job), kind: "novel", saved: true, items: job.items.map((item, index) => ({ ...item, index, status: completed.has(index) ? "ready" : job.failures?.[chapterKey(item)] ? "failed" : "pending" })) }
    })
  }
  async function importBatch(input) {
    const url = httpUrl(input.url).href
    const adapter = registry.resolve(url, input.sourceId)
    if (!adapter.capabilities.includes("fetch")) throw new Error("这个来源不提供获取能力")
    const id = stableId(adapter.id + ":" + url)
    return store.withJobLock(id, async () => {
      let job = await store.readJob(id)
      const ctx = context({ ...input, selectors: savedSelectors(job?.selectors, input.selectors) })
      if (!job) {
        const listing = await adapter.catalog(url, ctx)
        job = await mergeNovelCatalog(store, undefined, listing, { id, sourceId: adapter.id, url, title: input.title, selectors: input.selectors })
        await store.writeJob(job)
        await publishNovel(store, job)
      }
      const limit = Math.max(1, Math.min(50, Math.trunc(input.limit ?? 5)))
      if (!Number.isFinite(limit)) throw new Error("采集数量无效")
      if (input.start !== undefined && (!Number.isInteger(input.start) || input.start < 0 || input.start >= job.items.length)) throw new Error("起始章节超出目录范围")
      const completed = new Set(job.completed)
      const candidates = input.start === undefined ? pendingIndexes(job) : job.items.flatMap((_item, index) => index >= input.start && !completed.has(index) ? [index] : [])
      // An explicit new request can retry known gaps when no untouched chapters remain.
      if (!candidates.length && input.start === undefined) candidates.push(...pendingIndexes(job, true))
      job.status = "running"
      job.failures ||= {}
      delete job.error
      let added = 0, attempted = 0
      await store.writeJob(job)
      try {
        for (const index of candidates.slice(0, limit)) {
          input.signal?.throwIfAborted()
          if (attempted++) await delay(delayMs, undefined, { signal: input.signal })
          input.onProgress?.({ title: job.title, current: index + 1, total: job.items.length })
          const item = job.items[index]
          try {
            const content = await adapter.fetch(item, ctx)
            if (content.mime !== "text/plain" || typeof content.text !== "string" || !content.text.trim()) throw new Error("来源未返回有效文字正文")
            if (Buffer.byteLength(content.text) > 2 * 1024 * 1024) throw new Error("单章正文超过大小限制")
            const chapterText = content.text.startsWith(item.title) ? content.text : item.title + "\n\n" + content.text
            await store.writePart(id, partKey(job, index), chapterText)
            job.completed.push(index)
            delete job.failures[chapterKey(item)]
            added++
          } catch (error) {
            if (!input.signal?.aborted) job.failures[chapterKey(item)] = { message: error instanceof Error ? error.message : String(error), at: new Date().toISOString() }
            if (!/\bHTTP (404|410)\b/.test(error.message)) throw error
            // A missing chapter must not prevent later chapters from being collected.
          }
          job.updatedAt = new Date().toISOString()
          await store.writeJob(job)
        }
        job.status = job.completed.length === job.items.length ? "complete" : "partial"
      } catch (error) {
        job.status = input.signal?.aborted ? "cancelled" : "failed"
        job.error = error instanceof Error ? error.message : String(error)
      }
      job.updatedAt = new Date().toISOString()
      await store.writeJob(job)
      await publishNovel(store, job)
      return novelSummary(job, added)
    })
  }
  return { registry, store, catalog, importBatch }
}
