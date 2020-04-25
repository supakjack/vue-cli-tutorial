<template>
  <div id="app">
    <Header />
    <Content />
    <Footer @onClock="onClock" title="Copyright 2020 By JackMobile" color="gray" />
    <span>{{time}}</span>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import Content from "@/components/layouts/Content.vue";
import moment from "moment";
export default {
  name: "app",
  methods: {
    onClock(value) {
      this.time = moment(value).format("MM/DD/YYYY hh:mm:ss");
    }
  },
  data() {
    return {
      time: ""
    };
  },
  components: {
    Header,
    Footer,
    Content
  }
};
</script>
<style scoped>
</style>