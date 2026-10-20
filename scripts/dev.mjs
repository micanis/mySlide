import { spawnSync } from 'node:child_process'
import { findDecks } from './decks.mjs'

// pnpm dev <deck> [...slidev options] — start the dev server for decks/<deck>
const [slug, ...options] = process.argv.slice(2)
const decks = findDecks()
const deck = decks.find(deck => deck.slug === slug)

if (!deck) {
  console.error(`Usage: pnpm dev <deck>\nDecks: ${decks.map(deck => deck.slug).join(', ')}`)
  process.exit(1)
}

const result = spawnSync('pnpm', ['exec', 'slidev', 'slides.md', '--open', ...options], {
  cwd: deck.directory,
  stdio: 'inherit',
})
if (result.error) throw result.error
process.exit(result.status ?? 1)
