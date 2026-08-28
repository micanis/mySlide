<script setup lang="ts">
import { computed, ref } from 'vue'

const name = ref('Computer Vision')
const count = ref(1)
const ran = ref(false)

const output = computed(() => `${name.value} を ${count.value} 回、はじめます。`)
</script>

<template>
  <div class="playground-shell">
    <div class="playground-code">
      <div class="window-bar"><i></i><i></i><i></i><span>mini_python.py</span></div>
      <pre><span class="ln">1</span><span class="py-name">topic</span> = <input v-model="name" aria-label="topic" />
<span class="ln">2</span><span class="py-name">count</span> = <button @click="count = Math.max(1, count - 1)">−</button><b>{{ count }}</b><button @click="count++">＋</button>
<span class="ln">3</span><span class="py-fn">print</span>(<span class="py-name">topic</span>, <span class="py-name">count</span>)</pre>
      <button class="run-button" @click="ran = true">▶ RUN</button>
    </div>
    <div class="playground-output" :class="{ active: ran }">
      <small>OUTPUT</small>
      <p v-if="ran">{{ output }}</p>
      <p v-else class="waiting">RUNを押すと、ここに結果が出ます</p>
    </div>
  </div>
</template>

<style scoped>
.playground-shell { display:grid; grid-template-columns:1.35fr .85fr; gap:18px; width:100%; }
.playground-code,.playground-output { border:1px solid #525252; background:#f5f5f5; color:#171717; }
.window-bar { height:34px; border-bottom:1px solid #333; display:flex; align-items:center; gap:7px; padding:0 12px; color:#737373; font:11px/1 ui-monospace,monospace; }
.window-bar i { width:7px;height:7px;border-radius:50%;background:#5c5c58}.window-bar span{margin-left:6px}
pre { margin:0; padding:22px 18px; font:17px/2.2 ui-monospace,SFMono-Regular,monospace; white-space:pre-wrap; }
.ln { display:inline-block;width:28px;color:#737373;user-select:none }.py-name{color:#171717}.py-fn{color:#525252}
input { width:190px; border:0;border-bottom:1px solid #777;background:transparent;color:#171717;font:inherit;outline:none;padding:0 3px }
pre button { border:1px solid #737373;background:#e5e5e5;color:#171717;width:25px;height:25px;line-height:20px;cursor:pointer;margin:0 7px } pre b{display:inline-block;min-width:20px;text-align:center;color:#171717}
.run-button { border:0;background:#dbff4a;color:#171717;font:800 11px/1 ui-monospace,monospace;letter-spacing:.08em;padding:11px 19px;margin:0 0 18px 46px;cursor:pointer }
.playground-output{padding:22px;display:flex;flex-direction:column;justify-content:center}.playground-output small{font:700 10px/1 ui-monospace,monospace;color:#737373;letter-spacing:.14em}.playground-output p{font-size:19px;line-height:1.55;margin:13px 0 0}.playground-output.active{border-color:#dbff4a}.playground-output .waiting{color:#737373;font-size:14px}
</style>
