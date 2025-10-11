<!-- src/components/ui/DropdownMenuItem.vue -->
<template>
  <HMenuItem v-slot="{ active }">
    <button
      :class="cn(
        'flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
        active ? 'bg-accent text-accent-foreground' : 'text-foreground',
        props.class
      )"
      @click="emit('click')"
    >
      <slot />
    </button>
  </HMenuItem>
</template>

<script setup lang="ts">
import { MenuItem as HMenuItem } from '@headlessui/vue'
import { cn } from '@/utils/cn'

interface Props {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: ''
})

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>