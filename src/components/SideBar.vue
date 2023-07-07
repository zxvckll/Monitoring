<script>
import CpuChart from './CpuChart.vue';
import DiskChart from './DiskChart.vue';
import MemoryChart from './MemoryChart.vue';
import WifiChart from './WifiChart.vue';
export default {
  props: ['Active'],
  components: {CpuChart,DiskChart,MemoryChart,WifiChart},
  data() {
    return {
      tes : ''
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  emits:['changeTab'],
};
</script>

<template>
  <div class="nav">
    <div class="flex-col text-black flex-auto h-full flex">
      
        
      <button :class="Active == 'CPU' ?  'active' :''" class=" h-1/5 w-full bg-white hover:border hover:bg-blue-200" @click="$emit('changeTab','CPU')">
        CPU
      </button>
      <button :class="Active == 'Disk' ?  'active' :''" class="h-1/5 w-full bg-white hover:border hover:bg-blue-200" @click="$emit('changeTab','Disk')">Disk</button>
      <button :class="Active == 'Network' ?  'active' :''" class="h-1/5 w-full bg-white hover:border hover:bg-blue-200" @click="$emit('changeTab','Network')">Network</button>
    </div>
  </div>
</template>

<style scoped>
.active {
  background-color: rgb(191 219 254);
}
</style>
