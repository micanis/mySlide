<script lang="ts">
import type { PyodideAPI } from 'pyodide'

let runtimePromise: Promise<PyodideAPI> | undefined

async function getRuntime() {
  if (!runtimePromise) {
    runtimePromise = import('pyodide').then(({ loadPyodide }) =>
      loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v314.0.6/full/',
      }),
    )
  }

  return runtimePromise
}
</script>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  code: string
  stdin?: string
}>(), {
  stdin: '',
})

const source = ref(props.code)
const input = ref(props.stdin)
const output = ref('RUNを押すと結果が表示されます')
const state = ref<'idle' | 'loading' | 'running'>('idle')

async function run() {
  if (state.value !== 'idle') return

  state.value = 'loading'
  output.value = 'Pythonを準備しています'

  try {
    const pyodide = await getRuntime()
    state.value = 'running'
    output.value = '実行しています'

    const program = JSON.stringify(source.value)
    const stdin = JSON.stringify(input.value)

    await pyodide.runPythonAsync(`
import io
import sys
import traceback

_slide_source = ${program}
_slide_input = ${stdin}
_slide_stdin = io.StringIO(_slide_input)
_slide_stdout = io.StringIO()
_slide_old_stdin = sys.stdin
_slide_old_stdout = sys.stdout

try:
    sys.stdin = _slide_stdin
    sys.stdout = _slide_stdout
    exec(compile(_slide_source, "<slide>", "exec"), {})
except Exception:
    traceback.print_exc(file=_slide_stdout)
finally:
    sys.stdin = _slide_old_stdin
    sys.stdout = _slide_old_stdout

_slide_result = _slide_stdout.getvalue()
`)

    output.value = pyodide.globals.get('_slide_result') || '出力はありません'
  }
  catch (error) {
    output.value = error instanceof Error ? error.message : String(error)
  }
  finally {
    state.value = 'idle'
  }
}
</script>

<template>
  <div class="python-runner">
    <div class="runner-bar">
      <div>
        <span class="runner-dot" />
        <span>PYTHON</span>
      </div>
      <button type="button" :disabled="state !== 'idle'" @click="run">
        {{ state === 'idle' ? '▶ RUN' : 'LOADING' }}
      </button>
    </div>

    <label class="runner-code">
      <span>CODE</span>
      <textarea v-model="source" spellcheck="false" aria-label="Python code" />
    </label>

    <div class="runner-bottom">
      <label>
        <span>INPUT</span>
        <textarea v-model="input" spellcheck="false" aria-label="Standard input" placeholder="入力なし" />
      </label>
      <div class="runner-output">
        <span>OUTPUT</span>
        <pre>{{ output }}</pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.python-runner {
  min-height: 0;
  height: 100%;
  display: grid;
  grid-template-rows: 42px minmax(0, 1fr) 120px;
  overflow: hidden;
  border: 1px solid #a3a3a3;
  background: #fafafa;
  color: #171717;
}

.runner-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #a3a3a3;
  padding: 0 12px 0 14px;
  color: #525252;
  font: 700 11px/1 "JetBrains Mono", ui-monospace, monospace;
  letter-spacing: .12em;
}

.runner-bar > div {
  display: flex;
  align-items: center;
  gap: 9px;
}

.runner-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: #525252;
}

.runner-bar button {
  border: 1px solid #525252;
  background: #e5e5e5;
  color: #171717;
  padding: 8px 12px;
  font: 800 10px/1 "JetBrains Mono", ui-monospace, monospace;
  letter-spacing: .1em;
  cursor: pointer;
}

.runner-bar button:disabled {
  color: #737373;
  cursor: wait;
}

.runner-code,
.runner-bottom label,
.runner-output {
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.runner-code > span,
.runner-bottom span {
  flex: none;
  padding: 9px 12px 7px;
  color: #737373;
  font: 700 9px/1 "JetBrains Mono", ui-monospace, monospace;
  letter-spacing: .14em;
}

textarea,
pre {
  width: 100%;
  min-height: 0;
  flex: 1;
  resize: none;
  border: 0;
  outline: none;
  background: transparent;
  color: #171717;
  font: 14px/1.55 "JetBrains Mono", ui-monospace, monospace;
  tab-size: 4;
}

.runner-code textarea {
  padding: 2px 14px 12px;
}

.runner-bottom {
  min-height: 0;
  display: grid;
  grid-template-columns: .72fr 1.28fr;
  border-top: 1px solid #a3a3a3;
}

.runner-bottom label {
  border-right: 1px solid #a3a3a3;
}

.runner-bottom textarea,
.runner-output pre {
  margin: 0;
  padding: 0 12px 10px;
  white-space: pre-wrap;
  overflow: auto;
  font-size: 12px;
}

.runner-output pre {
  color: #404040;
}

textarea::placeholder {
  color: #737373;
}
</style>
