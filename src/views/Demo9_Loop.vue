<template>
  <div id="demo9">
    <ul>
      <li v-for="(item,index) in ['Angular','Vue','React']" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Demo9"
};
</script>

<style>
</style>