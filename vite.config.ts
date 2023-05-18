import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // host: "0.0.0.0",
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      // define global scss variable
      scss: {
        javascriptEnabled: true,
        additionalData: `@use "@/styles/index.scss" as *;`,
        // additionalData: '@import "./src/styles/index.scss";', // 这里的分号不能省
      },
    },
  },
})
