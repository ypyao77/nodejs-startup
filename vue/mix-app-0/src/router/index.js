import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    hidden: true,
    component: () => import('@/views/404'),
    meta: {
      title: '404错误'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Env'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/views/env',
    name: 'Env',
    component: () => import('@/views/Env'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/views/button',
    name: 'Button',
    component: () => import('@/views/Button'),
    meta: {
      title: '按钮'
    }
  },
  {
    path: '/views/badge',
    name: 'Badge',
    component: () => import('@/views/Badge'),
    meta: {
      title: '标记'
    }
  },
  {
    path: '/views/dialog',
    name: 'Dialog',
    component: () => import('@/views/Dialog'),
    meta: {
      title: '对话框'
    }
  },
  {
    path: '/views/layout',
    name: 'Layout',
    component: () => import('@/views/Layout'),
    meta: {
      title: '布局'
    }
  },
  {
    path: '/views/navmenu',
    name: 'NavMenu',
    component: () => import('@/views/NavMenu'),
    meta: {
      title: '导航条'
    }
  },
  {
    path: '/views/edit',
    name: 'Edit',
    component: () => import('@/views/Edit'),
    meta: {
      title: '编辑框'
    }
  },
  {
    path: '/views/scroll',
    name: 'Scroll',
    component: () => import('@/views/Scroll'),
    meta: {
      title: '滚动条'
    }
  },
  {
    path: '/views/echarts',
    name: 'ECharts',
    component: () => import('@/views/ECharts'),
    meta: {
      title: '图表echarts'
    }
  },
  {
    path: '/views/vcharts',
    name: 'VCharts',
    component: () => import('@/views/VCharts'),
    meta: {
      title: '图表vcharts'
    }
  },
  {
    path: '/views/msg',
    name: 'Msg',
    component: () => import('@/views/Msg'),
    meta: {
      title: '消息'
    }
  },
  {
    path: '/views/form',
    name: 'Form',
    component: () => import('@/views/Form'),
    meta: {
      title: '表单'
    }
  },
  {
    path: '/views/cascader',
    name: 'Cascader',
    component: () => import('@/views/Cascader'),
    meta: {
      title: '联级选择'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
