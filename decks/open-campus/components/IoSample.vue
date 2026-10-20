<script setup lang="ts">
// Sample input and expected output of a programming exercise
defineProps<{
  input: string
  output: string
}>()
</script>

<template>
  <div class="my-4 grid grid-cols-2 gap-3 font-mono text-xl text-neutral-900">
    <div class="rounded-md border border-neutral-300 px-4 py-3">
      <span class="label">Input</span>{{ input }}
    </div>
    <div class="rounded-md border border-neutral-300 px-4 py-3">
      <span class="label">Output</span>{{ output }}
    </div>
  </div>
</template>
