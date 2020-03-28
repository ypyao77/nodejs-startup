<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/board1">Board1</router-link> |
      <router-link to="/board2">Board2</router-link> |
      <router-link to="/component">Component</router-link> |

      <label for="r1"><input type="checkbox" v-model="usecache" id="r1" /> 使用缓存：{{usecache}} </label>
    </div>
    <keep-alive>
      <router-view v-if="usecache" />
    </keep-alive>

    <router-view v-if="!usecache" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      usecache: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
