<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
    <div
      ref="modalRef"
      class="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface rounded-xl border border-border shadow-xl"
    >
      <!-- Заголовок -->
      <div class="sticky top-0 z-10 bg-surface/90 backdrop-blur p-5 border-b border-border">
        <div class="flex justify-between items-start">
          <h2 class="text-xl font-semibold text-primary">{{ project.name }}</h2>
          <button
            @click="close"
            class="p-1.5 rounded-full hover:bg-muted transition-colors"
            aria-label="Закрыть"
          >
            <XIcon class="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
        <p class="text-muted-foreground text-sm mt-1">{{ project.description }}</p>
      </div>

      <!-- Основное содержимое -->
      <div class="p-5 space-y-6">
        <!-- Полное описание -->
        <div>
          <h3 class="font-medium text-lg mb-2">Описание</h3>
          <p class="text-foreground leading-relaxed">{{ project.fullDescription }}</p>
        </div>

        <!-- Технологии -->
        <div>
          <h3 class="font-medium text-lg mb-2">Используемые технологии и стандарты</h3>
          <div class="flex flex-wrap gap-2">
            <Badge v-for="(tech, idx) in project.technologies" :key="idx" variant="outline">
              {{ tech }}
            </Badge>
          </div>
        </div>

        <!-- Чертежи -->
        <div v-if="project.drawings && project.drawings.length > 0">
          <h3 class="font-medium text-lg mb-3">Примеры чертежей</h3>
          <div class="flex flex-wrap gap-2">
            <a
              v-for="(drawing, idx) in project.drawings"
              :key="idx"
              :href="drawing.url"
              target="_blank"
              download
              class="inline-flex items-center gap-1.5 px-3 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors text-sm font-medium"
            >
              <FileTextIcon class="w-4 h-4" />
              {{ drawing.label }}
            </a>
          </div>
        </div>

        <!-- Ссылки (если есть) -->
        <div v-if="project.links && project.links.length > 0">
          <h3 class="font-medium text-lg mb-2">Ссылки</h3>
          <ul class="space-y-1">
            <li v-for="(link, idx) in project.links" :key="idx">
              <a :href="link.url" target="_blank" class="text-accent hover:underline">{{
                link.name
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { XIcon } from 'lucide-vue-next'
import { FileTextIcon } from 'lucide-vue-next'
import { Badge } from '@/components/ui'
import type { Project } from '@/types'

defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const modalRef = ref<HTMLElement | null>(null)

function close() {
  emit('close')
}

// Закрытие по Escape
function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  document.body.classList.add('overflow-hidden')
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden')
  window.removeEventListener('keydown', handleKeyDown)
})
</script>
