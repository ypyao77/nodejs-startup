<template>
  <!-- element-ui -->
  <el-container>
    <el-header height = '80px' >
      <div class="header">
        <div class="nav-left">
          <img src="https://www.luffycity.com/static/img/head-logo.a7cedf3.svg" alt="">
        </div>
        <div class="nav-center">
          <ul>
            <li>
              <a href="#">
                导航链接
              </a>
            </li>
          </ul>
        </div>
        <div class="nav-right">
          <span>登录</span>
          &nbsp;| &nbsp;
          <span>注册</span>
        </div>
      </div>
    </el-header>
  </el-container>
</template>

<script>
  export default {
    name: 'LuffyHeader',
    data(){
      return {
      }
    },
  };
</script>