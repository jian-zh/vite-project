<template>
  <div>

    <div class="common-layout">
      <el-container>
        <el-header>
          <head_demo></head_demo>
        </el-header>
        <el-container class="aside">
          <el-aside width="5%">旁边</el-aside>
          <el-main class="main">
            <main_demo></main_demo>
          </el-main>
        </el-container>
      </el-container>

    </div>

  </div>
</template>
<script setup lang="ts">
import head_demo from "./header.vue"
import main_demo from "./main.vue"

</script>
<style>
.common-layout {
  height: 100%;
}

.main {
  height: auto;
  width: 80%;
}
</style>
