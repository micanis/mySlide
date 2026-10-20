import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse } from 'yaml'

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
export const decksDirectory = resolve(root, 'decks')

// A deck is a directory under decks/ that has slides.md.
export function findDecks() {
  return readdirSync(decksDirectory, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && !entry.name.startsWith('.'))
    .map(entry => entry.name)
    .filter(slug => existsSync(resolve(decksDirectory, slug, 'slides.md')))
    .sort()
    .map((slug) => {
      const directory = resolve(decksDirectory, slug)
      return { slug, directory, title: getTitle(resolve(directory, 'slides.md'), slug) }
    })
}

function getTitle(sourcePath, fallback) {
  const source = readFileSync(sourcePath, 'utf8')
  const headmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]
  const title = headmatter ? parse(headmatter)?.title : undefined
  const heading = source.match(/^#\s+(.+)$/m)?.[1]
  return String(title ?? heading ?? fallback).replace(/<br\s*\/?>/g, ' ').trim()
}
