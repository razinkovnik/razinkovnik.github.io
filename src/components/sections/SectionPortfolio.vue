<!-- src/components/sections/SectionPortfolio.vue -->
<template>
  <section ref="portEl" class="mb-16 fade-up">
    <div class="flex items-center gap-3 mb-8">
      <div class="w-1 h-8 bg-primary rounded-full"></div>
      <h2 class="text-2xl font-bold">Портфолио проектов</h2>
    </div>

    <div class="space-y-4 stagger-animation">
      <Card v-for="(group, idx) in projectGroups" :key="idx" class="card-hover overflow-hidden">
        <button
          class="flex w-full items-center justify-between p-6 text-left hover:bg-accent/30 transition-colors"
          @click="toggleGroup(idx)"
        >
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 flex items-center justify-center">
              <div v-if="group.examples.length > 0" class="text-center">
                <div
                  class="bg-gradient-to-br from-primary to-primary/80 rounded-lg flex flex-col items-center justify-center text-white relative"
                  style="width: 56px; height: 56px"
                >
                  <span class="font-bold text-lg leading-none">{{ group.examples.length }}</span>
                  <span class="text-xs leading-none mt-1">{{
                    getExampleWord(group.examples.length)
                  }}</span>
                </div>
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-semibold text-base md:text-lg truncate">{{ group.title }}</h3>
              <p class="text-xs text-muted-foreground mt-0.5 hidden sm:block">
                {{ getRegions(group).join(', ') }}
              </p>
            </div>
          </div>
          <svg
            class="h-5 w-5 transition-transform duration-200 text-muted-foreground"
            :class="{ 'rotate-180': openGroups[idx] }"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>

        <div v-show="openGroups[idx]" class="px-6 pb-6 border-t pt-6">
          <p class="text-muted-foreground mb-4 leading-relaxed">{{ group.summary }}</p>

          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div
              v-for="(feat, fIdx) in group.features"
              :key="fIdx"
              class="flex items-start gap-3 p-3 bg-accent/30 rounded-lg"
            >
              <span class="text-primary mt-0.5">✓</span>
              <span class="text-sm">{{ feat }}</span>
            </div>
          </div>

          <div v-if="group.examples.length > 0" class="grid gap-3">
            <div
              v-for="(example, eIdx) in visibleExamples(group, idx)"
              :key="eIdx"
              class="flex items-center justify-between p-3 border rounded-lg hover:border-primary transition-colors"
            >
              <span class="font-medium">{{ example }}</span>
              <Button
                variant="outline"
                size="sm"
                @click="handleProjectClick(example)"
                class="btn-modern !py-1 !px-3 text-xs"
              >
                Подробнее
              </Button>
            </div>
          </div>

          <div v-if="group.examples.length > 4" class="mt-4 text-center">
            <Button
              variant="ghost"
              size="sm"
              @click="toggleShowAll(idx)"
              class="text-primary hover:text-primary/80"
            >
              {{ showAll[idx] ? 'Скрыть' : `Показать все ${group.examples.length} проектов` }}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card, Button } from '@/components/ui'
import type { Project, ProjectGroup } from '@/types'
import projects from '@/data/projects.json'
import projectGroupsData from '@/data/projectGroups.json'
import { useFadeUp } from '@/composables/useFadeUp'

const emit = defineEmits<{
  projectSelect: [project: Project | undefined]
}>()

const portEl = ref<HTMLElement | null>(null)
useFadeUp(portEl)

const projectGroups = projectGroupsData as ProjectGroup[]
const openGroups = ref<Record<number, boolean>>({})
const showAll = ref<Record<number, boolean>>({})

function toggleShowAll(index: number) {
  showAll.value[index] = !showAll.value[index]
}

function visibleExamples(group: ProjectGroup, index: number): string[] {
  const limit = 4
  return showAll.value[index] ? group.examples : group.examples.slice(0, limit)
}

function getRegions(group: ProjectGroup): string[] {
  return group.regions
}

function findProjectByName(name: string): Project | undefined {
  return (projects as Project[]).find((p) => p.name === name)
}

function toggleGroup(index: number) {
  openGroups.value[index] = !openGroups.value[index]
}

function handleProjectClick(projectName: string) {
  const project = findProjectByName(projectName)
  emit('projectSelect', project)
}

function getExampleWord(n: number): string {
  const mod10 = n % 10
  const mod100 = n % 100

  if (mod100 >= 11 && mod100 <= 19) {
    return 'примеров'
  }

  if (mod10 === 1) {
    return 'пример'
  }

  if (mod10 >= 2 && mod10 <= 4) {
    return 'примера'
  }

  return 'примеров'
}
</script>
