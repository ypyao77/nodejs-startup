<template>
  <div class="main">
    <h1>This is an MAIN page</h1>
    <el-button type="primary" @click="handleSubmitLogout">/logout</el-button>
    <el-button type="primary" @click="handleSubmit2">/main/foo</el-button>

    <el-tooltip content="打开新按钮" placement="bottom">
      <el-button type="primary" @click="outerVisible = true">点击打开外层 Dialog</el-button>
    </el-tooltip>

    <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      <el-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body>
        <span>这是一段信息: {{num}} </span>
      </el-dialog>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
      </div>
    </el-dialog>

    <router-view />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 1,

        outerVisible: false,
        innerVisible: false,

        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '金沙江路 1516 弄'
          }]
      };
    },
    methods: {
      handleSubmitLogout() {
        sessionStorage.removeItem('user');
        this.$router.push({ path: '/login' });
      },
      handleSubmit2() {
        this.$router.push({ path: '/main/foo' });
      },
      handleChange(value) {
        console.log(value);
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
