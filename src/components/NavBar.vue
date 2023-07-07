<script>
export default {
  props: [],
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
  <div class="grid grid-cols-1 bg-white w-full text-black">
    <div class="border w-full flex justify-center">
      <router-link to="/Performance" class="py-2 px-3">Monitoring Resource</router-link>
    </div>
  </div>
</template>

<style scoped></style>
