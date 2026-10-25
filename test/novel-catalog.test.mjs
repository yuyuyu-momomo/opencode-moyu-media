import test from "node:test"
import assert from "node:assert/strict"
import { mkdtemp, readFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { createIngestion } from "../src/services/ingestion.mjs"
import { loadBook, listBooks } from "../src/library/text-reader.mjs"
import { readingPosition, restorePosition } from "../src/library/reading-position.mjs"
import { stableId } from "../src/library/store.mjs"

const url = "https://novel.test/index"
const links = (ids) => `<h1>目录测试</h1><div id="list">${ids.map(id => `<a href="/${id}">第${id}章 章节</a>`).join("")}</div>`
const body = id => `第${id}章 章节\n\n${"正文内容，保留完整的章节故事。".repeat(12)}`
async function fixture(handler) {
  const directory = join(await mkdtemp(join(tmpdir(), "moyu-catalog-")), "books"), calls = []
  const service = createIngestion({ directory, delayMs: 0, readPage: async target => {
    calls.push(target)
    const result = await handler(target)
    return typeof result === "string" ? { url: target, contentType: target.includes("/index") ? "text/html" : "text/plain", text: result } : result
  } })
  await service.store.ready()
  return { service, directory, calls }
}

test("先保存全部目录而不请求正文，零正文即可打开，续采不重抓目录", async () => {
  const f = await fixture(target => target === url ? links(Array.from({ length: 80 }, (_, i) => i + 1)) : body(target.split("/").at(-1)))
  const listing = await f.service.catalog({ url })
  assert.equal(f.calls.length, 1)
  assert.equal(listing.total, 80)
  assert.equal(listing.downloaded, 0)
  const before = await loadBook(listing.path)
  assert.equal(before.chapters.length, 80)
  assert.ok(before.chapters.every(item => item.status === "pending"))
  assert.ok(!String(await readFile(listing.path)).includes("第80章"))
  assert.equal((await listBooks(f.directory))[0].progress, "正文 0/80 章")
  const position = readingPosition(before, before.chapters[60].offset + 3)
  const added = await f.service.importBatch({ url, limit: 2 })
  assert.equal(added.downloaded, 2)
  const after = await loadBook(added.path)
  assert.equal(after.chapters.length, 80)
  assert.equal(after.chapters[0].status, "ready")
  assert.equal(after.chapters[60].status, "pending")
  assert.equal(restorePosition(after, position), after.chapters[60].offset + 3)
  assert.equal(f.calls.filter(target => target === url).length, 1)
  const pendingPosition = readingPosition(after, after.chapters[2].offset + 15)
  await f.service.importBatch({ url, start: 2, limit: 1 })
  const filled = await loadBook(added.path)
  assert.equal(restorePosition(filled, pendingPosition), filled.chapters[2].offset)
})

test("404 章节暂缺但后续可采，再次补采只填缺章并保持其他正文", async () => {
  let missing = true
  const f = await fixture(target => {
    if (target === url) return links([1, 2, 3])
    if (target.endsWith("/1") && missing) throw new Error("来源返回 HTTP 404；停止抓取")
    return body(target.split("/").at(-1))
  })
  const first = await f.service.importBatch({ url, limit: 3 })
  assert.equal(first.downloaded, 2)
  assert.equal(first.missing, 1)
  assert.equal(first.nextPendingStart, -1)
  assert.deepEqual((await loadBook(first.path)).chapters.map(chapter => chapter.status), ["failed", "ready", "ready"])
  missing = false
  const second = await f.service.importBatch({ url })
  assert.equal(second.status, "complete")
  assert.equal(second.added, 1)
  assert.equal(second.missing, 0)
  assert.equal(f.calls.filter(target => target.endsWith("/2")).length, 1)
})

test("首章拒绝或中途取消仍保留完整目录，空目录绝不伪装成小说", async () => {
  const f = await fixture(target => { if (target === url) return links([1, 2]); throw new Error("HTTP 403") })
  const result = await f.service.importBatch({ url })
  assert.equal(result.status, "failed")
  assert.equal(result.downloaded, 0)
  assert.equal((await loadBook(result.path)).chapters.length, 2)
  assert.equal(f.calls.length, 2)
  const empty = await fixture(() => "<h1>验证页面</h1>")
  await assert.rejects(empty.service.importBatch({ url }), /未解析到章节目录/)
  assert.equal((await empty.service.store.resources()).length, 0)
  const signal = new AbortController()
  const canceled = await fixture(target => { if (target === url) return links([1, 2]); signal.abort(); return body(1) })
  const partial = await canceled.service.importBatch({ url, signal: signal.signal })
  assert.equal(partial.status, "cancelled")
  assert.equal((await loadBook(partial.path)).chapters.length, 2)
  assert.equal(partial.downloaded, 1)
})

test("分页目录去重并完整保存，翻页失败和循环会明确标记未完整", async () => {
  let fail = false
  const f = await fixture(target => {
    if (target === url) return links([1, 2]) + '<a rel="next" href="/index?page=2">下一页</a>'
    if (fail) throw new Error("HTTP 503")
    return links([2, 3])
  })
  const all = await f.service.catalog({ url, selectors: { catalog: "#list a" } })
  assert.equal(all.total, 3)
  assert.equal(all.catalogComplete, true)
  fail = true
  const partial = await f.service.catalog({ url, refresh: true })
  assert.equal(partial.catalogComplete, false)
  assert.match(partial.catalogError, /503/)
  assert.equal(partial.total, 3, "历史目录保留")
  const cycle = await fixture(target => target === url ? links([1]) + '<a rel="next" href="/index">下一页</a>' : "")
  assert.match((await cycle.service.catalog({ url })).catalogError, /循环/)
  assert.equal(cycle.calls.length, 1)
})

test("刷新目录插入和重排章节时按 URL 保留正文，刷新为空不破坏旧书", async () => {
  let ids = [1, 3], empty = false
  const f = await fixture(target => target === url ? empty ? "<h1>验证</h1>" : links(ids) : body(target.split("/").at(-1)))
  const first = await f.service.importBatch({ url })
  const before = await loadBook(first.path), position = readingPosition(before, before.chapters[1].offset + 12)
  ids = [3, 2, 1]
  const refreshed = await f.service.catalog({ url, refresh: true })
  const after = await loadBook(refreshed.path)
  assert.deepEqual(after.chapters.map(chapter => chapter.status), ["ready", "pending", "ready"])
  assert.equal(restorePosition(after, position), after.chapters[0].offset + 12)
  const filled = await f.service.importBatch({ url })
  assert.equal(filled.added, 1)
  assert.equal(f.calls.filter(target => target.endsWith("/1")).length, 1)
  assert.equal(f.calls.filter(target => target.endsWith("/3")).length, 1)
  const bytes = await readFile(filled.path)
  empty = true
  await assert.rejects(f.service.catalog({ url, refresh: true }), /未解析到章节目录/)
  assert.deepEqual(await readFile(filled.path), bytes)
})

test("旧版数字序号缓存刷新后正确迁移，支持非标准章节标题", async () => {
  const f = await fixture(() => '<h1>目录测试</h1><a href="/2">特别的开篇</a><a href="/1">曾经的章节</a>')
  const id = stableId("html-novel:" + url)
  await f.service.store.writePart(id, 0, "曾经的章节\n旧正文不应丢失")
  await f.service.store.writeJob({ id, schemaVersion: 1, sourceId: "html-novel", url, kind: "novel", title: "旧书", items: [{ url: "https://novel.test/1", title: "曾经的章节", kind: "novel" }], completed: [0], status: "complete" })
  const refreshed = await f.service.catalog({ url, refresh: true, selectors: { catalog: "a" } })
  const book = await loadBook(refreshed.path)
  assert.deepEqual(book.chapters.map(item => item.title), ["特别的开篇", "曾经的章节"])
  assert.equal(book.chapters[1].status, "ready")
  assert.match(book.text, /旧正文不应丢失/)
})
