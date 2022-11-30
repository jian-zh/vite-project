<script script setup lang="ts">
import {ref} from "vue"
const flag=ref(true);
</script>
<template>

<button @click="flag=!flag">按钮</button>

<transition name="fade" >
<div class="box" v-if="flag" >hello</div>
</transition>

<div>
  <RouterLink to="/">a</RouterLink>
  


<RouterView></RouterView>
</div>

    </template>
   
   
   
   
   <style>
.box{
    width: 200px;
    height: 300px;
    margin-left: 500px;
    background-color: red;
}
.fade-enter-from{
    width: 200px;
    height: 300px;
    transform: rotate(360deg);
opacity: 0.1;

}
.fade-enter-active{
    transition: all 3s ease-out;
    width: 200px;
    height: 300px;
 
    
}
.fade-enter-to{
    width: 200px;
    height: 300px;
    opacity: 1;
}
.fade-leave-from{
    opacity: 0.9;
    transform: rotate(360deg);
    font-size: 10px;
}
.fade-leave-active{
    transition: all 1s ease-out ;
}
.fade-leave-to{
    opacity: 0;
 
    /* font-size: 0px; */
}

  
</style>