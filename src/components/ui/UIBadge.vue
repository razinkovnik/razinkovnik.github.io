<!-- src/components/ui/Badge.vue -->
<template>
  <div
    :class="cn(
      'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      {
        'border-transparent bg-primary text-primary-foreground': variant === 'default',
        'border-transparent bg-secondary text-secondary-foreground': variant === 'secondary',
        'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80': variant === 'destructive',
        'border-border bg-muted text-muted-foreground': variant === 'outline',
      },
      props.class
    )"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'

interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  class?: string
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'default',
  class: ''
})
</script>