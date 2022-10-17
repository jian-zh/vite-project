import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  //plugins中加入ElementPlusResolve,ElementPlusResolver
  plugins: [vue(), AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  })], 

  
  // axios跨域配置
  server:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://192.168.139.129:8080',
        changeOrigin: true,
        rewrite:(path)=>path.replace("/api",'')
      }
    }
  }
  //end of config axios
 
  

})

