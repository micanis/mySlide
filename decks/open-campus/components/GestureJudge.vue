<script setup lang="ts">
import { computed, ref } from 'vue'
const wrist = ref(120)
const shoulder = 220
const raised = computed(() => wrist.value < shoulder)
</script>

<template>
  <div class="judge">
    <div class="figure">
      <div class="axis">Y ↓</div>
      <div class="shoulder" :style="{ top: shoulder + 'px' }"><i></i><span>肩 y = {{ shoulder }}</span></div>
      <div class="wrist" :style="{ top: wrist + 'px' }"><i></i><span>手首 y = {{ wrist }}</span></div>
    </div>
    <div class="judge-panel">
      <code>if wrist_y &lt; shoulder_y:</code>
      <strong :class="{ up: raised }">{{ raised ? '手を上げています' : '手を下げています' }}</strong>
      <label>手首を動かす<input v-model="wrist" type="range" min="55" max="300" /></label>
      <p>{{ wrist }} {{ raised ? '&lt;' : '≥' }} {{ shoulder }} → <b>{{ raised }}</b></p>
    </div>
  </div>
</template>

<style scoped>
.judge{display:grid;grid-template-columns:.8fr 1.2fr;gap:26px;height:330px}.figure{position:relative;background:#ecebe6;border:1px solid #c9c8c1;overflow:hidden}.axis{position:absolute;left:15px;top:13px;font:700 12px/1 ui-monospace,monospace;color:#525252}.shoulder,.wrist{position:absolute;left:28%;right:10%;height:1px;background:#aaa}.shoulder i,.wrist i{position:absolute;left:0;top:-6px;width:13px;height:13px;border-radius:50%;background:#111}.shoulder span,.wrist span{position:absolute;left:22px;top:-11px;font:700 13px/1.4 ui-monospace,monospace}.wrist{background:#ff6b45}.wrist i{background:#ff6b45}.judge-panel{background:#f5f5f5;color:#171717;padding:30px;display:flex;flex-direction:column;justify-content:center}.judge-panel code{color:#171717;font-size:16px}.judge-panel strong{font-size:25px;margin:24px 0;color:#737373}.judge-panel strong.up{color:#171717}.judge-panel label{font-size:12px;color:#737373}.judge-panel input{display:block;width:100%;accent-color:#ff6b45;margin-top:12px}.judge-panel p{font:14px/1.4 ui-monospace,monospace}.judge-panel b{color:#171717}
</style>
