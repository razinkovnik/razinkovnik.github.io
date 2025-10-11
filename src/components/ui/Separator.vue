<!-- src/components/ui/Separator.vue -->
<template>
  <div
    :class="cn('shrink-0 bg-border', props.class)"
    :style="{
      height: props.orientation === 'horizontal' ? '1px' : undefined,
      width: props.orientation === 'vertical' ? '1px' : undefined
    }"
    v-bind="$attrs"
    role="separator"
  />
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
  class?: string
}

const props = withDefaults(defineProps<SeparatorProps>(), {
  orientation: 'horizontal',
  class: ''
})
</script>