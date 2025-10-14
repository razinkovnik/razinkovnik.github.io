<!-- src/components/ui/Sheet.vue -->
<template>
  <TransitionRoot appear :show="open" as="template">
    <HDialog as="div" class="relative z-50" @close="emit('update:open', false)">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-50" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-300"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <HDialogPanel
                class="pointer-events-auto w-screen max-w-md"
              >
                <div class="flex h-full flex-col bg-background shadow-xl">
                  <div class="flex items-center justify-between p-4 border-b">
                    <HDialogTitle as="h3" class="text-lg font-medium">
                      <slot name="title" />
                    </HDialogTitle>
                    <button
                      class="rounded-sm opacity-70 hover:opacity-100 focus:outline-none"
                      @click="emit('update:open', false)"
                    >
                      ✕
                    </button>
                  </div>
                  <div class="flex-1 overflow-y-auto p-4">
                    <slot />
                  </div>
                </div>
              </HDialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </HDialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog as HDialog,
  DialogPanel as HDialogPanel,
  DialogTitle as HDialogTitle,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'

interface Props {
  open: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:open', value: boolean): void
}>()
</script>
