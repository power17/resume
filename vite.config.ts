import {  defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue'
export default defineConfig({
    // base: './',
    resolve: {
      //设置别名
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
	plugins: [vue()]

})
