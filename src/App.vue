<script setup lang="ts" >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
import { ref, Ref,isRef ,watch} from 'vue'
let count:Ref<number>=ref(0)
const add=():void=>{
count.value++;
console.log(count);
}
watch(count,(newval,oldval)=>{console.log('newval'+newval+'oldval'+oldval)})

const app = {
  data() {
    return {
      username: '',
	  pwd: ''
    }
  }
}
const username:Ref=ref<string>('');
const pwd:Ref=ref<string>('');
const fc=():void =>{
  axios.defaults.baseURL="/api"
axios({
  method:"get",
  url:'/com.test.first/user',
params:{
  name:username.value,
  pwd:pwd.value
}
}).then (function(resp){
alert(resp.data);
})
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
      <button @click="fc">button</button>
      </div>
    </div>

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
