<!-- src/components/ui/NavigationMenuTrigger.vue -->
<template>
  <HMenu as="div" class="relative">
    <HMenuButton
      class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
    >
      <slot />
      <ChevronDownIcon class="ml-1 h-3 w-3" />
    </HMenuButton>

    <Transition
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <HMenuItems
        class="absolute left-0 top-full z-50 mt-1 w-48 rounded-md border bg-popover p-2 shadow-md"
      >
        <slot name="content" />
      </HMenuItems>
    </Transition>
  </HMenu>
</template>

<script setup lang="ts">
import { Menu as HMenu, MenuButton as HMenuButton, MenuItems as HMenuItems } from '@headlessui/vue'
import { h } from 'vue';

const ChevronDownIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  class: 'h-3 w-3'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': 2,
    d: 'm19 9-7 7-7-7'
  })
])
</script>