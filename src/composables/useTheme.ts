// src/composables/useTheme.ts
import { ref, onMounted } from 'vue'

export function useTheme() {
  const isDark = ref(false)
  
  const setTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.theme = dark ? 'dark' : 'light'
    isDark.value = dark
  }
  
  const toggleTheme = () => {
    setTheme(!isDark.value)
  }
  
  // Инициализация темы
  onMounted(() => {
    const saved = localStorage.theme
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark)
    }
  })
  
  return {
    isDark,
    setTheme,
    toggleTheme
  }
}