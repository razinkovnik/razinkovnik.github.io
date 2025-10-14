<template>
  <section class="relative overflow-hidden isolate">
    <!-- анимированный фон -->
    <div class="aurora" />

    <!-- контент -->
    <div class="relative z-10 container mx-auto max-w-4xl py-20 px-4">
      <div class="flex flex-col md:flex-row items-center gap-8 fade-up">
        <!-- аватар 3D -->
        <div class="avatar-3d shrink-0">
          <img
            src="/images/avatar.png"
            alt="Разиньков Никита"
            class="w-32 h-32 rounded-full object-cover ring-4 ring-white/30"
          />
        </div>

        <!-- текстовый блок -->
        <div class="text-white text-center md:text-left">
          <h1 class="text-4xl md:text-5xl font-bold mb-2">
            Разиньков Никита Николаевич
          </h1>
          <p class="text-xl text-white/90 mb-4">
            Инженер-проектировщик нефтегазовых объектов
          </p>
          <p class="text-lg text-white/80 max-w-2xl leading-relaxed mb-6">
            Более 20 лет опыта в проектировании систем газоснабжения, магистральных и
            распределительных трубопроводов, объектов добычи и хранения нефти и газа.
          </p>

          <!-- бейджи -->
          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <Badge shiny>🎯 20+ лет опыта</Badge>
            <Badge shiny>📐 AutoCAD Plant 3D</Badge>
            <Badge shiny>🐍 Python</Badge>
            <Badge shiny>👨‍💼 Руководство проектами</Badge>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui'
</script>

<style scoped>
/* анимация появления */
.fade-up {
  animation: fadeInUp .8s ease-out forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* 3D-парallax аватара */
.avatar-3d { perspective: 1000px; }
.avatar-3d img {
  transform: rotateY(-15deg) rotateX(5deg);
  transition: transform .4s ease;
}
.avatar-3d:hover img {
  transform: rotateY(0) rotateX(0) scale(1.05);
}

/* анимированный aurora-фон */
.aurora {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 70% 30%, #f43f5e 0%, transparent 40%),
    radial-gradient(ellipse at 30% 70%, #6366f1 0%, transparent 40%);
  opacity: .25;
  animation: aurora 20s linear infinite;
}
@keyframes aurora {
  0%   { transform: rotate(0deg) scale(1); }
  50%  { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
}
</style>
