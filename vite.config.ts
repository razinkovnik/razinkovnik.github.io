import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [vue(), tailwindcss(), ViteImageOptimizer({
    jpg: {
      quality: 80,
    },
    jpeg: {
      quality: 80,
    },
    png: {
      quality: 80,
    },
    webp: {
      quality: 80,
    },
  }), cloudflare()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },
  ssr: {
    noExternal: ['vue', '@headlessui/vue']
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})