/** @jsxImportSource @opentui/solid */
import type { TuiPlugin, TuiPluginModule } from "@opencode-ai/plugin/tui"
import { createEffect, createMemo, createSignal, onCleanup, onMount, Show } from "solid-js"
import { ScrollBoxRenderable, type BoxRenderable, type MouseEvent } from "@opentui/core"
import { dirname, resolve, basename } from "node:path"
import { watch } from "node:fs"
import { access } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import { createHash } from "node:crypto"
import { chaptersOf, expandPath, listBooks, loadBook, pageAt, createPaginator } from "../library/text-reader.mjs"
import { LibraryStore } from "../library/store.mjs"
import { readingPosition, restorePosition } from "../library/reading-position.mjs"
import { sidebarDock, sidebarLayout } from "./sidebar-layout.mjs"
import { scaledVideoSize, VIDEO_SCALE_PRESETS } from "./video-size.mjs"
import { createVideoReader } from "./video"
import { createMusicReader } from "./music"
import { createShoppingReader } from "./shopping"
import { SharedMediaClient } from "../runtime/media-client.mjs"

type Book = Awaited<ReturnType<typeof loadBook>>
type Mode = "novel" | "video" | "music" | "shopping"
const prefix = "opencode-moyu:"
const pluginRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..")

const tui: TuiPlugin = async (host, options) => {
  const configuredRows = Number(options?.rows)
  const fixedRows = Number.isInteger(configuredRows) && configuredRows >= 4 ? Math.min(configuredRows, 40) : undefined
  const booksDir = expandPath(typeof options?.booksDir === "string" ? options.booksDir : resolve(pluginRoot, "books"))
  const keyFile = typeof options?.keyFile === "string" ? expandPath(options.keyFile) : undefined
  const library = new LibraryStore(booksDir, { keyFile })
  await library.ready()
  const playback = new SharedMediaClient(library, { onError: (error: unknown) => { if (!host.lifecycle.signal.aborted) host.ui.toast({ title: "全局播放器", message: String(error), variant: "error" }) } })
  try { await playback.ready } catch (error) { await playback.dispose(); throw error }
  const api: typeof host = { ...host, kv: {
    ready: true,
    get<T = unknown>(key: string, fallback?: T): T { return Object.hasOwn(playback.preferences || {}, key) ? playback.preferences[key] : host.kv.get<T>(key, fallback) },
    set(key: string, value: unknown) { void playback.setPreference(key, value).catch((error: unknown) => { if (!host.lifecycle.signal.aborted) host.ui.toast({ message: String(error), variant: "error" }) }) },
  } }
  const moyu = (api as typeof api & { moyu?: { collect: (query: string) => Promise<unknown>; registerNavigation?: (handler: (mode: string) => void | Promise<void>) => void; registerMusicLogin?: (handler: (platform: string) => void) => void } }).moyu
  const collect = moyu?.collect
  const [visible, setVisible] = createSignal(true)
  const [mode, setMode] = createSignal<Mode>("novel")
  const [book, setBook] = createSignal<Book>()
  const [offset, setOffset] = createSignal(0)
  const [height, setHeight] = createSignal(api.renderer.height)
  const [width, setWidth] = createSignal(api.renderer.width)
  const [bodyWidth, setBodyWidth] = createSignal(36)
  const [busy, setBusy] = createSignal(false)
  const [novelHeightPercent, setNovelHeightPercent] = createSignal<number>()
  const [novelWidthPercent, setNovelWidthPercent] = createSignal<number>()
  const [videoHeightPercent, setVideoHeightPercent] = createSignal<number | undefined>(100)
  const [videoWidthPercent, setVideoWidthPercent] = createSignal<number | undefined>(60)
  const [videoExpanded, setVideoExpanded] = createSignal(false)
  const [videoScalePercent, setVideoScalePercent] = createSignal(100)
  const [expandedScalePercent, setExpandedScalePercent] = createSignal(100)
  const [viewportHeight, setViewportHeight] = createSignal<number>()
  const [hostRows, setHostRows] = createSignal(0)
  // V2 does not expose the host's onboarding dismissal state; reserve its space.
  const onboarding = createMemo(() => options?.hostMajor === 2 || (!api.kv.get("dismissed_getting_started", false) && !api.state.provider.some(
    (provider) => provider.id !== "opencode" || Object.values(provider.models).some((model) => model.cost?.input !== 0),
  )))
  const compactMode = () => mode() === "music" || mode() === "shopping"
  const chromeRows = () => compactMode() ? 3 : (height() < 40 ? 10 : 13) + (mode() === "video" && options?.hostMajor === 2 ? 1 : 0)
  const minimumRows = () => options?.hostMajor !== 2 && height() < 40 ? 2 : 4
  const availableRows = createMemo(() => Math.max(minimumRows(), viewportHeight() === undefined
    ? height() - (onboarding() ? 31 : 20)
    : viewportHeight()! - chromeRows() - hostRows()))
  const normalVideoSize = createMemo(() => scaledVideoSize(
    videoWidthPercent() ?? Math.max(20, Math.min(75, (bodyWidth() + 4) / Math.max(1, width()) * 100)),
    videoHeightPercent() ?? Math.min(fixedRows ?? 24, availableRows()) / availableRows() * 100,
    videoScalePercent(),
  ))
  const videoSize = createMemo(() => videoExpanded() ? scaledVideoSize(75, 100, expandedScalePercent()) : normalVideoSize())
  const heightPercent = createMemo(() => compactMode() ? 100 : mode() === "video" ? !videoExpanded() && videoHeightPercent() === undefined && videoScalePercent() === 100 ? undefined : videoSize().height : novelHeightPercent())
  const widthPercent = createMemo(() => compactMode() ? 33 : mode() === "video" ? !videoExpanded() && videoWidthPercent() === undefined && videoScalePercent() === 100 ? undefined : videoSize().width : novelWidthPercent())
  const rows = createMemo(() => heightPercent() === undefined
    ? Math.min(fixedRows ?? 24, availableRows())
    : Math.max(minimumRows(), Math.floor(availableRows() * heightPercent()! / 100)))
  const paginate = createPaginator()
  const pages = createMemo((previous) => mode() !== "novel" || !visible()
    ? previous ?? [{ start: 0, text: "" }]
    : paginate(book()?.text ?? "", bodyWidth(), rows()))
  const page = createMemo(() => pageAt(pages(), offset()))
  const currentChapter = createMemo(() => book()?.chapters.findLast((item) => item.offset <= offset())?.title ?? "正文")
  let request = 0
  let ownsDialog = false
  let started = false

  const progressKey = (path: string) => prefix + "position:" + createHash("sha256").update(path).digest("hex")
  function save() {
    const current = book()
    if (current) {
      api.kv.set(progressKey(current.path), offset())
      api.kv.set(progressKey(current.path) + ":anchor", readingPosition(current, offset()))
    }
  }
  function toast(message: string, variant: "info" | "error" = "info") {
    api.ui.toast({ title: "墨鱼阅读", message, variant, duration: 3500 })
  }
  function closeDialog() {
    ownsDialog = false
    api.ui.dialog.clear()
  }
  function dialog(render: () => ReturnType<typeof api.ui.DialogPrompt>) {
    ownsDialog = true
    api.ui.dialog.replace(render, () => { ownsDialog = false })
  }
  const video = createVideoReader(api, library, {
    columns: bodyWidth, rows, active: () => mode() === "video" && visible() && api.route.current.name === "session",
    activate: () => selectMode("video"), dialog, close: closeDialog, collect: collect ? promptVideoCollection : undefined,
    beforePlay: (signal) => playback.claimVideo({ signal }), releasePlayback: (stopped) => playback.releaseVideo(stopped),
  })
  playback.onPauseVideo = () => video.pauseAndWait()
  const music = createMusicReader(api, library, playback, { rows, active: () => mode() === "music" && visible() && api.route.current.name === "session", canDialog: () => !ownsDialog, dialog, close: closeDialog })
  const shopping = createShoppingReader(api, library, { rows, active: () => mode() === "shopping" && visible() && api.route.current.name === "session", canDialog: () => !ownsDialog, dialog, close: closeDialog })
  await music.ready
  moyu?.registerNavigation?.((next) => {
    if (["novel", "video", "music", "shopping"].includes(next) && !api.lifecycle.signal.aborted) return navigateMoyu(next as Mode)
  })
  moyu?.registerMusicLogin?.((platform) => {
    if (api.lifecycle.signal.aborted) return
    selectMode("music"); setVisible(true); api.kv.set(prefix + "visible", true)
    music.login(platform)
  })
  function selectMode(next: Mode) {
    save()
    setMode(next)
    api.kv.set(prefix + "mode", next)
  }
  async function open(path: string, quiet = false) {
    const token = ++request
    setBusy(true)
    try {
      let next = await loadBook(path, api.state.path.directory || process.cwd(), { keyFile })
      if (!next.resourceId) next = await library.importLocal(next)
      if (token !== request || api.lifecycle.signal.aborted) return
      const anchor = book()?.path === next.path ? readingPosition(book()!, offset()) : api.kv.get(progressKey(next.path) + ":anchor")
      save()
      const stored = api.kv.get<number>(progressKey(next.path), 0)
      setOffset(restorePosition(next, anchor, stored))
      setBook(next)
      api.kv.set(prefix + "last", next.path)
      if (!quiet) {
        selectMode("novel")
        setVisible(true)
        api.kv.set(prefix + "visible", true)
        if (api.route.current.name !== "session") toast("已打开，进入会话后可在右侧栏阅读")
      }
    } catch (error) {
      if (token === request && !api.lifecycle.signal.aborted) toast(error instanceof Error ? error.message : String(error), "error")
    } finally {
      if (token === request) setBusy(false)
    }
  }
  function turn(direction: number) {
    if (mode() === "shopping") return
    if (mode() === "video") { video.seek(direction * 10); return }
    if (mode() === "music") { void music.seek(direction * 10); return }
    if (!book() || busy()) return
    const next = Math.max(0, Math.min(pages().length - 1, page() + direction))
    setOffset(pages()[next].start)
    save()
  }
  function toggle() {
    const next = !visible()
    setVisible(next)
    api.kv.set(prefix + "visible", next)
    if (!next && ownsDialog) closeDialog()
    if (next && api.route.current.name !== "session") toast("阅读面板位于会话右侧栏；进入会话后显示")
  }
  function promptFile() {
    dialog(() => <api.ui.DialogPrompt
      title="打开小说 · 本地 TXT / Markdown"
      placeholder="/mnt/d/books/小说.txt 或 ~/books/小说.txt"
      onCancel={closeDialog}
      onConfirm={(path) => { closeDialog(); void open(path) }}
    />)
  }
  function promptCollection() {
    dialog(() => <api.ui.DialogPrompt
      title="让当前模型采集小说"
      placeholder="例如：忘语的凡人修仙传，先采集20章；也可输入目录链接"
      onCancel={closeDialog}
      onConfirm={(query) => { closeDialog(); void collect?.(query) }}
    />)
  }
  function promptVideoCollection() {
    dialog(() => <api.ui.DialogPrompt
      title="让当前模型搜索 / 采集视频"
      placeholder="例如：热门；搜索 猫咪；下载这个 B 站链接，1080p"
      onCancel={closeDialog}
      onConfirm={(query) => { closeDialog(); void collect?.(`视频 ${query}`) }}
    />)
  }
  async function shelf() {
    try {
      const items = await listBooks(booksDir, { keyFile })
      if (api.lifecycle.signal.aborted) return
      dialog(() => <api.ui.DialogSelect
        title="书架 · 墨鱼阅读"
        placeholder="搜索书名，或选择采集 / 打开本地文件"
        options={[
          ...(collect ? [{ title: "＋ 让当前模型采集小说…", value: "moyu:collect", description: "输入书名、作者或目录链接" }] : []),
          ...(collect ? [{ title: "＋ 视频搜索 / 热门采集…", value: "moyu:video", description: "用当前模型浏览 B 站热门、搜索或下载视频" }] : []),
          { title: "＋ 打开本地文件…", value: "", description: "输入任意 TXT 文件路径" },
          ...items.map((item) => ({ title: item.title, value: item.path, description: item.progress || item.path })),
        ]}
        onSelect={(item) => {
          closeDialog()
          if (item.value === "moyu:collect") promptCollection()
          else if (item.value === "moyu:video") promptVideoCollection()
          else if (item.value) void open(String(item.value))
          else promptFile()
        }}
      />)
    } catch {
      promptFile()
    }
  }
  function openMoyu() {
    setVisible(true)
    api.kv.set(prefix + "visible", true)
    dialog(() => <api.ui.DialogSelect title="墨鱼 · 选择功能" placeholder="点击进入；购物比价和本地阅读不需要选择模型" options={[
      { title: "小说", value: "novel", description: "书架、章节目录与采集阅读" },
      { title: "视频", value: "video", description: "本地、B 站和 YouTube 视频" },
      { title: "音乐", value: "music", description: "聚合搜索、歌单与播放器" },
      { title: "购物", value: "shopping", description: "低价搜索、优惠券和加密收藏" },
    ]} onSelect={(item) => { closeDialog(); navigateMoyu(item.value as Mode) }} />)
  }
  function navigateMoyu(next: Mode) {
    selectMode(next); setVisible(true); api.kv.set(prefix + "visible", true)
    if (next === "novel") return shelf()
    if (next === "video") return video.shelf()
  }
  function chapters() {
    if (mode() !== "novel") selectMode("novel")
    const current = book()
    if (!current) return promptFile()
    const items = current.chapters.length ? current.chapters : chaptersOf(current.text)
    if (!items.length) return toast("没有识别到章节标题，可用「跳转进度」定位")
    dialog(() => <api.ui.DialogSelect
      title={`${current.title} · 目录`}
      placeholder="搜索章节"
      current={(items.findLast((item) => item.offset <= offset()) ?? items[0]).offset}
      options={items.map((item) => ({ title: item.title, value: item.offset, description: item.status === "ready" ? "已采集" : item.status === "pending" ? "待补正文" : item.status === "failed" ? "正文暂缺，可稍后补采" : undefined }))}
      onSelect={(item) => { closeDialog(); setOffset(Number(item.value)); save() }}
    />)
  }
  function supplement() {
    const current = book(), catalog = current?.catalog
    if (!catalog || !collect) return
    const chapter = current.chapters.findLast(item => item.offset <= offset()) ?? current.chapters[0]
    const source = { url: catalog.url, sourceId: catalog.sourceId }
    dialog(() => <api.ui.DialogSelect
      title="补采小说正文"
      options={[
        { title: "补采当前章节", value: "current", description: chapter?.status === "ready" ? "本章已采集，将跳过" : chapter?.title },
        { title: "继续补采 5 章", value: "next", description: "先补未尝试章节；已成功章节自动跳过" },
        { title: "刷新完整目录", value: "catalog", description: "保留成功正文，检查新增或分页目录；不采正文" },
      ]}
      onSelect={(item) => {
        closeDialog()
        if (item.value === "current" && chapter?.status === "ready") return toast("当前章节正文已采集")
        const query = item.value === "catalog" ? `小说：仅刷新并保存完整章节目录，moyu_catalog refresh=true；不采正文。来源参数 ${JSON.stringify(source)}`
          : `小说：从已保存目录补采${item.value === "current" ? "当前 1 章" : "5 章"}，调用 moyu_import，已采章节跳过，错误时停止。参数 ${JSON.stringify({ ...source, limit: item.value === "current" ? 1 : 5, ...(item.value === "current" ? { start: chapter?.index ?? 0 } : {}) })}`
        void collect(query).catch(error => toast(String(error), "error"))
      }}
    />)
  }
  function jump() {
    if (mode() === "shopping") return shopping.results()
    if (mode() === "music") return music.jump()
    if (mode() === "video") return video.jump()
    if (!book()) return promptFile()
    dialog(() => <api.ui.DialogPrompt
      title="跳转阅读进度 · 输入 0–100"
      placeholder="例如 35 或 35%"
      onCancel={closeDialog}
      onConfirm={(input) => {
        const value = Number(input.trim().replace(/%$/, ""))
        if (!input.trim() || !Number.isFinite(value) || value < 0 || value > 100) return toast("请输入 0–100 之间的百分比", "error")
        closeDialog()
        setOffset(Math.min(book()!.text.length - 1, Math.floor(book()!.text.length * value / 100)))
        save()
      }}
    />)
  }

  function setSize(percent?: number) {
    if (mode() === "video") {
      commitVideoScale()
      setVideoHeightPercent(percent)
      api.kv.set(prefix + "video:heightPercent", percent ?? "auto")
      resetVideoExpanded()
    } else {
      setNovelHeightPercent(percent)
      api.kv.set(prefix + "heightPercent", percent ?? null)
    }
    save()
  }
  function resetVideoExpanded() {
    setVideoExpanded(false)
    api.kv.set(prefix + "video:expanded", false)
  }
  function toggleVideoSize() {
    if (!videoExpanded()) { setExpandedScalePercent(100); api.kv.set(prefix + "video:expandedScalePercent", 100) }
    setVideoExpanded((previous) => !previous)
    api.kv.set(prefix + "video:expanded", videoExpanded())
  }
  function setViewerWidth(percent?: number) {
    if (mode() === "video") {
      commitVideoScale()
      setVideoWidthPercent(percent)
      api.kv.set(prefix + "video:widthPercent", percent ?? "auto")
      resetVideoExpanded()
    } else {
      setNovelWidthPercent(percent)
      api.kv.set(prefix + "widthPercent", percent ?? null)
    }
    save()
  }
  function commitVideoScale() {
    if (videoScalePercent() === 100) return
    const current = normalVideoSize()
    setVideoWidthPercent(current.width); setVideoHeightPercent(current.height); setVideoScalePercent(100)
    api.kv.set(prefix + "video:widthPercent", current.width)
    api.kv.set(prefix + "video:heightPercent", current.height)
    api.kv.set(prefix + "video:scalePercent", 100)
  }
  function scaleVideo(percent: number) {
    if (videoExpanded()) {
      const next = scaledVideoSize(75, 100, percent)
      setExpandedScalePercent(next.percent)
      api.kv.set(prefix + "video:expandedScalePercent", next.percent)
    } else {
      // Freeze automatic dimensions before applying a ratio, so changing the
      // scale never switches an automatic height to a different baseline.
      if (videoWidthPercent() === undefined) {
        const baseline = Math.max(20, Math.min(75, (bodyWidth() + 4) / width() * 100))
        setVideoWidthPercent(baseline); api.kv.set(prefix + "video:widthPercent", baseline)
      }
      if (videoHeightPercent() === undefined) {
        const baseline = Math.min(100, Math.min(fixedRows ?? 24, availableRows()) / availableRows() * 100)
        setVideoHeightPercent(baseline); api.kv.set(prefix + "video:heightPercent", baseline)
      }
      const next = scaledVideoSize(videoWidthPercent()!, videoHeightPercent()!, percent)
      setVideoScalePercent(next.percent)
      api.kv.set(prefix + "video:scalePercent", next.percent)
    }
  }
  function stepVideoScale(direction: number) {
    const current = videoSize()
    const next = Math.max(25, Math.min(current.maximum, current.percent + direction * 10))
    if (next === current.percent) return toast(direction > 0 ? videoExpanded() ? "已达到当前终端可用空间上限" : "已达到当前播放区上限，可使用「大画面」增加空间" : "已达到最小缩放比例")
    scaleVideo(next)
  }
  function customVideoScale() {
    const maximum = videoSize().maximum
    dialog(() => <api.ui.DialogPrompt title={`视频缩放 · 输入 25–${maximum}%`} placeholder={`当前 ${videoSize().percent}%，宽高一起调整`} onCancel={closeDialog}
      onConfirm={(input) => {
        const value = Number(input.trim().replace(/%$/, ""))
        if (!input.trim() || !Number.isFinite(value) || value < 25 || value > maximum) return toast(`请输入 25–${maximum} 之间的百分比`, "error")
        closeDialog(); scaleVideo(value)
      }} />)
  }
  function videoScaleMenu() {
    const current = videoSize()
    const presets = [...new Set([...VIDEO_SCALE_PRESETS.filter((value) => value <= current.maximum), current.percent])].sort((a, b) => a - b)
    dialog(() => <api.ui.DialogSelect title="视频等比例缩放" placeholder="100% 为基准尺寸；宽高一起调整，画面保持原比例" current={String(current.percent)} options={[
      ...presets.map((value) => ({ title: `缩放 ${value}%${value === 100 ? "（基准）" : ""}`, value: String(value), description: "受终端可用空间和最小尺寸限制" })),
      { title: "自定义比例…", value: "custom", description: `输入 25–${current.maximum}%` },
    ]} onSelect={(item) => { closeDialog(); if (item.value === "custom") customVideoScale(); else scaleVideo(Number(item.value)) }} />)
  }
  function customSize() {
    dialog(() => <api.ui.DialogPrompt
      title={`${mode() === "video" ? "视频播放区" : "阅读区"}高度 · 输入 10–100%`}
      placeholder="例如 75，按可用正文高度计算"
      onCancel={closeDialog}
      onConfirm={(input) => {
        const value = Number(input.trim().replace(/%$/, ""))
        if (!input.trim() || !Number.isFinite(value) || value < 10 || value > 100) return toast("请输入 10–100 之间的百分比", "error")
        closeDialog()
        setSize(Math.round(value))
      }}
    />)
  }
  function heightSize() {
    const selected = heightPercent() === undefined ? "auto" : String(heightPercent())
    dialog(() => <api.ui.DialogSelect
      title={`${mode() === "video" ? "视频播放区" : "阅读区"}高度`}
      placeholder={mode() === "video" ? "单独保存视频高度，不影响小说阅读" : "点击选择高度，设置自动保存"}
      options={[
        { title: "自动高度", value: "auto", description: "恢复默认正文行数" },
        ...[25, 50, 75, 100].map((value) => ({ title: `高度 ${value}%`, value: String(value), description: "占可用正文高度的比例" })),
        { title: "自定义高度…", value: "custom", description: "输入 10–100%" },
      ]}
      current={selected}
      onSelect={(item) => {
        closeDialog()
        if (item.value === "custom") return customSize()
        setSize(item.value === "auto" ? undefined : Number(item.value))
      }}
    />)
  }

  function widthSize() {
    const selected = widthPercent() === undefined ? "auto" : String(widthPercent())
    dialog(() => <api.ui.DialogSelect
      title={`${mode() === "video" ? "视频播放区" : "阅读区"}宽度`}
      placeholder={mode() === "video" ? "单独保存视频宽度，主会话至少保留 44 列" : "点击选择侧栏宽度，按会话可用宽度计算"}
      options={[
        { title: "默认宽度", value: "auto", description: "恢复 OpenCode 原有侧栏宽度" },
        ...(mode() === "video" ? [33, 40, 50, 60, 75] : [25, 33, 40, 50, 60]).map((value) => ({ title: `宽度 ${value}%`, value: String(value), description: "同时保留主会话的输入空间" })),
      ]}
      current={selected}
      onSelect={(item) => {
        closeDialog()
        const percent = item.value === "auto" ? undefined : Number(item.value)
        setViewerWidth(percent)
      }}
    />)
  }
  function size() {
    dialog(() => <api.ui.DialogSelect
      title={mode() === "video" ? "视频播放区域大小" : "阅读区域大小"}
      placeholder="点击选择要调整的尺寸"
      options={[
        ...(mode() === "video" && options?.hostMajor === 2 ? [{ title: videoExpanded() ? "还原视频窗口" : "放大视频窗口", value: "expand", description: "放大时收起侧栏原生信息，点还原恢复" }] : []),
        ...(mode() === "video" && options?.hostMajor === 2 ? [{ title: "等比例缩放…", value: "scale", description: "宽高一起缩小或放大，也可输入百分比" }] : []),
        ...(options?.hostMajor === 2 ? [{ title: "调整宽度", value: "width", description: "改变侧栏宽度并重新分页" }] : []),
        { title: "调整高度", value: "height", description: "改变正文高度，页码和按钮同步移动" },
      ]}
      onSelect={(item) => { closeDialog(); if (item.value === "expand") toggleVideoSize(); else if (item.value === "scale") videoScaleMenu(); else item.value === "width" ? widthSize() : heightSize() }}
    />)
  }

  const resize = (nextWidth = api.renderer.width, nextHeight = api.renderer.height) => { setHeight(nextHeight); setWidth(nextWidth) }
  let refresh: ReturnType<typeof setTimeout> | undefined
  const watcher = watch(booksDir, (_event, filename) => {
    const current = book()
    if (!current || filename?.toString() !== basename(current.path)) return
    clearTimeout(refresh)
    refresh = setTimeout(() => {
      if (api.lifecycle.signal.aborted || book()?.path !== current.path) return
      void access(current.path).then(() => open(current.path, true)).catch((error) => {
        if (error.code !== "ENOENT" || api.lifecycle.signal.aborted || book()?.path !== current.path) return
        setBook(undefined)
        setOffset(0)
        api.kv.set(progressKey(current.path), 0)
        api.kv.set(prefix + "last", "")
      })
    }, 100)
  })
  function removeBook() {
    if (mode() === "shopping") return shopping.favorites()
    if (mode() === "music") return music.remove()
    if (mode() === "video") return video.remove()
    const current = book()
    if (!current?.resourceId) return toast("请先在书架打开要删除的小说")
    dialog(() => <api.ui.DialogConfirm
      title="从资料库删除"
      message={`删除《${current.title}》的加密副本和采集缓存？外部原文件保留。`}
      onCancel={closeDialog}
      onConfirm={() => {
        closeDialog()
        void library.deleteResource(current.resourceId).then(() => {
          if (api.lifecycle.signal.aborted) return
          api.kv.set(progressKey(current.path), 0)
          api.kv.set(progressKey(current.path) + ":anchor", null)
          if (book()?.path === current.path) {
            api.kv.set(prefix + "last", "")
            setBook(undefined)
            setOffset(0)
          }
          toast("已删除加密副本和采集缓存")
        }).catch((error) => toast(String(error), "error"))
      }}
    />)
  }
  api.renderer.on("resize", resize)
  api.lifecycle.onDispose(() => {
    ++request
    watcher.close()
    clearTimeout(refresh)
    save()
    shopping.dispose()
    const disposing = Promise.all([video.dispose(), music.dispose()]).then(() => playback.dispose())
    api.renderer.off("resize", resize)
    if (ownsDialog) closeDialog()
    return disposing
  })

  createEffect(() => {
    if (!api.kv.ready || started) return
    started = true
    const savedSize = Number(api.kv.get<number | null>(prefix + "heightPercent", null))
    if (Number.isFinite(savedSize) && savedSize >= 10 && savedSize <= 100) setNovelHeightPercent(savedSize)
    const savedWidth = Number(api.kv.get<number | null>(prefix + "widthPercent", null))
    if (Number.isFinite(savedWidth) && savedWidth >= 20 && savedWidth <= 60) setNovelWidthPercent(savedWidth)
    const videoHeight = api.kv.get<number | string>(prefix + "video:heightPercent", 100)
    if (videoHeight === "auto") setVideoHeightPercent(undefined)
    else if (Number.isFinite(Number(videoHeight)) && Number(videoHeight) > 0 && Number(videoHeight) <= 100) setVideoHeightPercent(Number(videoHeight))
    const videoWidth = api.kv.get<number | string>(prefix + "video:widthPercent", 60)
    if (videoWidth === "auto") setVideoWidthPercent(undefined)
    else if (Number.isFinite(Number(videoWidth)) && Number(videoWidth) > 0 && Number(videoWidth) <= 75) setVideoWidthPercent(Number(videoWidth))
    const scale = Number(api.kv.get<number>(prefix + "video:scalePercent", 100))
    if (Number.isFinite(scale) && scale >= 25 && scale <= 200) setVideoScalePercent(scale)
    const expandedScale = Number(api.kv.get<number>(prefix + "video:expandedScalePercent", 100))
    if (Number.isFinite(expandedScale) && expandedScale >= 25 && expandedScale <= 100) setExpandedScalePercent(expandedScale)
    setVideoExpanded(api.kv.get<boolean>(prefix + "video:expanded", false))
    setVisible(api.kv.get<boolean>(prefix + "visible", true))
    if (api.kv.get<string>(prefix + "mode", "novel") === "video" && !playback.state?.playing && !playback.state?.videoOwner) setMode("video")
    else if (api.kv.get<string>(prefix + "mode", "novel") === "music") selectMode("music")
    else if (api.kv.get<string>(prefix + "mode", "novel") === "shopping") selectMode("shopping")
    const initial = typeof options?.file === "string" ? options.file : api.kv.get<string>(prefix + "last", "")
    void open(initial || resolve(pluginRoot, "books/夜班便利店.txt"), true)
  })

  let hadVideo = false
  createEffect(() => {
    const showingVideo = mode() === "video" && visible() && api.route.current.name === "session"
    if (hadVideo === showingVideo) return
    hadVideo = showingVideo
    void (showingVideo ? playback.claimVideo() : playback.releaseVideo(video.pauseAndWait())).catch((error) => toast(String(error), "error"))
  })

  api.keymap.registerLayer({
    commands: [{ name: "moyu.toggle", title: "墨鱼阅读：显示 / 隐藏", category: "Moyu 阅读", namespace: "palette", run: toggle }],
    bindings: [{ key: "alt+m", cmd: "moyu.toggle", desc: "显示 / 隐藏小说" }],
  })
  api.keymap.registerLayer({
    mode: "base",
    commands: [
      { name: "moyu.open", title: "墨鱼：选择小说、视频、音乐或购物", slashName: "moyu", run: openMoyu },
      { name: "moyu.video", title: "摸鱼视频：打开视频库", slashName: "video", run: () => { selectMode("video"); setVisible(true); return video.shelf() } },
      { name: "moyu.music", title: "墨鱼音乐：打开聚合播放器", slashName: "music", run: () => { selectMode("music"); setVisible(true); api.kv.set(prefix + "visible", true) } },
      { name: "moyu.shopping", title: "墨鱼购物：搜索低价与优惠券", run: () => navigateMoyu("shopping") },
      { name: "moyu.shelf", title: "墨鱼阅读：书架 / 打开文件", slashName: "read", run: shelf },
      { name: "moyu.chapters", title: "墨鱼阅读：章节目录", slashName: "chapters", run: chapters },
      { name: "moyu.jump", title: "墨鱼阅读：跳转进度", run: jump },
      { name: "moyu.size", title: "墨鱼阅读：调整阅读区域大小", slashName: "readsize", run: size },
      { name: "moyu.delete", title: "墨鱼阅读：删除当前资料", run: removeBook },
      { name: "moyu.next", title: "墨鱼阅读：下一页", enabled: () => visible() && api.route.current.name === "session", run: () => turn(1) },
      { name: "moyu.prev", title: "墨鱼阅读：上一页", enabled: () => visible() && api.route.current.name === "session", run: () => turn(-1) },
    ].map((item) => ({ ...item, category: "Moyu 阅读", namespace: "palette" })),
    bindings: [
      { key: "alt+o", cmd: "moyu.shelf", desc: "打开书架" },
      { key: "alt+c", cmd: "moyu.chapters", desc: "章节目录" },
      { key: "alt+g", cmd: "moyu.jump", desc: "跳转进度" },
      { key: "<leader>j", cmd: "moyu.size", desc: "调整阅读区域大小" },
      { key: "alt+d", cmd: "moyu.delete", desc: "删除当前资料" },
      { key: "alt+right", cmd: "moyu.next", desc: "下一页" },
      { key: "alt+left", cmd: "moyu.prev", desc: "上一页" },
    ],
  })

  function Reader() {
    let viewport: BoxRenderable | undefined
    let scrollbox: ScrollBoxRenderable | undefined
    let readerNode: BoxRenderable | undefined
    let docking: ReturnType<typeof sidebarDock>
    let mountTimer: ReturnType<typeof setTimeout> | undefined
    const [layout, setLayout] = createSignal<ReturnType<typeof sidebarLayout>>()
    const measure = () => { if (viewport && !viewport.isDestroyed && Number.isFinite(viewport.height) && viewport.height > 0) setViewportHeight(viewport.height) }
    const applyWidth = () => layout()?.apply(visible() ? widthPercent() : undefined, width())
    // Native resize notifications can arrive before the frame commits its size.
    const frameResized = () => queueMicrotask(() => { if (!api.lifecycle.signal.aborted) applyWidth() })
    createEffect(applyWidth)
    const dock = () => {
      if (options?.hostMajor !== 2 || api.lifecycle.signal.aborted) return
      measure()
      if (visible() && readerNode && !readerNode.isDestroyed && viewport && !docking) docking = sidebarDock(readerNode, viewport, dock, scrollbox)
      setHostRows(docking?.measure(visible(), mode() === "video" && videoExpanded()) ?? 0)
      if (!visible()) docking = undefined
    }
    createEffect(dock)
    api.renderer.on("frame", dock)
    onMount(() => {
      mountTimer = setTimeout(() => { if (readerNode && !readerNode.isDestroyed) { observe(readerNode); dock() } }, 0)
    })
    function observe(node: BoxRenderable) {
      // V1's scrollbox also contains host cards; retain its conservative height budget.
      if (options?.hostMajor !== 2) return
      if (viewport) return
      for (let parent = node.parent; parent; parent = parent.parent) {
        if (!(parent instanceof ScrollBoxRenderable)) continue
        scrollbox = parent
        viewport = parent.viewport
        const sizing = sidebarLayout(parent)
        setLayout(sizing)
        sizing?.frame?.on("resized", frameResized)
        viewport.on("resized", measure)
        measure()
        dock()
        break
      }
    }
    onCleanup(() => {
      video.pause()
      void playback.releaseVideo(video.pauseAndWait()).catch(() => {})
      clearTimeout(mountTimer)
      viewport?.off("resized", measure)
      layout()?.frame?.off("resized", frameResized)
      layout()?.restore()
      api.renderer.off("frame", dock)
      docking?.restore()
    })
    const theme = () => api.theme.current
    const gap = () => height() < 40 ? 0 : 1
    const percentage = () => page() === pages().length - 1 ? 100 : Math.floor((pages()[page()].start / (book()?.text.length || 1)) * 100)
    function Button(props: { label: string; action: () => unknown; muted?: boolean }) {
      let pressed = false
      // Opening a modal on mouse-down lets the same click's release close it.
      // Finish and consume the click before adding the new dialog to the tree.
      const click = (event: MouseEvent) => {
        const activate = pressed && event.button === 0 && !event.isDragging
        pressed = false
        if (!activate) return
        event.preventDefault()
        event.stopPropagation()
        queueMicrotask(() => {
          if (api.lifecycle.signal.aborted) return
          try { void Promise.resolve(props.action()).catch((error) => toast(error instanceof Error ? error.message : String(error), "error")) }
          catch (error) { toast(error instanceof Error ? error.message : String(error), "error") }
        })
      }
      return <text fg={props.muted ? theme().textMuted : theme().primary} selectable={false} wrapMode="none"
        onMouseDown={(event) => { if (event.button === 0) { pressed = true; event.preventDefault(); event.stopPropagation() } }}
        onMouseOut={() => { pressed = false }} onMouseDrag={() => { pressed = false }} onMouseUp={click}>{props.label}</text>
    }
    return <Show when={visible()} fallback={<box height={1}><Button label="[显示阅读]" action={toggle} /></box>}>
      <box ref={(node: BoxRenderable) => { readerNode = node }} flexShrink={0} width="100%" marginBottom={options?.hostMajor === 2 ? "auto" : 0} height={book() || mode() !== "novel" ? rows() + chromeRows() : undefined} onSizeChange={function(this: BoxRenderable) { readerNode = this; setBodyWidth(Math.max(2, Math.floor(this.width))); observe(this); dock() }}>
        <box flexShrink={0} height={1} flexDirection="row" justifyContent="space-between">
          <text fg={theme().text}><b>{bodyWidth() >= 43 ? "墨鱼多媒体" : "墨鱼"}</b></text>
          <Button label="[隐藏]" action={toggle} muted />
        </box>
        <box flexShrink={0} height={1} flexDirection="row" gap={1}>
            <Button label="[小说]" action={() => selectMode("novel")} muted={mode() !== "novel"} />
            <Button label="[视频]" action={() => selectMode("video")} muted={mode() !== "video"} />
            <Button label="[音乐]" action={() => selectMode("music")} muted={mode() !== "music"} />
            <Button label="[购物]" action={() => selectMode("shopping")} muted={mode() !== "shopping"} />
        </box>
        <Show when={mode() === "shopping"} fallback={<>
        <Show when={mode() === "music"} fallback={<box flexShrink={0} height={1} flexDirection="row" gap={2}>
          <Button label={mode() === "video" ? "[视频库]" : "[书架]"} action={() => mode() === "video" ? video.shelf() : shelf()} />
          <Button label={mode() === "video" ? "[搜索]" : "[目录]"} action={() => mode() === "video" ? video.search() : chapters()} />
          <Show when={mode() === "video"}><Button label="[热门]" action={() => video.popular()} /></Show>
          <Show when={mode() === "novel" && book()?.catalog && collect}><Button label="[补采]" action={supplement} /></Show>
          <Button label="[删除]" action={removeBook} />
        </box>}>
          <box flexShrink={0} height={1} flexDirection="row" gap={1}>
            <Button label="[搜索]" action={music.search} />
            <Button label="[结果]" action={music.results} />
            <Button label={`[队列${music.state().queue.length}]`} action={music.queue} />
            <Button label="[账号]" action={music.accounts} />
          </box>
        </Show>
        </>}>
          <box flexShrink={0} height={1} flexDirection="row" gap={1}>
            <Button label="[搜索]" action={shopping.search} />
            <Button label="[结果]" action={shopping.results} />
            <Button label="[收藏]" action={shopping.favorites} />
          </box>
        </Show>
        <Show when={!compactMode()}>
        <box flexShrink={0} height={1 + gap()} flexDirection="row" gap={mode() === "video" ? 1 : 2}>
          <Show when={options?.hostMajor === 2}><Button label={`[宽度 ${widthPercent() === undefined ? "自动" : Math.round(widthPercent()! * 10) / 10 + "%"}]`} action={widthSize} /></Show>
          <Button label={`[高度 ${heightPercent() === undefined ? "自动" : Math.round(heightPercent()! * 10) / 10 + "%"}]`} action={heightSize} />
          <Show when={mode() === "video" && options?.hostMajor === 2}><Button label={videoExpanded() ? "[还原]" : "[大画面]"} action={toggleVideoSize} /></Show>
        </box>
        <Show when={mode() === "video" && options?.hostMajor === 2}>
          <box height={1} flexShrink={0} flexDirection="row" gap={1}>
            <Button label="[−]" action={() => stepVideoScale(-1)} muted={videoSize().percent <= 25} />
            <Button label={`[缩放${videoSize().percent}%]`} action={videoScaleMenu} />
            <Button label="[+]" action={() => stepVideoScale(1)} muted={videoSize().percent >= videoSize().maximum} />
            <Button label="[重置]" action={() => scaleVideo(100)} />
          </box>
        </Show>
        </Show>
        <Show when={mode() === "music"} fallback={<Show when={mode() === "video"}><video.View Button={Button} gap={gap()} /></Show>}><music.View Button={Button} /></Show>
        <Show when={mode() === "shopping"}><shopping.View Button={Button} /></Show>
        <Show when={mode() === "novel"}>
        <Show when={book()} fallback={<Button label={busy() ? "正在打开…" : "[点击打开本地小说]"} action={shelf} />}>
          <box flexShrink={0} height={2 + gap()}>
            <Button label={book()?.title ?? ""} action={shelf} muted />
            <Button label={currentChapter()} action={chapters} />
          </box>
          <box flexShrink={0} height={rows()} minHeight={rows()}>
            <text fg={theme().text} width="100%" height="100%" wrapMode="none">{pages()[page()].text}</text>
          </box>
          <box flexShrink={0} height={4 + gap()} paddingTop={gap()}>
            <box flexShrink={0} height={1} flexDirection="row" justifyContent="space-between">
              <Button label={`${page() + 1} / ${pages().length} 页 · ${percentage()}%`} action={jump} muted />
            </box>
            <box flexShrink={0} height={1} flexDirection="row" justifyContent="space-between">
              <Button label="[‹ 上一页]" action={() => turn(-1)} />
              <Button label="[下一页 ›]" action={() => turn(1)} />
            </box>
            <text fg={theme().textMuted} height={1} wrapMode="none">{book()?.catalog ? `正文 ${book()!.catalog.downloaded}/${book()!.catalog.total} 章${book()!.catalog.complete === false ? " · 目录未完整" : ""}` : "点击上方按钮调整宽高"}</text>
          </box>
        </Show>
        </Show>
      </box>
    </Show>
  }
  api.slots.register({ order: 50, slots: { sidebar_content: () => <Reader /> } })
}

export default { id: "opencode-moyu", tui } satisfies TuiPluginModule
