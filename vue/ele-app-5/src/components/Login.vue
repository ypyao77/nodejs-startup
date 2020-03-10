<template>
    <div style="margin-top:15%; margin-left:40%;  ">
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="用户名">
            <el-input v-model="form.name" type="text" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="密码">
            <el-input v-model="form.password" type="password" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col  :span="2" :offset="2">
            <el-button type="primary"  style="width:100%" @click="login" >登录</el-button>
        </el-col>
        <el-col  :span="2">
            <el-button type="primary"  style="width:100%" @click="login" >注册</el-button>
        </el-col>
      </el-row>
    </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: 'admin',
          password:'123456'
        }
      }
    },
    methods : {
        login : function () {
          this.$router.push({path:'/home'});
        }
    }
  }
</script>

<style >
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
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
