<script>
export default {
  props: ["DiskReadOps", "DiskWriteOps", "DiskReadBytes", "DiskWriteBytes"],
  components: {},
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
   <div class="flex flex-wrap">
    <div class="w-1/2">
      <img :src="DiskReadOps" alt="" />
    </div>
    <div class="w-1/2">
      <img :src="DiskWriteOps" alt="" />
    </div>
    <div class="w-1/2">
      <img :src="DiskReadBytes" alt="" />
    </div>
    <div class="w-1/2">
      <img :src="DiskWriteBytes" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
