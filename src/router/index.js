import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo1 from '../views/Demo1_intro.vue'
import Demo2_EventMethod from '../views/Demo2_EventMethod.vue'
import  Demo3_Data from '../views/Demo3_Data.vue'
import Demo4_Compute from '../views/Demo4_Compute.vue'
import Abc from '../views/Demo5_Binding.vue'
import Demo6_Form from '../views/Demo6_Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path:"/demo1",
    name:"demo1",
    component:Demo1
  },
  {
    path:"/demo2",
    name:"demo2",
    component:Demo2_EventMethod
  },
  {
    path:"/demo3",
    name:"demo3",
    component:Demo3_Data
  },
  {
    path:"/demo4",
    name:"demo4",
    component:Demo4_Compute
  },
  {
    path:"/demo5",
    name:"demo5",
    component:Abc
  },
  {
    path:"/demo6",
    name:"demo6",
    component:Demo6_Form
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
