<template>
  <div>
    <!-- interpolation -->
    <h1>{{title}}</h1>
    <h2>{{count}}</h2>
    <button @click="onClickAdd">Add</button>

  </div>
</template>

<script>
export default {
  name:"app",
  data() {
    return {
      title:"Jackmobile www.facebook.com/jackultimate",
      count:0
    }
  },
  methods: {
    onClickAdd(){
      this.count++
    }
  },
};
</script>

<style>
</style>
