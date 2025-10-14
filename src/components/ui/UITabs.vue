<script setup lang="ts">
import { cn } from '@/utils/cn'

const props = defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <div :class="cn('space-y-4', props.class)" v-bind="$attrs">
    <slot />
  </div>
</template>