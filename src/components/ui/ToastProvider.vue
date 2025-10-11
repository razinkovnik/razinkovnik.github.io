<!-- src/components/ui/ToastProvider.vue -->
<template>
  <div>
    <slot />
    <ToastViewport />
  </div>
</template>

<script setup lang="ts">
import ToastViewport from './ToastViewport.vue'
</script>