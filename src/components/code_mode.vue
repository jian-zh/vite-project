axios.defaults.baseURL="/api";//通过这里设置转发地址
axios({
  method:"get",
url:"/com.test.first/user",
}).then(function(rsep){
alert(rsep.data);
})
//axios的跨域写法






axios({
  method:"get",
  url:'/com.test.first/user',
params:{//服务器通过getParameter获取参数
  name:username.value,//参数名，参数值
  pwd:pwd.value
}
}).then (function(resp){
alert(resp.data);
})
}



//axios的get方法传参数
<style scoped lang="less">

  
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>