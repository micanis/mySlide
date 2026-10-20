import { readdirSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// pnpm dev <deck> [...slidev options] — start the dev server for decks/<deck>
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const [deck, ...options] = process.argv.slice(2)
const decks = readdirSync(resolve(root, 'decks'))

if (!decks.includes(deck)) {
  console.error(`Usage: pnpm dev <deck>\nDecks: ${decks.join(', ')}`)
  process.exit(1)
}

const result = spawnSync('pnpm', ['exec', 'slidev', 'slides.md', '--open', ...options], {
  cwd: resolve(root, 'decks', deck),
  stdio: 'inherit',
})
process.exit(result.status ?? 1)
