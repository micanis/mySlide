<script setup lang="ts">
interface TimelineItem {
  year: string
  title: string
  subtitle?: string
  current?: boolean
}

defineProps<{
  items: TimelineItem[]
}>()
</script>

<template>
  <div class="timeline">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="timeline-item"
      :class="{ current: item.current }"
      v-motion
      :initial="{ opacity: 0, x: -20 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: i * 150 } }"
    >
      <div class="timeline-dot" />
      <div class="timeline-content">
        <span class="year">{{ item.year }}</span>
        <span class="title">{{ item.title }}</span>
        <span v-if="item.subtitle" class="subtitle">{{ item.subtitle }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  padding-left: 1.5rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0.35rem;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 2px;
  background: linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  padding-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #64748b;
  border: 2px solid #1e293b;
  flex-shrink: 0;
  margin-top: 0.25rem;
  margin-left: -1.15rem;
  z-index: 1;
}

.timeline-item.current .timeline-dot {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.6);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 12px rgba(59, 130, 246, 0.6); }
  50% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.8); }
}

.timeline-content {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.year {
  font-size: 0.7rem;
  font-weight: 600;
  color: #3b82f6;
}

.title {
  font-size: 0.85rem;
  font-weight: 500;
  color: #f1f5f9;
}

.subtitle {
  font-size: 0.7rem;
  color: #94a3b8;
}

.timeline-item.current .title {
  color: #fff;
  font-weight: 600;
}
</style>
