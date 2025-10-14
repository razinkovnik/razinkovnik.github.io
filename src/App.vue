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
      <div class="container mx-auto max-w-4xl py-16 px-4">
        <div class="flex flex-col md:flex-row items-center gap-8 fade-in-up">
          <div class="relative">
            <Avatar class="h-32 w-32 ring-4 ring-white/20 ring-offset-4 ring-offset-primary/10">
              <AvatarImage src="/images/avatar.png" alt="Разиньков Никита" />
              <AvatarFallback class="bg-white/20 text-white">НР</AvatarFallback>
            </Avatar>
            <div
              class="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1 ring-2 ring-white"
            >
              <div class="w-4 h-4 rounded-full bg-green-400"></div>
            </div>
          </div>

          <div class="text-center md:text-left flex-1">
            <h1 class="text-4xl font-bold mb-2">Разиньков Никита Николаевич</h1>
            <p class="text-xl text-white/90 mb-4">Инженер-проектировщик нефтегазовых объектов</p>
            <p class="text-lg text-white/80 max-w-2xl leading-relaxed">
              Более 20 лет опыта в проектировании систем газоснабжения, магистральных и
              распределительных трубопроводов, объектов добычи и хранения нефти и газа.
            </p>

            <div class="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <Badge variant="secondary" class="bg-white/20 text-white border-white/30">
                🎯 20+ лет опыта
              </Badge>
              <Badge variant="secondary" class="bg-white/20 text-white border-white/30">
                📐 AutoCAD Plant 3D
              </Badge>
              <Badge variant="secondary" class="bg-white/20 text-white border-white/30">
                🐍 Python
              </Badge>
              <Badge variant="secondary" class="bg-white/20 text-white border-white/30">
                👨‍💼 Руководство проектами
              </Badge>
            </div>
          </div>
        </div>
      </div>
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

      <!-- Портфолио с улучшенным аккордеоном -->
      <section class="mb-16">
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

      <!-- Навыки с визуальными индикаторами -->
      <section class="mb-16">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-1 h-8 bg-primary rounded-full"></div>
          <h2 class="text-2xl font-bold">Ключевые навыки</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card class="p-6">
            <h3 class="text-lg font-semibold text-primary mb-4 border-b pb-2">Проектирование</h3>
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="skill in designSkills"
                :key="skill.name"
                variant="secondary"
                class="text-sm"
              >
                {{ skill.name }}
              </Badge>
            </div>
          </Card>

          <Card class="p-6">
            <h3 class="text-lg font-semibold text-primary mb-4 border-b pb-2">Технологии</h3>
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="skill in techSkills"
                :key="skill.name"
                variant="secondary"
                class="text-sm"
              >
                {{ skill.name }}
              </Badge>
            </div>
          </Card>
        </div>
      </section>

      <!-- Контактная информация -->
      <!-- Компактный вариант с круглыми кнопками -->
      <section class="mb-16 text-center">
        <Card class="card-hover p-8 max-w-2xl mx-auto">
          <h2 class="text-2xl font-bold mb-4">Свяжитесь со мной</h2>
          <p class="text-muted-foreground mb-8">Выберите удобный способ обсудить ваш проект</p>

          <div class="flex justify-center gap-6">
            <!-- Email -->
            <div class="text-center">
              <Button
                variant="outline"
                size="icon"
                as-child
                class="h-14 w-14 rounded-full mb-2 hover:bg-primary/10"
              >
                <a href="mailto:razinkovnik@gmail.com" title="Написать на email">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    />
                  </svg>
                </a>
              </Button>
              <div class="text-xs font-medium">Email</div>
            </div>

            <!-- Telegram -->
            <div class="text-center">
              <Button
                variant="outline"
                size="icon"
                as-child
                class="h-14 w-14 rounded-full mb-2 hover:bg-blue-50 dark:hover:bg-blue-950"
              >
                <a
                  href="https://t.me/your_telegram_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Написать в Telegram"
                >
                  <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.9 6.8-.06.67-.36.89-.89.56-2.45-1.83-3.57-2.98-5.79-4.78-.51-.35-.87-.53-.85-1.04.03-.53.57-.76 1.02-.59 2.93 1.18 4.7 2.07 7.59 3.22.38.16.67.24.76.38.17.28.02.67-.36.67-5.49-.05-7.8-1.14-10.26-2.24-.83-.31-1.48-.52-1.42-1.1.03-.31.23-.61.67-.88 2.49-1.24 7.28-3.15 9.58-3.88.96-.27 1.73.14 1.56 1.1z"
                    />
                  </svg>
                </a>
              </Button>
              <div class="text-xs font-medium">Telegram</div>
            </div>

            <!-- WhatsApp -->
            <div class="text-center">
              <Button
                variant="outline"
                size="icon"
                as-child
                class="h-14 w-14 rounded-full mb-2 hover:bg-green-50 dark:hover:bg-green-950"
              >
                <a
                  href="https://wa.me/79999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Написать в WhatsApp"
                >
                  <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12.017 2.047C6.207 2.047 1.451 6.804 1.451 12.614c0 1.846.48 3.582 1.32 5.082L2 22l4.396-.771c1.454.78 3.102 1.227 4.621 1.227 5.811 0 10.567-4.757 10.567-10.567S17.828 2.047 12.017 2.047zm-5.64 12.71c-.297-.15-1.758-.867-2.006-1.5-.248-.632.248-1.17.521-1.33.273-.16.67-.297.87-.297.198 0 .322.023.458.115.136.093.595.52.72.52.126 0 .211-.062.346-.186.136-.124.57-.52.744-.52.174 0 .297.03.446.15.15.124.645.57.77.868.124.298.124 1.553-.347 2.133-.47.58-.868.645-1.115.708-.248.062-.52.03-.793-.15zm8.32.15c-.273.17-.396.14-.77-.03-.372-.17-1.508-.52-1.817-.58-.31-.06-.52-.03-.744.184-.223.215-.868.828-.868 1.008 0 .18.136.214.297.322.16.108.694.496 1.508.868.814.372.814.248 1.047.233.233-.015.77-.297.92-.57.15-.273.15-.508.108-.57-.044-.062-.167-.108-.354-.245z"
                    />
                  </svg>
                </a>
              </Button>
              <div class="text-xs font-medium">WhatsApp</div>
            </div>
          </div>

          <p class="text-sm text-muted-foreground mt-6">
            Отвечаю в течение 1-2 часов в рабочее время
          </p>
        </Card>
      </section>
    </div>

    <!-- Подвал -->
    <footer class="border-t bg-card/50 py-8 mt-12">
      <div class="container mx-auto max-w-4xl px-4 text-center">
        <div class="flex items-center justify-center gap-2 mb-3">
          <div class="w-2 h-2 bg-primary rounded-full"></div>
          <p class="text-muted-foreground font-medium">Разиньков Никита Николаевич</p>
          <div class="w-2 h-2 bg-primary rounded-full"></div>
        </div>
        <p class="text-sm text-muted-foreground mb-2">Инженер-проектировщик с 20+ летним опытом</p>
        <p class="text-xs text-muted-foreground mb-4">Обновлено: {{ currentYear }}</p>
        <div class="flex justify-center gap-4">
          <Button variant="ghost" size="sm" @click="toggleDark" class="flex items-center gap-2">
            <span>{{ isDark ? '☀️' : '🌙' }}</span>
            {{ isDark ? 'Светлая тема' : 'Тёмная тема' }}
          </Button>
        </div>
      </div>
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
  Avatar,
  AvatarImage,
  AvatarFallback,
  Badge,
  Card,
  CardTitle,
  Button,
} from '@/components/ui'
import ProjectModal from '@/components/ui/UIProjectModal.vue'
import type { Project, ProjectGroup, SkillItem } from '@/types'
import HeadMeta from '@/components/seo/HeadMeta.vue'

// Импорт данных
import skills from '@/data/skills.json'
import projects from '@/data/projects.json'
import projectGroupsData from '@/data/projectGroups.json'

const projectGroups = projectGroupsData as ProjectGroup[]

// Реактивные переменные
const isDark = ref(false)
const selectedProject = ref<Project | null>(null)
const openGroups = ref<Record<number, boolean>>({})
const showAll = ref<Record<number, boolean>>({})

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
// Улучшенные навыки с уровнями
const allSkills = skills as SkillItem[]
const designSkills = allSkills.filter((s) =>
  [
    'Газоснабжение',
    'Нефтепроводы',
    'AutoCAD Plant 3D',
    '3D-моделирование',
    'Разработка ПД/РД',
    'Госэкспертиза',
  ].includes(s.name),
)
const techSkills = allSkills.filter((s) =>
  ['Python', 'AutoCAD API', 'MS Office', 'Руководство командой', 'Ведение проектов'].includes(
    s.name,
  ),
)

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

function toggleDark() {
  setTheme(!isDark.value)
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
