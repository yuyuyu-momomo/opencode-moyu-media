import { createHash, randomBytes } from "node:crypto"

const locations = {
  netease: (id) => `https://music.163.com/#/playlist?id=${id}`,
  qq: (id) => id === "liked" ? undefined : `https://y.qq.com/n/ryqq/playlist/${id}`,
  kugou: (id) => /^\d+$/.test(id) ? `https://www.kugou.com/yy/special/single/${id}.html` : undefined,
}
const text = (value) => String(value ?? "").replace(/<[^>]*>/g, "").replace(/&#(x[\da-f]+|\d+);/gi, (_s, code) => { const n = code[0].toLowerCase() === "x" ? parseInt(code.slice(1), 16) : Number(code); return n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : "" }).replace(/&amp;/g, "&").replace(/[\x00-\x1f\x7f-\x9f]/g, " ").trim().slice(0, 180)
const count = (value) => value !== undefined && value !== null && Number.isFinite(Number(value)) && Number(value) >= 0 ? Math.min(10000000, Math.trunc(Number(value))) : undefined
export const playlistKey = (playlist) => playlist.platform + ":" + playlist.id
export function musicPlaylist(input) {
  const platform = input?.platform, id = String(input?.id ?? "")
  const liked = platform === "qq" && id === "liked"
  if (!Object.hasOwn(locations, platform) || (!liked && !(platform === "kugou" ? /^[\w-]{1,120}$/ : /^[1-9]\d{0,23}$/).test(id))) throw new Error("无效歌单平台或 ID")
  if (platform === "qq" && !liked && !Number.isSafeInteger(Number(id))) throw new Error("无效歌单 ID")
  const legacyId = platform === "kugou" && /^[1-9]\d{0,23}$/.test(String(input.legacyId ?? "")) ? String(input.legacyId) : undefined
  return { platform, id, title: liked ? "我喜欢" : text(input.title) || "歌单 " + id, creator: text(input.creator), count: count(input.count), legacyId, sourceUrl: locations[platform](legacyId || id) }
}
export function playlistTarget(input, fallback = "qq") {
  const value = String(input).trim()
  if (!/^https?:\/\//i.test(value)) {
    const prefixed = /^(netease|qq|kugou)\s*[:：]\s*(.+)$/i.exec(value)
    return musicPlaylist({ platform: prefixed?.[1].toLowerCase() || fallback, id: prefixed?.[2] || value })
  }
  let url
  try { url = new URL(value) } catch { throw new Error("歌单链接格式不正确") }
  if (url.username || url.password || url.port) throw new Error("不支持此歌单链接")
  if (url.hostname === "music.163.com") {
    const query = url.hash.startsWith("#/") ? new URL("https://music.163.com/" + url.hash.slice(2)) : url
    if (/\/(?:m\/)?playlist(?:\/|$)/.test(query.pathname)) return musicPlaylist({ platform: "netease", id: query.searchParams.get("id") || query.pathname.match(/playlist\/(\d+)/)?.[1] })
  }
  if (["y.qq.com", "i.y.qq.com"].includes(url.hostname)) return musicPlaylist({ platform: "qq", id: url.pathname.match(/\/playlist\/(\d+)/)?.[1] || (/taoge/.test(url.pathname) ? url.searchParams.get("id") || url.searchParams.get("disstid") : undefined) })
  if (["www.kugou.com", "m.kugou.com"].includes(url.hostname)) return musicPlaylist({ platform: "kugou", id: url.pathname.match(/\/(?:songlist|plist\/list)\/([\w-]+)/)?.[1] || url.pathname.match(/\/special\/single\/(\d+)\.html/)?.[1] })
  throw new Error("请使用 QQ音乐、网易云或酷狗的完整歌单链接，也可输入 平台:歌单ID")
}
function pageOptions(page = 1, limit = 20) {
  if (!Number.isInteger(page) || page < 1 || page > 500 || !Number.isInteger(limit) || limit < 1 || limit > 100) throw new Error("歌单分页范围不正确")
  return { page, limit, offset: (page - 1) * limit }
}
function listPage(list, map, options, total, more) {
  if (!Array.isArray(list)) throw new Error("平台未返回歌单列表，请稍后重试")
  const playlists = list.slice(0, options.limit).flatMap((item) => { try { return [musicPlaylist(map(item))] } catch { return [] } })
  return { playlists, page: options.page, limit: options.limit, total: count(total), hasMore: more !== undefined ? Boolean(more) : count(total) !== undefined ? options.offset + list.length < Number(total) : list.length >= options.limit }
}
function checked(data, key) {
  const result = key ? data[key] : data
  const denied = (code) => code !== undefined && ![0, 200].includes(Number(code))
  if (denied(data.code) || (key && !result) || denied(result?.code)) throw new Error("平台拒绝了音乐查询，请检查登录状态或资源可见性")
  return key ? result.data : result
}

/** Platform requests are injected; playlist adapters never save credentials or play audio. */
export function createPlaylistProviders({ json, netease, parseSongs, normalizeTrack, cookies, page: readPage }) {
  const kgMid = randomBytes(16).toString("hex")
  async function qq(module, method, param, cookie, signal, comm = {}) {
    const values = cookies(cookie), uin = (values.uin || values.wxuin || "0").replace(/^o/, ""), key = values.qqmusic_key || values.qm_keyst || ""
    let gtk = 5381; for (const c of key) gtk = (gtk * 33 + c.charCodeAt(0)) & 0x7fffffff
    const { data } = await json("https://u.y.qq.com/cgi-bin/musicu.fcg", { signal, method: "POST", body: JSON.stringify({ comm: { ct: 24, cv: 4747474, uin, authst: key, g_tk: gtk, tmeLoginType: 2, format: "json", ...comm }, req: { module, method, param } }), headers: { Cookie: cookie, Referer: "https://y.qq.com/", "Content-Type": "application/json" } })
    return checked(data, "req")
  }
  async function kg(path, params, body, router, cookie, signal) {
    const values = cookies(cookie), query = { dfid: values.dfid || "-", mid: values.mid || values.kg_mid || kgMid, uuid: "-", appid: 1005, clientver: 20489, clienttime: Math.floor(Date.now() / 1000), ...(values.token ? { token: values.token, userid: values.userid || 0 } : {}), ...params }
    const payload = body ? JSON.stringify(body) : "", salt = "OIlwieks28dk2k092lksi2UIkp"
    query.signature = createHash("md5").update(salt + Object.keys(query).sort().map((key) => `${key}=${query[key]}`).join("") + payload + salt).digest("hex")
    const url = new URL("https://gateway.kugou.com" + path); url.search = new URLSearchParams(Object.entries(query).map(([key, value]) => [key, String(value)])).toString()
    const { data } = await json(url.href, { signal, method: body ? "POST" : "GET", body: payload || undefined, headers: { "Content-Type": "application/json", ...(router ? { "x-router": router } : {}) } })
    if (data.status !== 1 || data.error_code) throw new Error("酷狗拒绝了歌单查询，请检查登录状态或歌单可见性")
    return data.data
  }
  async function qqMine(cookie, signal, offset, limit) {
    const values = cookies(cookie), uin = (values.uin || values.wxuin || "").replace(/^o/, "")
    if (!uin || !(values.qqmusic_key || values.qm_keyst)) throw new Error("请先登录 QQ音乐")
    const url = new URL("https://c.y.qq.com/rsc/fcgi-bin/fcg_user_created_diss")
    url.search = new URLSearchParams({ ct: "24", cv: "4747474", format: "json", platform: "yqq.json", uin, hostuin: uin, sin: String(offset), size: String(limit) }).toString()
    const { data } = await json(url.href, { signal, headers: { Cookie: cookie, Referer: "https://y.qq.com/" } })
    return checked(data).data
  }
  async function playlists(platform, { mode = "search", query = "", collection = "created", page = 1, limit = 5, cookie = "", signal } = {}) {
    const options = pageOptions(page, limit), values = cookies(cookie)
    if (!["search", "mine"].includes(mode) || !["created", "favorite"].includes(collection)) throw new Error("无效歌单查询方式")
    if (mode === "search" && (!query.trim() || query.length > 120)) throw new Error("请输入 1–120 字的歌单名称")
    if (platform === "qq") {
      if (mode === "search") {
        const data = await qq("music.search.SearchCgiService", "DoSearchForQQMusicDesktop", { grp: 1, num_per_page: limit, page_num: page, query, search_type: 3 }, cookie, signal, { ct: 19, cv: 1859 })
        return listPage(data.body?.songlist?.list, (item) => ({ platform, id: item.dissid, title: item.dissname, creator: item.creator?.name, count: item.song_count }), options, data.meta?.sum)
      }
      // Reserve one slot for the account's special liked directory on page one.
      const rawLimit = page === 1 ? limit - 1 : limit, rawOffset = Math.max(0, options.offset - 1)
      const mine = await qqMine(cookie, signal, collection === "favorite" ? 0 : rawOffset, collection === "favorite" ? 1 : Math.max(1, rawLimit))
      if (collection === "favorite") {
        if (!mine?.encrypt_uin) throw new Error("QQ音乐登录态已失效，请重新登录")
        const data = await qq("music.musicasset.PlaylistFavRead", "CgiGetPlaylistFavInfo", { uin: mine.encrypt_uin, offset: options.offset, size: limit }, cookie, signal)
        return listPage(data.v_list, (item) => ({ platform, id: item.tid ?? item.id, title: item.title, creator: item.nickname, count: item.songnum }), options, data.total, data.hasmore)
      }
      const result = listPage(mine?.disslist?.slice(0, rawLimit), (item) => ({ platform, id: item.tid, title: item.diss_name, count: item.song_cnt }), { ...options, offset: rawOffset, limit: rawLimit }, mine?.totoal ?? mine?.total)
      if (page === 1) result.playlists.unshift(musicPlaylist({ platform, id: "liked" }))
      return { ...result, limit }
    }
    if (platform === "netease") {
      if (mode === "search") {
        const url = new URL("https://music.163.com/api/search/get/web"); url.search = new URLSearchParams({ s: query, type: "1000", offset: String(options.offset), limit: String(limit) }).toString()
        const { data } = await json(url.href, { signal, headers: { Cookie: cookie, Referer: "https://music.163.com/" } })
        checked(data)
        return listPage(data.result?.playlists ?? [], (item) => ({ platform, id: item.id, title: item.name, creator: item.creator?.nickname, count: item.trackCount }), options, data.result?.playlistCount ?? 0)
      }
      if (!values.MUSIC_U) throw new Error("请先登录网易云")
      const account = checked((await netease("nuser/account/get", {}, cookie, signal)).data)
      if (!account.account?.id) throw new Error("网易云登录态已失效，请重新登录")
      const data = checked((await netease("user/playlist", { uid: account.account.id, offset: options.offset, limit }, cookie, signal)).data)
      const list = data.playlist?.filter((item) => collection === "favorite" ? item.subscribed : !item.subscribed)
      return listPage(list, (item) => ({ platform, id: item.id, title: item.name, creator: item.creator?.nickname, count: item.trackCount }), options, undefined, data.more)
    }
    if (platform !== "kugou") throw new Error("不支持的歌单平台")
    if (mode === "search") {
      const data = await kg("/v1/search/special", { albumhide: 0, iscorrection: 1, keyword: query, nocollect: 0, page, pagesize: limit, platform: "AndroidFilter" }, undefined, "complexsearch.kugou.com", cookie, signal)
      return listPage(data.lists, (item) => ({ platform, id: item.gid || item.specialid, legacyId: item.specialid, title: item.specialname, creator: item.nickname, count: item.song_count }), options, data.total)
    }
    if (!values.userid || !values.token) throw new Error("请先登录酷狗")
    if (collection === "favorite") throw new Error("酷狗目前返回创建和收藏的合并列表，请选择“我的歌单”")
    const data = await kg("/v7/get_all_list", { plat: 1, userid: Number(values.userid) }, { userid: values.userid, token: values.token, total_ver: 979, type: 2, page, pagesize: limit }, "cloudlist.service.kugou.com", cookie, signal)
    return listPage(data.info ?? data.list ?? data.lists, (item) => ({ platform, id: item.global_collection_id || item.gid, title: item.name || item.list_name, count: item.count ?? item.songcount }), options, data.total)
  }
  async function playlist(platform, id, { page = 1, limit = 20, cookie = "", signal } = {}) {
    const initial = musicPlaylist({ platform, id }), options = pageOptions(page, limit)
    if (platform === "kugou" && /^\d+$/.test(id)) {
      const response = await readPage(initial.sourceUrl, { signal, asBytes: true })
      const html = (response.text ?? response.bytes.toString("utf8")).replace(/\\"/g, '"')
      const globalId = /["']global_collection_id["']\s*:\s*["'](collection_[\w-]+)["']/.exec(html)?.[1]
      if (!globalId) throw new Error("未解析到酷狗歌单，请在歌单搜索中按名称选择")
      const result = await playlist(platform, globalId, { page, limit, cookie, signal })
      return { ...result, info: musicPlaylist({ ...result.info, legacyId: id }) }
    }
    let info, tracks, total, hasMore, rawCount
    if (platform === "qq") {
      const liked = id === "liked", mine = liked ? await qqMine(cookie, signal, 0, 1) : undefined
      if (liked && !mine?.encrypt_uin) throw new Error("QQ音乐登录态已失效，请重新登录")
      const data = await qq("music.srfDissInfo.DissInfo", "CgiGetDiss", { disstid: liked ? 0 : Number(id), dirid: liked ? 201 : 0, tag: liked, song_begin: options.offset, song_num: limit, userinfo: liked, orderlist: true, onlysonglist: false, ...(liked ? { enc_host_uin: mine.encrypt_uin } : {}) }, cookie, signal)
      if (data.code || !Array.isArray(data.songlist)) throw new Error("QQ音乐未返回歌曲，请检查歌单可见性")
      info = { ...initial, title: data.dirinfo?.title || data.dirinfo?.dissname, creator: data.dirinfo?.creator?.nick, count: data.total_song_num }
      rawCount = data.songlist.length; tracks = parseSongs(platform, { data: { song: { list: data.songlist.slice(0, limit) } } }); total = data.total_song_num; hasMore = Boolean(data.hasmore)
    } else if (platform === "netease") {
      const data = checked((await netease("v3/playlist/detail", { id, n: 1000, s: 0 }, cookie, signal)).data), source = data.playlist
      if (!source || !Array.isArray(source.trackIds)) throw new Error("网易云未返回歌曲，请检查歌单可见性")
      info = { ...initial, title: source.name, creator: source.creator?.nickname, count: source.trackCount }
      const ids = source.trackIds.slice(options.offset, options.offset + limit).map((track) => ({ id: track.id }))
      const songs = ids.length ? checked((await netease("v3/song/detail", { c: JSON.stringify(ids) }, cookie, signal)).data).songs : []
      rawCount = ids.length; tracks = parseSongs(platform, { result: { songs } }); total = source.trackCount ?? source.trackIds.length; hasMore = options.offset + ids.length < source.trackIds.length
    } else {
      const data = await kg("/pubsongs/v2/get_other_list_file_nofilt", { area_code: 1, begin_idx: options.offset, plat: 1, type: 1, mode: 1, personal_switch: 1, extend_fields: "abtags,hot_cmt,popularization", pagesize: limit, global_collection_id: id }, undefined, undefined, cookie, signal)
      if (!Array.isArray(data.songs)) throw new Error("酷狗未返回歌曲，请检查歌单可见性")
      let detail = data.list_info || {}
      if (!detail.name && !detail.specialname) {
        const metadata = await kg("/v3/get_list_info", {}, { data: [{ global_collection_id: id }], userid: Number(cookies(cookie).userid || 0), token: cookies(cookie).token || "" }, "pubsongs.kugou.com", cookie, signal)
        detail = Array.isArray(metadata) ? metadata[0] || {} : metadata
      }
      info = { ...initial, title: detail.name || detail.list_name || detail.specialname, creator: detail.nickname || detail.username, count: data.count }
      rawCount = data.songs.length; total = data.count; hasMore = options.offset + rawCount < Number(total)
      tracks = data.songs.slice(0, limit).flatMap((song) => {
        try {
          const parts = String(song.name || "").split(" - "), artist = song.singerinfo?.map((item) => item.name).join(" / ") || (parts.length > 1 ? parts.shift() : "")
          if (parts.length > 1 && parts[0] === song.singerinfo?.[0]?.name) parts.shift()
          return [normalizeTrack({ platform, id: song.hash, title: parts.join(" - "), artist, album: song.albuminfo?.name, albumId: song.album_id, duration: song.timelen / 1000 })]
        } catch { return [] }
      })
    }
    return { info: musicPlaylist(info), tracks, page, limit, total: count(total), hasMore, unavailable: Math.max(0, Math.min(rawCount, limit) - tracks.length) }
  }
  async function radio({ limit = 5, exclude = [], cookie = "", signal } = {}) {
    if (!Number.isInteger(limit) || limit < 1 || limit > 10) throw new Error("推荐数量应为 1–10 首")
    const values = cookies(cookie)
    if (!(values.uin || values.wxuin) || !(values.qqmusic_key || values.qm_keyst)) throw new Error("请先登录 QQ音乐，再听私人电台")
    const data = await qq("music.radioProxy.MbTrackRadioSvr", "get_radio_track", { id: 99, num: limit, from: 0, scene: 0, song_ids: [] }, cookie, signal)
    if (!Array.isArray(data.tracks)) throw new Error("QQ音乐暂未返回个性推荐，请稍后重试")
    const seen = new Set(exclude.slice(-100)), raw = data.tracks.slice(0, limit)
    const tracks = parseSongs("qq", { data: { song: { list: raw } } }).filter((track) => { if (seen.has(track.id)) return false; seen.add(track.id); return true })
    return { tracks }
  }
  return { playlists, playlist, radio }
}
