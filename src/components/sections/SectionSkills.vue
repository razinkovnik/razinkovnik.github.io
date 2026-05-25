<template>
  <section ref="root" class="fade-up mb-16">
    <div class="flex items-center gap-3 mb-8">
      <div class="w-1 h-8 bg-accent rounded-full" />
      <h2>Ключевые навыки</h2>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Блок 1 -->
      <Card class="p-6 glass">
        <h3 class="text-lg font-semibold mb-4 border-b border-border pb-2">
          Проектирование
        </h3>
        <div class="space-y-4">
          <div
            v-for="s in design"
            :key="s.name"
            class="skill-item"
          >
            <div class="flex justify-between text-sm">
              <span>{{ s.name }}</span>
            </div>
            <div class="skill-bar mt-1">
              <div style="width: 100%" />
            </div>
          </div>
        </div>
      </Card>

      <!-- Блок 2 -->
      <Card class="p-6 glass">
        <h3 class="text-lg font-semibold mb-4 border-b border-border pb-2">
          Навыки
        </h3>
        <div class="space-y-4">
          <div
            v-for="s in tech"
            :key="s.name"
            class="skill-item"
          >
            <div class="flex justify-between text-sm">
              <span>{{ s.name }}</span>
            </div>
            <div class="skill-bar mt-1">
              <div style="width: 100%" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card } from '@/components/ui'
import { useFadeUp } from '@/composables/useFadeUp'
import type { SkillItem } from '@/types'
import skillsJson from '@/data/skills.json'

const root = ref<HTMLElement | null>(null)
useFadeUp(root)

const all = skillsJson as SkillItem[]

const design = all.filter(s =>
  ['Газоснабжение','Нефтепроводы','AutoCAD Plant 3D','Разработка ПД/РД','Госэкспертиза','3D-моделирование'].includes(s.name)
)

const tech = all.filter(s =>
  ['Python','AutoCAD API','MS Office','Руководство командой','AI/LLM (промптинг)','AI-агенты','RAG-системы'].includes(s.name)
)
</script>

<style scoped>
/* полоса прогресса */
.skill-bar {
  height: 4px;
  background: var(--muted);
  border-radius: 2px;
  overflow: hidden;
}
.skill-bar > div {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--pop));
  border-radius: 2px;
  transition: width 1s ease;
}

/* shine-эффект при наведении */
.skill-item:hover .skill-bar > div {
  filter: brightness(1.15);
}
</style>
