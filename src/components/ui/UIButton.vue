<template>
  <component
    :is="tag"
    class="inline-flex items-center justify-center gap-2 font-medium
           rounded-lg px-4 py-2 transition focus:outline-none focus:ring-2
           focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
    :class="variants[variant]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">

type Variant = 'primary' | 'outline' | 'ghost'
withDefaults(defineProps<{ variant?: Variant; tag?: string }>(), {
  variant: 'primary',
  tag: 'button',
})

const variants = {
  primary: 'bg-accent text-white hover:bg-pop',
  outline: 'border border-border bg-surface hover:border-accent',
  ghost: 'hover:bg-muted',
}
</script>
