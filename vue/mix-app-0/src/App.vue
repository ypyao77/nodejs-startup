<template>
  <div id="app">
    <img src="@/assets/logo.png">
    <div>
      <br>
      <br>

      <el-link href="/button" type="primary"> 按钮 </el-link> ||
      <el-link href="/badge" type="primary"> 标记 </el-link> ||
      <el-link href="/navmenu" type="primary"> 导航菜单 </el-link> ||
      <el-link href="/cascader" type="primary"> 选择器 </el-link> ||
      <el-link href="/edit" type="primary"> 编辑器 </el-link> ||
      <el-link href="/msg" type="primary"> 消息提示 </el-link> ||
      <el-link href="/scroll" type="primary"> 滚动显示 </el-link> ||

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
