<!-- src/App.vue -->
<template>
  <HeadMeta
    title="Разиньков Никита Николаевич - Специалист по проектированию систем газоснабжения и нефтегазовых объектов"
    description="Более 20 лет опыта в проектировании систем газоснабжения, магистральных и распределительных трубопроводов, объектов добычи и хранения нефти и газа."
    keywords="инженер-проектировщик, нефтегазовые объекты, газоснабжение, AutoCAD Plant 3D, Python, проектирование"
  />

  <div class="min-h-screen bg-background text-foreground">
    <Header />
    <div class="pt-20">
      <!-- отступ сверху, чтобы контент не уходил под хедер -->
      <Hero />
      <div class="container mx-auto max-w-4xl py-12 px-4">
        <Experience id="experience" />
        <Portfolio id="portfolio" @project-select="openProjectModal" />
        <Skills id="skills" />
        <Contact id="contact" />
      </div>
      <Footer />
    </div>

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
import { Hero, ProjectModal, Header } from '@/components/ui'
import { Skills, Portfolio, Experience, Footer, Contact } from '@/components/sections'
import type { Project } from '@/types'
import HeadMeta from '@/components/seo/HeadMeta.vue'

const selectedProject = ref<Project | null>(null)

function openProjectModal(project: Project | undefined) {
  if (project) selectedProject.value = project
}
</script>
