import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({command, mode})=>{
  const env = loadEnv(mode, process.cwd(), '')
  
  return ({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/baseApi': {
        target: `${env.VITE_BASE_URL}`,
        changeOrigin: true,
        rewrite: (path) =>  path.replace(/^\/baseApi/, ''),
      },
    },
  },
})});
