import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/panda-bubble-tea/',

  build: {
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        menu: resolve('menu.html'),
        checkout: resolve('checkout.html')
      }
    }
  }
})
