import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'*', 
    hidden: true,
    component: () => import('../views/404')
  },
  {
    path: '/',
    name: 'Button',
    component: () => import('../views/Button')
  },
  {
    path: '/views/button',
    name: 'Button',
    component: () => import('../views/Button')
  },
  {
    path: '/views/badge',
    name: 'Badge',
    component: () => import('../views/Badge')
  },
  {
    path: '/views/dialog',
    name: 'Dialog',
    component: () => import('../views/Dialog')
  },
  {
    path: '/views/layout',
    name: 'Layout',
    component: () => import('../views/Layout')
  },
  {
    path: '/views/navmenu',
    name: 'NavMenu',
    component: () => import('../views/NavMenu')
  },
  {
    path: '/views/edit',
    name: 'Edit',
    component: () => import('../views/Edit')
  },
  {
    path: '/views/scroll',
    name: 'Scroll',
    component: () => import('../views/Scroll')
  },
  {
    path: '/views/echarts',
    name: 'ECharts',
    component: () => import('../views/ECharts')
  },
  {
    path: '/views/vcharts',
    name: 'VCharts',
    component: () => import('../views/VCharts')
  },
  {
    path: '/views/msg',
    name: 'Msg',
    component: () => import('../views/Msg')
  },
  {
    path: '/views/cascader',
    name: 'Cascader',
    component: () => import('../views/Cascader')
  }
]

// function getAbsolutePath () {
//   let path = location.pathname
//   return path.substring(0, path.lastIndexOf('/') + 1)
// }

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // base: getAbsolutePath(),
  routes
})

export default router
