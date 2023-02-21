import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
// 引入基础样式
import '@/styles/normalize.css'
import { initAppStore } from './store'
// 实例化vue
const app = createApp(App)
// 使用router
app.use(router)
// 注册pinia状态管理库
app.use(createPinia())
initAppStore()
app.mount('#app')
