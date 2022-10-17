import { createApp } from 'vue'
import './style.css'
import App from './animation_demo.vue'
import axios from 'axios'
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
app.use(ElementPlus)
//import and mount element-plus
app.mount('#app')
//------------------------------




