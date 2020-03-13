import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Button',
    component: () => import('@/views/Button')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('@/views/Button')
  },
  {
    path: '/badge',
    name: 'Badge',
    component: () => import('@/views/Badge')
  },
  {
    path: '/navmenu',
    name: 'NavMenu',
    component: () => import('@/views/NavMenu')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('@/views/Edit')
  },
  {
    path: '/scroll',
    name: 'Scroll',
    component: () => import('@/views/Scroll')
  },
  {
    path: '/msg',
    name: 'Msg',
    component: () => import('@/views/Msg')
  },
  {
    path: '/cascader',
    name: 'Cascader',
    component: () => import('@/views/Cascader')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
