import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // server: {
  //   proxy: {
  //     '/baseApi': {
  //       target: 'https://api.themoviedb.org/3/discover',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/baseApi/, ''),
  //     },
  //   },
  // },
});
