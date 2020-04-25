<template>
  <div id="header">
    <ul>
      <li>
        <router-link to="/">
          <button>Home</button>
        </router-link>
      </li>
      <li>
        <router-link to="/demo1">
          <button>Demo1</button>
        </router-link>
      </li>
      <li>
        <router-link to="/demo2">
          <button>Demo2 Event</button>
        </router-link>
      </li>
      <li>
        <router-link to="/demo3">
          <button>Demo3 Data</button>
        </router-link>
      </li>
      <li>
        <router-link to="/demo4">
          <button>Demo4 Compute</button>
        </router-link>
      </li>
      <li>
        <router-link to="/demo5">
          <button>Demo5 Binding</button>
        </router-link>
      </li>
      <li>
        <router-link to="/demo6">
          <button>Demo6 Form</button>
        </router-link>
      </li>
      <li>
        <router-link to="/demo7">
          <button>Demo7 Slot</button>
        </router-link>
      </li>
      <li>
        <router-link to="/demo8">
          <button>Demo8 Condition</button>
        </router-link>
      </li>
      <li>
        <router-link to="/demo9">
          <button>Demo9 Loop</button>
        </router-link>
      </li>
      <li>
        <router-link to="/demo10">
          <button>Demo10 Life cycle</button>
        </router-link>
      </li>
      <li>
        <router-link to="/demo11">
          <button>Demo11 Normal vs State Variables</button>
        </router-link>
      </li>
      <li>
        <router-link to="/demo12">
          <button>Demo12 Ref</button>
        </router-link>
      </li>
       <li>
        <router-link to="/demo13">
          <button>Demo13 Filters</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline;
  margin-right: 1rem;
}

.title {
  font-size: 30px;
  color: green;
}
</style>

<style>
.content {
  color: violet;
}
</style>
