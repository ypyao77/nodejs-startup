<template>
  <div class="vcharts">
    <el-row :gutter="4">
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header">
            <span>卡片名称1</span>
          </div>
          <ve-pie :data="chartData1" height="300px"></ve-pie>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header">
            <span>卡片名称2</span>
          </div>
          <ve-line :data="chartData2" height="300px"></ve-line>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header">
            <span>卡片名称3</span>
          </div>
          <ve-bar :data="chartData3" height="300px"></ve-bar>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="4">
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header">
            <span>卡片名称4</span>
          </div>
          <ve-histogram :data="chartData4" height="300px"></ve-histogram>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header">
            <span>卡片名称5</span>
          </div>
          <ve-ring :data="chartData5" height="300px"></ve-ring>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header">
            <span>卡片名称6</span>
          </div>
          <ve-radar :data="chartData6" height="300px" width="80%"></ve-radar>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1', '2'],
      chartData1: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1393 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 1723 },
          { 日期: '1/5', 访问用户: 3792 },
          { 日期: '1/6', 访问用户: 4593 }
        ]
      },

      chartData2: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { 日期: '1/1', 访问用户: 2393, 下单用户: 1093, 下单率: 173.32 },
          { 日期: '1/2', 访问用户: 3530, 下单用户: 4230, 下单率: 397.26 },
          { 日期: '1/3', 访问用户: 1923, 下单用户: 2623, 下单率: 228.76 },
          { 日期: '1/4', 访问用户: 4723, 下单用户: 2423, 下单率: 459.49 },
          { 日期: '1/5', 访问用户: 5792, 下单用户: 1492, 下单率: 182.33 },
          { 日期: '1/6', 访问用户: 4593, 下单用户: 3293, 下单率: 697.78 }
        ]
      },

      chartData3: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { 日期: '1/1', 访问用户: 2393, 下单用户: 1093, 下单率: 573.32 },
          { 日期: '1/2', 访问用户: 3530, 下单用户: 4230, 下单率: 497.26 },
          { 日期: '1/3', 访问用户: 1923, 下单用户: 2623, 下单率: 888.76 },
          { 日期: '1/4', 访问用户: 4723, 下单用户: 2423, 下单率: 759.49 },
          { 日期: '1/5', 访问用户: 5792, 下单用户: 1492, 下单率: 282.33 },
          { 日期: '1/6', 访问用户: 4593, 下单用户: 3293, 下单率: 697.78 }
        ]
      },
      chartData4: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 582.32 },
          { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 975.26 },
          { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 315.76 },
          { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 428.49 },
          { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 671.32 },
          { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 445.78 }
        ]
      },

      chartData5: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1393 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 1723 },
          { 日期: '1/5', 访问用户: 3792 },
          { 日期: '1/6', 访问用户: 4593 }
        ]
      },

      chartData6: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 573.32 },
          { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 418.26 },
          { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 782.76 },
          { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 608.49 },
          { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 442.32 },
          { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 616.78 }
        ]
      }
    };
  }
};
</script>

<style>
/* .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  } */
</style>
