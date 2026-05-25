// Client-side entry point for SSG hydration
import { createPinia } from 'pinia'
import App from './App.vue'
import { createApp } from './main'

const { app, router, pinia } = createApp()

app.use(pinia)
app.use(router)

app.mount('#app')
