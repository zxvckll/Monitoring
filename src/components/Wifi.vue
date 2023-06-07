<script>
import WifiChart from './WifiChart.vue';
export default {
  props: [],
  components: {WifiChart,},
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<template>
    <div class="col-span-3 bg-white">
      <div class="flex justify-between">
        <p class="text-xs text-gray-400">Throughput</p>
        <p class="text-xs text-gray-400">26 Mbps</p>
      </div>

     <WifiChart></WifiChart>
      <div class="flex justify-between">
        <p class="text-xs text-gray-400">60 Seconds</p>
        <p class="text-xs text-gray-400">0</p>
      </div>
      <div class="flex">
        <div class="flex flex-nowrap mt-10 content-around gap-4">
          <div class="text-xs">
            <p class="">Send</p>
            <p class="text-lg">1 Mbps</p>
          </div>
          <div class="text-xs">
            <p class="">Receive</p>
            <p class="text-lg">20 Mbps</p>
          </div>
        </div>
        <div class="mx-20 flex flex-nowrap mt-10 content-around gap-4">
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adapter name</td>
                <td>Wi-Fi</td>
              </tr>
              <tr>
                <td>SSID</td>
                <td>eepiswlan</td>
              </tr>
              <tr>
                <td>DNS name</td>
                <td>pens.ac.id</td>
              </tr>
              <tr>
                <td>Connection type</td>
                <td>802.11ac</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<style scoped></style>
