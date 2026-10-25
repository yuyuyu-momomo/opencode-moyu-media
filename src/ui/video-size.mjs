export const VIDEO_SCALE_PRESETS = Object.freeze([25, 50, 75, 100, 125, 150, 175, 200])

/** Scale both dimensions by one factor, bounded by the usable sidebar area. */
export function scaledVideoSize(width, height, requested = 100) {
  if (!Number.isFinite(width) || width <= 0 || width > 75 || !Number.isFinite(height) || height <= 0 || height > 100) throw new Error("视频基准尺寸无效")
  if (!Number.isFinite(requested)) throw new Error("请输入有效的缩放百分比")
  const maximum = Math.min(200, Math.floor(Math.min(75 / width, 100 / height) * 100 + 1e-8))
  const percent = Math.max(25, Math.min(maximum, Math.round(requested)))
  return { percent, maximum, width: width * percent / 100, height: height * percent / 100 }
}
