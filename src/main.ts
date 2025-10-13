import App from './App.vue'
// src/main.ts
import { createApp } from 'vue'
import './assets/styles/globals.css'

const app = createApp(App)

// Глобальная обработка ошибок
app.config.errorHandler = (err, instance, info) => {
  console.error('Vue error:', err)
  console.error('Component instance:', instance)
  console.error('Error info:', info)

  // Здесь можно добавить отправку ошибок в сервис мониторинга
  // sentry.captureException(err, { extra: { instance, info } })
}

// Глобальные свойства (если нужны)
app.config.globalProperties.$filters = {
  formatDate(date: string) {
    return new Date(date).toLocaleDateString('ru-RU')
  },
}

app.mount('#app')
