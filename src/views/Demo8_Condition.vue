<template>
  <div id="demo8">
    <div v-if="type==='A'">A</div>
    <div v-else-if="type==='B'">B</div>
    <div v-else-if="type==='C'">C</div>
    <div v-else>Not A B C</div>
    <div v-if="isShow">Blink if</div>
    <div v-else>Blink else</div>
    <div v-show="!isShow">Blink show</div>
  </div>
</template>

<script>
export default {
  name: "Demo8",
  mounted() {
    setInterval(() => {
      this.isShow = !this.isShow;
    }, 500);
  },
  data() {
    return {
      type: "B",
      isShow: true
    };
  }
};
</script>

<style>
</style>