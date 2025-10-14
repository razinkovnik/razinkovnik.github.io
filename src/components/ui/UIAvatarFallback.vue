<!-- src/components/ui/AvatarFallback.vue -->
<template>
  <span
    :class="cn('flex h-full w-full items-center justify-center rounded-full bg-muted', props.class)"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'

const props = defineProps({
  class: { type: String, default: '' }
})
</script>