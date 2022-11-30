    <template>
    
<div>
    
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="_class" label="ClassName" width="180" />
    <el-table-column prop="teacher" label="TName" width="180" />
    <el-table-column prop="studentId" label="Student" width="180" />
    <el-table-column prop="classtime" label="Time"/>
  </el-table> 
  <button @click="select">查询</button>

</div>
    
    </template>

<script setup lang="ts" >
import axios from "axios";
import { ElTable, ElTableColumn } from "element-plus";
import {reactive} from "vue"
type lesson={
    _class:string
    teacher:string
    studentId:string
    classtime:string
}
const tableData=reactive<lesson[]>([])
    const select=():void =>{
axios({
  method:"get",
  url:'http://192.168.139.129:8080/MVC_Gym/lesson',
params:{

}
}).then (function(resp){


var data:[]=resp.data

for(let i in data){
    let o:lesson
    o=data[i]
    tableData.push(o)
}
console.log(tableData)
})
}

</script>
