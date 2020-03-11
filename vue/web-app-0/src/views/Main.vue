<template>
  <div class="main">
    <h1>This is an MAIN page</h1>
    <el-button @click.native="handleSubmitLogout" type="primary">/login</el-button>
    <el-button @click.native="handleSubmit2" type="primary">/main/foo</el-button>
    <router-view />
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
      handleSubmitLogout() {
        sessionStorage.removeItem('user');
        this.$router.push({ path: '/login' });
      },
      handleSubmit2() {
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