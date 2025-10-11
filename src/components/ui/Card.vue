<!-- src/components/ui/Card.vue -->
<template>
  <div
    :class="cn('rounded-lg border bg-card text-card-foreground', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'

interface CardProps {
  class?: string
}

const props = withDefaults(defineProps<CardProps>(), {
  class: ''
})
</script>