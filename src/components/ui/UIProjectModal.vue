<!-- src/components/ui/UIProjectModal.vue -->
<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      @click="$emit('close')"
    >
      <div
        class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface text-primary shadow-xl border border-border"
        @click.stop
      >
        <!-- Заголовок -->
        <div class="p-6 border-b border-border">
          <h2 class="text-2xl font-bold">{{ project.name }}</h2>
          <p class="text-muted-foreground mt-1">{{ project.description }}</p>
        </div>

        <!-- Основной контент -->
        <div class="p-6 space-y-5">
          <p class="text-foreground leading-relaxed">{{ project.fullDescription }}</p>

          <!-- Технологии -->
          <div>
            <h3 class="font-medium mb-2">Используемые технологии и решения:</h3>
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="(tech, idx) in project.technologies"
                :key="idx"
                variant="outline"
                class="text-xs px-2 py-1"
              >
                {{ tech }}
              </Badge>
            </div>
          </div>

          <!-- Ссылки (если есть) -->
          <div v-if="project.links.length > 0">
            <h3 class="font-medium mb-2">Ссылки:</h3>
            <ul class="list-disc pl-5 space-y-1">
              <li v-for="(link, idx) in project.links" :key="idx">
                <a
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-accent hover:underline"
                >
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Кнопка закрытия -->
        <div class="p-6 border-t border-border flex justify-end">
          <Button variant="outline" @click="$emit('close')">Закрыть</Button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { Badge, Button } from '@/components/ui'
import type { Project } from '@/types'

defineProps<{
  project: Project
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>
