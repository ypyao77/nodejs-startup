import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Dashboard from '../views/Dashboard.vue'
import Menu1 from '../views/Menu1.vue'
import Menu2 from '../views/Menu2.vue'
import Menu3 from '../views/Menu3.vue'
import MyForm from '../views/MyForm.vue'
import MyTable from '../views/MyTable.vue'
import MyDialog from '../views/MyDialog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    component: () => import('@/views/404'),
    hidden: false
  },
  {
    path: '/about',
    name: 'About',
    component: About
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
    path: '/form',
    name: 'MyForm',
    component: MyForm
  },
  {
    path: '/table',
    name: 'MyTable',
    component: MyTable
  },
  {
    path: '/dialog',
    name: 'MyDialog',
    component: MyDialog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
