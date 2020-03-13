<template>
  <div class="edit">
    <div>
      <el-input placeholder="请输入密码" v-model="input" show-password width='300px'></el-input>
    </div>

    <div>
      <el-input placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input1"></el-input>
      <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2"></el-input>
      <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input3"></el-input>
      <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input4"></el-input>
    </div>

    <div>
      <el-input type="text" placeholder="请输入内容" v-model="text" maxlength="10" show-word-limit></el-input>
      <div style="margin: 20px 0;"></div>
      <el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="30" show-word-limit></el-input>
    </div>
  </div>
</template>


<script scoped>
export default {
  data() {
    return {
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',

      text: '',
      textarea: ''
    }
  }
}
</script>