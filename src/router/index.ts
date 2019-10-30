import Vue from 'vue'
import VueRouter from 'vue-router'
import Panel from '../views/Panel.vue'
import Mobile from '@/views/Mobile.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/panel',
    name: 'panel',
    component: Panel
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: Mobile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
