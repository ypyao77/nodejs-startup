<template>
    <el-container style="height:100%;" direction="vertical">
      <!-- 顶栏 -->
      <el-header height="60px">
        <h2>Element 页面布局</h2>
      </el-header>
      <!-- 嵌套容器 -->
      <el-container>
        <!-- 侧边导航菜单 -->
        <el-aside width="150px"></el-aside>
        <!-- 内容 -->
        <el-main>
          <!-- 第一列栅格布局 -->
          <el-row>
            <el-col :span="12" class="col1"></el-col>
            <el-col :span="12" class="col2"></el-col>
          </el-row>
          <!-- 第二列布局 -->
          <el-row>
            <el-col :span="24" class="col3"></el-col>
          </el-row>
        </el-main>
      </el-container>
      <!-- 底栏 -->
      <el-footer height="30px">&copy;究极死胖兽 2019</el-footer>
    </el-container>
</template>

<script>
export default {
}
</script>

<style>
.el-container{
  padding: 0px;
  margin: 0px;
  height: 100%;
}
.el-header {
  background-color: #409EFF;
  color: white;
}
.el-footer {
  background-color: #909399;
  color: black;
  text-align: center;
}
.el-aside {
  background-color: chartreuse;
}
.el-main {
  background-color: darkkhaki;
}
.el-col {
  height: 300px;
}
.col1 {
  background-color: teal;
}
.col2 {
  background-color: tomato;
}
.col3 {
  background-color: thistle;
}
</style>
