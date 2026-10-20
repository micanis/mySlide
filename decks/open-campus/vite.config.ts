import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'

// Serve the Pyodide runtime from this site instead of a CDN, so PythonRunner
// works without reaching jsDelivr (e.g. offline `pnpm dev` at a venue).
const pyodideDirectory = dirname(createRequire(import.meta.url).resolve('pyodide/package.json'))
const pyodideFiles = ['pyodide.asm.mjs', 'pyodide.asm.wasm', 'python_stdlib.zip', 'pyodide-lock.json']
const contentTypes: Record<string, string> = {
  mjs: 'text/javascript',
  wasm: 'application/wasm',
  zip: 'application/zip',
  json: 'application/json',
}

function pyodideAssets(): Plugin {
  return {
    name: 'pyodide-assets',
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const name = request.url?.split('?')[0].match(/\/pyodide\/([^/]+)$/)?.[1]
        if (!name || !pyodideFiles.includes(name)) return next()
        response.setHeader('Content-Type', contentTypes[name.split('.').pop()!])
        response.end(readFileSync(resolve(pyodideDirectory, name)))
      })
    },
    generateBundle() {
      for (const name of pyodideFiles) {
        this.emitFile({ type: 'asset', fileName: `pyodide/${name}`, source: readFileSync(resolve(pyodideDirectory, name)) })
      }
    },
  }
}

export default defineConfig({
  plugins: [pyodideAssets()],
})
