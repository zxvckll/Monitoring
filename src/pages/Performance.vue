<script>
import SideBar from "@/components/SideBar.vue";
import Cpu from "@/components/Cpu.vue";
import Disk from "@/components/Disk.vue";
import axios from "axios";
import Network from "@/components/Network.vue";
export default {
  props: [],
  components: { SideBar, Cpu, Disk, Network },
  data() {
    return {
      CPUUtilization: null,
      currentTab: "CPU",
      DiskReadOps: null,
      DiskWriteOps: null,
      DiskReadBytes: null,
      DiskWriteBytes: null,

      NetworkIn: null,
      NetworkOut: null,
      NetworkPacketsOut: null,
      NetworkPacketsIn: null,

      imageUrl: null,
      imgElement: null,
    };
  },
  methods: {
    async changeTab(tab) {
      this.currentTab = tab;
    },

    //CPU
    async getCPUUtilization() {
      var url = `http://localhost:8080/getCPUUtilization`;
      try {
        const response = await axios.get(url, { responseType: "arraybuffer" });
        const imageBlob = new Blob([response.data], { type: "image/png" });
        this.CPUUtilization = URL.createObjectURL(imageBlob);

        // Tampilkan gambar di elemen <img>
      } catch (error) {
        console.error(error);
      }
    },

    async getDiskWriteOps() {
      var url = `http://localhost:8080/getDiskWriteOps`;
      try {
        const response = await axios.get(url, { responseType: "arraybuffer" });
        const imageBlob = new Blob([response.data], { type: "image/png" });
        this.DiskWriteOps = URL.createObjectURL(imageBlob);

        // Tampilkan gambar di elemen <img>
      } catch (error) {
        console.error(error);
      }
    },
    async getDiskReadOps() {
      var url = `http://localhost:8080/getDiskReadOps`;
      try {
        const response = await axios.get(url, { responseType: "arraybuffer" });
        const imageBlob = new Blob([response.data], { type: "image/png" });
        this.DiskReadOps = URL.createObjectURL(imageBlob);

        // Tampilkan gambar di elemen <img>
      } catch (error) {
        console.error(error);
      }
    },
    async getDiskReadBytes() {
      var url = `http://localhost:8080/getDiskReadBytes`;
      try {
        const response = await axios.get(url, { responseType: "arraybuffer" });
        const imageBlob = new Blob([response.data], { type: "image/png" });
        this.DiskReadBytes = URL.createObjectURL(imageBlob);

        // Tampilkan gambar di elemen <img>
      } catch (error) {
        console.error(error);
      }
    },
    async getDiskWriteBytes() {
      var url = `http://localhost:8080/getDiskWriteBytes`;
      try {
        const response = await axios.get(url, { responseType: "arraybuffer" });
        const imageBlob = new Blob([response.data], { type: "image/png" });
        this.DiskWriteBytes = URL.createObjectURL(imageBlob);

        // Tampilkan gambar di elemen <img>
      } catch (error) {
        console.error(error);
      }
    },
    async getNetworkIn() {
      var url = `http://localhost:8080/getNetworkIn`;
      try {
        const response = await axios.get(url, { responseType: "arraybuffer" });
        const imageBlob = new Blob([response.data], { type: "image/png" });
        this.NetworkIn = URL.createObjectURL(imageBlob);

        // Tampilkan gambar di elemen <img>
      } catch (error) {
        console.error(error);
      }
    },
    async getNetworkOut() {
      var url = `http://localhost:8080/getNetworkOut`;
      try {
        const response = await axios.get(url, { responseType: "arraybuffer" });
        const imageBlob = new Blob([response.data], { type: "image/png" });
        this.NetworkOut = URL.createObjectURL(imageBlob);

        // Tampilkan gambar di elemen <img>
      } catch (error) {
        console.error(error);
      }
    },
    async getNetworkPacketsOut() {
      var url = `http://localhost:8080/getNetworkPacketsOut`;
      try {
        const response = await axios.get(url, { responseType: "arraybuffer" });
        const imageBlob = new Blob([response.data], { type: "image/png" });
        this.NetworkPacketsOut = URL.createObjectURL(imageBlob);

        // Tampilkan gambar di elemen <img>
      } catch (error) {
        console.error(error);
      }
    },
    async getNetworkPacketsIn() {
      var url = `http://localhost:8080/getNetworkPacketsIn`;
      try {
        const response = await axios.get(url, { responseType: "arraybuffer" });
        const imageBlob = new Blob([response.data], { type: "image/png" });
        this.NetworkPacketsIn = URL.createObjectURL(imageBlob);

        // Tampilkan gambar di elemen <img>
      } catch (error) {
        console.error(error);
      }
    },
    //DISK
    async getInit() {
    await Promise.all([
      this.getCPUUtilization(),
      this.getDiskWriteOps(),
      this.getDiskReadOps(),
      this.getDiskReadBytes(),
      this.getDiskWriteBytes(),
      this.getNetworkIn(),
      this.getNetworkOut(),
      this.getNetworkPacketsOut(),
      this.getNetworkPacketsIn(),
    ]);
  },

    //NETWORK

    goBack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.getInit()
    .then(() => {
      // Semua permintaan asinkron selesai
      // Sekarang Anda dapat merender komponen dengan data
    })
    .catch((error) => {
      console.error(error);
    });

    setInterval(() => {
    this.getInit().then(() => {
      // Permintaan asinkron selesai
      // Sekarang Anda dapat merender komponen dengan data baru
    }).catch((error) => {
      console.error(error);
    });
  }, 60000); // Jalankan setiap 1 menit (60000 milidetik)
  },
};
</script>

<template>
  <div>
    <div class="grid grid-cols-4 max-h-screen text-black">
      <SideBar
        :Active="currentTab"
        @changeTab="changeTab"
      ></SideBar>

      <div class="col-span-3 h-screen" v-if="currentTab == 'CPU'">
        <Cpu :CPUUtilization="CPUUtilization"></Cpu>
      </div>
      <div class="col-span-3 h-screen" v-if="currentTab == 'Disk'">
        <Disk
          :DiskReadBytes="DiskReadBytes"
          :DiskWriteBytes="DiskWriteBytes"
          :DiskWriteOps="DiskWriteOps"
          :DiskReadOps="DiskReadOps"
        ></Disk>
      </div>
      <div class="col-span-3 h-screen" v-if="currentTab == 'Network'">
        <Network
          :NetworkIn="NetworkIn"
          :NetworkOut="NetworkOut"
          :NetworkPacketsIn="NetworkPacketsIn"
          :NetworkPacketsOut="NetworkPacketsOut"
        ></Network>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
