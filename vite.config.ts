import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd()

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

/** 设置别名 */
const alias: Record<string, string> = {
  '@': pathResolve('src'),
  '@build': pathResolve('build'),
}

export default defineConfig({
  plugins: [vue()],
  server: {
    // host: "0.0.0.0",
    port: '5174'
  },
  resolve: {
    alias,
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
