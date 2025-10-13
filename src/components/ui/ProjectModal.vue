<!-- src/components/ProjectModal.vue -->
<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <!-- Оборачиваем Card в div с inline стилями для CSS-переменных -->
    <div :style="modalThemeStyles">
      <Card class="max-w-2xl w-full max-h-[90vh] overflow-y-auto border-border">
        <CardHeader>
          <CardTitle class="text-2xl">{{ project.name }}</CardTitle>
          <p class="text-muted-foreground">{{ project.fullDescription }}</p>
        </CardHeader>
        <CardContent>
          <div class="mb-4">
            <h4 class="font-medium mb-2">Технологии:</h4>
            <div class="flex flex-wrap gap-2">
              <Badge variant="outline" v-for="(tech, i) in project.technologies" :key="i">{{ tech }}</Badge>
            </div>
          </div>
          <div class="mb-4" v-if="project.links && project.links.length">
            <h4 class="font-medium mb-2">Ссылки:</h4>
            <div class="space-y-2">
              <a v-for="(link, i) in project.links" :key="i" :href="link.url" target="_blank" rel="noopener noreferrer" class="block">
                <Button variant="outline" size="sm" class="w-full justify-start">
                  {{ link.name }}
                </Button>
              </a>
            </div>
          </div>
        </CardContent>
        <div class="p-6 pt-0">
          <Button variant="outline" size="sm" @click="emit('close')">
            Закрыть
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Button
} from '@/components/ui'

interface Project {
  name: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  links: { name: string; url: string }[];
}

interface Props {
  project: Project;
  isDarkTheme: boolean; // Передаем сюда тему из родительского компонента
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

// Вычисляем inline стили для CSS-переменных в зависимости от темы
const modalThemeStyles = computed(() => {
  if (props.isDarkTheme) {
    // Значения для тёмной темы
    return {
      '--background': 'oklch(0.145 0 0)',
      '--foreground': 'oklch(0.985 0 0)',
      '--card': 'oklch(0.145 0 0)',
      '--card-foreground': 'oklch(0.985 0 0)',
      '--popover': 'oklch(0.145 0 0)',
      '--popover-foreground': 'oklch(0.985 0 0)',
      '--primary': 'oklch(0.985 0 0)',
      '--primary-foreground': 'oklch(0.205 0 0)',
      '--secondary': 'oklch(0.269 0 0)',
      '--secondary-foreground': 'oklch(0.985 0 0)',
      '--muted': 'oklch(0.269 0 0)',
      '--muted-foreground': 'oklch(0.708 0 0)',
      '--accent': 'oklch(0.269 0 0)',
      '--accent-foreground': 'oklch(0.985 0 0)',
      '--destructive': 'oklch(0.396 0.141 25.723)',
      '--destructive-foreground': 'oklch(0.637 0.237 25.331)',
      '--border': 'oklch(0.269 0 0)',
      '--input': 'oklch(0.269 0 0)',
      '--ring': 'oklch(0.439 0 0)',
      // Добавим также цвета для компонентов, которые зависят от этих переменных
      // Это может быть избыточно, но гарантирует правильное отображение
      'backgroundColor': 'oklch(0.145 0 0)', // var(--background)
      'color': 'oklch(0.985 0 0)', // var(--foreground)
    }
  } else {
    // Значения для светлой темы
    return {
      '--background': '#ffffff',
      '--foreground': 'oklch(0.145 0 0)',
      '--card': '#ffffff',
      '--card-foreground': 'oklch(0.145 0 0)',
      '--popover': 'oklch(1 0 0)',
      '--popover-foreground': 'oklch(0.145 0 0)',
      '--primary': '#030213',
      '--primary-foreground': 'oklch(1 0 0)',
      '--secondary': 'oklch(0.95 0.0058 264.53)',
      '--secondary-foreground': '#030213',
      '--muted': '#ececf0',
      '--muted-foreground': '#717182',
      '--accent': '#e9ebef',
      '--accent-foreground': '#030213',
      '--destructive': '#d4183d',
      '--destructive-foreground': '#ffffff',
      '--border': 'rgba(0, 0, 0, 0.1)',
      '--input': 'transparent',
      '--ring': 'oklch(0.708 0 0)',
      // Добавим также цвета для компонентов, которые зависят от этих переменных
      'backgroundColor': '#ffffff', // var(--background)
      'color': 'oklch(0.145 0 0)', // var(--foreground)
    }
  }
})
</script>
