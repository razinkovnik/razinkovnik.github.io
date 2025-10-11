<!-- src/components/ui/NavigationMenuLink.vue -->
<template>
  <a
    :href="href"
    :class="cn(
      'block select-none rounded-md px-2 py-1.5 text-sm leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
      props.class
    )"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'

const props = defineProps({
  href: { type: String, required: true },
  class: { type: String, default: '' }
})
</script>