<template>
  <div class="echarts">
    <el-row :gutter="4">
      <el-col :span="6">
        <el-card shadow="hover">
          <div id="myChart1" style="width: 100%; height: 300px"></div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover">
          <div id="myChart2" style="width: 100%; height: 300px"></div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover">
          <div id="myChart3" style="width: 100%; height: 300px"></div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover">
          <div id="myChart6" style="width: 100%; height: 300px"></div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="4">
      <el-col :span="12">
        <el-card shadow="hover">
          <div id="myChart4" style="width: 100%; height: 320px"></div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card shadow="hover">
          <div id="myChart5" style="width: 100%; height: 320px"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script scoped>
import ECharts1 from './ECharts1.js';
import ECharts2 from './ECharts2.js';
import ECharts3 from './ECharts3.js';
import ECharts4 from './ECharts4.js';
import ECharts5 from './ECharts5.js';
import ECharts6 from './ECharts6.js';

export default {
  name: 'echarts',

  /* TODO： 定义mixin模块的方法时，给出不同的方法名，不然可能会被覆盖 */
  mixins: [ECharts1, ECharts2, ECharts3, ECharts4, ECharts5, ECharts6],

  data() {
    return {};
  },

  mounted() {
    this.drawLine1();
  }
};
</script>

<style scoped>
@import './ECharts.css';
</style>
