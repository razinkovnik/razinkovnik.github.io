<!-- src/components/ui/ProjectModal.vue -->
<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <Card class="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <CardHeader>
        <CardTitle class="text-2xl">{{ project.name }}</CardTitle>
        <p class="text-muted-foreground">{{ project.fullDescription }}</p>
      </CardHeader>
      <CardContent>
        <div class="mb-4">
          <h4 class="font-medium mb-2">Технологии:</h4>
          <div class="flex flex-wrap gap-2">
            <Badge 
              variant="outline" 
              v-for="(tech, i) in project.technologies" 
              :key="i"
            >
              {{ tech }}
            </Badge>
          </div>
        </div>
        <div class="mb-4" v-if="project.links && project.links.length">
          <h4 class="font-medium mb-2">Ссылки:</h4>
          <div class="space-y-2">
            <a 
              v-for="(link, i) in project.links" 
              :key="i" 
              :href="link.url" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="block"
            >
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
</template>

<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Button
} from '@/components/ui'

interface ProjectLink {
  name: string
  url: string
}

interface Project {
  name: string
  description: string
  fullDescription: string
  technologies: string[]
  links: ProjectLink[]
}

interface Props {
  project: Project
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>