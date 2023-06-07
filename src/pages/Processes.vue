<script >

export default {
  props: [],
  components: {},
  data() {
    return {
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
 <div>
    <table class="w-full border-collapse min-w-400 table-auto overflow-hidden shadow-md bg-white text-black">
        <thead class="bg-gray-300 text-center font-bold ">
            <tr class="text-left">
                <th class="  ">Name</th>
                <th class="  ">20% CPU</th>
                <th class="  ">50% Memory</th>
                <th class="  ">25% Disk</th>
                <th class="  ">10% Network</th>
                <th class="  ">10% GPU</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Application A</td>
                <td>15%</td>
                <td>4,000 MB</td>
                <td>20 MB/s</td>
                <td>8 Mbps</td>
                <td>7%</td>
            </tr>
            <tr>
                <td>Application B</td>
                <td>5%</td>
                <td>1,000 MB</td>
                <td>5 MB/s</td>
                <td>2 Mbps</td>
                <td>3%</td>
            </tr>
        </tbody>
    </table>
 </div>
</template>

<style scoped>
</style>
