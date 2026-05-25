<!-- src/components/seo/HeadMeta.vue -->
<script setup lang="ts">
import { useHead } from '@unhead/vue'

interface Props {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonical?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Разиньков Никита - Специалист по проектированию систем газоснабжения и нефтегазовых объектов',
  description: 'Инженер-проектировщик с 20+ летним опытом в проектировании систем газоснабжения и нефтегазовых объектов',
  keywords: 'инженер-проектировщик, нефтегазовые объекты, газоснабжение, AutoCAD Plant 3D, Python',
  ogImage: '/og-image.jpg',
  canonical: 'https://ваш-сайт.com'
})

useHead({
  title: props.title,
  meta: [
    { name: 'description', content: props.description },
    { name: 'keywords', content: props.keywords },
    { property: 'og:image', content: props.ogImage },
    { property: 'og:title', content: props.title },
    { property: 'og:description', content: props.description },
  ],
  link: [
    { rel: 'canonical', href: props.canonical }
  ]
})
</script>
