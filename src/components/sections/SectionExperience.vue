<!-- src/components/sections/SectionExperience.vue -->
<template>
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
</template>

<script setup lang="ts">
import { Card, CardTitle } from '@/components/ui'

const experienceItems = [
  'Разработка проектной и рабочей документации для систем газоснабжения',
  'Проектирование объектов обустройства нефтяных месторождений',
  'Подготовка и сопровождение проектов в государственной экспертизе',
  'Автоматизация черчения и документооборота с использованием Python',
  'Руководство проектной группой (5–10 инженеров)',
  'Координация междисциплинарных работ в гибридном формате',
]
</script>
