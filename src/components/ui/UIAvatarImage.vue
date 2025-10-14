<!-- src/components/ui/AvatarImage.vue -->
<template>
  <img
    :src="src"
    :alt="alt"
    :class="cn('aspect-square h-full w-full', props.class)"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  class: { type: String, default: '' }
})
</script>