import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Menu1 from '../views/Menu1.vue'
import Menu2 from '../views/Menu2.vue'
import Menu3 from '../views/Menu3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/menu1',
    name: 'Menu1',
    component: Menu1
  },
  {
    path: '/menu2',
    name: 'Menu2',
    component: Menu2
  },
  {
    path: '/menu3',
    name: 'Menu3',
    component: Menu3
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
