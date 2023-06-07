<script>
import DiskChart from './DiskChart.vue';
export default {
  props: [],
  components: {DiskChart,},
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
        <p class="text-xs text-gray-400">Active time</p>
        <p class="text-xs text-gray-400">100%</p>
      </div>

     <DiskChart></DiskChart>
      <div class="flex justify-between">
        <p class="text-xs text-gray-400">60 Seconds</p>
        <p class="text-xs text-gray-400">0</p>
      </div>
      <div class="flex">
        <div class="flex flex-nowrap mt-10 content-around gap-4">
          <div class="text-xs">
            <p class="">Active time</p>
            <p class="text-lg">1%</p>
          </div>
          <div class="text-xs">
            <p class="">Average response time</p>
            <p class="text-lg">3 ms</p>
          </div>
          <div class="text-xs">
            <p class="">Read speed/p></p>
            <p class="text-lg">0 KB/s</p>
          </div>
          <div class="text-xs">
            <p class="">Write speed</p>
            <p class="text-lg">250 KB/s</p>
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
                <td>Capacity</td>
                <td>477 GB</td>
              </tr>
              <tr>
                <td>Formatted</td>
                <td>477 GB</td>
              </tr>
              <tr>
                <td>System disk</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Page file</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>SSD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<style scoped></style>
