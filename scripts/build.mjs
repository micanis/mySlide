import { mkdirSync, renameSync, rmSync, writeFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { relative, resolve } from 'node:path'
import { decksDirectory, findDecks, root } from './decks.mjs'

const outputDirectory = resolve(root, 'dist')
// Build into a temporary directory so a failed build never leaves a partial dist/.
const workDirectory = resolve(root, '.dist-tmp')
const siteBasePath = normalizeBasePath(process.env.SITE_BASE_PATH ?? '/mySlide/')

// Old public paths that moved. The generated 404.html sends visitors on.
const redirects = {
  crane_recruiting: 'crane-recruiting',
}

const decks = findDecks().map(deck => ({ ...deck, basePath: `${siteBasePath}${deck.slug}/` }))
if (decks.length === 0) {
  throw new Error('No decks were found. Add decks/<name>/slides.md.')
}

rmSync(workDirectory, { recursive: true, force: true })
mkdirSync(workDirectory, { recursive: true })

for (const deck of decks) {
  console.log(`Building ${relative(root, deck.directory)} → ${deck.basePath}`)
  const result = spawnSync(
    'pnpm',
    ['exec', 'slidev', 'build', 'slides.md', '--out', resolve(workDirectory, deck.slug), '--base', deck.basePath],
    { cwd: deck.directory, stdio: 'inherit' },
  )

  if (result.error || result.status !== 0) {
    rmSync(workDirectory, { recursive: true, force: true })
    if (result.error) throw result.error
    console.error(`Failed to build ${relative(decksDirectory, deck.directory)}`)
    process.exit(result.status ?? 1)
  }
}

writeFileSync(resolve(workDirectory, 'index.html'), createIndex(decks), 'utf8')
writeFileSync(resolve(workDirectory, '404.html'), createNotFound(decks), 'utf8')
rmSync(outputDirectory, { recursive: true, force: true })
renameSync(workDirectory, outputDirectory)

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
        const [first, ...rest] = pathname.slice(base.length).split('/').filter(Boolean)
        const deck = decks[first]
        if (deck) location.replace(base + deck + '/' + (hash || (rest.length ? '#/' + rest.join('/') : '')))
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
