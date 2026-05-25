// SSG entry point
import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles/globals.css'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()

  app.use(pinia)
  app.use(router)

  // Глобальная обработка ошибок
  app.config.errorHandler = (err, instance, info) => {
    console.error('Vue error:', err)
    console.error('Component instance:', instance)
    console.error('Error info:', info)
  }

  // Глобальные свойства
  app.config.globalProperties.$filters = {
    formatDate(date: string) {
      return new Date(date).toLocaleDateString('ru-RU')
    },
  }

  return { app, router }
}
