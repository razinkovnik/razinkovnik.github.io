<!-- src/App.vue -->
<template>
  <div class="min-h-screen bg-background text-foreground">
    <div class="container mx-auto max-w-4xl py-12 px-4">
      <!-- Шапка: Аватар + Инфо -->
      <header class="flex flex-col items-center md:flex-row md:items-start gap-6 mb-12">
        <Avatar class="h-24 w-24">
          <AvatarImage src="https://placehold.co/128?text=НР" alt="Разиньков Никита" />
          <AvatarFallback>НР</AvatarFallback>
        </Avatar>
        <div class="text-center md:text-left">
          <h1 class="text-3xl font-bold">Разиньков Никита Николаевич</h1>
          <p class="text-xl text-muted-foreground mt-1">
            Инженер-проектировщик нефтегазовых объектов
          </p>
          <p class="mt-3 max-w-prose text-muted-foreground text-base">
            Более 20 лет опыта в проектировании систем газоснабжения, магистральных и
            распределительных трубопроводов, объектов добычи и хранения нефти и газа.
            Специализируюсь на автоматизации проектирования (Python), управлении проектными группами
            и сопровождении проектов до прохождения экспертизы.
          </p>
          <div class="mt-4 flex justify-center md:justify-start gap-2 flex-wrap">
            <Badge variant="secondary">AutoCAD Plant 3D</Badge>
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">Газоснабжение</Badge>
            <Badge variant="outline">Руководство проектами</Badge>
          </div>
        </div>
      </header>
      <Separator class="my-8" />
      <!-- Опыт работы -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Опыт работы</h2>
        <Card class="mb-4">
          <CardHeader>
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <CardTitle class="text-xl font-semibold"
                >Ведущий инженер-проектировщик / Руководитель отдела проектирования</CardTitle
              >
              <span class="text-sm text-muted-foreground">2005 – настоящее время</span>
            </div>
            <p class="text-muted-foreground text-base">
              АО «Газпроектинжиниринг», ООО «Газпроектсервис», НИПИ «Инжгео», ООО «Трансэнергострой»
            </p>
          </CardHeader>
          <CardContent>
            <ul class="list-disc pl-5 space-y-1 text-muted-foreground text-base">
              <li>
                Разработка проектной и рабочей документации для систем газоснабжения, магистральных
                и распределительных трубопроводов
              </li>
              <li>
                Проектирование объектов обустройства нефтяных месторождений: кусты скважин, УПН,
                УПСВ, КНС, нефтебазы, терминалы
              </li>
              <li>
                Подготовка и сопровождение проектов в государственной и ведомственной экспертизе
                (десятки успешно пройденных)
              </li>
              <li>
                Автоматизация черчения и документооборота с использованием Python и AutoCAD API
              </li>
              <li>
                Руководство проектной группой (5–10 инженеров): распределение задач, контроль
                сроков, обучение новых сотрудников
              </li>
              <li>Координация междисциплинарных работ в гибридном и удалённом форматах</li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <Separator class="my-8" />
      <!-- Портфолио -->
      <!-- Портфолио -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Портфолио проектов</h2>
        <p class="text-muted-foreground mb-6">
          Реализовано более <strong>20 проектов</strong> в различных регионах России.
        </p>

        <div class="space-y-4">
          <div
            v-for="(group, idx) in projectGroups"
            :key="idx"
            class="border rounded-lg overflow-hidden"
          >
            <!-- Заголовок группы -->
            <button
              class="flex w-full items-center justify-between bg-card px-4 py-3 text-left font-medium text-card-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              @click="toggleGroup(idx)"
            >
              <div>
                <span class="font-medium">{{ group.title }}</span>
                <p class="text-sm text-muted-foreground mt-1">
                  Примеры из {{ group.examples.length }} проектов
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-4 w-4 transition-transform duration-200"
                :class="{ 'rotate-180': openGroups[idx] }"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Содержимое (сворачивается) -->
            <div v-show="openGroups[idx]" class="p-4 border-t">
              <p class="text-sm text-muted-foreground mb-2">{{ group.summary }}</p>
              <ul class="list-disc pl-5 mb-4 text-sm text-muted-foreground">
                <li v-for="(feat, fIdx) in group.features" :key="fIdx">{{ feat }}</li>
              </ul>

              <!-- Примеры (макс. 4 по умолчанию) -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Card
                  v-for="(example, eIdx) in visibleExamples(group, idx)"
                  :key="eIdx"
                  class="flex flex-col"
                >
                  <CardHeader class="pb-2">
                    <CardTitle class="text-base font-medium">{{ example }}</CardTitle>
                  </CardHeader>
                  <CardContent class="flex-grow pt-0"></CardContent>
                  <div class="p-4 pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      @click="openProjectModal(findProjectByName(example))"
                    >
                      Подробнее
                    </Button>
                  </div>
                </Card>
              </div>

              <!-- Кнопка "Показать ещё" -->
              <div v-if="group.examples.length > 4" class="mt-4 text-center">
                <Button variant="ghost" size="sm" @click="toggleShowAll(idx)">
                  {{ showAll[idx] ? 'Скрыть' : `Показать все (${group.examples.length})` }}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Separator class="my-8" />
      <!-- Навыки -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Ключевые навыки</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <div
            v-for="skill in skills"
            :key="skill"
            class="rounded-md border border-border bg-card p-3 text-center text-sm text-card-foreground"
          >
            {{ skill }}
          </div>
        </div>
      </section>
      <Separator class="my-8" />
      <!-- Образование -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Образование</h2>
        <Card>
          <CardHeader>
            <CardTitle class="text-xl font-semibold"
              >Воронежский Государственный Архитектурно-Строительный Университет</CardTitle
            >
            <p class="text-muted-foreground text-base">
              Специальность: «Теплогазоснабжение и вентиляция»
            </p>
            <p class="text-sm text-muted-foreground">Диплом с отличием — 2005 г.</p>
          </CardHeader>
        </Card>
      </section>
      <Separator class="my-8" />
      <!-- Дополнительно -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Дополнительно</h2>
        <ul class="list-disc pl-5 space-y-1 text-muted-foreground text-base">
          <li>Гражданство: РФ</li>
          <li>Готов к командировкам</li>
          <li>Английский язык: технический (чтение документации)</li>
          <li>Формат работы: гибридный или удалённый</li>
        </ul>
      </section>
      <!-- Подвал -->
      <footer class="mt-16 text-center text-sm text-muted-foreground">
        <p>© 2025 Разиньков Никита Николаевич. Все права защищены.</p>
        <div class="mt-2 flex justify-center gap-4">
          <Button variant="ghost" size="sm" @click="toggleDark">
            {{ isDark ? 'Светлая тема' : 'Тёмная тема' }}
          </Button>
          <Button variant="outline" size="sm" as-child>
            <a :href="`mailto:razinkovnik@gmail.com`">Написать</a>
          </Button>
        </div>
      </footer>
    </div>
    <!-- Модальное окно -->
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      :is-dark-theme="isDark"
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
  CardHeader,
  CardTitle,
  CardContent,
  Separator,
  Button,
} from '@/components/ui'
import ProjectModal from '@/components/ui/ProjectModal.vue'

// Импорт данных из JSON
import projects from '@/data/projects.json'
import projectGroups from '@/data/projectGroups.json'
import skills from '@/data/skills.json'

// Реактивные переменные
const isDark = ref(false)
const selectedProject = ref<any>(null)
// После объявления других ref
const openGroups = ref<Record<number, boolean>>({}) // все группы изначально свёрнуты
const showAll = ref<Record<number, boolean>>({})

function toggleShowAll(index: number) {
  showAll.value[index] = !showAll.value[index]
}

function visibleExamples(group: any, index: number): string[] {
  const limit = 4
  return showAll.value[index] ? group.examples : group.examples.slice(0, limit)
}

function findProjectByName(name: string) {
  return projects.find(p => p.name === name)
}

function toggleGroup(index: number) {
  openGroups.value[index] = !openGroups.value[index]
}

// Тема
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

function openProjectModal(project: any) {
  if (project) selectedProject.value = project
}

// Инициализация темы
onMounted(() => {
  const saved = localStorage.theme
  if (saved === 'dark' || saved === 'light') {
    setTheme(saved === 'dark')
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark)
  }
})
</script>
