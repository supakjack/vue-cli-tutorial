<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/demo1">Demo1</router-link>
      </li>
      <li>
        <router-link to="/demo2">Demo2 Event</router-link>
      </li>
      <li>
        <router-link to="/demo3">Demo3 Data</router-link>
      </li>
      <li>
        <router-link to="/demo4">Demo4 Compute</router-link>
      </li>
       <li>
        <router-link to="/demo5">Demo5 Binding</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <span class="title">123</span>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style scoped>
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    display: inline;
    margin-right: 1rem;
  }

.title{
    font-size: 30px;
    color: green;
}
</style>

<style>
  .content{
    color: violet;
  }
</style>
