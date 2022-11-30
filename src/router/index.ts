import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes:Array<RouteRecordRaw>=[{
    path:"/",
    name:"login",
    component:()=>import('../login.vue')
},
{
    path:"/menu",
    name:"menu",
    component:()=>import('../menu.vue')
},
{
    path:"/register",
    name:"register",
    component:()=>import('../register.vue')
}
]
const router=createRouter({
      history:createWebHistory(),
      routes

})

export default router