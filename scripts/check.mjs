import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { dirname, extname, relative, resolve } from 'node:path'
import { parse } from 'yaml'
import { findDecks, root } from './decks.mjs'

// Static checks the build does not catch: broken local image paths,
// Colab links to notebooks that are not in the repo, and deck headmatter.
const colabPrefix = 'https://colab.research.google.com/github/micanis/mySlide/blob/main/'
const sourceExtensions = new Set(['.md', '.vue', '.css'])
const trackedFiles = new Set(
  execFileSync('git', ['ls-files', '-co', '--exclude-standard'], { cwd: root, encoding: 'utf8' }).split('\n'),
)
const errors = []

for (const deck of findDecks()) {
  checkHeadmatter(deck)
  for (const file of listSources(deck.directory)) checkReferences(deck, file)
}

if (errors.length > 0) {
  console.error(errors.map(error => `✗ ${error}`).join('\n'))
  process.exit(1)
}
console.log('✓ All checks passed')

function checkHeadmatter(deck) {
  const source = readFileSync(resolve(deck.directory, 'slides.md'), 'utf8')
  const headmatter = parse(source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '') ?? {}
  const where = `decks/${deck.slug}/slides.md`
  if (headmatter.theme !== 'micanis') errors.push(`${where}: theme must be micanis`)
  if (headmatter.routerMode !== 'hash') errors.push(`${where}: routerMode must be hash (GitHub Pages has no SPA fallback)`)
  if (!headmatter.title) errors.push(`${where}: title is required (used on the index page)`)
}

function listSources(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name)
    if (entry.isDirectory()) {
      return ['node_modules', 'public', 'python', 'dist'].includes(entry.name) ? [] : listSources(path)
    }
    return sourceExtensions.has(extname(entry.name)) ? [path] : []
  })
}

function checkReferences(deck, file) {
  const source = readFileSync(file, 'utf8')
  const where = relative(root, file)
  const references = [
    ...source.matchAll(/\bsrc="([^"]+)"/g),
    ...source.matchAll(/!\[[^\]]*\]\(([^)\s]+)/g),
    ...source.matchAll(/url\(["']?([^"')]+)/g),
  ].map(match => match[1])

  for (const reference of references) {
    if (/^(https?:|data:|#|\{)/.test(reference)) continue
    const path = reference.startsWith('/')
      ? resolve(deck.directory, 'public', `.${reference}`)
      : resolve(dirname(file), reference)
    if (!existsSync(path)) errors.push(`${where}: ${reference} does not exist`)
    else if (!trackedFiles.has(relative(root, path))) errors.push(`${where}: ${reference} is ignored by git`)
  }

  for (const [, path] of source.matchAll(new RegExp(`${colabPrefix.replaceAll('.', '\\.')}([^"')\\s]+)`, 'g'))) {
    if (!trackedFiles.has(path)) errors.push(`${where}: Colab link points to ${path}, which is not in the repository`)
  }
}
