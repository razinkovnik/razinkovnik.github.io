<!-- src/components/ui/Popover.vue -->
<template>
  <HPopover class="relative">
    <HPopoverButton as="div">
      <slot name="trigger" />
    </HPopoverButton>

    <Transition
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <HPopoverPanel
        class="absolute z-50 mt-2 w-80 rounded-md border bg-popover p-4 text-popover-foreground shadow-lg outline-none"
        static
      >
        <slot />
      </HPopoverPanel>
    </Transition>
  </HPopover>
</template>

<script setup lang="ts">
import { Popover as HPopover, PopoverButton as HPopoverButton, PopoverPanel as HPopoverPanel } from '@headlessui/vue'
</script>