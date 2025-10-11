<!-- src/components/ui/Label.vue -->
<template>
  <label
    :for="props.for"
    :class="cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      props.class
    )"
  >
    <slot />
  </label>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'

interface Props {
  for?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  for: undefined,
  class: ''
})
</script>