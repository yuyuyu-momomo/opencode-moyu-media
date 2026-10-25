import test from "node:test"
import assert from "node:assert/strict"
import http from "node:http"
import { createHttpClient } from "../src/core/http.mjs"

test("实际 HTTP 处理重定向、GBK 编码、响应上限和总超时", async () => {
  const server = http.createServer((req, res) => {
    if (req.url === "/redirect") { res.writeHead(302, { Location: "/gbk" }); res.end(); return }
    if (req.url === "/gbk") { res.writeHead(200, { "Content-Type": "text/html; charset=gbk" }); res.end(Buffer.from([0xc4, 0xe3, 0xba, 0xc3])); return }
    if (req.url === "/large") { res.writeHead(200, { "Content-Type": "text/plain" }); res.end("x".repeat(1000)); return }
    if (req.url === "/slow") return
  })
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve))
  const base = "http://127.0.0.1:" + server.address().port
  try {
    const read = createHttpClient({ allowPrivate: true, useProxy: false, maxBytes: 50, timeoutMs: 200 })
    assert.equal((await read(base + "/redirect")).text, "你好")
    await assert.rejects(read(base + "/large"), /大小限制/)
    await assert.rejects(read(base + "/slow"), /超时|总时限/)
  } finally { server.closeAllConnections(); await new Promise((resolve) => server.close(resolve)) }
})

test("私密请求头不会跨来源重定向，API 可禁止所有重定向", async () => {
  let leaked
  const target = http.createServer((req, res) => { leaked=req.headers['x-goog-api-key'];res.writeHead(200,{'Content-Type':'application/json'});res.end('{}') })
  await new Promise(resolve=>target.listen(0,'127.0.0.1',resolve))
  const source=http.createServer((_req,res)=>{res.writeHead(302,{Location:'http://127.0.0.1:'+target.address().port+'/'});res.end()})
  await new Promise(resolve=>source.listen(0,'127.0.0.1',resolve))
  try {
    const url='http://127.0.0.1:'+source.address().port+'/'
    await createHttpClient({allowPrivate:true,useProxy:false})(url,{headers:{'X-Goog-Api-Key':'test-secret'}})
    assert.equal(leaked,undefined)
    await assert.rejects(createHttpClient({allowPrivate:true,useProxy:false,maxRedirects:0})(url,{headers:{'X-Goog-Api-Key':'test-secret'}}),/重定向/)
  } finally { await Promise.all([source,target].map(server=>new Promise(resolve=>server.close(resolve)))) }
})

test("音乐 HTTP 支持受限 POST、响应 Cookie 和二进制，跨来源不转发登录请求体", async () => {
  let received = 0
  const target = http.createServer((_req, res) => { received++; res.end("unexpected") })
  await new Promise(resolve => target.listen(0,"127.0.0.1",resolve))
  const source = http.createServer(async (req,res) => {
    if (req.url === "/redirect") {res.writeHead(307,{Location:`http://127.0.0.1:${target.address().port}/`});res.end();return}
    if (req.url === "/audio") {res.writeHead(200,{"Content-Type":"audio/mpeg"});res.end(Buffer.from([0,1,2,255]));return}
    let body="";for await(const chunk of req)body+=chunk
    res.writeHead(200,{"Content-Type":"application/json","Set-Cookie":["MUSIC_U=fixture; HttpOnly; Secure"]});res.end(JSON.stringify({method:req.method,body}))
  })
  await new Promise(resolve=>source.listen(0,"127.0.0.1",resolve))
  try{
    const request=createHttpClient({allowPrivate:true,useProxy:false,maxBytes:1000}),base=`http://127.0.0.1:${source.address().port}`
    const reply=await request(base,{method:"POST",body:"test-body"})
    assert.deepEqual(JSON.parse(reply.text),{method:"POST",body:"test-body"})
    assert.equal(reply.cookies[0],"MUSIC_U=fixture; HttpOnly; Secure")
    assert.deepEqual((await request(base+"/audio",{asBytes:true})).bytes,Buffer.from([0,1,2,255]))
    await assert.rejects(request(base+"/redirect",{method:"POST",body:"private-token"}),/登录请求重定向/)
    assert.equal(received,0)
    const manual=await request(base+"/redirect",{method:"POST",body:"private-token",redirect:"manual"})
    assert.equal(manual.status,307)
    assert.match(manual.redirect,/^http:\/\/127\.0\.0\.1:/)
    assert.equal(received,0)
  }finally{await Promise.all([source,target].map(server=>new Promise(resolve=>server.close(resolve))))}
})
