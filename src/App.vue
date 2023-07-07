<script>
import NavBar from "./components/NavBar.vue";
import Processes from "./pages/Processes.vue";
import Performance from "./pages/Performance.vue";

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
    
    <router-view></router-view>
    <div v-if="this.$route.fullPath == '/'">
      <Performance></Performance>
    </div>
    <!-- <iframe src="https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#metricsV2?graph=~(view~'timeSeries~stacked~false~metrics~(~(~(expression~'SELECT*20AVG*28CPUUtilization*29*0aFROM*20SCHEMA*28*22AWS*2fEC2*22*2c*20InstanceId*29*0aGROUP*20BY*20InstanceId*0aORDER*20BY*20AVG*28*29*20DESC~label~'!*7bLABEL*7d*20*5bavg*3a*20!*7bAVG*7d*25*5d~id~'q1~region~'us-east-1)))~region~'us-east-1~title~'Penggunaan*20CPU*20instans*20EC2*20diurutkan*20berdasarkan*20tertinggi~yAxis~(left~(label~'Percent~showUnits~false))~stat~'Average~period~300~start~'-PT3H~end~'P0D" width="100%" height="100%"></iframe> -->
  </div>
</template>

<style scoped></style>
