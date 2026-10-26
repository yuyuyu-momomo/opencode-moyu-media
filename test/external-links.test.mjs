import test from "node:test"
import assert from "node:assert/strict"
import { openExternalPage, copyExternalLink, runLinkCommand } from "../src/core/external-links.mjs"

test("打开命令非零退出、缺失及超时均失败，不把 spawn 当作成功", async () => {
  assert.equal(await runLinkCommand(process.execPath, ["-e", "process.stdout.write('ok')"]), "ok")
  await assert.rejects(runLinkCommand(process.execPath, ["-e", "process.exit(3)"]), /执行失败/)
  await assert.rejects(runLinkCommand("/moyu-missing-opener", []), /不可用/)
  await assert.rejects(runLinkCommand(process.execPath, ["-e", "setTimeout(()=>{},10000)"], { timeout: 60 }), /限定时间/)
})

test("Linux / macOS 使用独立参数传链接，失败时要求复制链接", async () => {
  const target = "https://item.jd.com/123.html?a=1&b=%22x%22", calls = []
  for (const [platform, command] of [["linux", "xdg-open"], ["darwin", "open"]]) {
    await openExternalPage(target, { platform, wsl: false, run: async (...args) => calls.push(args) })
    assert.deepEqual(calls.at(-1), [command, [target]])
  }
  await assert.rejects(openExternalPage(target, { platform: "linux", wsl: false, run: async () => { throw new Error("failed") } }), /复制链接/)
})

test("Windows / WSL 使用固定 PowerShell 脚本，特殊查询参数只经 stdin 传递", async () => {
  const target = "https://item.jd.com/123.html?x=%27&a=$(never)&b=`never`&c=%E4%B8%AD%E6%96%87", calls = []
  for (const [platform, wsl] of [["win32", false], ["linux", true]]) {
    await openExternalPage(target, { platform, wsl, run: async (...args) => calls.push(args) })
    const [command, args, options] = calls.at(-1)
    assert.match(command, /powershell\.exe$/i)
    assert.ok(args.includes("-EncodedCommand"))
    assert.equal(JSON.parse(Buffer.from(options.input, "base64").toString()).target, new URL(target).href)
    const script = Buffer.from(args.at(-1), "base64").toString("utf16le")
    assert.match(script, /Start-Process -FilePath/)
    assert.doesNotMatch(script, /never|item\.jd/)
  }
})

test("WSL 本地二维码页面转换为 Windows 路径，转换失败不报成功", async () => {
  const calls = [], target = "file:///tmp/moyu-login/%E7%99%BB%E5%BD%95.html"
  await openExternalPage(target, { platform: "linux", wsl: true, run: async (...args) => {
    calls.push(args)
    return args[0] === "wslpath" ? "\\\\wsl.localhost\\Ubuntu\\tmp\\moyu-login\\登录.html\n" : ""
  } })
  assert.deepEqual(calls[0], ["wslpath", ["-w", "/tmp/moyu-login/登录.html"]])
  assert.match(JSON.parse(Buffer.from(calls[1][2].input, "base64").toString()).target, /登录\.html$/)
  await assert.rejects(openExternalPage(target, { platform: "linux", wsl: true, run: async () => "" }), /复制链接/)
})

test("Windows 调用缺失时尝试 PATH；所有调用失败保留可复制的错误", async () => {
  const calls = []
  await openExternalPage("https://www.jd.com/", { platform: "linux", wsl: true, run: async (command) => { calls.push(command); if (command.startsWith("/")) throw new Error("missing") } })
  assert.equal(calls.at(-1), "powershell.exe")
  await assert.rejects(openExternalPage("https://www.jd.com/", { platform: "win32", run: async () => { throw new Error("missing") } }), /复制链接/)
})

test("剪贴板收到完整链接，Linux 按可用命令回退，全部失败要求手动复制", async () => {
  const target = "https://item.jd.com/123.html?a=1&b=2#coupon", calls = []
  await copyExternalLink(target, { platform: "linux", wsl: false, run: async (...args) => {
    calls.push(args)
    if (args[0] === "wl-copy") throw new Error("missing")
  } })
  assert.deepEqual(calls.map((c) => c[0]), ["wl-copy", "xclip"])
  assert.deepEqual(calls[1].slice(1), [["-selection", "clipboard"], { input: target }])
  await assert.rejects(copyExternalLink(target, { platform: "linux", wsl: false, run: async () => { throw new Error("missing") } }), /手动复制/)
  await copyExternalLink(target, { platform: "darwin", run: async (command, args, options) => { assert.equal(command, "pbcopy"); assert.equal(options.input, target) } })
})

test("WSL 剪贴板使用固定脚本且不读取或回传用户现有剪贴板", async () => {
  const target = "https://login.taobao.com/member/login.jhtml?from=插件&a=1"
  await copyExternalLink(target, { platform: "linux", wsl: true, run: async (command, args, options) => {
    const script = Buffer.from(args.at(-1), "base64").toString("utf16le")
    assert.match(script, /Set-Clipboard/)
    assert.doesNotMatch(script, /Get-Clipboard|taobao/)
    assert.equal(JSON.parse(Buffer.from(options.input, "base64").toString()).target, new URL(target).href)
  } })
})

test("拒绝可执行协议、嵌入账号及控制字符，不执行系统命令", async () => {
  const run = async () => { throw new Error("should never run") }
  for (const target of ["javascript:alert(1)", "data:text/html,hello", "https://user:password@jd.com/", "https://jd.com/\n", "not-a-url"]) {
    await assert.rejects(openExternalPage(target, { run }), /无效/)
    await assert.rejects(copyExternalLink(target, { run }), /无效/)
  }
})
