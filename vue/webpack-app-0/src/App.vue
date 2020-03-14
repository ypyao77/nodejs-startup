<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>

      <el-row :gutter="2">
        <el-col :offset="4" :span="1">
          <router-link :to="{ path: '/' }">主页</router-link>
        </el-col>
        <el-col :span="1">
          <router-link :to="{ path: '/xbutton' }">按钮</router-link>
        </el-col>
      </el-row>
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

  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
