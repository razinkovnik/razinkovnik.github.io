<!-- src/components/ui/Toast.vue -->
<template>
  <div class="rounded-md border bg-popover p-4 text-popover-foreground">
    <div class="text-sm font-medium"><slot name="title" /></div>
    <div v-if="$slots.description" class="text-xs opacity-80 mt-1">
      <slot name="description" />
    </div>
  </div>
</template>