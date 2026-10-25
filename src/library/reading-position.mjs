/** Store chapter identity as well as the legacy character offset. */
export function readingPosition(book, offset) {
  const chapter = book.chapters.findLast(item => item.offset <= offset)
  return chapter ? { offset, chapterId: chapter.id, chapterTitle: chapter.title, within: Math.max(0, offset - chapter.offset), status: chapter.status } : { offset }
}

export function restorePosition(book, saved, fallback = 0) {
  let offset = Number.isFinite(saved?.offset) ? saved.offset : Number.isFinite(fallback) ? fallback : 0
  if (typeof saved?.chapterId === "string" || typeof saved?.chapterTitle === "string") {
    let index = typeof saved.chapterId === "string" ? book.chapters.findIndex(item => item.id === saved.chapterId) : -1
    if (index < 0 && book.chapters.filter(item => item.title === saved.chapterTitle).length === 1) index = book.chapters.findIndex(item => item.title === saved.chapterTitle)
    if (index >= 0) {
      const chapter = book.chapters[index], end = book.chapters[index + 1]?.offset ?? book.text.length
      const within = saved.status && saved.status !== "ready" && chapter.status === "ready" ? 0 : Number.isFinite(saved.within) ? Math.max(0, saved.within) : 0
      offset = chapter.offset + Math.min(within, Math.max(0, end - chapter.offset - 1))
    }
  }
  return Math.max(0, Math.min(Math.trunc(offset), Math.max(0, book.text.length - 1)))
}
