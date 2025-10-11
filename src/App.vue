<!-- src/App.vue -->
<template>
  <div class="min-h-screen bg-background text-foreground">
    <div class="container mx-auto max-w-4xl py-12 px-4">
      <!-- Шапка: Аватар + Инфо -->
      <header class="flex flex-col items-center md:flex-row md:items-start gap-6 mb-12">
        <Avatar class="h-24 w-24">
          <AvatarImage
            src="https://placehold.co/128?text=AI"
            alt="Алексей Иванов"
          />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>

        <div class="text-center md:text-left">
          <h1 class="text-3xl font-bold">Алексей Иванов</h1>
          <p class="text-xl text-muted-foreground mt-1">Frontend-разработчик</p>
          <p class="mt-3 max-w-prose text-muted-foreground text-base">
            Создаю быстрые, доступные и масштабируемые веб-приложения с использованием Vue, TypeScript и современных инструментов.
          </p>

          <div class="mt-4 flex justify-center md:justify-start gap-2 flex-wrap">
            <Badge variant="secondary">Vue 3</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="outline">Vite</Badge>
          </div>
        </div>
      </header>

      <Separator class="my-8" />

      <!-- Опыт работы -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Опыт работы</h2>
        <Card v-for="(job, index) in experience" :key="index" class="mb-4">
          <CardHeader>
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <CardTitle class="text-xl font-semibold">{{ job.title }}</CardTitle>
              <span class="text-sm text-muted-foreground">{{ job.period }}</span>
            </div>
            <p class="text-muted-foreground text-base">{{ job.company }}</p>
          </CardHeader>
          <CardContent>
            <ul class="list-disc pl-5 space-y-1 text-muted-foreground text-base">
              <li v-for="(item, i) in job.tasks" :key="i">{{ item }}</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator class="my-8" />

      <!-- Навыки -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Навыки</h2>
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
      <section>
        <h2 class="text-2xl font-semibold mb-6">Образование</h2>
        <Card>
          <CardHeader>
            <CardTitle class="text-xl font-semibold">Московский государственный университет</CardTitle>
            <p class="text-muted-foreground text-base">Бакалавр информатики</p>
            <p class="text-sm text-muted-foreground">2016 – 2020</p>
          </CardHeader>
        </Card>
      </section>

      <!-- Подвал -->
      <footer class="mt-16 text-center text-sm text-muted-foreground">
        <p>© 2025 Алексей Иванов. Все права защищены.</p>
        <div class="mt-2 flex justify-center gap-4">
          <Button variant="ghost" size="sm" @click="toggleDark">
            {{ isDark ? 'Светлая тема' : 'Тёмная тема' }}
          </Button>
          <Button variant="outline" size="sm" as-child>
            <a href="mailto:alex@example.com">Написать</a>
          </Button>
        </div>
      </footer>
    </div>
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
  Button
} from '@/components/ui'

const experience = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    period: '2022 – настоящее время',
    tasks: [
      'Разработка SPA на Vue 3 и TypeScript',
      'Оптимизация производительности (Lighthouse > 90)',
      'Наставничество младших разработчиков'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'WebStudio',
    period: '2020 – 2022',
    tasks: [
      'Верстка адаптивных интерфейсов',
      'Интеграция с REST API',
      'Работа с Figma-дизайном'
    ]
  }
]

const skills = [
  'Vue 3', 'TypeScript', 'Pinia', 'Vite',
  'Tailwind CSS', 'shadcn/ui', 'Git', 'Jest'
]

const isDark = ref(false) // Или true, если в index.html есть class="dark"

function setTheme(dark: boolean) {
  const rootElement = document.documentElement; // <html> элемент
  if (dark) {
    rootElement.classList.add('dark');
  } else {
    rootElement.classList.remove('dark');
  }
  localStorage.theme = dark ? 'dark' : 'light';
  isDark.value = dark;
}

function toggleDark() {
  setTheme(!isDark.value);
}

onMounted(() => {
  const saved = localStorage.theme;
  if (saved === 'dark' || saved === 'light') {
    setTheme(saved === 'dark');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark);
  }
});
</script>