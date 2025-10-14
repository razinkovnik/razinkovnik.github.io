import { onMounted, type Ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

export function useFadeUp(target: Ref<HTMLElement | null>) {
  onMounted(() => {
    if (!target.value) return
    useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        target.value?.classList.toggle('visible', isIntersecting)
      },
      { threshold: 0.2 }
    )
  })
}
