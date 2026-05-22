<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import * as echarts from 'echarts'
import 'echarts-gl'

const props = defineProps({
  option: {
    type: Object,
    required: true
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '400px'
  }
})

const chartRef = ref(null)
let chart = null
let resizeObserver = null

const initChart = () => {
  if (chartRef.value && !chart) {
    chart = echarts.init(chartRef.value)
    chart.setOption(props.option)
  }
}

const resizeChart = () => {
  if (chart) {
    chart.resize()
  }
}

onMounted(() => {
  nextTick(() => {
    initChart()

    resizeObserver = new ResizeObserver(() => {
      resizeChart()
    })
    if (chartRef.value) {
      resizeObserver.observe(chartRef.value)
    }

    window.addEventListener('resize', resizeChart)

    setTimeout(resizeChart, 100)
  })
})

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
  window.removeEventListener('resize', resizeChart)
  if (chart) {
    chart.dispose()
    chart = null
  }
})

watch(() => props.option, (newOption) => {
  if (chart) {
    chart.setOption(newOption)
  }
}, { deep: true })
</script>

<template>
  <div ref="chartRef" :style="{ width, height }"></div>
</template>
