/** @jsxImportSource @opentui/solid */
import { createSignal, For, Show } from "solid-js"
import type { TuiPlugin } from "@opencode-ai/plugin/tui"
import type { JSX } from "@opentui/solid"
import { LibraryStore } from "../library/store.mjs"
import { MusicService } from "../music/service.mjs"
import { MusicController } from "../music/player.mjs"
import { SharedMediaClient } from "../runtime/media-client.mjs"
import { MUSIC_PLATFORMS, musicPlatform, musicTrack, trackKey } from "../music/providers.mjs"
import { musicLoginPage, openMusicPage } from "../music/login.mjs"
import { mediaTime } from "../media/pixels.mjs"
import { cleanupMusicTemps } from "../music/temp.mjs"
import { musicPlaylist, playlistKey, playlistTarget } from "../music/playlists.mjs"

type API = Parameters<TuiPlugin>[0]
type Track = ReturnType<typeof musicTrack>
type Button = (props: { label: string; action: () => unknown; muted?: boolean }) => JSX.Element
type Account = Awaited<ReturnType<MusicService["settings"]["account"]>>
type Playlist = ReturnType<typeof musicPlaylist>
type PlaylistQuery = { mode: "search" | "mine"; platform: string; query?: string; collection?: "created" | "favorite" }

export function createMusicReader(api: API, library: LibraryStore, controller: SharedMediaClient, settings: {
  rows: () => number; active: () => boolean; canDialog: () => boolean; dialog: (render: () => JSX.Element) => void; close: () => void
}) {
  const service = new MusicService(library, { accountCoordinator: controller })
  const [state, setState] = createSignal<MusicController["state"]>({ queue: [], current: undefined, radio: false, playing: false, position: 0, duration: 0, volume: 50, repeat: "all", busy: false, error: "", preview: false })
  const [platform, setPlatform] = createSignal("all")
  const [results, setResults] = createSignal<Track[]>([])
  const [searching, setSearching] = createSignal(false)
  const [searchError, setSearchError] = createSignal("")
  const [accounts, setAccounts] = createSignal<Record<string, Account>>({})
  const [loginStatus, setLoginStatus] = createSignal("")
  const [loginBusy, setLoginBusy] = createSignal(false)
  const [playlistBusy, setPlaylistBusy] = createSignal(false)
  const [playlistNotice, setPlaylistNotice] = createSignal("")
  let playlistAbort: AbortController | undefined
  let lastPlaylistList: { query: PlaylistQuery; data: Awaited<ReturnType<MusicService["playlists"]>> } | undefined
  let lastPlaylist: Awaited<ReturnType<MusicService["playlist"]>> | undefined
  let searchAbort: AbortController | undefined, loginAbort: AbortController | undefined, loginPlatform = ""
  const loginTasks = new Set<Promise<void>>()
  function toast(message: string, error = false) { if (!api.lifecycle.signal.aborted) api.ui.toast({ title: "墨鱼音乐", message, variant: error ? "error" : "info" }) }
  function failed(error: unknown) { toast(error instanceof Error ? error.message : "音乐操作失败", true) }
  let previousError = ""
  const unsubscribe = controller.subscribe((value: MusicController["state"]) => {
    if (api.lifecycle.signal.aborted) return
    setState(value)
    if (value.error && value.error !== previousError) toast(value.error, true)
    previousError = value.error
  })
  async function refreshAccounts() {
    const values = await Promise.all(MUSIC_PLATFORMS.map((source) => service.settings.account(source.id)))
    if (!api.lifecycle.signal.aborted) setAccounts(Object.fromEntries(values.map((item) => [item.platform, item])))
  }
  const ready = Promise.all([cleanupMusicTemps(), controller.ready, refreshAccounts()]).catch(failed)
  function choosePlatform(next: string) {
    searchAbort?.abort(); searchAbort = undefined; setSearching(false); setResults([]); setSearchError(""); setPlatform(next)
    playlistAbort?.abort(); playlistAbort = undefined; setPlaylistBusy(false); setPlaylistNotice(""); lastPlaylistList = undefined; lastPlaylist = undefined
  }
  function action(track: Track) {
    settings.dialog(() => <api.ui.DialogSelect title={track.title} options={[
      { title: "立即播放", value: "play", description: `${musicPlatform(track.platform).name} · ${track.artist}` },
      { title: "加入播放队列", value: "add", description: "保留当前播放，最多 100 首" },
      { title: "打开平台歌曲页", value: "source", description: "在默认浏览器打开" },
    ]} onSelect={(item) => {
      settings.close()
      try {
        if (item.value === "source") { void openMusicPage(track.sourceUrl).catch(failed); return }
        void controller.add(track).then(() => item.value === "play" ? controller.play(trackKey(track)) : toast("已加入播放队列")).catch(failed)
      } catch (error) { failed(error) }
    }} />)
  }
  function showResults() {
    if (!results().length) { promptSearch(); return }
    settings.dialog(() => <api.ui.DialogSelect title={`音乐搜索 · ${results().length} 首`} placeholder="输入歌名或歌手过滤，选择后可播放或加入队列"
      options={results().map((track) => ({ title: `[${musicPlatform(track.platform).name}] ${track.title}`, value: trackKey(track), description: `${track.artist} · ${track.album} · ${mediaTime(track.duration)}` }))}
      onSelect={(item) => { settings.close(); const track = results().find((track) => trackKey(track) === item.value); if (track) action(track) }} />)
  }
  async function search(query: string) {
    searchAbort?.abort(); const abort = searchAbort = new AbortController()
    setSearching(true); setSearchError("")
    try {
      const result = await service.search(query, { platform: platform(), signal: abort.signal })
      if (abort.signal.aborted || api.lifecycle.signal.aborted) return
      setResults(result.tracks); setSearchError(result.errors.map((item) => `${musicPlatform(item.platform).name}：${item.message}`).join("；"))
      if (result.tracks.length && settings.active() && settings.canDialog()) showResults()
      else toast(result.tracks.length ? "搜索完成，点击「结果」查看" : result.errors.length ? "搜索失败，播放区显示了各平台原因" : "没有找到歌曲", !result.tracks.length)
    } catch (error) { if (!abort.signal.aborted) failed(error) }
    finally { if (searchAbort === abort) { searchAbort = undefined; setSearching(false) } }
  }
  function promptSearch() {
    setPlaylistNotice("")
    settings.dialog(() => <api.ui.DialogPrompt title={`搜索音乐 · ${platform() === "all" ? "全部平台" : musicPlatform(platform()).name}`} placeholder="输入歌曲名、歌手或专辑名"
      onCancel={settings.close} onConfirm={(query) => { settings.close(); if (query.trim()) void search(query.trim()) }} />)
  }
  function queue() {
    if (!state().queue.length) return promptSearch()
    settings.dialog(() => <api.ui.DialogSelect title={`播放队列 · ${state().queue.length} 首`} options={state().queue.map((track: Track) => ({ title: `${state().current && trackKey(track) === trackKey(state().current) ? "♪ " : ""}${track.title}`, value: trackKey(track), description: `${musicPlatform(track.platform).name} · ${track.artist}` }))}
      onSelect={(item) => { settings.close(); const track = state().queue.find((track: Track) => trackKey(track) === item.value); if (track) action(track) }} />)
  }
  function cancelPlaylistQuery() { playlistAbort?.abort(); playlistAbort = undefined; setPlaylistBusy(false); setPlaylistNotice("歌单查询已取消") }
  async function queryPlaylist(work: (signal: AbortSignal) => Promise<void>) {
    playlistAbort?.abort(); const abort = playlistAbort = new AbortController()
    setPlaylistBusy(true); setPlaylistNotice("正在查询歌单…")
    try { await work(abort.signal) }
    catch (error) {
      if (!abort.signal.aborted && !api.lifecycle.signal.aborted) { setPlaylistNotice(error instanceof Error ? error.message : "歌单查询失败"); failed(error) }
    } finally { if (playlistAbort === abort) { playlistAbort = undefined; setPlaylistBusy(false) } }
  }
  function showPlaylistList() {
    const saved = lastPlaylistList
    if (!saved) return playlistMenu()
    const { data, query } = saved
    settings.dialog(() => <api.ui.DialogSelect title={`${query.mode === "mine" ? query.collection === "favorite" ? "收藏歌单" : "我的歌单" : "歌单搜索"} · 第 ${data.page} 页`} placeholder="选择歌单查看歌曲，输入名称可过滤本页"
      options={[
        ...data.playlists.map((item: Playlist) => ({ title: `[${musicPlatform(item.platform).name}] ${item.title}`, value: playlistKey(item), description: `${item.count === undefined ? "歌曲数未知" : item.count + " 首"}${item.creator ? " · " + item.creator : ""}` })),
        ...(data.page > 1 ? [{ title: "‹ 上一页", value: "@prev", description: "查询上一页歌单" }] : []),
        ...(data.hasMore ? [{ title: "下一页 ›", value: "@next", description: "继续查询歌单" }] : []),
        { title: "返回歌单菜单", value: "@menu", description: "我的歌单、收藏、搜索或链接" },
      ]} onSelect={(item) => {
        settings.close()
        if (item.value === "@menu") return playlistMenu()
        if (item.value === "@prev" || item.value === "@next") return loadPlaylistList(query, data.page + (item.value === "@prev" ? -1 : 1))
        const selected = data.playlists.find((playlist: Playlist) => playlistKey(playlist) === item.value)
        if (selected) loadPlaylist(selected)
      }} />)
  }
  function loadPlaylistList(query: PlaylistQuery, page = 1) {
    void queryPlaylist(async (signal) => {
      const data = await service.playlists({ ...query, page, limit: 10, signal })
      if (signal.aborted || api.lifecycle.signal.aborted) return
      lastPlaylistList = { query, data }; lastPlaylist = undefined
      const errors = data.errors.map((item: { platform: string; message: string }) => `${musicPlatform(item.platform).name}：${item.message}`).join("；")
      setPlaylistNotice(errors || `歌单第 ${page} 页 · ${data.playlists.length} 个`)
      if (!data.playlists.length && !data.hasMore) { toast(errors || "没有找到歌单", Boolean(errors)); return }
      if (settings.active() && settings.canDialog()) showPlaylistList()
      else toast("歌单已加载，点击「歌单」继续查看")
    })
  }
  function showPlaylist() {
    const data = lastPlaylist
    if (!data) return playlistMenu()
    settings.dialog(() => <api.ui.DialogSelect title={`${data.info.title} · 第 ${data.page} 页`} placeholder={`本页 ${data.tracks.length} 首${data.total === undefined ? "" : " / 共 " + data.total + " 首"}，选择歌曲可播放或加入队列`}
      options={[
        ...(data.tracks.length ? [{ title: "＋ 本页歌曲加入队列", value: "@add", description: `加入本页 ${data.tracks.length} 首，按歌曲去重，保留当前播放` }] : []),
        ...data.tracks.map((track: Track) => ({ title: track.title, value: trackKey(track), description: `${track.artist} · ${mediaTime(track.duration)}` })),
        ...(data.page > 1 ? [{ title: "‹ 上一页歌曲", value: "@prev", description: "每页 20 首" }] : []),
        ...(data.hasMore ? [{ title: "下一页歌曲 ›", value: "@next", description: "继续查看，每页 20 首" }] : []),
        { title: "返回歌单列表", value: "@back", description: "保留当前查询和页码" },
      ]} onSelect={(item) => {
        settings.close()
        if (item.value === "@back") return lastPlaylistList ? showPlaylistList() : playlistMenu()
        if (item.value === "@prev" || item.value === "@next") return loadPlaylist(data.info, data.page + (item.value === "@prev" ? -1 : 1))
        if (item.value === "@add") {
          void controller.addMany(data.tracks).then((added) => toast(`已加入 ${added.added} 首${added.duplicates ? "，跳过 " + added.duplicates + " 首重复歌曲" : ""}`)).catch(failed)
          return
        }
        const track = data.tracks.find((track: Track) => trackKey(track) === item.value)
        if (track) action(track)
      }} />)
  }
  function loadPlaylist(playlist: Playlist, page = 1) {
    void queryPlaylist(async (signal) => {
      const data = await service.playlist(playlist.platform, playlist.id, { page, limit: 20, signal })
      if (signal.aborted || api.lifecycle.signal.aborted) return
      if (playlist.legacyId) data.info = musicPlaylist({ ...data.info, legacyId: playlist.legacyId })
      lastPlaylist = data
      setPlaylistNotice(`${data.info.title} · 第 ${page} 页${data.unavailable ? " · " + data.unavailable + " 首暂不可用" : ""}`)
      if (settings.active() && settings.canDialog()) showPlaylist()
      else toast("歌单歌曲已加载，点击「歌单」继续查看")
    })
  }
  function playlistMenu() {
    settings.dialog(() => <api.ui.DialogSelect title="音乐歌单" options={[
      ...(["all", "qq"].includes(platform()) ? [{ title: "我喜欢 · QQ音乐", value: "liked", description: "登录账号的爱心歌曲，支持分页" }] : []),
      { title: "我的歌单", value: "mine", description: "使用已登录账号，按当前平台筛选" },
      { title: "我收藏的歌单", value: "favorite", description: "QQ音乐 / 网易云收藏歌单" },
      { title: "搜索歌单", value: "search", description: "按名称搜索，支持全部或单个平台" },
      { title: "打开歌单链接 / ID", value: "link", description: "完整链接，或 qq:123、netease:123、kugou:ID" },
      ...(lastPlaylist || lastPlaylistList ? [{ title: "继续查看上次歌单", value: "resume", description: "返回上次列表或歌曲页" }] : []),
      ...(playlistBusy() ? [{ title: "取消歌单查询", value: "cancel", description: "停止当前查询" }] : []),
    ]} onSelect={(item) => {
      settings.close()
      if (item.value === "liked") return loadPlaylist(musicPlaylist({ platform: "qq", id: "liked" }))
      if (item.value === "cancel") return cancelPlaylistQuery()
      if (item.value === "resume") return lastPlaylist ? showPlaylist() : showPlaylistList()
      if (item.value === "mine" || item.value === "favorite") return loadPlaylistList({ mode: "mine", platform: platform(), collection: item.value === "favorite" ? "favorite" : "created" })
      if (item.value === "search") settings.dialog(() => <api.ui.DialogPrompt title="搜索歌单" placeholder="输入歌单名称，例如 通勤、轻音乐" onCancel={settings.close} onConfirm={(query) => { settings.close(); if (query.trim()) loadPlaylistList({ mode: "search", query: query.trim(), platform: platform() }) }} />)
      else settings.dialog(() => <api.ui.DialogPrompt title="打开歌单" placeholder="输入完整歌单链接，或 平台:歌单ID" onCancel={settings.close} onConfirm={(value) => {
        settings.close(); try { loadPlaylist(playlistTarget(value, platform() === "all" ? "qq" : platform())) } catch (error) { failed(error) }
      }} />)
    }} />)
  }
  function radioMenu() {
    settings.dialog(() => <api.ui.DialogSelect title="QQ音乐私人电台" options={[
      { title: state().radio ? "重新开始私人电台" : "开始私人电台", value: "start", description: "使用 QQ 个性推荐立即播放，下一首继续刷歌" },
      ...(state().radio ? [{ title: "退出私人电台", value: "stop", description: "停止电台，返回原播放队列并保持暂停" }] : []),
      { title: "我喜欢", value: "liked", description: "查看 QQ 音乐爱心歌曲" },
    ]} onSelect={(item) => {
      settings.close()
      if (item.value === "liked") return loadPlaylist(musicPlaylist({ platform: "qq", id: "liked" }))
      if (item.value === "stop") { void controller.stopRadio().catch(failed); return }
      setPlaylistNotice(""); setSearchError("")
      void controller.startRadio().catch(failed)
    }} />)
  }
  function remove() {
    if (!state().queue.length) return
    settings.dialog(() => <api.ui.DialogSelect title="整理音乐队列" options={[
      { title: "移除队列当前歌曲", value: "remove", description: state().queue.find((track: Track) => trackKey(track) === controller.currentKey)?.title || "未选择歌曲" },
      { title: "清空播放队列", value: "clear", description: "停止播放并清空队列" },
    ]} onSelect={(item) => {
      settings.close()
      if (item.value === "remove") void controller.remove().catch(failed)
      else settings.dialog(() => <api.ui.DialogConfirm title="清空播放队列" message="停止音乐并移除队列里的全部歌曲？平台账号和收藏不受影响。" onCancel={settings.close} onConfirm={() => { settings.close(); void controller.clear().catch(failed) }} />)
    }} />)
  }
  function cancelLogin() { loginAbort?.abort(); loginAbort = undefined; loginPlatform = ""; setLoginBusy(false); setLoginStatus("") }
  function startLogin(source: string) {
    cancelLogin()
    const abort = loginAbort = new AbortController(); loginPlatform = source
    setLoginBusy(true)
    setLoginStatus(`${musicPlatform(source).name}：正在生成二维码…`)
    const task = (async () => {
      let page: Awaited<ReturnType<typeof musicLoginPage>> | undefined
      try {
        await service.login(source, { signal: abort.signal, onSession: async (session: any) => {
          page = await musicLoginPage(session)
          abort.signal.throwIfAborted()
          await openMusicPage(page.url)
        }, onStatus: (status: string) => {
          if (abort.signal.aborted) return
          const message = status === "authorizing" ? "手机已确认，正在获取授权…" : status === "exchanging" ? "正在换取 QQ音乐登录态…" : status === "scanned" ? "已扫码，请在手机确认" : source === "qq" ? "请用手机 QQ 扫描浏览器里的二维码" : "请用手机 App 扫描浏览器里的二维码"
          setLoginStatus(`${musicPlatform(source).name}：${message}`)
        } })
        if (abort.signal.aborted) return
        await refreshAccounts(); setLoginStatus(`${musicPlatform(source).name}：登录成功，登录态已加密保存`); toast(`${musicPlatform(source).name}登录态已加密保存`)
      } catch (error) {
        if (!abort.signal.aborted && !api.lifecycle.signal.aborted) {
          setLoginStatus(`${musicPlatform(source).name}登录失败：${error instanceof Error ? error.message : "请重新扫码"}`)
          failed(error)
        }
      }
      finally {
        await page?.release().catch(() => {})
        if (loginAbort === abort) { loginAbort = undefined; loginPlatform = ""; setLoginBusy(false) }
      }
    })()
    loginTasks.add(task); void task.finally(() => loginTasks.delete(task)).catch(() => {})
  }
  function importCookie(source: string) {
    settings.dialog(() => <api.ui.DialogPrompt title={`${musicPlatform(source).name} · 导入网页登录态`} placeholder="粘贴 Cookie，仅在本地加密保存，不会发送到模型聊天" onCancel={settings.close}
      onConfirm={(cookie) => {
        settings.close(); if (loginPlatform === source) cancelLogin()
        void service.saveAccount(source, cookie).then(refreshAccounts).then(() => toast("登录态已导入，实际播放权限及有效期由平台决定")).catch(failed)
      }} />)
  }
  function accountMenu(source: string) {
    const current = accounts()[source]
    settings.dialog(() => <api.ui.DialogSelect title={`${musicPlatform(source).name} · ${current?.configured ? current.method === "qr" ? "已扫码保存" : "已导入登录态" : "未登录"}`} options={[
      ...(musicPlatform(source).qr ? [{ title: source === "qq" ? "手机 QQ 扫码登录" : "手机 App 扫码登录", value: "qr", description: "在默认浏览器显示二维码，确认后自动保存" }] : []),
      { title: "导入网页登录态", value: "cookie", description: "在平台官网登录后复制请求中的 Cookie" },
      { title: "打开平台官网", value: "home", description: "使用默认浏览器" },
      ...(loginPlatform === source ? [{ title: "取消本次扫码", value: "cancel", description: "停止接收这次扫码的登录结果" }] : []),
      ...(current?.configured ? [{ title: "退出本地账号", value: "logout", description: "删除此处保存的登录态，保留平台账号" }] : []),
    ]} onSelect={(item) => {
      settings.close()
      if (item.value === "qr") startLogin(source)
      else if (item.value === "cookie") importCookie(source)
      else if (item.value === "home") void openMusicPage(musicPlatform(source).home).catch(failed)
      else if (item.value === "cancel") cancelLogin()
      else settings.dialog(() => <api.ui.DialogConfirm title={`退出${musicPlatform(source).name}`} message="删除本地保存的登录态？使用该平台播放中的音乐会暂停。" onCancel={settings.close} onConfirm={() => {
        settings.close(); if (loginPlatform === source) cancelLogin()
        if (state().current?.platform === source) void controller.pause()
        void service.logout(source).then(refreshAccounts).then(() => toast("已删除本地登录态")).catch(failed)
      }} />)
    }} />)
  }
  async function accountsMenu() {
    try { await refreshAccounts() } catch (error) { failed(error); return }
    if (api.lifecycle.signal.aborted) return
    settings.dialog(() => <api.ui.DialogSelect title="音乐账号 · 各平台独立登录" options={MUSIC_PLATFORMS.map((source) => ({ title: source.name, value: source.id, description: accounts()[source.id]?.configured ? `${accounts()[source.id].method === "qr" ? "已扫码保存" : "已导入登录态"}${accounts()[source.id].nickname ? " · " + accounts()[source.id].nickname : ""}` : source.id === "qq" ? "未登录 · 支持手机 QQ 扫码" : "未登录 · 支持 App 扫码或 Cookie" }))}
      onSelect={(item) => { settings.close(); accountMenu(item.value) }} />)
  }
  function View(props: { Button: Button }) {
    const Button = props.Button, theme = () => api.theme.current
    const visibleQueue = () => state().queue.slice(0, Math.max(0, settings.rows() - 11)) as Track[]
    return <box height={settings.rows()} minHeight={settings.rows()} flexShrink={0}>
      <box flexShrink={0} height={1} flexDirection="row" gap={1}>
        <Button label="[全部]" action={() => choosePlatform("all")} muted={platform() !== "all"} />
        <For each={MUSIC_PLATFORMS}>{(source) => <Button label={`[${source.id === "netease" ? "网易" : source.id === "qq" ? "QQ" : "酷狗"}]`} action={() => choosePlatform(source.id)} muted={platform() !== source.id} />}</For>
        <Button label={playlistBusy() ? "[歌单…]" : "[歌单]"} action={playlistMenu} />
      </box>
      <Show when={settings.rows() >= 7}>
        <text fg={theme().text} height={1} wrapMode="none">{state().current?.title || (state().radio ? "QQ私人电台" : "搜一首喜欢的歌")}</text>
        <text fg={theme().textMuted} height={1} wrapMode="none">{state().radio ? `QQ私人电台${state().current ? " · " + state().current.artist : " · 正在获取推荐"}${state().preview ? " · 试听" : ""}` : state().current ? `${musicPlatform(state().current.platform).name} · ${state().current.artist}${state().preview ? " · 试听" : ""}` : "网易云 / QQ音乐 / 酷狗"}</text>
      </Show>
      <text fg={theme().textMuted} height={1} wrapMode="none">{state().busy ? "正在加载音频…" : `${mediaTime(state().position)} / ${mediaTime(state().duration || state().current?.duration || 0)} · 音量 ${state().volume}%`}</text>
      <box flexShrink={0} height={1} flexDirection="row" gap={1}>
        <Button label="[上一首]" action={() => controller.next(-1)} />
        <Button label={state().busy ? "[取消]" : state().playing ? "[暂停]" : "[播放]"} action={() => state().radio || state().queue.length ? controller.toggle() : promptSearch()} />
        <Button label="[下一首]" action={() => controller.next(1)} />
      </box>
      <Show when={settings.rows() >= 6}>
        <box flexShrink={0} height={1} flexDirection="row" gap={1}>
          <Button label="[−10s]" action={() => controller.seek(-10)} /><Button label="[+10s]" action={() => controller.seek(10)} />
          <Button label="[音−]" action={() => controller.volume(state().volume - 10)} /><Button label="[音+]" action={() => controller.volume(state().volume + 10)} />
        </box>
      </Show>
      <Show when={settings.rows() >= 9}>
        <box flexShrink={0} height={1} flexDirection="row" gap={1}>
          <Button label={state().radio ? "[私人电台]" : state().repeat === "one" ? "[单曲循环]" : "[列表循环]"} action={() => state().radio ? radioMenu() : controller.cycleRepeat()} /><Button label="[整理队列]" action={remove} />
          <Button label={state().radio ? "[退出电台]" : "[QQ电台]"} action={() => state().radio ? controller.stopRadio() : radioMenu()} />
        </box>
        <text fg={theme().textMuted} height={2} wrapMode="word">{(loginBusy() ? loginStatus() : "") || playlistNotice() || state().error || (searching() ? "正在搜索音乐…" : searchError()) || loginStatus() || "全局共享播放；小说可伴随音乐，视频优先。"}</text>
      <Show when={loginBusy()}><Button label="[取消扫码]" action={cancelLogin} /></Show>
      <Show when={playlistBusy()}><Button label="[取消歌单查询]" action={cancelPlaylistQuery} /></Show>
      </Show>
      <For each={visibleQueue()}>{(track) => <box height={1} flexShrink={0}><Button label={`${state().current && trackKey(track) === trackKey(state().current) ? "♪ " : "  "}${track.title} · ${musicPlatform(track.platform).name}`} action={() => action(track)} muted={state().current && trackKey(track) !== trackKey(state().current)} /></box>}</For>
    </box>
  }
  function jump() {
    if (!state().current || !state().duration) return
    settings.dialog(() => <api.ui.DialogPrompt title="跳转音乐 · 输入秒数" placeholder={`0–${Math.floor(state().duration)}`} onCancel={settings.close} onConfirm={(value) => {
      settings.close(); const seconds = Number(value)
      if (!Number.isFinite(seconds) || seconds < 0 || seconds > state().duration) { toast("请输入音频时长范围内的秒数", true); return }
      void controller.seek(seconds - state().position)
    }} />)
  }
  return { ready, View, search: promptSearch, results: showResults, queue, playlists: playlistMenu, accounts: accountsMenu, login: startLogin, state, pause: () => controller.pause(), seek: (delta: number) => controller.seek(delta), jump, remove,
    async dispose() { unsubscribe(); searchAbort?.abort(); playlistAbort?.abort(); cancelLogin(); await Promise.allSettled([...loginTasks]); await Promise.allSettled([...service.accountWrites.values()]) } }
}
