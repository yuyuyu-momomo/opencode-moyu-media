#!/usr/bin/env python3
"""Exercise shopping sidebar clicks in an isolated OpenCode 2 terminal.

Uses synthetic encrypted favorites and one synthetic account. Does not query stores, open login pages,
use account credentials, call a model or touch the user's OpenCode configuration.
Requires an installed OpenCode 2 and tmux.
"""
import base64
import json
import os
from pathlib import Path
import shlex
import socket
import subprocess
import tempfile
import time
import unicodedata
import urllib.request

ROOT = Path(__file__).resolve().parent.parent
WORK = Path(tempfile.mkdtemp(prefix="moyu-shopping-smoke-"))
CONFIG, PROJECT = WORK / "config/opencode", WORK / "project"
CONFIG.mkdir(parents=True)
PROJECT.mkdir()
BINARY = os.environ.get("MOYU_OPENCODE_BINARY", "opencode")
ENV = os.environ | {f"XDG_{key}_HOME": str(WORK / key.lower()) for key in ["CONFIG", "DATA", "STATE", "CACHE"]}
ENV.update(OPENCODE_CONFIG_DIR=str(CONFIG), OPENCODE_SERVER_PASSWORD="moyu-shopping-local-test", OPENCODE_SERVER_USERNAME="opencode", TERM="xterm-256color")
ENV.pop("OPENCODE_CONFIG", None)
ENV.pop("OPENCODE_CONFIG_CONTENT", None)
subprocess.run(["node", str(ROOT / "dist/install.mjs"), "--config-dir", str(CONFIG), "--opencode-major", "2"], env=ENV, check=True, capture_output=True)
seed = """import {LibraryStore} from './src/library/store.mjs';import{ShoppingSettings}from'./src/shopping/settings.mjs';
const library=new LibraryStore(process.argv[1],{keyFile:process.argv[2]});await library.ready();
await new ShoppingSettings(library).saveFavorite({source:'manmanbuy',id:'123',title:'购物界面测试耳机',platform:'jd',shop:'测试店铺',priceCents:9990,priceLabel:'测试报价',sourceUrl:'https://item.jd.com/123.html',conditions:'合成测试数据，不是真实报价',observedAt:'2026-10-26T00:00:00Z'});"""
seed += """await new ShoppingSettings(library).saveAccount('pdd',[{name:'PDDAccessToken',value:'synthetic-test-only',domain:'.yangkeduo.com',path:'/',expires:-1},{name:'pdd_user_id',value:'123',domain:'.yangkeduo.com',path:'/',expires:-1}]);"""
installed = CONFIG / "extensions/opencode-moyu"
subprocess.run(["node", "--input-type=module", "-e", seed, str(installed / "books"), str(installed / "keys/library.key")], cwd=ROOT, check=True, capture_output=True)
# Simulate opener failure and clipboard success only inside this temporary install.
# No real browser or user clipboard is used by the terminal integration test.
bundle = installed / "dist/tui-v2.js"
code = bundle.read_text()
for signature, injected in [
    ("async function openExternalPage(target, options = {}) {", "throw new Error('synthetic opener failure');"),
    ("async function copyExternalLink(target, options = {}) {", "await (await import('node:fs/promises')).writeFile(" + json.dumps(str(WORK / "copied-url.txt")) + ",target); return;"),
]:
    assert code.count(signature) == 1, signature
    code = code.replace(signature, signature + injected)
bundle.write_text(code)
with socket.socket() as sock:
    sock.bind(("127.0.0.1", 0))
    PORT = sock.getsockname()[1]
URL = f"http://127.0.0.1:{PORT}"
SOCKET = f"moyu-shopping-{os.getpid()}"
HEADERS = {"Content-Type": "application/json", "x-opencode-directory": str(PROJECT), "Authorization": "Basic " + base64.b64encode(b"opencode:moyu-shopping-local-test").decode()}
CHECKS = []


def api(path, data=None):
    request = urllib.request.Request(URL + path, data=json.dumps(data).encode() if data is not None else None, headers=HEADERS)
    with urllib.request.urlopen(request, timeout=5) as response:
        return json.load(response)


def tmux(*args, check=True):
    return subprocess.run(["tmux", "-L", SOCKET, "-f", "/dev/null", *args], text=True, capture_output=True, check=check).stdout


def capture(name):
    value = tmux("capture-pane", "-p", "-t", "reader:0.0")
    (WORK / (name + ".txt")).write_text(value)
    return value


def wait_for(predicate, name, timeout=25):
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        value = capture(name)
        if predicate(value):
            CHECKS.append(name)
            print("PASS", name, flush=True)
            return value
        time.sleep(.25)
    raise AssertionError(f"{name}\n{capture(name)}")


def click(label, name):
    value = capture(name + "-before")
    row, line = next((i, line) for i, line in enumerate(value.splitlines()) if label in line)
    prefix = line[:line.index(label)]
    column = sum(0 if unicodedata.combining(c) else 2 if unicodedata.east_asian_width(c) in "WF" else 1 for c in prefix) + 2
    tmux("send-keys", "-t", "reader:0.0", "-l", f"\x1b[<0;{column};{row + 1}M")
    time.sleep(.1)
    tmux("send-keys", "-t", "reader:0.0", "-l", f"\x1b[<0;{column};{row + 1}m")


def escape():
    tmux("send-keys", "-t", "reader:0.0", "Escape")
    time.sleep(.3)


log = (WORK / "server.log").open("w")
server = subprocess.Popen([BINARY, "serve", "--port", str(PORT)], cwd=PROJECT, env=ENV, stdout=log, stderr=subprocess.STDOUT)
try:
    deadline = time.monotonic() + 40
    while True:
        try:
            session = api("/api/session", {"title": "Shopping sidebar smoke", "location": {"directory": str(PROJECT)}})["data"]["id"]
            break
        except Exception:
            if time.monotonic() > deadline:
                raise
            time.sleep(.3)
    command = shlex.join(["env", *[f"{key}={value}" for key, value in ENV.items() if key.startswith(("XDG_", "OPENCODE_"))], "TERM=xterm-256color", BINARY, "--server", URL, "--session", session, str(PROJECT)])
    tmux("new-session", "-d", "-s", "reader", "-x", "160", "-y", "46", "-c", str(PROJECT), command + " 2>" + shlex.quote(str(WORK / "stderr.log")))
    tmux("set-option", "-t", "reader", "remain-on-exit", "on")
    wait_for(lambda text: "[购物]" in text, "four-tabs-visible")
    time.sleep(.5)
    tmux("send-keys", "-t", "reader:0.0", "-l", "/moyu")
    time.sleep(.6)
    tmux("send-keys", "-t", "reader:0.0", "Enter")
    time.sleep(.4)
    tmux("send-keys", "-t", "reader:0.0", "Enter")
    wait_for(lambda text: "墨鱼 · 选择功能" in text and "购物" in text, "unified-moyu-menu-visible")
    click("低价搜索", "shopping-open")
    wait_for(lambda text: "[来源]" in text and "[账号]" in text, "shopping-panel-visible")
    click("[搜索]", "search-open")
    wait_for(lambda text: "搜索商品 / 优惠券" in text, "search-dialog-stays-open")
    escape()
    click("[筛选]", "filters-open")
    wait_for(lambda text: "预算上限" in text, "filters-visible")
    click("只看有券", "coupon-filter")
    wait_for(lambda text: "好价：开" in text, "coupon-filter-updated")
    escape()
    click("[来源]", "sources-open")
    wait_for(lambda text: "应用未配置" in text and "购物账号" in text, "source-and-login-status-visible")
    escape()
    click("[账号]", "accounts-open")
    wait_for(lambda text: "购物账号 · 扫码登录" in text and "拼多多" in text and "淘宝 / 天猫" in text, "three-shopping-accounts-visible")
    click("拼多多 已扫码保存", "pdd-account-open")
    wait_for(lambda text: "拼多多 · 已扫码保存" in text and "扫码登录" in text and "退出本地账号" in text, "saved-account-controls-visible")
    click("退出本地账号", "pdd-account-logout")
    current = wait_for(lambda text: "退出拼多多本地账号" in text and "confirm" in text.lower(), "account-logout-confirmation")
    click("Confirm" if "Confirm" in current else "confirm", "account-logout-confirm")
    wait_for(lambda text: "已删除本地登录态" in text, "account-logout-finished")
    assert not (installed / "books/.moyu/shopping/account-pdd.enc").exists()
    click("[收藏]", "favorites-open")
    wait_for(lambda text: "购物收藏" in text and "购物界面测试耳机" in text, "encrypted-favorite-visible")
    click("购物界面测试耳机", "favorite-detail")
    wait_for(lambda text: "删除这条收藏" in text, "favorite-detail-visible")
    click("测试报价 ¥99.90 测试店铺", "favorite-notes-open")
    wait_for(lambda text: "完整报价与优惠说明" in text and "2026-10-26T00:00:00Z" in text, "full-offer-notes-visible")
    click("运费：待确认", "favorite-notes-back")
    wait_for(lambda text: "删除这条收藏" in text, "favorite-notes-returned")
    click("打开商品 / 好价来源页", "source-open-failure")
    wait_for(lambda text: "浏览器打开失败" in text and "https://item.jd.com/123.html" in text, "browser-failure-keeps-full-url")
    escape()
    wait_for(lambda text: "复制完整链接" in text and "重试打开浏览器" in text, "fallback-actions-visible")
    click("重试打开浏览器", "browser-retry")
    wait_for(lambda text: "浏览器打开失败" in text and "https://item.jd.com/123.html" in text, "browser-retry-keeps-url")
    tmux("send-keys", "-t", "reader:0.0", "Enter")
    wait_for(lambda text: "完整链接已复制" in text, "copy-from-full-url-prompt")
    assert (WORK / "copied-url.txt").read_text() == "https://item.jd.com/123.html"
    escape()
    click("[链接]", "recent-link-open")
    wait_for(lambda text: "查看完整链接 / 手动复制" in text, "recent-link-retained")
    click("链接打开方式", "link-mode-open")
    wait_for(lambda text: "购物链接打开方式" in text, "link-mode-options-visible")
    click("仅显示链接", "link-mode-select")
    wait_for(lambda text: "已保存链接打开方式" in text, "link-mode-saved")
    click("[账号]", "link-only-account-open")
    wait_for(lambda text: "购物账号 · 扫码登录" in text, "link-only-accounts-visible")
    click("京东 未保存", "link-only-jd-open")
    wait_for(lambda text: "查看 / 复制官方登录链接" in text, "account-direct-link-visible")
    click("只打开官方登录页", "link-only-page-open")
    wait_for(lambda text: "完整链接 · 回车复制" in text and "https://passport.jd.com/new/login.aspx" in text and "浏览器打开失败" not in text, "link-only-mode-skips-opener")
    escape()
    escape()
    click("[收藏]", "favorite-reopen-after-link")
    wait_for(lambda text: "购物界面测试耳机" in text, "favorite-preserved-after-link")
    click("购物界面测试耳机", "favorite-detail-after-link")
    wait_for(lambda text: "删除这条收藏" in text, "favorite-actions-restored")
    click("删除这条收藏", "favorite-delete")
    wait_for(lambda text: "已删除收藏" in text, "favorite-deleted")
    assert not list((installed / "books/.moyu/shopping").glob("favorite-*.enc"))
    click("[小说]", "novel-return")
    wait_for(lambda text: "[书架]" in text and "上一页" in text, "novel-switch-restored")
    tmux("send-keys", "-t", "reader:0.0", "-l", "/moyu 购物")
    time.sleep(.6)
    tmux("send-keys", "-t", "reader:0.0", "Enter")
    time.sleep(.4)
    tmux("send-keys", "-t", "reader:0.0", "Enter")
    wait_for(lambda text: "[来源]" in text and "墨鱼请求失败" not in text, "moyu-shopping-local-navigation")
    tmux("resize-window", "-t", "reader", "-x", "140", "-y", "30")
    wait_for(lambda text: "[购物]" in text and "[小说]" in text, "short-terminal-tabs-visible")
    print(json.dumps({"checks": CHECKS, "artifacts": str(WORK)}, ensure_ascii=False))
finally:
    tmux("kill-server", check=False)
    server.terminate()
    try:
        server.wait(timeout=10)
    except subprocess.TimeoutExpired:
        server.kill()
        server.wait()
    log.close()
