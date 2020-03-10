<template>
  <div id="app">
    <h1>=============</h1>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
          this.path = this.$route.path;
          // console.log(this.$route.path)
        },
        watch:{
            $route(to){
                this.path = to.path
            }
        }
}
</script>
