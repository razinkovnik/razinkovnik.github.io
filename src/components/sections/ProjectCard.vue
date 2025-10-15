<template>
  <div
    class="bg-surface rounded-xl p-5 shadow-sm border border-border card-hover flex flex-col h-full"
  >
    <h3 class="font-semibold text-lg mb-2">{{ project.name }}</h3>
    <p class="text-muted-foreground text-sm mb-3">{{ project.description }}</p>

    <!-- Технологии -->
    <div class="flex flex-wrap gap-2 mb-4">
      <Badge v-for="tech in project.technologies.slice(0, 3)" :key="tech" variant="outline">
        {{ tech }}
      </Badge>
      <Badge v-if="project.technologies.length > 3" variant="outline"
        >+{{ project.technologies.length - 3 }}</Badge
      >
    </div>

    <!-- Кнопки действий -->
    <div class="mt-auto flex flex-wrap gap-2">
      <Button size="sm" variant="outline" @click="$emit('select')" class="flex-1">
        Подробнее
      </Button>

      <!-- Скачать чертежи -->
      <div v-if="project.drawings && project.drawings.length > 0" class="flex gap-1 mt-2">
        <!-- Вместо "PDF" показываем понятную подпись -->
        <a
          v-for="(drawing, idx) in visibleDrawings"
          :key="idx"
          :href="drawing.url"
          target="_blank"
          download
          class="inline-flex items-center justify-center text-sm px-2.5 py-1.5 bg-accent/10 text-accent rounded hover:bg-accent/20 transition-colors"
        >
          <FileTextIcon class="w-3 h-3 mr-1.5" />
          {{ drawing.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Badge, Button } from '@/components/ui'
import { FileTextIcon } from 'lucide-vue-next'
import type { Project } from '@/types'
import { computed } from 'vue'

const props = defineProps<{
  project: Project
}>()

defineEmits<{
  (e: 'select'): void
}>()

// Показываем максимум 2 PDF-ссылки явно
const visibleDrawings = computed(() => {
  return props.project.drawings?.slice(0, 2) || []
})
</script>
