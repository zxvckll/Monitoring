<script>
export default {
  props: ["CPUUtilization"],
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
        <img :src="CPUUtilization" alt="">
      </div>
    </div>
</template>

<style scoped></style>
