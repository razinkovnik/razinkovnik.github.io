<!-- src/components/ui/ToastViewport.vue -->
<template>
  <div class="fixed bottom-0 right-0 z-[100] m-4 flex flex-col gap-2 max-w-md">
    <TransitionGroup
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="rounded-md border bg-popover p-4 text-popover-foreground shadow-lg"
      >
        <div class="text-sm font-medium">{{ toast.title }}</div>
        <div v-if="toast.description" class="text-xs opacity-80 mt-1">{{ toast.description }}</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, type Ref } from 'vue'

interface Toast {
  id: string
  title: string
  description?: string
}

const toasts = inject<Ref<Toast[]>>('toasts', ref([]))
</script>