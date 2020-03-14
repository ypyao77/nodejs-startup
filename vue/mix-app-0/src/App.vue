<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p> process.env.BASE_URL: {{ burl }} </p>
      <p> process.env.VUE_APP_BASE_URL: {{ vburl }} </p>
      <br>
      <br>

      <router-link :to="{ path: '/views/button' }">按钮</router-link> || 
      <router-link :to="{ path: '/views/badge' }">标记</router-link> || 
      <router-link :to="{ path: '/views/navmenu' }">导航菜单</router-link> || 
      <router-link :to="{ path: '/views/cascader' }">选择器</router-link> || 
      <router-link :to="{ path: '/views/edit' }">编辑器</router-link> || 
      <router-link :to="{ path: '/views/msg' }">消息提示</router-link> || 
      <router-link :to="{ path: '/views/scroll' }">滚动显示</router-link> || 

      <!-- <el-link href="/views/button" type="primary"> 按钮 </el-link> ||
      <el-link href="/views/badge" type="primary"> 标记 </el-link> ||
      <el-link href="/views/navmenu" type="primary"> 导航菜单 </el-link> ||
      <el-link href="/views/cascader" type="primary"> 选择器 </el-link> ||
      <el-link href="/views/edit" type="primary"> 编辑器 </el-link> ||
      <el-link href="/views/msg" type="primary"> 消息提示 </el-link> ||
      <el-link href="/views/scroll" type="primary"> 滚动显示 </el-link> || -->

      <br>
      <br>
      <br>
    </div>

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
