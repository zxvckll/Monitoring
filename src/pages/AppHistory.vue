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
  <div>
    <p class="my-3">Resource usage since 01/01/2022</p>
    <button class="mb-3 text-red-400">Delete Usage History</button>
  </div>
    <table class="w-full border-collapse min-w-400 table-auto overflow-hidden shadow-md bg-white text-black">
        <thead class="bg-gray-300  text-center font-bold ">
            <tr class="text-left">
                <th class="  ">Name</th>
                <th class="  ">CPU Time</th>
                <th class="  ">Network</th>
                <th class="  ">Metered Network</th>
                <th class="  ">Tile Update</th>
            
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Application A</td>
                <td>01:50:40</td>
                <td>40,000 MB</td>
                <td>0 MB/s</td>
                <td>1 Mbps</td>        
            </tr>
            <tr>
                <td>Application B</td>
                <td>01:00:40</td>
                <td>10,000 MB</td>
                <td>0 MB/s</td>
                <td>2 Mbps</td>        
            </tr>
        </tbody>
    </table>
 </div>
</template>

<style scoped>
</style>
