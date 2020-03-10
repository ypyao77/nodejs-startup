import Vue from 'vue'
import App from './App-main.vue'
// import App from './App-layout.vue'
// import App from './App-layout-1.vue'
// import App from './App-layout-2.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
