<!-- src/components/ui/Avatar.vue -->
<script setup lang="ts">
import { cn } from '@/utils/cn'

const props = defineProps({
  class: { type: String, default: '' },
})
</script>

<template>
  <span :class="cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', props.class)">
    <slot />
  </span>
</template>
