<!-- src/components/ui/TabsTrigger.vue -->
<template>
  <button
    role="tab"
    :aria-selected="isSelected"
    :class="cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      isSelected
        ? 'bg-background text-foreground shadow-sm'
        : 'text-muted-foreground hover:text-foreground'
    )"
    @click="selectTab"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { cn } from '@/utils/cn'

const props = defineProps<{
  value: string
}>()

const tabsContext = inject<{ modelValue: string; 'onUpdate:modelValue': (v: string) => void }>('tabs')
const isSelected = computed(() => tabsContext?.modelValue === props.value)

function selectTab() {
  tabsContext?.['onUpdate:modelValue'](props.value)
}
</script>