<script>
import MemoryChart from './MemoryChart.vue';
export default {
  props: [],
  components: {MemoryChart,},
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
        <p class="text-xs text-gray-400">Memory Usage</p>
        <p class="text-xs text-gray-400">15.4</p>
      </div>

      <MemoryChart></MemoryChart>
      <div class="flex justify-between">
        <p class="text-xs text-gray-400">60 Seconds</p>
        <p class="text-xs text-gray-400">0</p>
      </div>
      <div class="flex">
        <div class="flex flex-nowrap mt-10 content-around gap-4">
          <div class="text-xs">
            <p class="">in use (Compressed)</p>
            <p class="text-lg">9.9 GB (299 MB)</p>
          </div>
          <div class="text-xs">
            <p class="">Available</p>
            <p class="text-lg">5.4 GB</p>
          </div>
          <div class="text-xs">
            <p class="">Committed</p>
            <p class="text-lg">14.2/17.2 GB</p>
          </div>
          <div class="text-xs">
            <p class="">Cached</p>
            <p class="text-lg">5.4 GB</p>
          </div>
          <div class="text-xs">
            <p class="">Paged pool</p>
            <p class="text-lg">526 MB</p>
          </div>
          <div class="text-xs">
            <p class="">Non-paged pool</p>
            <p class="text-lg">503 MB</p>
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
                <td>Speed</td>
                <td>3200 MHz</td>
              </tr>
              <tr>
                <td>Slots used</td>
                <td>2 of 2</td>
              </tr>
              <tr>
                <td>Form factor</td>
                <td>SODIMM</td>
              </tr>
              <tr>
                <td>Hardware reserved</td>
                <td>629 MB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<style scoped></style>
