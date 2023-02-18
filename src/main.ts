import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 实例化vue
const app = createApp(App)
// 使用vue
app.use(router)
app.mount('#app')
