<!-- src/components/sections/SectionFooter.vue -->
<template>
  <footer class="border-t bg-surface/50 py-8 mt-12 text-center text-sm text-muted-fore">
    <p class="mb-2">Разиньков Никита Николаевич</p>
    <p class="text-xs">Обновлено: {{ currentYear }}</p>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear().toString()
</script>
