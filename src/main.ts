import { createApp } from 'vue'
// import './style.css'

import './styles/reset.scss'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from '@/store/index'
// 全局注册：图标引用简化
import svgIcon from './plugins/svgIcon.vue'
import './assets/iconfont/iconfont'

const app = createApp(App)
app.component('svgIcon', svgIcon)
app.use(router).use(store).use(ElementPlus).mount('#app')
