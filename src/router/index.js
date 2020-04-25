import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Demo1 from '../views/Demo1_intro.vue';
import Demo2_EventMethod from '../views/Demo2_EventMethod.vue';
import Demo3_Data from '../views/Demo3_Data.vue';
import Demo4_Compute from '../views/Demo4_Compute.vue';
import Abc from '../views/Demo5_Binding.vue';
import Demo6_Form from '../views/Demo6_Form.vue';
import Demo7 from '../views/Demo7_Slot.vue';
import Demo8 from '../views/Demo8_Condition.vue';
import Demo9 from '../views/Demo9_Loop.vue';
import Demo10 from '../views/Demo10_Lifecycle.vue';
import Demo11 from '../views/Demo11_variable_and_state.vue';
import Demo12 from '../views/Demo12_Ref.vue';
import Demo13 from '../views/Demo13_Filters.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/demo1',
    name: 'demo1',
    component: Demo1,
  },
  {
    path: '/demo2',
    name: 'demo2',
    component: Demo2_EventMethod,
  },
  {
    path: '/demo3',
    name: 'demo3',
    component: Demo3_Data,
  },
  {
    path: '/demo4',
    name: 'demo4',
    component: Demo4_Compute,
  },
  {
    path: '/demo5',
    name: 'demo5',
    component: Abc,
  },
  {
    path: '/demo6',
    name: 'demo6',
    component: Demo6_Form,
  },
  {
    path: '/demo7',
    name: 'demo7',
    component: Demo7,
  },
  {
    path: '/demo8',
    name: 'demo8',
    component: Demo8,
  },
  {
    path: '/demo9',
    name: 'demo9',
    component: Demo9,
  },
  {
    path: '/demo10',
    name: 'demo10',
    component: Demo10,
  },
  {
    path: '/demo11',
    name: 'demo11',
    component: Demo11,
  },
  {
    path: '/demo12',
    name: 'demo12',
    component: Demo12,
  },{
    path: '/demo13',
    name: 'demo13',
    component: Demo13,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
