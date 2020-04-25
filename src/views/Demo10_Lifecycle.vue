<template>
  <div id="demo10">
    <h1>Life-cycle Hook</h1>
    <span>{{counter}}</span>
    <button @click="add">Change</button>
  </div>
</template>

<script>
export default {
  name: "Demo10",
  data() {
    return {
      counter:0,
    }
  },
  methods: {
    add(){
      this.counter++;
    }
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  mounted() {
    console.log("mounted")
  },
  beforeUpdate() {
    console.log("beforeUpdate")
  },
  updated() {
    console.log("updated")
  },
  beforeDestroy() {
    console.log("beforeDestroy")
  },
  destroyed() {
    console.log("destroyed")
  },
};
</script>

<style>
</style>