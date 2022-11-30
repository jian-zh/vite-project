import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
//import router
import router from './router'
//import element --
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//-------------------
const app=createApp(App)
//axios
// 配置请求的根路径
axios.defaults.baseURL = "/api"


//------------------------------

//import element icon--
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//--------------------
app.use(router)
//use router
//--------------------
app.use(ElementPlus)
//import and mount element-plus
app.mount('#app')
//------------------------------




