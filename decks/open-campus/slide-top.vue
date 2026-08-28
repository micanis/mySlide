<template>
  <div
    v-if="$page > 1"
    class="absolute right-0 bottom-0 z-50 bg-neutral-200 px-4 py-2 text-xs font-mono tracking-wider text-neutral-900"
    aria-label="ページ番号"
  >
    {{ $page }} / {{ $nav.total }}
  </div>
</template>
