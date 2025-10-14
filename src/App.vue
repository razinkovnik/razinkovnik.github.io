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
      <!-- Опыт работы -->
      <Experience />

      <!-- Портфолио -->
      <Portfolio @project-select="openProjectModal" />

      <!-- Навыки -->
      <Skills />

      <!-- Контакты -->
      <Contact />
    </div>

    <!-- Подвал -->
    <Footer />

    <!-- Модальное окно -->
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Hero, ProjectModal } from '@/components/ui'
import { Skills, Portfolio, Experience, Footer, Contact } from '@/components/sections'
import type { Project } from '@/types'
import HeadMeta from '@/components/seo/HeadMeta.vue'

const selectedProject = ref<Project | null>(null)

function openProjectModal(project: Project | undefined) {
  if (project) selectedProject.value = project
}
</script>
