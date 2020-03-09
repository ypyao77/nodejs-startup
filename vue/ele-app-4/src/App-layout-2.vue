<template>
  <el-container>
    <el-header>
      <div class="healderTitle">
        <Dropdown></Dropdown>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer><Footer /></el-footer>
  </el-container>
</template>
