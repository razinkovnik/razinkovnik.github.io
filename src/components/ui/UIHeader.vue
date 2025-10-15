<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-sm border-b border-border transition-colors"
  >
    <div class="container mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
      <!-- Логотип / Имя -->
      <a
        href="#"
        @click.prevent="scrollToTop"
        class="font-bold text-lg text-primary hover:text-accent"
      >
        Н. Разиньков
      </a>

      <!-- Десктопное меню -->
      <nav class="hidden md:flex items-center gap-6">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          @click.prevent="scrollTo(item.href)"
          class="text-muted-foreground hover:text-accent transition-colors"
        >
          {{ item.label }}
        </a>
        <UIThemeToggle />
      </nav>

      <!-- Мобильное меню (бургер) -->
      <div class="md:hidden flex items-center gap-3">
        <UIThemeToggle />
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="p-1.5 rounded-md hover:bg-muted transition-colors"
          aria-label="Меню"
        >
          <MenuIcon v-if="!mobileMenuOpen" class="w-5 h-5 text-primary" />
          <XIcon v-else class="w-5 h-5 text-primary" />
        </button>
      </div>
    </div>

    <!-- Мобильное выпадающее меню -->
    <div v-show="mobileMenuOpen" class="md:hidden bg-surface border-t border-border">
      <div class="container mx-auto max-w-4xl px-4 py-4 flex flex-col gap-3">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          @click.prevent="closeMobileMenuAndScroll(item.href)"
          class="py-2 text-primary hover:text-accent transition-colors"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MenuIcon, XIcon } from 'lucide-vue-next'
import UIThemeToggle from './UIThemeToggle.vue'

const mobileMenuOpen = ref(false)

const navItems = [
  { label: 'Опыт', href: '#experience' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Контакты', href: '#contact' },
]

function scrollTo(hash: string) {
  const element = document.querySelector(hash)
  if (element instanceof HTMLElement) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth',
    })
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function closeMobileMenuAndScroll(hash: string) {
  mobileMenuOpen.value = false
  setTimeout(() => scrollTo(hash), 150) // небольшая задержка для плавности
}
</script>
