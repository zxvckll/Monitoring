import {createRouter, createWebHistory } from 'vue-router'
import Performance from  '@/pages/Performance.vue'

const routes = [
    {path:'/',name:'Performance',component: Performance},

]

const router = createRouter ({
    history :createWebHistory(),
    routes
})
export default router
