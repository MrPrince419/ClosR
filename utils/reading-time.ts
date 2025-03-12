export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200 // Average reading speed
  const wordCount = content.trim().split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  return readingTime < 1 ? 1 : readingTime // Minimum 1 minute
}

