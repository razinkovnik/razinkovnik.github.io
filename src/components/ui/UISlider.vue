<!-- src/components/ui/Slider.vue -->
<template>
  <input
    type="range"
    :min="min"
    :max="max"
    :step="step"
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).valueAsNumber)"
    :class="cn(
      'flex w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      props.class
    )"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'

interface Props {
  modelValue: number
  min?: number
  max?: number
  step?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 100,
  step: 1,
  class: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()
</script>