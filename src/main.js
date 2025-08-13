import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// 配置axios默认设置
 axios.defaults.baseURL = 'http://192.168.6.19:8000/api/v1/'
//axios.defaults.baseURL = 'http://localhost:8000/api/v1/'
axios.defaults.timeout = 10000

// 创建Vue应用
const app = createApp(App)

// 将axios添加到全局属性
app.config.globalProperties.$http = axios

// 使用插件
app.use(router)

// 挂载应用
app.mount('#app')
