import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Charecter from '../views/Character.vue'
import layout from '../views/layout/layout-base.vue'
import House from '../views/House';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{layout},
    component: Home
  },
  {
    path: '/character/:id',
    name: 'character',
    meta:{layout},
    component: Charecter
  },
  {
    path: '/house/:id',
    name: 'house',
    meta:{layout},
    component: House
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
