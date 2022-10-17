<script setup lang="ts" >
import axios, { AxiosResponse } from 'axios';
import {Ref, ref} from 'vue'

var imgurl:Ref<any>=ref<any>('');
let data:Blob;

const downloadimg=():void =>{
    axios({
        method:'get',
        url:'/com.test.first/sendimg',
        responseType:'blob'
    }).then(function(resp){
        //img不能读取Bolb创建的URL
//    data=new Blob([resp.data],{type:'application/jpeg'})
//   imgurl=URL.createObjectURL(new Blob([resp.data],{type:'application/jpeg'}))
//   imgurl=URL.createObjectURL(resp.data)
const reader = new FileReader();
reader.onload = (e) => {
		 imgurl.value= e.target.result;
      
	};
	reader.readAsDataURL(resp.data);


})
}
function getBase64(data: BlobPart) {
      return new Promise((resolve, reject) => {
        const blob = new Blob([data], { type: "image/jpg" }); //类型一定要写！！！
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    }
    // 


</script>
<template>
    <div>

    <h1>asd</h1>
    <button @click="downloadimg">下载</button>
    <img :src="imgurl" alt="图片"/>
        <!-- <div>
            <el-image v-loading="loading" style='height: 480px;' :src="imgurl"></el-image>
        </div> -->

    </div>
</template>
