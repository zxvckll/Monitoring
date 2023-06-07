<script>
import CpuChart from './CpuChart.vue';

export default {
  props: [],
  components: {CpuChart,},
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
  <div class="col-span-3 bg-white ">
      <div class="flex justify-between">
        <p class="text-xs text-gray-400">% Utilization</p>
        <p class="text-xs text-gray-400">100%</p>
      </div>
      <CpuChart></CpuChart>
      <div class="flex justify-between">
        <p class="text-xs text-gray-400">60 Seconds</p>
        <p class="text-xs text-gray-400">0</p>
      </div>
      <div class="flex">
        <div class="flex flex-nowrap mt-10 content-around gap-4">
          <div class="text-xs">
            <p class="">Utilization</p>
            <p class="text-lg">10%</p>
          </div>
          <div class="text-xs">
            <p class="">Speed</p>
            <p class="text-lg">3.50GHz</p>
          </div>
          <div class="text-xs">
            <p class="">Processes</p>
            <p class="text-lg">378</p>
          </div>
          <div class="text-xs">
            <p class="">Threads</p>
            <p class="text-lg">4925</p>
          </div>
          <div class="text-xs">
            <p class="">Handles</p>
            <p class="text-lg">175230</p>
          </div>
          <div class="text-xs">
            <p class="">Up Time</p>
            <p class="text-lg">1:13:32:50</p>
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
                <td>Base speed</td>
                <td>3.30 GHz</td>
              </tr>
              <tr>
                <td>Sockets</td>
                <td>１</td>
              </tr>
              <tr>
                <td>Cores</td>
                <td>６</td>
              </tr>
              <tr>
                <td>Logical Processors</td>
                <td>12</td>
              </tr>
              <tr>
                <td>L1 cache</td>
                <td>384 KB</td>
              </tr>
              <tr>
                <td>L2 cache</td>
                <td>3.0 MB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<style scoped></style>
