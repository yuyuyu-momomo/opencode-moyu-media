export const VIDEO_QUALITIES = Object.freeze([480, 720, 1080])
export const DEFAULT_VIDEO_QUALITY = 1080

export function videoQuality(value = DEFAULT_VIDEO_QUALITY) {
  if (!VIDEO_QUALITIES.includes(value)) throw new Error("请选择 480p、720p 或 1080p 下载清晰度")
  return value
}

// Short-edge sorting treats portrait and landscape video equally. If the
// requested quality is unavailable, prefer the closest lower resolution.
export function videoFormatArgs(quality = DEFAULT_VIDEO_QUALITY) {
  return ["--format", "bv*+ba/bv*", "--format-sort", `res:${videoQuality(quality)},vcodec:h264,acodec:m4a`]
}
