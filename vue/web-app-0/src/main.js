import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

router.beforeEach((route, redirect, next) => {
  if (!sessionStorage.getItem("user") && route.path !== '/') {
    next({
          path: '/',
          query: {redirect: route.fullPath}
      })
  } else {
    console.log("-------------------",route,redirect);
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
