<template>
  <Card class="p-6">
    <h3 class="text-lg font-semibold mb-4 border-b pb-2">{{ title }}</h3>
    <div class="space-y-3">
      <div
        v-for="s in skills"
        :key="s.name"
        class="skill-item"
      >
        <div class="flex justify-between text-sm">
          <span>{{ s.name }}</span>
          <span class="text-muted-fore">{{ s.level * 20 }}%</span>
        </div>
        <div class="skill-bar mt-1">
          <div :style="{ width: s.level * 20 + '%' }" />
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import type { SkillItem } from '@/types'
import { Card } from '@/components/ui'

defineProps<{ title: string; skills: SkillItem[] }>()
</script>
