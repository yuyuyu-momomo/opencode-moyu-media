/** Keep /moyu routing independent of the host UI and source implementations. */
export function collectionKind(query) {
  const text = String(query || "").trim()
  if (/^(?:音乐|music)(?:\s|[:：/]|$)/iu.test(text)) return "music"
  if (!/^(?:视频|video)(?:\s|[:：/]|$)/iu.test(text) && /小说|章节|书名|目录链接/u.test(text)) return "novel"
  if (!/^(?:视频|video)(?:\s|[:：/]|$)/iu.test(text) && /音乐|歌曲|歌手|歌单|听歌|私人(?:电台|FM)|猜你喜欢|个性推荐|随机刷歌|^(?:我喜欢|喜欢)$|网易云|QQ\s*音乐|酷狗|(?:^|\s)music(?:\s|[:：/]|$)/iu.test(text)) return "music"
  return /视频|(?:^|\s)video(?:\s|[:：/]|$)|bilibili|哔哩哔哩|B\s*站|youtube|youtu\.be|油管|(?:^|\s)热门(?:\s|$)|搜索热门|BV[\da-zA-Z]{10}/iu.test(text) ? "video" : "novel"
}
