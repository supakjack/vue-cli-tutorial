<template>
  <div id="demo5">
    <img v-bind:src="imageUrl" v-bind:height="height" />
    <br />
    <a :href="link">Jack Github</a>
    <a :class="[false?error:'',important]">jack mobile class</a>
    <a :style="{color,fontSize:fontSize}">jack mobile style</a>
    <a :style="isActive?styleObj:''">jack mobile style object</a>
    <button @click="isActive=!isActive">ToogleActive</button>
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
      link: "http://github.com/supakjack",
      error: "error_class",
      important: "important",
      color: "greeen",
      fontSize: "30px",
      styleObj: {
        backgroundColor: "yellow",
        color: "green"
      },
      isActive: false
    };
  }
};
</script>

<style>
.error_class {
  background: red;
  color: white;
}
.important {
  font-size: 5rem;
}
</style>