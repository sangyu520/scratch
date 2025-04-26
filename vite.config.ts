import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // 导入 path 模块

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // 设置 "@" 为 src 目录的别名
    },
  },
})
