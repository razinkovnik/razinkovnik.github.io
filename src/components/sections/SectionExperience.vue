<template>
  <section class="py-12">
    <h2 class="text-3xl font-bold mb-8 text-center">Опыт работы</h2>

    <!-- Блок с основной должностью -->
    <div class="mb-10 bg-surface rounded-xl p-6 shadow-sm border border-border">
      <div class="flex flex-col md:flex-row md:items-start gap-6">
        <!-- Должность и компании -->
        <!-- <div class="md:w-1/3">
          <h3 class="text-2xl font-semibold mb-2 text-primary">
            Ведущий инженер-проектировщик / Руководитель отдела проектирования
          </h3>
          <p class="text-muted-foreground text-sm mb-4">
            АО «Газпроектинжиниринг», ООО «Газпроектсервис», НИПИ «Инжео», ООО «Трансэнергострой»
          </p>
          <span class="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
            2005 — настоящее время
          </span>
        </div> -->

        <!-- Основные направления деятельности -->
        <div class="md:w-2/3">
          <h4 class="font-medium text-lg mb-3">Чем я занимаюсь</h4>
          <ul class="space-y-3">
            <li v-for="(task, index) in mainTasks" :key="index" class="flex items-start gap-2">
              <span class="text-accent mt-1">•</span>
              <span>{{ task }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Хронология должностей по годам (если нужно) -->
    <!-- Если у вас есть конкретные даты назначения на должности, можно раскомментировать -->

    <div class="mt-10">
      <h3 class="text-xl font-semibold mb-4">Хронология должностей</h3>
      <div class="space-y-4">
        <div v-for="(role, index) in roles" :key="index" class="bg-surface rounded-lg p-4 border border-border">
          <div class="flex justify-between items-start">
            <div>
              <h4 class="font-medium">{{ role.title }}</h4>
              <p class="text-sm text-muted-foreground">{{ role.company }}</p>
            </div>
            <span class="text-xs font-medium text-accent">{{ role.period }}</span>
          </div>
          <p class="mt-2 text-sm">{{ role.description }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
// Основные направления деятельности (можно вынести в отдельный файл или store)
const mainTasks = [
  'Разработка проектной и рабочей документации для систем газоснабжения',
  'Проектирование объектов обустройства нефтяных месторождений',
  'Подготовка и сопровождение проектов в государственной экспертизе',
  'Автоматизация черчения и документооборота с использованием Python',
  'Руководство проектной группой (5–10 инженеров)',
  'Координация междисциплинарных работ в гибридном формате'
]

// Пример хронологии (раскомментируйте, если нужно)
const roles = [
  {
    title: 'Ведущий инженер-проектировщик',
    company: 'АО «Газпроектинжиниринг»',
    period: '2005 — 2010',
    description: 'Участие в проектировании газопроводов низкого и среднего давления.'
  },
  {
    title: 'Руководитель группы проектирования',
    company: 'ООО «Газпроектсервис»',
    period: '2010 — 2015',
    description: 'Руководство командой из 5 инженеров, контроль сроков и качества проектов.'
  },
  {
    title: 'Руководитель отдела проектирования',
    company: 'НИПИ «Инжео»',
    period: '2015 — 2020',
    description: 'Координация междисциплинарных проектов, внедрение автоматизации на базе Python.'
  },
  {
    title: 'Руководитель отдела проектирования',
    company: 'ООО «Трансэнергострой»',
    period: '2020 — настоящее время',
    description: 'Руководство проектами в области нефтегазового строительства, управление командой до 10 человек.'
  }
]
</script>
