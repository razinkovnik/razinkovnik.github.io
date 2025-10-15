<!-- src/components/ui/UIThemeToggle.vue -->
<template>
  <button
    @click="toggleTheme"
    class="p-2 rounded-full bg-surface border border-border shadow-sm hover:bg-muted transition-colors"
    aria-label="Переключить тему"
  >
    <SunIcon v-if="isDark" class="w-5 h-5" />
    <MoonIcon v-else class="w-5 h-5" />
  </button>
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>
