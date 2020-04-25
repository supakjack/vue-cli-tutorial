<template>
  <div id="Demo7">
    <Clock>
      <span>เวลาปัจจุบัน</span>
    </Clock>
    <Clock />
    <Clock>
        <span>Normal</span>
        <template v-slot:footer>
        <h1>Footer</h1>
      </template>
      <template v-slot:header>
        <h1>Header</h1>
      </template>
    </Clock>
  </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue";
export default {
  name: "Demo7",
  components: {
    Clock
  }
};
</script>
<style>
</style>