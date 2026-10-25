import test from "node:test"
import assert from "node:assert/strict"
import { scaledVideoSize } from "../src/ui/video-size.mjs"

test("视频比例缩放同步调整宽高，100% 恢复原尺寸", () => {
  const smaller = scaledVideoSize(60, 100, 50)
  assert.equal(smaller.width, 30)
  assert.equal(smaller.height, 50)
  assert.equal(smaller.percent, 50)
  const normal = scaledVideoSize(60, 100, 100)
  assert.equal(normal.width, 60)
  assert.equal(normal.height, 100)
  const enlarged = scaledVideoSize(40, 40, 150)
  assert.equal(enlarged.width, 60)
  assert.equal(enlarged.height, 60)
})

test("达到侧栏边界时统一限制缩放因子，不单独拉伸宽高", () => {
  const bounded = scaledVideoSize(40, 50, 200)
  assert.equal(bounded.percent, 187)
  assert.ok(bounded.width <= 75 && bounded.height <= 100)
  assert.ok(Math.abs(bounded.width / 40 - bounded.height / 50) < 1e-12)
  assert.equal(scaledVideoSize(75, 100, 150).percent, 100)
  assert.equal(scaledVideoSize(60, 100, 0).percent, 25)
})

test("自定义比例保留尺寸精度，并拒绝无效基准与输入", () => {
  const custom = scaledVideoSize(33, 75, 67)
  assert.equal(custom.percent, 67)
  assert.ok(Math.abs(custom.width / 33 - custom.height / 75) < 1e-12)
  for (const args of [[0,100,50],[76,100,50],[60,101,50],[60,100,NaN],[60,100,Infinity]]) assert.throws(() => scaledVideoSize(...args))
})
