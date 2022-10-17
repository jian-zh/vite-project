const {defineConfig}=require('@vue/cliservice')
module.exports=defineConfig({
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://192.168.139.129:8080/com.test.first/user',
        pathRewrite:{'^http://192.168.139.129:8080/com.test.first/user':''},
        changeOrigin: true
      }
    }
  }
})