<template>
  <div id="demo11">
    <h1>{{count}}</h1>
    <h1>{{Math.random()}}</h1>
    <h1>Timestamp : {{timestamp}}</h1>
    <button @click="timestamp = Date.now()">Update Timestamp</button>
    <button @click="count++">Update Count</button>
  </div>
</template>

<script>
export default {
  name: "Demo11",
  data() {
    return {
      count: 0
    };
  },
  created() {
    this.timestamp = 0;
  }
};
</script>

<style>
</style>