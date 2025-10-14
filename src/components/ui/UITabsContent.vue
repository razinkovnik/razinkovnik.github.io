<!-- src/components/ui/TabsContent.vue -->
<template>
  <div
    v-show="isSelected"
    role="tabpanel"
    :class="cn('mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', props.class)"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { cn } from '@/utils/cn'

const props = defineProps<{
  value: string
  class?: string
}>()

const tabsContext = inject<{ modelValue: string }>('tabs')
const isSelected = computed(() => tabsContext?.modelValue === props.value)
</script>