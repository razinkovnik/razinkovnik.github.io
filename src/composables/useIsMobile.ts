// src/composables/useIsMobile.ts
import { ref, onMounted, onBeforeUnmount } from 'vue'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const isMobile = ref(false)

  const updateIsMobile = () => {
    isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
  }

  onMounted(() => {
    updateIsMobile()
    window.addEventListener('resize', updateIsMobile)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateIsMobile)
  })

  return isMobile
}