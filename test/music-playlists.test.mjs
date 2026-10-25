import test from "node:test"
import assert from "node:assert/strict"
import { mkdtemp, rm } from "node:fs/promises"
import { join } from "node:path"
import { tmpdir } from "node:os"
import { musicPlaylist, playlistTarget, createPlaylistProviders } from "../src/music/playlists.mjs"
import { createMusicProviders, parseSearch, musicTrack, cookieValues } from "../src/music/providers.mjs"
import { MusicService } from "../src/music/service.mjs"
import { MusicController } from "../src/music/player.mjs"
import { LibraryStore } from "../src/library/store.mjs"
import { collectionKind } from "../src/domain/collection-task.mjs"
import { injectCollectionInstructions } from "../src/server/collection-context.mjs"

const track = (id) => musicTrack({ platform: "netease", id: String(id), title: "歌曲 " + id, artist: "歌手", duration: 60 })
async function fixture(run) {
  const root = await mkdtemp(join(tmpdir(), "moyu-playlists-test-")), library = new LibraryStore(join(root,"books"), { keyFile: join(root,"keys/library.key") })
  await library.ready()
  try { await run(library) } finally { await rm(root, { recursive: true, force: true }) }
}
test("歌单链接严格识别官方来源，统一结果去除 HTML、控制字符及凭据", () => {
  for (const [url, platform, id] of [["https://music.163.com/#/playlist?id=123","netease","123"],["https://y.qq.com/n/ryqq/playlist/456?from=test","qq","456"],["https://www.kugou.com/yy/special/single/789.html","kugou","789"],["kugou:collection_3_123_8_0","kugou","collection_3_123_8_0"]]) {
    const result=playlistTarget(url);assert.equal(result.platform,platform);assert.equal(result.id,id)
  }
  for (const url of ["http://127.0.0.1/playlist/1","https://y.qq.com.evil.test/n/ryqq/playlist/123","https://name:password@y.qq.com/n/ryqq/playlist/123","javascript:alert(1)"]) assert.throws(()=>playlistTarget(url))
  assert.throws(()=>musicPlaylist({platform:"qq",id:"99999999999999999999"}))
  const data=musicPlaylist({platform:"qq",id:"123",title:"<b>轻音乐</b>\x1b",creator:"&#x4f60;&#22909;",count:"4",cookie:"private",sourceUrl:"http://private/"})
  assert.equal(data.title,"轻音乐");assert.equal(data.creator,"你好");assert.equal(data.count,4);assert.match(data.sourceUrl,/^https:\/\/y\.qq\.com\//);assert.doesNotMatch(JSON.stringify(data),/private|cookie|\u001b/)
})

test("三平台公开歌单搜索统一元数据并传入有界分页，不把上游字段原样返回",async()=>{
  const calls=[]
  const providers=createMusicProviders({request:async(input,options)=>{
    const url=new URL(input);calls.push({url,options})
    const payload=url.host.includes("163.com")?{code:200,result:{playlistCount:10,playlists:[{id:123,name:"通勤",creator:{nickname:"作者"},trackCount:4,cookie:"private"}]}}
      :url.pathname.includes("musicu")?{code:0,req:{code:0,data:{meta:{sum:10},body:{songlist:{list:[{dissid:"456",dissname:"通勤",creator:{name:"作者"},song_count:4}]}}}}}
        :{status:1,error_code:0,data:{total:10,lists:[{gid:"collection_3_123_8_0",specialid:789,specialname:"通勤",nickname:"作者",song_count:4}]}}
    return{text:JSON.stringify(payload)}
  }})
  for(const platform of["netease","qq","kugou"]){const page=await providers.playlists(platform,{query:"通勤",page:2,limit:2});assert.equal(page.playlists[0].platform,platform);assert.equal(page.playlists[0].count,4);assert.equal(page.hasMore,true);assert.doesNotMatch(JSON.stringify(page),/cookie|private/)}
  assert.equal(calls[0].url.searchParams.get("offset"),"2")
  assert.equal(JSON.parse(calls[1].options.body).req.param.page_num,2)
  assert.equal(calls[2].url.searchParams.get("page"),"2")
  assert.equal(calls[2].url.hostname,"gateway.kugou.com")
})

test("QQ个人歌单包含我喜欢并跳过其他虚拟目录，收藏使用本地账号且不返回认证字段",async()=>{
  const calls=[]
  const providers=createMusicProviders({request:async(input,options)=>{
    const url=new URL(input);calls.push({url,options});assert.equal(options.headers.Cookie,"uin=12345678; qqmusic_key=account-private")
    if(url.pathname.includes("fcg_user_created_diss"))return{text:JSON.stringify({code:0,data:{encrypt_uin:"opaque-private",totoal:2,disslist:[{tid:0,dirid:205,diss_name:"虚拟目录"},{tid:12345,diss_name:"我的歌单",song_cnt:3}]}})}
    const payload=JSON.parse(options.body);assert.equal(payload.req.method,"CgiGetPlaylistFavInfo");assert.equal(payload.req.param.uin,"opaque-private")
    return{text:JSON.stringify({code:0,req:{code:0,data:{total:1,hasmore:0,v_list:[{id:23456,title:"收藏歌单",songnum:8,nickname:"作者"}]}}})}
  }})
  const cookie="uin=12345678; qqmusic_key=account-private"
  const own=await providers.playlists("qq",{mode:"mine",cookie,limit:10});assert.equal(own.playlists.length,2);assert.equal(own.playlists[0].id,"liked");assert.equal(own.playlists[1].title,"我的歌单")
  const fav=await providers.playlists("qq",{mode:"mine",collection:"favorite",cookie,limit:10});assert.equal(fav.playlists[0].id,"23456")
  assert.doesNotMatch(JSON.stringify([own,fav]),/account-private|opaque-private|12345678/)
  await assert.rejects(providers.playlists("qq",{mode:"mine"}),/先登录/)
  assert.equal(calls.length,3)
})

test("QQ歌单详情按偏移取歌曲，统一现代歌曲结构，不读取全部歌曲",async()=>{
  const providers=createMusicProviders({request:async(_url,options)=>{
    const request=JSON.parse(options.body).req;assert.equal(request.method,"CgiGetDiss");assert.equal(request.param.song_begin,2);assert.equal(request.param.song_num,2)
    return{text:JSON.stringify({code:0,req:{code:0,data:{dirinfo:{title:"歌单"},total_song_num:5,hasmore:1,songlist:[{mid:"abc123",name:"歌曲",interval:60,singer:[{name:"歌手"}],album:{name:"专辑"},file:{media_mid:"media123"}}]}}})}
  }})
  const result=await providers.playlist("qq","12345",{page:2,limit:2});assert.equal(result.tracks[0].mediaId,"media123");assert.equal(result.tracks[0].artist,"歌手");assert.equal(result.total,5);assert.equal(result.hasMore,true)
})

test("网易云歌单只补取当前页歌曲，明确标出本页缺失信息",async()=>{
  const calls=[]
  const providers=createPlaylistProviders({netease:async(path,payload)=>{
    calls.push({path,payload})
    if(path.includes("playlist/detail"))return{data:{code:200,playlist:{name:"歌单",trackCount:5,trackIds:[1,2,3,4,5].map(id=>({id}))}}}
    assert.deepEqual(JSON.parse(payload.c),[{id:3},{id:4}])
    return{data:{code:200,songs:[{id:3,name:"歌曲",ar:[{name:"歌手"}],al:{name:"专辑"},dt:60000}]}}
  },parseSongs:parseSearch,normalizeTrack:musicTrack,cookies:cookieValues})
  const result=await providers.playlist("netease","12345",{page:2,limit:2})
  assert.equal(calls.length,2);assert.equal(result.tracks.length,1);assert.equal(result.unavailable,1);assert.equal(result.hasMore,true)
  await assert.rejects(providers.playlists("netease",{mode:"mine"}),/先登录/)
})

test("酷狗旧版链接只从官方 HTML 提取歌单 ID，歌曲信息和时长规范化",async()=>{
  let readCount=0
  const providers=createPlaylistProviders({cookies:cookieValues,normalizeTrack:musicTrack,page:async(url,options)=>{
    readCount++;assert.equal(url,"https://www.kugou.com/yy/special/single/789.html");assert.equal(options.headers,undefined)
    return{text:'<script>data={\\"global_collection_id\\":\\"collection_3_123_8_0\\"};</script>'}
  },json:async(input)=>{
    const url=new URL(input);assert.equal(url.searchParams.get("global_collection_id"),"collection_3_123_8_0");assert.equal(url.searchParams.get("begin_idx"),"2")
    return{data:{status:1,error_code:0,data:{count:8,list_info:{name:"酷狗歌单"},songs:[{hash:"a".repeat(32),name:"歌手 - 歌曲",singerinfo:[{name:"歌手"}],timelen:60000,album_id:12}]}}}
  }})
  const result=await providers.playlist("kugou","789",{page:2,limit:2})
  assert.equal(readCount,1);assert.equal(result.tracks[0].title,"歌曲");assert.equal(result.tracks[0].duration,60);assert.equal(result.info.sourceUrl,"https://www.kugou.com/yy/special/single/789.html");assert.equal(result.hasMore,true)
})

test("歌单聚合仅查已登录账号，一个平台失败保留其他结果，取消不发布迟到结果",async()=>fixture(async(library)=>{
  const calls=[],providers={async playlists(platform,options){calls.push({platform,options});if(platform==="kugou")throw Error("平台拒绝");return{playlists:[musicPlaylist({platform,id:platform==="qq"?"12345":"23456",title:"歌单"})],hasMore:false}}}
  const service=new MusicService(library,{providers});await service.saveAccount("qq","uin=12345678; qqmusic_key=private")
  const mine=await service.playlists({mode:"mine"});assert.equal(mine.playlists.length,1);assert.deepEqual(calls.map(c=>c.platform),["qq"]);assert.equal(calls[0].options.cookie,"uin=12345678; qqmusic_key=private")
  const publicResult=await service.playlists({mode:"search",query:"通勤"});assert.equal(publicResult.playlists.length,2);assert.equal(publicResult.errors[0].platform,"kugou");assert.doesNotMatch(JSON.stringify(publicResult),/private|Cookie/)
  let resolve;const delayed=new Promise(done=>{resolve=done}),abort=new AbortController();providers.playlists=async()=>delayed
  const pending=service.playlists({mode:"mine",signal:abort.signal});abort.abort();resolve({playlists:[],hasMore:false});await assert.rejects(pending,/abort/i)
}))

test("歌单批量入队去重且只保存一次，超出容量或无效歌曲不部分写入、不自动播放",async()=>{
  let writes=0,plays=0
  const player={playing:false,position:0,duration:0,volume:50,async pause(){},async dispose(){},async play(){plays++}}
  const controller=new MusicController({settings:{async savePlayer(){writes++}}},{player})
  try{
    assert.deepEqual(controller.addMany([track(1),track(1),track(2)]),{added:2,duplicates:1});await controller.writes;assert.equal(writes,1);assert.equal(plays,0)
    assert.deepEqual(controller.addMany([track(1)]),{added:0,duplicates:1});await controller.writes;assert.equal(writes,1)
    controller.addMany(Array.from({length:97},(_,i)=>track(i+3)));const count=controller.queue.length
    assert.throws(()=>controller.addMany([track(100),track(101)]),/100 首/);assert.equal(controller.queue.length,count)
    assert.throws(()=>controller.addMany([track(100),{platform:"qq",id:"../bad"}]));assert.equal(controller.queue.length,count);assert.equal(plays,0)
  }finally{await controller.dispose()}
})

test("我的歌单请求进入音乐工具规则，小说与视频显式类型保留",()=>{
  for(const query of["我的歌单","查QQ音乐收藏歌单","搜索通勤歌单"]){
    assert.equal(collectionKind(query),"music")
    const context={system:[],messages:[{role:"user",metadata:{origin:"moyu",query}}]};injectCollectionInstructions(context)
    assert.match(context.system[0].text,/moyu_music_playlists/);assert.match(context.system[0].text,/moyu_music_playlist/)
  }
  assert.equal(collectionKind("小说 歌单里的故事"),"novel");assert.equal(collectionKind("视频 搜索歌单推荐"),"video")
})
