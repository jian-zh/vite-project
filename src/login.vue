<script setup lang="ts" >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
import { BoxPackProperty } from 'csstype';

import { ref, Ref} from 'vue'
import {  useRouter } from 'vue-router';

const router = useRouter()
const  topage=(url:string)=>{
  router.push(url)
}
const username:Ref=ref<string>('');
const pwd:Ref=ref<string>('');


const fc=():void =>{
  // axios.defaults.baseURL="/api"
axios({
  method:"get",
  url:'http://192.168.139.129:8080/MVC_Gym/Login',
params:{
  name:username.value,
  pwd:pwd.value
}
}).then (function(resp){
 
var flag:boolean
flag=resp.data
alert(resp.data);
if(flag)
 topage('menu')
// if(st=="true")

})
}
const select=():void =>{
axios({
  method:"get",
  url:'http://192.168.139.129:8080/MVC_Gym/Login1',
params:{

}
}).then (function(resp){


var st:Student=decodeUser(resp.data)
var g:StuJson=resp.data
alert(g.role);


})
}

type Student={
  UserId:String
PassWord:String
Role:String
}
type StuJson={
  userId:String
passWord:String
role:String
}
function decodeUser(json: StuJson): Student {
  return {
    Role:    json.role,
    PassWord:     json.passWord,
    UserId:   json.userId
  };
}


</script>

<template>
  <body class="layout">
   <div class="layout-center">
    <div class="c">
      <div class="c-center" >
        <el-icon><User /></el-icon> <el-input v-model="username" placeholder="用户名" />
      </div>
      <div class="c-center">
      <el-icon><lock /></el-icon><el-input  v-model="pwd" type="password" placeholder="请输入密码" show-password />
    </div>
  <div  class="c-buttom">
      <button @click="fc">登录</button>
      </div>
    </div>
   <router-link :to="{name:'register'}">用户注册 </router-link>
      <router-link :to="{name:'register'}">忘记密码</router-link>
   </div>
      
    
    
  </body>


  
</template>

<style scoped lang='less'>

 .c{
 background :rgba(255,255,255,0.6); 
 -webkit-box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
  box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
  height:180px;
  width:360px;
  display: flex;
  flex-direction: column;
  &-center{
    width:240px;
display: flex;
margin:auto
  }
  &-buttom{
display: flex;
margin:auto
  }
 } 
  .layout{
    
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &-center{ 
      position:absolute;
top:50%;
left:50%;
margin: -90px -120px;
    }
   
  }
  

</style>
