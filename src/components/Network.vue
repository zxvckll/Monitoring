<script>
export default {
  props: ["NetworkIn","NetworkOut","NetworkPacketsOut","NetworkPacketsIn"],
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
      <img :src="NetworkIn" alt="" />
    </div>
    <div class="w-1/2">
      <img :src="NetworkOut" alt="" />
    </div>
    <div class="w-1/2">
      <img :src="NetworkPacketsOut" alt="" />
    </div>
    <div class="w-1/2">
      <img :src="NetworkPacketsIn" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
