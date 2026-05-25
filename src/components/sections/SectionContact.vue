<template>
  <section ref="root" class="fade-up mb-16 text-center">
    <Card class="p-8 max-w-2xl mx-auto glass">
      <h2 class="text-2xl font-bold mb-4">Свяжитесь со мной</h2>
      <p class="text-muted-fore mb-8">Выберите удобный способ обсудить ваш проект</p>

      <div class="flex justify-center gap-6">
        <!-- Email -->
        <a href="mailto:razinkovnik@gmail.com" class="btn-icon group w-25">
          <Mail class="w-5 h-5 text-accent group-hover:text-pop" />
          <span>Email</span>
        </a>

        <!-- Telegram -->
        <a
          href="https://t.me/m31k0l2"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-icon group w-25"
        >
          <Send class="w-5 h-5 text-accent group-hover:text-pop" />
          <span>Telegram</span>
        </a>

        <!-- Max -->
        <a
          href="https://max.ru/u/f9LHodD0cOIeJjdXA-AdkZE5KKF4XMslUotn1EQ21zt_UJ91lvPYnUr2uNo"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-icon group w-25"
        >
          <MaxIcon class="w-5 h-5 text-accent group-hover:text-pop" />
          <span>Max</span>
        </a>
      </div>

      <p class="text-xs text-muted-fore mt-6">Отвечаю в течение 1-2 часов в рабочее время</p>
    </Card>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card } from '@/components/ui'
import { useFadeUp } from '@/composables/useFadeUp'
import { Mail, Send } from '../ui/Icons'
import MaxIcon from '../ui/MaxIcon.vue'

const root = ref<HTMLElement | null>(null)
useFadeUp(root)
</script>

<style scoped>
/* кнопка-иконка */
.btn-icon {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  transition: 0.25s;
}
.btn-icon:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.15);
  border-color: var(--accent);
}
</style>
