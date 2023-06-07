import {createRouter, createWebHistory } from 'vue-router'
import Performance from  '@/pages/Performance.vue'
import Processes from  '@/pages/Processes.vue'
import AppHistory from '@/pages/AppHistory.vue'
import Memory   from '@/components/Memory.vue'
import Disk from '@/components/Disk.vue'
import Wifi from '@/components/Wifi.vue'
import CPU from '@/components/CPU.vue'

const routes = [
    {path:'/Performance',name:'Performance',component: Performance},
    {path:'/Processes',name:'Processes',component: Processes},
    {path:'/AppHistory',name:'AppHistory',component: AppHistory},
    {path:'/Memory',name:'Memory',component: Memory, Performance : Memory},
    {path:'/Disk',name:'Disk',component: Disk, Performance : Disk},
    {path:'/Wifi',name:'Wifi',component: Wifi, Performance : Wifi},
    {path:'/CPU',name:'CPU',component: CPU, Performance : CPU},
]

const router = createRouter ({
    history :createWebHistory(),
    routes
})
export default router
