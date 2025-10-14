<!-- src/components/ui/Tooltip.vue -->
<template>
  <HPopover class="relative">
    <HPopoverButton
      as="div"
      class="cursor-default"
      @mouseenter="open = true"
      @mouseleave="open = false"
    >
      <slot name="trigger" />
    </HPopoverButton>

    <Transition
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
      @mouseenter="open = true"
      @mouseleave="open = false"
    >
      <HPopoverPanel
        v-if="open"
        class="absolute z-50 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md"
        :class="sideClass"
        static
      >
        <slot />
      </HPopoverPanel>
    </Transition>
  </HPopover>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Popover as HPopover, PopoverButton as HPopoverButton, PopoverPanel as HPopoverPanel } from '@headlessui/vue'

const props = withDefaults(defineProps<{
  side?: 'top' | 'bottom' | 'left' | 'right'
}>(), {
  side: 'top'
})

const open = ref(false)

const sideClass = computed(() => {
  switch (props.side) {
    case 'top': return 'bottom-full left-1/2 -translate-y-2 -translate-x-1/2'
    case 'bottom': return 'top-full left-1/2 translate-y-2 -translate-x-1/2'
    case 'left': return 'right-full top-1/2 -translate-x-2 -translate-y-1/2'
    case 'right': return 'left-full top-1/2 translate-x-2 -translate-y-1/2'
    default: return ''
  }
})
</script>