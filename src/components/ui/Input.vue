<!-- src/components/ui/Input.vue -->
<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :type="type"
    :class="cn(
      'flex h-10 w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      props.class
    )"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'

interface Props {
  modelValue: string | number
  type?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  class: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()
</script>