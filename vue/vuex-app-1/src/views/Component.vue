<template>
  <div class="component">
    <h1>This is a COMPONENT page</h1>
    <CompA msg="Comp A"> </CompA>
    <CompB msg="Comp B"> </CompB>
  </div>
</template>

<script>
import CompA from './CompA.vue'
import Vue from 'vue'

// const CompB = Vue.extend({
//   name: 'CompB',
//   props: {
//     msg: String
//   },
//   template: '<h2> [msg] {{msg}}. </h2>'
// })
const CompB = {
  template: '<h2> [msg] {{msg}}. </h2>'
}
Vue.component('CompB', CompB)

export default {
  components: {
    CompA,
    CompB
  }
}
</script>