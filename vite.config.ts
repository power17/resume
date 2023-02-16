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
	plugins: [vue()],
	server: {
      port: 3000, //启动端口
      host: '0.0.0.0',
      open: true, //自动打开
      
      // 设置代理
      // proxy: createProxy()
    }
})
