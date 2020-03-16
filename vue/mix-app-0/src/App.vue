<template>
  <div id="app">
    <img src="./assets/logo.png">
    <el-row>
      <p> process.env.BASE_URL: {{ burl }} process.env.VUE_APP_BASE_URL: {{ vburl }} </p>
    </el-row>
    <el-row>
      <router-link :to="{ path: '/views/button' }">按钮</router-link> || 
      <router-link :to="{ path: '/views/badge' }">标记</router-link> || 
      <router-link :to="{ path: '/views/navmenu' }">导航菜单</router-link> || 
      <router-link :to="{ path: '/views/cascader' }">选择器</router-link> || 
      <router-link :to="{ path: '/views/edit' }">编辑器</router-link> || 
      <router-link :to="{ path: '/views/msg' }">消息提示</router-link> || 
      <router-link :to="{ path: '/views/scroll' }">滚动显示</router-link> || 
      <router-link :to="{ path: '/views/dialog' }">对话框</router-link> || 
      <router-link :to="{ path: '/views/layout' }">layout布局</router-link> || 
      <router-link :to="{ path: '/views/vcharts' }">V图表</router-link> || 
      <router-link :to="{ path: '/views/echarts' }">E图表</router-link> || 
    </el-row>

    <el-row><p/></el-row>
    <el-row><p/></el-row>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      burl: process.env.BASE_URL,
      vburl: process.env.VUE_APP_BASE_URL
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
