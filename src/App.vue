<script>
import NavBar from "./components/NavBar.vue";
import Processes from "./pages/Processes.vue";

export default {
  props: [],
  components: { NavBar,Processes },
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
  <div class="my-10 mx-10 border">
    <NavBar> </NavBar>
    <router-view></router-view>
    <div v-if="this.$route.fullPath == '/'">
      <Processes></Processes>
    </div>
  </div>
</template>

<style scoped></style>
