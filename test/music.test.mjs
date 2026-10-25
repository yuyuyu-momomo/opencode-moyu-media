import test from "node:test"
import assert from "node:assert/strict"
import { mkdtemp, rm, readFile, access } from "node:fs/promises"
import { join, dirname } from "node:path"
import { tmpdir } from "node:os"
import { fileURLToPath } from "node:url"
import { execFile } from "node:child_process"
import { promisify } from "node:util"
import { setTimeout as sleep } from "node:timers/promises"
import { LibraryStore } from "../src/library/store.mjs"
import { MusicSettings, normalizeMusicCookie } from "../src/music/settings.mjs"
import { MusicService } from "../src/music/service.mjs"
import { createMusicProviders, musicTrack, trackKey, parseSearch, neteaseForm } from "../src/music/providers.mjs"
import { AudioPlayer, MusicController } from "../src/music/player.mjs"
import { musicLoginPage } from "../src/music/login.mjs"
import { removeMusicTemp } from "../src/music/temp.mjs"
import { mediaBinary } from "../src/media/runtime.mjs"
import { collectionKind } from "../src/domain/collection-task.mjs"
import { collectionPrompt } from "../src/ui/collect.mjs"
import { injectCollectionInstructions } from "../src/server/collection-context.mjs"

const song=(id="1",platform="netease")=>musicTrack({id,platform,title:"歌曲 "+id,artist:"歌手",duration:60})
const deferred=()=>{let resolve;const promise=new Promise(done=>resolve=done);return{promise,resolve}}
async function fixture(run) {
  const root=await mkdtemp(join(tmpdir(),"moyu-music-test-")),library=new LibraryStore(join(root,"books"),{keyFile:join(root,"keys/library.key")})
  await library.ready()
  try {await run(library)} finally {await rm(root,{recursive:true,force:true})}
}
async function until(predicate,timeout=3000){const start=Date.now();while(!predicate()){if(Date.now()-start>timeout)throw new Error("condition timeout");await sleep(10)}}

test("三平台歌曲规范化，不复制响应中的凭据、播放链接或终端控制字符",()=>{
  const cases=[
    ["netease",{result:{songs:[{id:1,name:"<b>歌曲</b>\x1b",artists:[{name:"歌手"}],album:{name:"专辑"},duration:60000,cookie:"private"}]}}],
    ["qq",{data:{song:{list:[{songmid:"abc123",songname:"歌曲",singer:[{name:"歌手"}],albumname:"专辑",interval:60}]}}}],
    ["kugou",{data:{lists:[{FileHash:"a".repeat(32),SongName:"歌曲",SingerName:"歌手",AlbumName:"专辑",Duration:60,AlbumID:123}]}}],
  ]
  for(const[platform,data]of cases){const[track]=parseSearch(platform,data);assert.equal(track.title,"歌曲");assert.equal(track.duration,60);assert.equal(track.artist,"歌手");assert.doesNotMatch(JSON.stringify(track),/private|cookie|\u001b/);assert.match(track.sourceUrl,/^https:\/\//)}
  assert.throws(()=>musicTrack({platform:"netease",id:"../key"}),/歌曲 ID/)
  assert.throws(()=>musicTrack({platform:"other",id:"1"}),/平台/)
  const form=new URLSearchParams(neteaseForm({hello:"world"},"abcdefghijklmnop"))
  assert.match(form.get("encSecKey"),/^[a-f0-9]{256}$/)
  assert.ok(form.get("params").length>30)
})

test("聚合搜索保留平台并交错结果，一个平台拒绝不拖垮其他平台",async()=>fixture(async(library)=>{
  const calls=[]
  const providers={async search(platform,query,options){calls.push({platform,query,options});if(platform==="kugou")throw new Error("平台暂不可用");return[song(platform==="qq"?"abc":"1",platform),song(platform==="qq"?"def":"2",platform)]}}
  const service=new MusicService(library,{providers})
  const result=await service.search("歌手",{platform:"all",limit:2})
  assert.deepEqual(result.tracks.map(track=>track.platform),["netease","qq","netease","qq"])
  assert.deepEqual(result.errors,[{platform:"kugou",message:"平台暂不可用"}])
  assert.equal(calls.length,3)
  assert.throws(()=>normalizeMusicCookie("qq","uin=123; other=value"),/qqmusic_key/)
}))

test("三个账号独立加密保存，公开状态不带 Cookie，退出只清理目标平台",async()=>fixture(async(library)=>{
  const settings=new MusicSettings(library)
  for(const[platform,cookie]of [["netease","MUSIC_U=private-net; __csrf=csrf"],["qq","uin=123; qm_keyst=private-qq"],["kugou","userid=456; token=private-kg"]]){
    const status=await settings.saveAccount(platform,cookie)
    assert.equal(status.configured,true)
    assert.doesNotMatch(JSON.stringify(status),/private|cookie":/)
    const bytes=await readFile(settings.path(platform))
    assert.equal(bytes.subarray(0,5).toString(),"MOYU1")
    assert.equal(bytes.includes(Buffer.from("private-")),false)
    assert.equal(await new MusicSettings(library).cookie(platform),cookie)
  }
  await assert.rejects(settings.saveAccount("netease","MUSIC_U=bad\r\nX-Leak: value"),/格式/)
  assert.match(await settings.cookie("netease"),/private-net/)
  await settings.logout("netease")
  assert.equal((await settings.account("netease")).configured,false)
  assert.equal((await settings.account("qq")).configured,true)
  await settings.logout("netease")
}))

test("扫码授权后才写入账号，取消能丢弃晚到的授权结果，退出排在账号写入之后",async()=>fixture(async(library)=>{
  const responses=[{status:"waiting"},{status:"scanned"},{status:"authorized",cookie:"MUSIC_U=qr-fixture"}]
  const providers={async beginLogin(platform){return{platform,key:"fixture",url:"https://music.163.com/login?codekey=fixture"}},async checkLogin(){return responses.shift()}}
  const service=new MusicService(library,{providers}),states=[]
  await service.login("netease",{intervalMs:1,onStatus:status=>states.push(status)})
  assert.deepEqual(states,["waiting","scanned"])
  assert.equal((await service.settings.account("netease")).method,"qr")
  await service.logout("netease")
  const late=deferred(),requested=deferred(),abort=new AbortController()
  providers.checkLogin=async()=>{requested.resolve();return late.promise}
  const pending=service.login("netease",{signal:abort.signal})
  await requested.promise;abort.abort();late.resolve({status:"authorized",cookie:"MUSIC_U=must-not-save"})
  await assert.rejects(pending,/abort/i)
  assert.equal(await service.settings.cookie("netease"),"")
  const save=service.saveAccount("qq","uin=123; qqmusic_key=fixture"),logout=service.logout("qq")
  await Promise.all([save,logout]);assert.equal(await service.settings.cookie("qq"),"")
}))

test("播放下载不携带账号 Cookie，临时音频可释放，缓存删除不能越界",async()=>fixture(async(library)=>{
  const settings=new MusicSettings(library);await settings.saveAccount("netease","MUSIC_U=private")
  let apiCookie,cdnHeaders
  const service=new MusicService(library,{providers:{async resolve(_track,{cookie}){apiCookie=cookie;return{url:"https://cdn.example/track.mp3",preview:true}}},async download(_url,options){cdnHeaders=options.headers;return{bytes:Buffer.from("fixture audio")}}})
  const prepared=await service.prepare(song())
  assert.equal(apiCookie,"MUSIC_U=private");assert.equal(cdnHeaders.Cookie,undefined)
  assert.equal(prepared.preview,true);assert.equal((await readFile(prepared.path)).toString(),"fixture audio")
  await prepared.release();await assert.rejects(access(prepared.path),{code:"ENOENT"})
  await assert.rejects(removeMusicTemp(dirname(tmpdir())),/路径越界/)
}))

test("扫码页面在本机生成 SVG，不请求二维码服务或执行脚本",async()=>{
  const page=await musicLoginPage({platform:"netease",url:"https://music.163.com/login?codekey=fixture"})
  try{
    const html=await readFile(fileURLToPath(page.url),"utf8")
    assert.match(html,/data:image\/svg\+xml;base64,/)
    assert.match(html,/default-src 'none'/)
    assert.doesNotMatch(html,/<script|<iframe|src="https?:/i)
  }finally{await page.release()}
})

class FakePlayer{
  playing=false;position=0;duration=0;volume=50;plays=0
  async pause(){this.playing=false}
  async open(path){this.path=path;this.position=0;this.duration=60;return true}
  async play(){this.playing=true;this.plays++}
  async seek(position){this.position=position}
  async setVolume(volume){this.volume=volume}
  async dispose(){this.playing=false}
}
test("恢复队列不自动响，跨平台切歌和列表/单曲循环，清空及退出释放缓存",async()=>fixture(async(library)=>{
  const a=song(),b=song("abc","qq"),released=[]
  const settings=new MusicSettings(library)
  await settings.savePlayer({queue:[a,b],currentKey:trackKey(a),volume:30,repeat:"all"})
  const player=new FakePlayer(),service={settings,async prepare(track){return{path:track.id,release:async()=>released.push(track.id),preview:false}}}
  const controller=new MusicController(service,{player})
  await controller.restore();assert.equal(player.plays,0);assert.equal(player.volume,30)
  controller.add(a);assert.equal(controller.queue.length,2)
  await controller.play();assert.equal(player.plays,1)
  await controller.next();assert.equal(controller.current.platform,"qq");assert.deepEqual(released,["1"])
  controller.cycleRepeat();await controller.next(1,true);assert.equal(controller.current.platform,"qq")
  controller.cycleRepeat();await controller.next(1,true);assert.equal(controller.current.platform,"netease")
  await controller.volume(0);assert.equal(player.volume,0)
  await controller.clear();assert.equal(controller.queue.length,0);assert.equal(player.playing,false)
  await controller.dispose();assert.ok(released.includes("abc"))
  assert.equal((await settings.player()).queue.length,0)
}))

test("切歌和取消不接受旧下载，旧探测不能覆盖新曲目",async()=>fixture(async(library)=>{
  const first=deferred(),started=deferred(),released=[]
  const settings=new MusicSettings(library),player=new FakePlayer()
  const service={settings,async prepare(track){if(track.id==="1"){started.resolve();return first.promise}return{path:track.id,release:async()=>released.push(track.id)}}}
  const controller=new MusicController(service,{player})
  controller.add(song());controller.add(song("2"))
  const pending=controller.play("netease:1");await started.promise
  await controller.play("netease:2")
  first.resolve({path:"1",release:async()=>released.push("1")});await pending
  assert.equal(controller.current.id,"2");assert.equal(player.path,"2");assert.equal(player.plays,1);assert.ok(released.includes("1"))
  await controller.dispose();assert.ok(released.includes("2"))
  const probe=deferred(),probing=deferred()
  const audio=new AudioPlayer({inspect:async(path)=>{if(path==="old"){probing.resolve();return probe.promise}return{duration:20}}})
  const old=audio.open("old");await probing.promise;await audio.open("new");probe.resolve({duration:10})
  assert.equal(await old,false);assert.equal(audio.path,"new");assert.equal(audio.duration,20);await audio.dispose()
}))

test("音乐请求进入音乐接口，小说和视频路由保留",()=>{
  for(const query of["音乐 搜索 陈奕迅","网易云 歌曲","QQ音乐 周杰伦","music search test"]){
    assert.equal(collectionKind(query),"music");assert.match(collectionPrompt(query),/^音乐任务：/)
    const context={system:[],messages:[{role:"user",metadata:{origin:"moyu",query}}],tools:{websearch:{},webfetch:{}}}
    injectCollectionInstructions(context);assert.match(context.system[0].text,/moyu_music_search/);assert.match(context.system[0].text,/不索要密码、Cookie/)
  }
  assert.equal(collectionKind("采集小说《音乐之声》"),"novel")
  assert.equal(collectionKind("视频 搜索音乐现场"),"video")
})

test("本机 FFmpeg 音频探测、暂停、跳转和自然结束，不打开视频窗口或输出声音",async(t)=>{
  let binary;try{binary=await mediaBinary("ffmpeg");await mediaBinary("ffplay")}catch{t.skip("本机未安装 FFmpeg");return}
  const root=await mkdtemp(join(tmpdir(),"moyu-audio-native-")),path=join(root,"silent.mp3"),oldDriver=process.env.SDL_AUDIODRIVER
  process.env.SDL_AUDIODRIVER="dummy"
  let ended=false,error
  const player=new AudioPlayer({onEnded:()=>{ended=true},onError:value=>{error=value}})
  try{
    await promisify(execFile)(binary,["-v","error","-f","lavfi","-i","anullsrc=r=44100:cl=stereo","-t","1.3","-c:a","libmp3lame",path],{windowsHide:true,timeout:15000})
    assert.equal(await player.open(path),true);assert.equal(player.playing,false)
    await player.play();await until(()=>player.playing);await sleep(80);assert.ok(player.position>0)
    await player.pause();const paused=player.position;await sleep(70);assert.equal(player.position,paused)
    await player.seek(1);assert.equal(player.position,1);await player.play();await until(()=>ended||error,5000)
    assert.equal(error,undefined);assert.equal(ended,true)
  }finally{await player.dispose();if(oldDriver===undefined)delete process.env.SDL_AUDIODRIVER;else process.env.SDL_AUDIODRIVER=oldDriver;await rm(root,{recursive:true,force:true})}
})
