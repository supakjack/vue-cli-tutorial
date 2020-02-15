<template>
  <div id="demo2">
    <h1>Event and Method</h1>
    <button v-on:click="clickMe">ClickMe1</button>
    <button v-on:click="clickMe2('Welcomt VueJs Jack')">ClickMe2</button>
    <button @click="clickMe2('Welcomt VueJs Jack 2')">ClickMe3</button>
    <h3>{{getTimestamp()}}</h3>
  </div>
</template>

<script>
export default {
  name: "Demo2",
  mounted() {
    this.initial()
  },
  methods: {
    initial(){
      console.log("Initialization")
    },
    clickMe() {
      alert("Hi");
    },
    clickMe2(message) {
      alert(message);
    },
    getTimestamp() {
      return Date();
    }
  }
};
</script>

<style>
</style>