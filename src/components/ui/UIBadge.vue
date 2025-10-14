<template>
  <span
    class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium
           border bg-surface text-primary border-border"
    :class="{ 'badge-live': shiny }"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
defineProps<{ shiny?: boolean }>()
</script>
