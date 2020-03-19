<template>
  <div class="edit">
    <div>
      <el-row :gutter="1">
        <el-col :span="8" :offset="8">
          <el-input placeholder="请输入密码" v-model="input" show-password width="300px"></el-input>
        </el-col>
      </el-row>
    </div>

    <div>
      <el-row>
        <el-col :span="8" :offset="8">
          <el-input placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input1"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="8">
          <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="8">
          <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input3"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="8">
          <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input4"></el-input>
        </el-col>
      </el-row>
    </div>

    <div>
      <el-row>
        <el-col :span="8" :offset="8">
          <el-input type="text" placeholder="请输入内容" v-model="text" maxlength="30" show-word-limit></el-input>
        </el-col>
        <div style="margin: 40px 0;"></div>
        <el-row></el-row>
        <el-col :span="8" :offset="8">
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="textarea"
            maxlength="30"
            show-word-limit
          ></el-input>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script scoped>
export default {
  data() {
    return {
      input: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",

      text: "",
      textarea: ""
    };
  }
};
</script>

<style>
.el-row {
  margin-bottom: 8px;
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