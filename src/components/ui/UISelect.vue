<!-- src/components/ui/Select.vue -->
<template>
  <div class="relative">
    <select
      :value="modelValue"
      @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      :class="cn(
        'flex h-10 w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )"
      v-bind="$attrs"
    >
      <slot />
    </select>
    <ChevronDownIcon
      class="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50 pointer-events-none"
    />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'
import { h } from 'vue';

interface Props {
  modelValue: string | number
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

// Иконка (можно заменить на SVG-компонент или использовать Heroicons)
const ChevronDownIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  class: 'h-4 w-4'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': 2,
    d: 'm19 9-7 7-7-7'
  })
])
</script>