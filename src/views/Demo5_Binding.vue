<template>
  <div id="demo5">
    <img v-bind:src="imageUrl" v-bind:height="height" />
    <br>
    <a :href="link">jack mobile</a>
  </div>
</template>

<script>
export default {
  name: "Demo5",
  data() {
    return {
      imageUrl:
        "https://images.unsplash.com/photo-1515415912532-e9d60b5b9f0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      height: 50,
      link: "http://github.com/supakjack"
    };
  }
};
</script>

<style>
</style>