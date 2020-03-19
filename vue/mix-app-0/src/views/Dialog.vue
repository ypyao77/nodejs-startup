<template>
  <div class="dialog">
    <el-row>
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-row>

    <el-row>
      <el-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <el-button slot="reference">hover 激活</el-button>
      </el-popover>

      <el-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <el-button slot="reference">click 激活</el-button>
      </el-popover>

      <el-popover
        ref="popover"
        placement="right"
        title="标题"
        width="200"
        trigger="focus"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      ></el-popover>
      <el-button v-popover:popover>focus 激活</el-button>

      <el-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="manual"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        v-model="visible"
      >
        <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
      </el-popover>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(response => {
          this.response = response;
          // console.log(this.response)
          done();
        })
        .catch(error => {
          this.error = error;
          // console.log(this.error)
        });
    }
  }
};
</script>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>