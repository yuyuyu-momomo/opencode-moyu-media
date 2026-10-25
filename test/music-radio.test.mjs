import test from "node:test"
import assert from "node:assert/strict"
import { createMusicProviders, musicTrack, trackKey } from "../src/music/providers.mjs"
import { MusicController } from "../src/music/player.mjs"
import { collectionKind } from "../src/domain/collection-task.mjs"
import { injectCollectionInstructions } from "../src/server/collection-context.mjs"

const song = (id, platform = "qq") => musicTrack({ platform, id, title: "测试歌曲 " + id, artist: "测试歌手", duration: 30 })
const cookie = "uin=12345678; qqmusic_key=private-account"
const deferred = () => { let resolve; const promise = new Promise(done => { resolve = done }); return { promise, resolve } }
const tick = () => new Promise(resolve => setImmediate(resolve))
class Player {
  volume = 35; playing = false; position = 0; duration = 30; plays = []
  async pause() { this.playing = false }
  async open(path) { this.path = path; this.position = 0; this.duration = 30; return true }
  async play() { this.playing = true; this.plays.push(this.path) }
  async seek(value) { this.position = value }
  async dispose() { await this.pause() }
}
function fixture(radio) {
  const player = new Player(), released = [], saved = [], queue = [song("1", "netease"), song("queue2")]
  const service = { radio, settings: { async player() { return { queue, currentKey: trackKey(queue[1]), volume: 35, repeat: "one" } }, async savePlayer(value) { saved.push(structuredClone(value)) } }, async prepare(track) { return { path: track.id, release: async () => released.push(track.id) } } }
  return { player, released, saved, queue, controller: new MusicController(service, { player }) }
}

test("我喜欢通过当前登录账号的特殊目录分页，不返回加密账号标识", async () => {
  let calls = 0
  const providers = createMusicProviders({ request: async (input, options) => {
    calls++; const url = new URL(input)
    assert.equal(options.headers.Cookie, cookie)
    if (url.pathname.includes("fcg_user_created_diss")) return { text: JSON.stringify({ code: 0, data: { encrypt_uin: "private-owner" } }) }
    const request = JSON.parse(options.body).req
    assert.equal(request.param.enc_host_uin, "private-owner"); assert.equal(request.param.dirid, 201); assert.equal(request.param.disstid, 0)
    assert.equal(request.param.song_begin, 2); assert.equal(request.param.song_num, 2); assert.equal(request.param.userinfo, true)
    return { text: JSON.stringify({ code: 0, req: { code: 0, data: { dirinfo: { title: "特殊目录" }, total_song_num: 5, hasmore: 1, songlist: [{ mid: "liked1", name: "喜欢的歌", singer: [], interval: 30 }] } } }) }
  } })
  await assert.rejects(providers.playlist("qq", "liked", { page: 2, limit: 2 }), /先登录/); assert.equal(calls, 0)
  const result = await providers.playlist("qq", "liked", { cookie, page: 2, limit: 2 })
  assert.equal(result.info.id, "liked"); assert.equal(result.info.title, "我喜欢"); assert.equal(result.total, 5); assert.equal(result.hasMore, true)
  assert.equal(result.tracks[0].id, "liked1"); assert.doesNotMatch(JSON.stringify(result), /private-owner|private-account|enc_host_uin/)
})

test("我的歌单为我喜欢预留首页位置，小页翻页不遗漏或重复普通歌单", async () => {
  const raw = [{ tid: 0, dirid: 205 }, ...[11, 12, 13].map(tid => ({ tid, diss_name: "歌单 " + tid }))]
  const providers = createMusicProviders({ request: async (input) => {
    const url = new URL(input), start = Number(url.searchParams.get("sin")), size = Number(url.searchParams.get("size"))
    return { text: JSON.stringify({ code: 0, data: { totoal: raw.length, disslist: raw.slice(start, start + size) } }) }
  } })
  for (const limit of [1, 2, 3]) {
    const ids = []
    for (let page = 1; page <= 6; page++) {
      const result = await providers.playlists("qq", { mode: "mine", cookie, page, limit })
      assert.ok(result.playlists.length <= limit); ids.push(...result.playlists.map(item => item.id))
      if (!result.hasMore) break
    }
    assert.deepEqual(ids, ["liked", "11", "12", "13"])
  }
})

test("私人电台只请求QQ官方个性推荐，必须登录，去重并丢弃响应凭据和播放地址", async () => {
  let calls = 0, denied = false
  const providers = createMusicProviders({ request: async (input, options) => {
    calls++; assert.equal(new URL(input).hostname, "u.y.qq.com"); assert.equal(options.headers.Cookie, cookie)
    const body = JSON.parse(options.body); assert.equal(body.req.module, "music.radioProxy.MbTrackRadioSvr"); assert.equal(body.req.method, "get_radio_track")
    assert.equal(body.req.param.id, 99); assert.equal(body.req.param.num, 5); assert.deepEqual(body.req.param.song_ids, [])
    return { text: JSON.stringify({ code: 0, req: { code: denied ? 401 : 0, data: { tracks: [{ mid: "radio1", name: "推荐", singer: [], interval: 30, cookie: "upstream-private", url: "https://private.example/" }, { mid: "radio1", name: "重复" }, { mid: "seen", name: "听过" }] } } }) }
  } })
  await assert.rejects(providers.radio(), /先登录/); assert.equal(calls, 0)
  const result = await providers.radio({ cookie, exclude: ["seen"] }); assert.equal(result.tracks.length, 1); assert.equal(result.tracks[0].id, "radio1")
  assert.doesNotMatch(JSON.stringify(result), /upstream-private|private-account|private\.example/)
  denied = true; await assert.rejects(providers.radio({ cookie }), /平台拒绝/); assert.equal(calls, 2)
})

test("私人电台自动续批、下一首刷歌及上一首回听，退出保留原队列和单曲循环偏好", async () => {
  let requests = 0
  const f = fixture(async () => ({ tracks: ++requests === 1 ? [song("rec1"), song("rec2")] : [song("rec2"), song("rec3")] }))
  const { controller: c, player } = f
  try {
    await c.restore(); await c.startRadio(); assert.equal(c.current.id, "rec1"); assert.equal(player.playing, true)
    assert.equal(c.currentKey, "qq:queue2"); c.add(song("added")); assert.equal(c.state.radio, true); assert.equal(c.queue.length, 3)
    await c.next(1, true); assert.equal(c.current.id, "rec2"); assert.equal(requests, 1)
    await c.next(1, true); assert.equal(c.current.id, "rec3"); assert.equal(requests, 2)
    await c.next(-1); assert.equal(c.current.id, "rec2"); assert.equal(requests, 2)
    await c.stopRadio(); await c.writes
    assert.equal(c.state.radio, false); assert.equal(c.current.id, "queue2"); assert.equal(player.playing, false); assert.equal(c.repeat, "one")
    assert.deepEqual(f.saved.at(-1).queue.map(t => t.id), ["1", "queue2", "added"]); assert.equal(f.saved.at(-1).currentKey, "qq:queue2")
    assert.ok(f.released.includes("rec3")); assert.equal(f.saved.some(value => value.queue.some(t => /^rec/.test(t.id))), false)
  } finally { await c.dispose() }
})

test("暂停或退出私人电台丢弃迟到推荐，恢复与切回普通歌曲不会被旧请求覆盖", async () => {
  const requests = []
  const f = fixture(async (options) => { const result = deferred(); requests.push({ ...result, options }); return result.promise })
  const { controller: c, player } = f
  try {
    await c.restore(); const old = c.startRadio(); await tick(); await c.pause()
    assert.equal(requests[0].options.signal.aborted, true); requests[0].resolve({ tracks: [song("late")] }); await old
    assert.equal(player.plays.length, 0); assert.equal(c.current, undefined); assert.equal(c.busy, false)
    const resume = c.toggle(); await tick(); requests[1].resolve({ tracks: [song("new")] }); await resume
    assert.equal(c.current.id, "new"); assert.deepEqual(player.plays, ["new"])
    const pending = c.startRadio(); await tick(); await c.stopRadio(); await c.play("qq:queue2")
    requests[2].resolve({ tracks: [song("late2")] }); await pending
    assert.equal(c.current.id, "queue2"); assert.equal(c.state.radio, false); assert.deepEqual(player.plays, ["new", "queue2"])
  } finally { await c.dispose() }
})

test("电台重复推荐最多补取三批，拒绝只报告一次，历史与去重窗口有上限", async () => {
  let requests = 0
  const f = fixture(async () => { requests++; return { tracks: [song("same")] } })
  try {
    await f.controller.restore(); await f.controller.startRadio(); await f.controller.next()
    assert.equal(requests, 4); assert.match(f.controller.error, /暂未返回新的推荐/); assert.equal(f.player.playing, false)
    assert.deepEqual(f.controller.queue.map(t => t.id), ["1", "queue2"])
  } finally { await f.controller.dispose() }
  let serial = 0
  const g = fixture(async () => ({ tracks: Array.from({ length: 5 }, () => song("r" + ++serial)) }))
  try {
    await g.controller.restore(); await g.controller.startRadio()
    for (let n = 0; n < 110; n++) await g.controller.next(1, true)
    assert.equal(g.controller.current.id, "r111"); assert.ok(g.controller.radio.history.length <= 100); assert.ok(g.controller.radio.seen.length <= 100)
  } finally { await g.controller.dispose() }
  let denied = 0
  const h = fixture(async () => { denied++; throw new Error("请先登录 QQ音乐") })
  try { await h.controller.restore(); await h.controller.startRadio(); assert.equal(denied, 1); assert.match(h.controller.error, /先登录/); assert.equal(h.player.plays.length, 0) }
  finally { await h.controller.dispose() }
})

test("喜欢与随机刷歌进入对应音乐查询规则，小说和显式视频不受影响", () => {
  for (const query of ["我喜欢", "猜你喜欢", "随机刷歌", "QQ私人FM", "私人电台"]) {
    assert.equal(collectionKind(query), "music")
    const context = { system: [], messages: [{ role: "user", metadata: { origin: "moyu", query } }] }; injectCollectionInstructions(context)
    assert.match(context.system[0].text, /id=liked/); assert.match(context.system[0].text, /moyu_music_radio/)
  }
  assert.equal(collectionKind("小说 我喜欢你的故事"), "novel"); assert.equal(collectionKind("视频 私人电台录屏"), "video")
})
