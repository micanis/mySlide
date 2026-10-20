import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { dirname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const decksDirectory = resolve(root, 'decks')
const outputDirectory = resolve(root, 'dist')
const siteBasePath = normalizeBasePath(process.env.SITE_BASE_PATH ?? '/mySlide/')

// Old public paths that moved. The generated 404.html sends visitors on.
const redirects = {
  crane_recruiting: 'crane-recruiting',
}

const decks = findDecks(decksDirectory)
if (decks.length === 0) {
  throw new Error('No decks were found. Add decks/<name>/slides.md.')
}

rmSync(outputDirectory, { recursive: true, force: true })
mkdirSync(outputDirectory, { recursive: true })

for (const deck of decks) {
  console.log(`Building ${relative(root, deck.directory)} → ${deck.basePath}`)
  const result = spawnSync(
    'pnpm',
    ['exec', 'slidev', 'build', 'slides.md', '--out', deck.outputPath, '--base', deck.basePath],
    { cwd: deck.directory, stdio: 'inherit' },
  )

  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}

writeFileSync(resolve(outputDirectory, 'index.html'), createIndex(decks), 'utf8')
writeFileSync(resolve(outputDirectory, '404.html'), createNotFound(decks), 'utf8')

function findDecks(directory) {
  return readdirSync(directory, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && !entry.name.startsWith('.'))
    .map(entry => resolve(directory, entry.name))
    .filter(deckDirectory => existsSync(resolve(deckDirectory, 'slides.md')))
    .sort()
    .map((deckDirectory) => {
      const slug = relative(directory, deckDirectory)
      return {
        directory: deckDirectory,
        slug,
        title: getTitle(resolve(deckDirectory, 'slides.md'), slug),
        outputPath: resolve(outputDirectory, slug),
        basePath: `${siteBasePath}${slug}/`,
      }
    })
}

function getTitle(sourcePath, fallback) {
  const source = readFileSync(sourcePath, 'utf8')
  const headmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? ''
  const frontmatterTitle = headmatter.match(/^title:\s*["']?(.+?)["']?\s*$/m)
  const heading = source.match(/^#\s+(.+)$/m)
  return (frontmatterTitle?.[1] ?? heading?.[1] ?? fallback).replace(/<br\s*\/?>/g, ' ').trim()
}

function normalizeBasePath(path) {
  return `/${path.replace(/^\/+|\/+$/g, '')}/`.replace('//', '/')
}

function createIndex(decks) {
  const cards = decks
    .map(({ slug, title }) => `      <li><a href="${escapeHtml(encodeURI(`${slug}/`))}">${escapeHtml(title)}</a></li>`)
    .join('\n')

  return `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>スライド一覧</title>
    <style>
      :root { color-scheme: light dark; font-family: system-ui, sans-serif; }
      body { max-width: 48rem; margin: 0 auto; padding: 4rem 1.5rem; background: #fff; color: #0f172a; }
      h1 { font-size: 1.75rem; }
      ul { padding: 0; list-style: none; display: grid; gap: .75rem; }
      a { display: block; padding: 1rem 1.25rem; border: 1px solid #d1d5db; border-radius: .5rem; color: inherit; text-decoration: none; }
      a:hover { border-color: #2563eb; color: #1d4ed8; }
      @media (prefers-color-scheme: dark) {
        body { background: #0f172a; color: #f8fafc; }
        a { border-color: #475569; }
        a:hover { border-color: #93c5fd; color: #bfdbfe; }
      }
    </style>
  </head>
  <body>
    <main>
      <h1>スライド一覧</h1>
      <ul>
${cards}
      </ul>
    </main>
  </body>
</html>
`
}

// GitHub Pages serves the root 404.html for every unknown path and has no SPA
// fallback. Decks use routerMode: hash, so /<deck>/3 (typed or from an old
// link) and moved deck paths are sent to /<deck>/#/3; anything else links home.
function createNotFound(decks) {
  return `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ページが見つかりません</title>
    <script>
      (() => {
        const base = ${JSON.stringify(siteBasePath)}
        const decks = ${JSON.stringify(Object.fromEntries([...decks.map(({ slug }) => [slug, slug]), ...Object.entries(redirects)]))}
        const { pathname, hash } = location
        if (!pathname.startsWith(base)) return
        const [first, ...rest] = pathname.slice(base.length).split('/')
        const deck = decks[first]
        if (deck) location.replace(base + deck + '/' + (hash || (rest.join('/') ? '#/' + rest.join('/') : '')))
      })()
    </script>
    <style>
      :root { color-scheme: light dark; font-family: system-ui, sans-serif; }
      body { max-width: 48rem; margin: 0 auto; padding: 4rem 1.5rem; }
    </style>
  </head>
  <body>
    <h1>ページが見つかりません</h1>
    <p><a href="${siteBasePath}">スライド一覧へ</a></p>
  </body>
</html>
`
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character])
}
