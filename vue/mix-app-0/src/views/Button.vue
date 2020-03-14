<template>
  <div class="button">
    <el-row>
      <el-button @click="onClick" :loading="showLoading">加载按钮</el-button>
      <el-button @click="openFullScreen2">服务方式</el-button>
    </el-row>
    <el-row><p/></el-row>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-row><p/></el-row>
    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </el-row>
    <el-row><p/></el-row>
    <el-row>
      <el-button ><i class="el-icon-edit"></i></el-button>
      <el-button icon="el-icon-edit"></el-button>
      <el-button ><i class="el-icon-share"></i></el-button>
      <el-button icon="el-icon-share"></el-button>
      <el-button ><i class="el-icon-delete"></i></el-button>
      <el-button icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </el-row>
    <el-row><p/></el-row>
    <el-row>
      <el-tag>标签一</el-tag>...
      <el-tag type="success">标签二</el-tag>...
      <el-tag type="info">标签三</el-tag>...
      <el-tag type="warning">标签四</el-tag>...
      <el-tag type="danger">标签五</el-tag>...
    </el-row>
    <el-row><p/></el-row>
    <el-row>
      <span class="tag-group__title">Dark</span>
      <el-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="dark">
        {{ item.label }}
      </el-tag>
    </el-row>
    <el-row><p/></el-row>
    <el-row>
      <span class="tag-group__title">Plain</span>
      <el-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="plain">
        {{ item.label }}
      </el-tag>
    </el-row>
  </div>
</template>


<script scoped>
export default {
  data() {
    return {
      showLoading: false,
      value: false,
      items: [
        { type: '', label: '标签一' },
        { type: 'success', label: '标签二' },
        { type: 'info', label: '标签三' },
        { type: 'danger', label: '标签四' },
        { type: 'warning', label: '标签五' }
      ]
    }
  },
  methods: {
    onClick() {
      this.showLoading = true
      let _this = this
      setTimeout(function() {
        _this.showLoading = false
      }, 2000)
    },
    openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
  }
}
</script>