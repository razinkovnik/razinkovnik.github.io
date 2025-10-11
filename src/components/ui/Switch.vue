<!-- src/components/ui/Switch.vue -->
<template>
  <label class="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="handleChange"
      class="sr-only peer"
    />
    <div
      :class="cn(
        'peer h-6 w-11 shrink-0 rounded-full border-2 border-transparent shadow-sm transition-colors',
        'bg-input-background',
        'after:absolute after:left-[2px] after:top-1/2 after:h-5 after:w-5 after:-translate-y-1/2 after:rounded-full after:bg-background after:shadow-sm after:transition-all',
        'peer-checked:bg-primary peer-checked:after:bg-primary-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        props.class
      )"
    />
  </label>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'

interface SwitchProps {
  modelValue: boolean
  class?: string
}

const props = defineProps<SwitchProps>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function handleChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).checked)
}
</script>