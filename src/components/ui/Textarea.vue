<!-- src/components/ui/Textarea.vue -->
<template>
  <textarea
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    :class="cn(
      'flex min-h-[80px] w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      props.class
    )"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'

interface Props {
  modelValue: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>