import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { dirname, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const slidesDirectory = resolve(root, 'slides')
const outputDirectory = resolve(root, 'dist')
const siteBasePath = normalizeBasePath(process.env.SITE_BASE_PATH ?? '/mySlide/')

const slideFiles = findSlides(slidesDirectory)
if (slideFiles.length === 0) {
  throw new Error('No slide Markdown files were found in slides/.')
}

rmSync(outputDirectory, { recursive: true, force: true })
mkdirSync(outputDirectory, { recursive: true })

const slides = slideFiles.map((sourcePath) => {
  const relativePath = relative(slidesDirectory, sourcePath)
  const slug = relativePath.replace(/\.md$/, '').split(sep).join('/')

  if (slug === 'index') {
    throw new Error('slides/index.md is reserved for the generated slide index.')
  }

  return {
    sourcePath,
    source: relative(root, sourcePath),
    slug,
    title: getTitle(sourcePath, slug),
    outputPath: resolve(outputDirectory, slug),
    basePath: `${siteBasePath}${slug}/`,
  }
})

for (const slide of slides) {
  console.log(`Building ${slide.source} → ${slide.basePath}`)
  const result = spawnSync(
    'pnpm',
    ['exec', 'slidev', 'build', slide.source, '--out', slide.outputPath, '--base', slide.basePath],
    { cwd: root, stdio: 'inherit' },
  )

  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}

writeFileSync(resolve(outputDirectory, 'index.html'), createIndex(slides), 'utf8')

function findSlides(directory) {
  return readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      if (entry.name.startsWith('.')) return []
      const entryPath = resolve(directory, entry.name)
      if (entry.isDirectory()) return entry.name === 'public' ? [] : findSlides(entryPath)
      return entry.isFile() && entry.name.endsWith('.md') ? [entryPath] : []
    })
    .sort()
}

function getTitle(sourcePath, fallback) {
  const source = readFileSync(sourcePath, 'utf8')
  const frontmatterTitle = source.match(/^---[\s\S]*?^title:\s*["']?(.+?)["']?\s*$/m)
  const heading = source.match(/^#\s+(.+)$/m)
  return (frontmatterTitle?.[1] ?? heading?.[1] ?? fallback).trim()
}

function normalizeBasePath(path) {
  return `/${path.replace(/^\/+|\/+$/g, '')}/`.replace('//', '/')
}

function createIndex(slides) {
  const cards = slides
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

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character])
}
