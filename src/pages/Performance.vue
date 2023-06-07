<script>
import SideBar from '@/components/SideBar.vue'
import Cpu from '@/components/Cpu.vue'
import Disk from '@/components/Disk.vue'
import Memory from '@/components/Memory.vue'
import Wifi from '@/components/Wifi.vue'

export default {
  props: [],
  components: {SideBar,Cpu,Disk,Memory,Wifi,},
  data() {
    return {
      currentTab : "CPU",
    
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<template>
  <div >
    <div class="grid grid-cols-4 max-h-screen text-black">
        <SideBar :Active="currentTab" @changeTab="(tab) => currentTab = tab"></SideBar>
        <div class="col-span-3 h-screen" v-if="currentTab == 'CPU'">
          <Cpu></Cpu>
        </div >
        <div class="col-span-3 h-screen" v-if="currentTab == 'Disk'">
          <Disk></Disk>
        </div>
        <div class="col-span-3 h-screen" v-if="currentTab == 'Memory'">
          <Memory></Memory>
        </div>
        <div class="col-span-3 h-screen" v-if="currentTab == 'Wifi'">
          <Wifi></Wifi>
        </div>
      </div>
  </div>
</template>

<style scoped></style>
