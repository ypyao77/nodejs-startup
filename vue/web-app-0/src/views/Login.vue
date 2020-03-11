<template>
  <div class="login">
    <h1>This is an LOGIN page</h1>
    <div>
      <el-link type="primary">主要链接</el-link>
      <el-divider direction="vertical"></el-divider>
      <el-link type="primary">主要链接</el-link>
      <el-divider direction="vertical"></el-divider>
      <el-link type="primary">主要链接</el-link>
    </div>
    <el-button type="primary" @click.native="handleSubmit">/main</el-button>
    <el-button type="primary" @click.native="handleSubmit2">/main/foo</el-button>

    <el-tooltip content="编辑" placement="right">
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
    </el-tooltip>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: true
      };
    },
    methods: {
      handleSubmit() {
        let user = {"user": "admin", "type": "admin"}
        sessionStorage.setItem('user', JSON.stringify(user));
        this.$router.push({ path: '/main' });
      },
      handleSubmit2() {
        // let user = {"user": "admin", "type": "admin"}
        //sessionStorage.setItem('user', JSON.stringify(user));
        this.$router.push({ path: '/main/foo' });
      }
    }
  }
</script>

<style scoped>
    label.el-checkbox.rememberme {
        margin: 0px 0px 15px;
        text-align: left;
    }
    label.el-button.forget {
        margin: 0;
        padding: 0;
        border: 1px solid transparent;
        outline: none;
    }
</style>
