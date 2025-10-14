<!-- src/components/ui/TabsList.vue -->
<template>
  <div
    role="tablist"
    :class="cn('inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground', props.class)"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'

const props = defineProps({
  class: { type: String, default: '' }
})
</script>