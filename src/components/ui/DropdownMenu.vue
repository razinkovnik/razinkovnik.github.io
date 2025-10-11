<!-- src/components/ui/DropdownMenu.vue -->
<template>
  <HMenu as="div" class="relative inline-block text-left">
    <HMenuButton as="div">
      <slot name="trigger" />
    </HMenuButton>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <HMenuItems
        class="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md border bg-popover p-1 shadow-md outline-none"
      >
        <slot />
      </HMenuItems>
    </Transition>
  </HMenu>
</template>

<script setup lang="ts">
import { Menu as HMenu, MenuButton as HMenuButton, MenuItems as HMenuItems } from '@headlessui/vue'
</script>