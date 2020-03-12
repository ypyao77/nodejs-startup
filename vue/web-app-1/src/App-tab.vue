<template>
  <div id="app">
    <el-tabs type="border-card">
      <el-tab-pane label="我的行程">我的行程</el-tab-pane>
      <el-tab-pane label="消息中心" closable>消息中心</el-tab-pane>
      <el-tab-pane label="角色管理" closable>角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" closable>定时任务补偿</el-tab-pane>
    </el-tabs>

    <router-view />
  </div>
</template>

<script>
</script>

<style>
</style>
