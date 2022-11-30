<template>
    <!-- 没给div所以不显示 -->
    <div>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
                <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <div >
            <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
        </div>
        <div>
            <el-pagination :page-size="8" :pager-count="5" layout="prev, pager, next" :total=link_total />
            <!-- page-size说明页面有几个元素，total说明有多少个元素，total/size=页面数 -->
        </div>

    </div>
</template>
<script setup lang="ts" >
import {Ref,ref}from 'vue'
let link_total=ref<number>(100);
  </script>
<style scoped>

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width:30px;
  margin: 10px;
  text-align: center;
  border-radius: 10px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
  