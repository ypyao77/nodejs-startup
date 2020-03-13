<template>
  <div class="msg">
    <div>
        <el-button :plain="true" @click="open2">成功</el-button>
        <el-button :plain="true" @click="open3">警告</el-button>
        <el-button :plain="true" @click="open1">消息</el-button>
        <el-button :plain="true" @click="open4">错误</el-button>
    </div>

    <br><br>
    <div>
        <el-button plain @click="open11">可自动关闭</el-button>
        <el-button plain @click="open12">不会自动关闭</el-button>
    </div>

    <br><br>
    <div>
      <el-button plain @click="open21">成功</el-button>
      <el-button plain @click="open22">警告</el-button>
      <el-button plain @click="open23">消息</el-button>
      <el-button plain @click="open24">错误</el-button>
    </div>

    <br><br>
    <div>
        <span>雨纷纷</span>
        <el-divider direction="vertical"></el-divider>
        <span>旧故里</span>
        <el-divider direction="vertical"></el-divider>
        <span>草木深</span>
    </div>
  </div>
</template>

<script scoped>
  export default {
    methods: {
      open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      },

      open11() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案。它会自动关闭，会自动关闭哦！<br>它会自动关闭，会自动关闭哦！')
        });
      },

      open12() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      },

      open21() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open22() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open23() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open24() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      }
    }
  }
</script>