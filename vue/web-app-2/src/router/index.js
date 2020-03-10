import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Homepage from '@/views/Homepage.vue'
import Table from '@/views/Table.vue'
import Dashboard from '@/views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: '',
    leaf: true,//只有一个节点
    iconCls: 'el-icon-menu', //图标样式class
    children: [
        { path: '/homepage', component: Homepage, name: '首页' },
        { path: '/dashboard', component: Dashboard, name: '面板' },
        { path: '/table', component: Dashboard, name: '表格' },

    ]
  },
  {
    path: '/',
    component: Home,
    name: '菜单',
    // leaf: true,//只有一个节点
    iconCls: 'el-icon-message', //图标样式class
    children: [
        { path: '/table', component: Table, name: '子菜单01' }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
