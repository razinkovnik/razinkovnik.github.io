<!-- src/App.vue -->
<template>
  <HeadMeta
    title="Разиньков Никита Николаевич - Инженер-проектировщик нефтегазовых объектов"
    description="Более 20 лет опыта в проектировании систем газоснабжения, магистральных и распределительных трубопроводов, объектов добычи и хранения нефти и газа."
    keywords="инженер-проектировщик, нефтегазовые объекты, газоснабжение, AutoCAD Plant 3D, Python, проектирование"
  />

  <div class="min-h-screen bg-background text-foreground">
    <!-- Hero Section с градиентом -->
    <section class="gradient-bg text-white">
      <Hero />
    </section>

    <div class="container mx-auto max-w-4xl py-12 px-4">
      <!-- Опыт работы с улучшенными карточками -->
      <section class="mb-16 fade-in-up">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-1 h-8 bg-primary rounded-full"></div>
          <h2 class="text-2xl font-bold">Опыт работы</h2>
        </div>

        <Card class="card-hover p-6">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <CardTitle class="text-xl font-semibold text-primary">
                Ведущий инженер-проектировщик / Руководитель отдела проектирования
              </CardTitle>
              <p class="text-muted-foreground mt-1">
                АО «Газпроектинжиниринг», ООО «Газпроектсервис», НИПИ «Инжгео», ООО
                «Трансэнергострой»
              </p>
            </div>
            <span
              class="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mt-2 md:mt-0"
            >
              <span class="w-2 h-2 bg-green-500 rounded-full"></span>
              2005 – настоящее время
            </span>
          </div>

          <ul class="grid gap-3 mt-4">
            <li
              v-for="(item, index) in experienceItems"
              :key="index"
              class="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
            >
              <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-muted-foreground">{{ item }}</span>
            </li>
          </ul>
        </Card>
      </section>

      <!-- ПОРТФОЛИО  -->
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
                <div class="text-center">
                  <div
                    class="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex flex-col items-center justify-center text-white relative"
                  >
                    <span class="font-bold text-lg leading-none">{{ group.examples.length }}</span>
                    <span class="text-xs leading-none mt-1">из многих</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-lg">{{ group.title }}</h3>
                  <p class="text-sm text-muted-foreground mt-1">
                    Регионы: {{ getRegions(group).join(', ') }}
                  </p>
                  <p class="text-xs text-primary mt-1 font-medium">
                    Показаны ключевые проекты из портфолио
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

              <div class="grid gap-3">
                <div
                  v-for="(example, eIdx) in visibleExamples(group, idx)"
                  :key="eIdx"
                  class="flex items-center justify-between p-3 border rounded-lg hover:border-primary transition-colors"
                >
                  <span class="font-medium">{{ example }}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    @click="openProjectModal(findProjectByName(example))"
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

      <!-- НАВЫКИ -->
    <Skills />

      <!-- КОНТАКТЫ -->

      <Contact />
    </div>

    <!-- Подвал -->
   <footer class="border-t bg-surface/50 py-8 mt-12 text-center text-sm text-muted-fore">
    <p class="mb-2">Разиньков Никита Николаевич</p>
    <p class="text-xs">Обновлено: {{ currentYear }}</p>
  </footer>

    <!-- Модальное окно -->
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Hero,
  Card,
  Button,
  Skills,
  Contact
} from '@/components/ui'
import ProjectModal from '@/components/ui/UIProjectModal.vue'
import type { Project, ProjectGroup } from '@/types'
import HeadMeta from '@/components/seo/HeadMeta.vue'

// Импорт данных
import projects from '@/data/projects.json'
import projectGroupsData from '@/data/projectGroups.json'
import { useFadeUp } from './composables/useFadeUp'

const projectGroups = projectGroupsData as ProjectGroup[]

// Реактивные переменные
const isDark = ref(false)
const selectedProject = ref<Project | null>(null)
const openGroups = ref<Record<number, boolean>>({})
const showAll = ref<Record<number, boolean>>({})

const expEl   = ref<HTMLElement | null>(null)
const portEl  = ref<HTMLElement | null>(null)
const skillsEl = ref<HTMLElement | null>(null)
const contactEl = ref<HTMLElement | null>(null)

;[expEl, portEl, skillsEl, contactEl].forEach(useFadeUp)

const currentYear = new Date().getFullYear().toString()

// Улучшенные данные для опыта
const experienceItems = [
  'Разработка проектной и рабочей документации для систем газоснабжения',
  'Проектирование объектов обустройства нефтяных месторождений',
  'Подготовка и сопровождение проектов в государственной экспертизе',
  'Автоматизация черчения и документооборота с использованием Python',
  'Руководство проектной группой (5–10 инженеров)',
  'Координация междисциплинарных работ в гибридном формате',
]

// Существующие методы остаются без изменений
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

function setTheme(dark: boolean) {
  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.theme = dark ? 'dark' : 'light'
  isDark.value = dark
}

function openProjectModal(project: Project | undefined) {
  if (project) selectedProject.value = project
}

onMounted(() => {
  // Инициализация темы
  const saved = localStorage.theme
  if (saved === 'dark' || saved === 'light') {
    setTheme(saved === 'dark')
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark)
  }
})
</script>
