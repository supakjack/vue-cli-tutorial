<template>
  <div id="demo4">
      <h1>{{firstname}}</h1>
      <h1>{{lastname}}</h1>
      <h1>{{fullname}}</h1>
      <h1>
          Random computed :{{getrandom0}}
      </h1>
      <h1>
          Random computed :{{ getrandom0 }}
      </h1>
      <h1>
          Random computed :{{ getrandom0 }}
      </h1>
      <h1>
          Random method :{{ getrandom1() }}
      </h1>
      <h1>
          Random method :{{ getrandom1() }}
      </h1>
       <h1>
          Random method :{{ getrandom1() }}
      </h1>
  </div>
</template>

<script>
export default {
    name:"Demo4",
    methods: {
        getrandom1:function(){
            return Math.random();
        }
    },
    data() {
        return {
            firstname:"Supak",
            lastname:"pukdam"
        }
    },
    computed: {
        fullname(){
            return this.firstname+" "+this.lastname
        },
        getrandom0(){
            return Math.random();
        }
    },
}
</script>

<style>

</style>