import test from "node:test"
import assert from "node:assert/strict"
import { mkdtemp, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"
import plugin from "../dist/server-v2.js"

test("2.x 模型工具保留参数校验、服务执行及权限拒绝", async () => {
  const directory = await mkdtemp(join(tmpdir(), "moyu-tools-v2-"))
  const tools = new Map()
  let disposed = false
  const hooks = new Map()
  const requests = []
  const context = { sessionID: "test-session", messageID: "test-message", agent: "build", id: "test-call", signal: new AbortController().signal, progress: async () => {} }
  const cleanup = await plugin.setup({
    options: { booksDir: join(directory, "books"), keyFile: join(directory, "keys/library.key") },
    location: { directory },
    session: { async hook(name, callback) {
      hooks.set(name, callback)
      return { async dispose() { hooks.delete(name) } }
    } },
    permission: { async assert(request) { requests.push(request); throw new Error("test-permission-denied") } },
    tool: { async transform(callback) {
      callback({ add(value) { tools.set(value.name, value) } })
      return { async dispose() { disposed = true } }
    } },
  })
  try {
    assert.ok(hooks.has("context"))
    assert.ok(hooks.has("compaction"))
    assert.deepEqual([...tools.keys()].sort(), ["moyu_catalog", "moyu_delete", "moyu_import", "moyu_library", "moyu_music_playlist", "moyu_music_playlists", "moyu_music_radio", "moyu_music_search", "moyu_search", "moyu_shopping_search", "moyu_shopping_sources", "moyu_sources", "moyu_video_import", "moyu_video_info", "moyu_video_popular", "moyu_video_search"])
    const shopping = JSON.parse((await tools.get("moyu_shopping_sources").execute({}, context)).content)
    assert.equal(shopping.find((item) => item.id === "jd").configured, false)
    assert.doesNotMatch(JSON.stringify(shopping), /appSecret|cookie/i)
    const shoppingSchema = tools.get("moyu_shopping_search").input["~standard"]
    assert.equal((await shoppingSchema.validate({ query: "耳机" })).value.source, "all")
    assert.ok((await shoppingSchema.validate({ query: "耳机", source: "unknown" })).issues.length)
    await assert.rejects(tools.get("moyu_shopping_search").execute({query:"耳机",source:"all",platform:"all",limit:5,page:1,onlyCoupons:false},context),/test-permission-denied/)
    assert.deepEqual(requests.at(-1).resources,["https://s.manmanbuy.com/*"])
    requests.length = 0
    const sources = JSON.parse((await tools.get("moyu_sources").execute({}, context)).content)
    assert.equal(sources[0].id, "html-novel")
    assert.ok(sources.some((item) => item.id === "youtube"))
    assert.deepEqual(sources.filter((item) => item.kinds.includes("audio")).map((item) => item.id), ["netease", "qq", "kugou"])
    assert.equal((await tools.get("moyu_music_radio").input["~standard"].validate({})).value.limit,5)
    await assert.rejects(tools.get("moyu_music_radio").execute({limit:5},context),/test-permission-denied/)
    assert.deepEqual(requests.at(-1).resources,["https://u.y.qq.com/*"])
    await assert.rejects(tools.get("moyu_music_playlist").execute({platform:"qq",id:"liked",page:1,limit:20},context),/test-permission-denied/)
    assert.deepEqual(requests.at(-1).resources,["https://u.y.qq.com/*","https://c.y.qq.com/*"])
    requests.length=0
    const musicSchema = tools.get("moyu_music_search").input["~standard"]
    assert.equal((await musicSchema.validate({query:"测试歌曲"})).value.platform,"all")
    assert.ok((await musicSchema.validate({query:"test",platform:"unknown"})).issues.length)
    await assert.rejects(tools.get("moyu_music_search").execute({query:"test",platform:"all",limit:1},context),/test-permission-denied/)
    assert.equal(requests.length,1)
    requests.length=0
    const playlistsSchema = tools.get("moyu_music_playlists").input["~standard"]
    assert.equal((await playlistsSchema.validate({})).value.mode,"mine")
    assert.ok((await playlistsSchema.validate({page:0})).issues.length)
    const playlistSchema = tools.get("moyu_music_playlist").input["~standard"]
    assert.equal((await playlistSchema.validate({platform:"qq",id:"12345"})).value.limit,20)
    assert.ok((await playlistSchema.validate({platform:"qq",id:"https://127.0.0.1/"})).issues.length)
    for(const [name,input] of [["moyu_music_playlists",{mode:"mine",platform:"qq",collection:"created",page:1,limit:10}],["moyu_music_playlist",{platform:"qq",id:"12345",page:1,limit:20}]]) await assert.rejects(tools.get(name).execute(input,context),/test-permission-denied/)
    requests.length=0
    for(const id of ["789", "collection_3_123_8_0"]) {
      await assert.rejects(tools.get("moyu_music_playlist").execute({platform:"kugou",id,page:1,limit:20},context),/test-permission-denied/)
      assert.deepEqual(requests.at(-1).resources, ["https://gateway.kugou.com/*", ...(/^\d+$/.test(id) ? ["https://www.kugou.com/*"] : [])])
    }
    requests.length=0
    assert.ok(sources.find((item)=>item.id==='bilibili').capabilities.includes('popular'))
    const popularSchema=tools.get('moyu_video_popular').input['~standard']
    assert.equal((await popularSchema.validate({})).value.page,1)
    assert.ok((await popularSchema.validate({page:0})).issues.length)
    assert.ok((await popularSchema.validate({page:101})).issues.length)
    const videoSchema=tools.get('moyu_video_import').input['~standard']
    assert.equal((await videoSchema.validate({url:'BV1xx411c7mD',quality:'1080p'})).value.quality,'1080p')
    assert.ok((await videoSchema.validate({url:'BV1xx411c7mD',quality:'2160p'})).issues.length)
    for (const [name, input] of [["moyu_video_popular",{page:2}],["moyu_video_search", { platform: "youtube", query: "demo", limit: 1 }], ["moyu_video_info", { url: "https://youtu.be/BaW_jenozKc" }], ["moyu_video_import", { url: "BV1xx411c7mD" }]]) {
      await assert.rejects(tools.get(name).execute(input, context), /test-permission-denied/)
    }
    requests.length = 0
    const shelf = JSON.parse((await tools.get("moyu_library").execute({}, context)).content)
    assert.deepEqual(shelf.resources, [])
    const schema = tools.get("moyu_import").input["~standard"]
    const valid = await schema.validate({ url: "https://example.com/book" })
    assert.equal(valid.value.limit, 5)
    assert.ok((await schema.validate({ url: "not-a-url", limit: 99 })).issues.length)
    await assert.rejects(tools.get("moyu_catalog").execute({ url: "https://example.com/book", start: 0, limit: 5 }, context), /test-permission-denied/)
    assert.equal(requests[0].action, "webfetch")
    assert.deepEqual(requests[0].resources, ["https://example.com/book"])
    assert.deepEqual(requests[0].source, { type: "tool", messageID: "test-message", id: "test-call" })
    await assert.rejects(tools.get("moyu_delete").execute({ id: "a".repeat(24) }, context), /test-permission-denied/)
    assert.equal(requests[1].action, "moyu.delete")
  } finally {
    await cleanup()
    assert.equal(disposed, true)
    assert.equal(hooks.size, 0)
    await rm(directory, { recursive: true, force: true })
  }
})
