<script setup lang="ts">
interface SocialLink {
  icon: string
  label: string
  url?: string
}

defineProps<{
  links: SocialLink[]
}>()
</script>

<template>
  <div class="social-links">
    <a
      v-for="(link, i) in links"
      :key="i"
      :href="link.url || '#'"
      class="social-link"
      v-motion
      :initial="{ opacity: 0, y: 10 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 300 + i * 100 } }"
    >
      <div class="icon-wrapper">
        <component :is="link.icon" class="w-5 h-5" />
      </div>
      <span class="label">{{ link.label }}</span>
    </a>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  color: #cbd5e1;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
}

.social-link:hover {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.4);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.label {
  font-size: 0.85rem;
  font-weight: 500;
}
</style>
