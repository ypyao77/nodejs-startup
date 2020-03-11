import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    hidden: true,
    meta: { title: '登录', icon: 'table' },
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    meta: { title: '登录', icon: 'table' },
    component: () => import('@/views/Login.vue')
  },
  {
    path: '*',
    hidden: true,
    meta: { title: '错误' },
    component: () => import('@/views/404.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Main.vue'),
    children: [
      // absolute alias
      { path: 'foo', component: () => import('@/views/Main/Foo.vue'), alias: '/foo' }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
