<template>
  <el-container>
    <el-aside width="150px" height="100%">
      <h2>Element 侧边栏</h2>
    </el-aside>

    <el-container>
      <el-header>
        <h5>Element 页面布局</h5>
        <div class="healderTitle">
          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <div><h3>hahaaa</h3></div>
      </el-main>
      <el-footer>
        <Footer>@footer</Footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
