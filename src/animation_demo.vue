<script script setup lang="ts">
import {ref} from "vue"
const flag=ref(true);
</script>
<template>

<button @click="flag=!flag">按钮</button>
<p v-if="flag">hello</p>


    </template>
   
   
   
   
   <style>
   .v-left-active{
    transition: opacity 0.5 ease;
   }
   .v-left-to{
    opacity: 0;

   }
</style>