<template>
  <div id="demo9">
    <form v-on:submit="submit">
      <!-- firstname -->
      <div>
        <label for="first_name">Firstname</label>
        <input type="text" name="first_name" id="first_name" v-model.trim="application.first_name" />
      </div>

      <!-- lastname -->
      <div>
        <label for="first_name">lastname</label>
        <input type="text" name="last_name" id="last_name" v-model.trim.lazy="application.last_name" />
      </div>

      <!-- sex -->
      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="application.sex" />

        <label for="sex">Female</label>
        <input type="radio" name="sex" value="female" v-model="application.sex" />
      </div>

      <!-- Age -->
      <div>
        <label for="age">Age:</label>
        <input type="number" v-model.number="application.age" />
      </div>

      <!-- courses -->
      <div>
        <select name="course" v-model="application.course">
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">vue</option>
        </select>
      </div>

      <!-- button -->
      <button type="button" @click.exact="clear()" @click.alt="useDefault()">Clear</button>
      <button type="submit">Submit</button>
    </form>
    <div style="margin-top: 16px; color:red;">#Spy {{JSON.stringify(application)}}</div>
  </div>
</template>

<script>
export default {
  name: "Demo6",
  methods: {
    submit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.application));
    },
    clear() {
      this.application = {
        first_name: "",
        last_name: "",
        sex: "",
        course: "",
        age: 0
      };
    },
    useDefault() {
      this.application = {
        first_name: "UNKNOW",
        last_name: "UNKNOW",
        sex: "male",
        course: "vue",
        age: 10
      };
    }
  },
  data() {
    return {
      application: {
        first_name: "",
        last_name: "",
        sex: "",
        course: "",
        age: 0
      }
    };
  }
};
</script>
<style>
</style>