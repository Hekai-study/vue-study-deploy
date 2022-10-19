import { fileURLToPath, URL } from 'node:url'
import { viteMockServe } from 'vite-plugin-mock'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'comps': fileURLToPath(new URL('./src/components', import.meta.url)),
      'service': fileURLToPath(new URL('./src/service', import.meta.url)),
      'api': fileURLToPath(new URL('./src/service/api', import.meta.url)),
      'views': fileURLToPath(new URL('./src/views', import.meta.url)),
      'utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      'router': fileURLToPath(new URL('./src/router', import.meta.url)),
      'store': fileURLToPath(new URL('./src/store', import.meta.url)),
      'styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      'layout': fileURLToPath(new URL('./src/layout', import.meta.url)),
    }
  }
})
