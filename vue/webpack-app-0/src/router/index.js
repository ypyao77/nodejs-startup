import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/xbutton',
    name: 'XButton',
    component: () => import('@/components/XButton')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
  routes
})

export default router
