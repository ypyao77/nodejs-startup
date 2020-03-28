import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/component',
    name: 'Component',
    component: () => import('../views/Component.vue')
  },
  {
    path: '/board1',
    name: 'Board1',
    component: () => import('../views/Board1.vue')
  },
  {
    path: '/board2',
    name: 'Board2',
    component: () => import('../views/Board2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
