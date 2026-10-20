<script setup lang="ts">
interface Skill {
  name: string
  icon?: string
  color?: string
}

defineProps<{
  skills: Skill[]
}>()
</script>

<template>
  <div class="skill-tags">
    <span
      v-for="(skill, i) in skills"
      :key="i"
      class="skill-tag"
      :style="skill.color ? { '--accent': skill.color } : {}"
      v-motion
      :initial="{ opacity: 0, scale: 0.8 }"
      :enter="{ opacity: 1, scale: 1, transition: { delay: i * 80 } }"
    >
      <component v-if="skill.icon" :is="skill.icon" class="icon" />
      {{ skill.name }}
    </span>
  </div>
</template>

<style scoped>
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  --accent: #3b82f6;
  padding: 0.35rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #e2e8f0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.1));
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 9999px;
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(139, 92, 246, 0.2));
  border-color: rgba(59, 130, 246, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
}
</style>
