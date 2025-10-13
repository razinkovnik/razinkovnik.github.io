<!-- src/components/seo/HeadMeta.vue -->
<template>
  <!-- Этот компонент не рендерит DOM, только управляет head -->
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'

interface Props {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonical?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Разиньков Никита - Инженер-проектировщик нефтегазовых объектов',
  description: 'Инженер-проектировщик с 20+ летним опытом в проектировании систем газоснабжения и нефтегазовых объектов',
  keywords: 'инженер-проектировщик, нефтегазовые объекты, газоснабжение, AutoCAD Plant 3D, Python',
  ogImage: '/og-image.jpg',
  canonical: 'https://ваш-сайт.com'
})

// Обновляем meta-теги при монтировании
onMounted(() => {
  updateMetaTags()
})

// Обновляем при изменении пропсов
watch(props, () => {
  updateMetaTags()
})

function updateMetaTags() {
  // Title
  document.title = props.title
  
  // Meta description
  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.setAttribute('name', 'description')
    document.head.appendChild(metaDesc)
  }
  metaDesc.setAttribute('content', props.description)
  
  // Keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]')
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    document.head.appendChild(metaKeywords)
  }
  metaKeywords.setAttribute('content', props.keywords)
  
  // Canonical
  let linkCanonical = document.querySelector('link[rel="canonical"]')
  if (!linkCanonical) {
    linkCanonical = document.createElement('link')
    linkCanonical.setAttribute('rel', 'canonical')
    document.head.appendChild(linkCanonical)
  }
  linkCanonical.setAttribute('href', props.canonical)
}
</script>