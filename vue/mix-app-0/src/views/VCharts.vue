<template>
  <div class="vcharts">
    <col-row>
      <el-col :span="8" :offset="7">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <ve-pie :data="chartData1"></ve-pie>
          </el-card>
        </div>
      </el-col>
    </col-row>

    <col-row><p><br></p></col-row>
    <col-row><p><br></p></col-row>
    <col-row><p><br></p></col-row>
    <col-row><p><br></p></col-row>
    <col-row><p><br></p></col-row>
    <col-row><p><br></p></col-row>
    <col-row><p><br></p></col-row>
    <col-row><p><br></p></col-row>
    <col-row><p><br></p></col-row>
    <col-row><p><br></p></col-row>
    <col-row><p><br></p></col-row>
    <col-row><p><br></p></col-row>
    <col-row><p><br></p></col-row>
    <col-row><p><br></p></col-row>
    <col-row><p><br></p></col-row>

    <col-row>
      <ve-pie :data="chartData1"></ve-pie>
    </col-row>

    <col-row>
      <ve-line :data="chartData2"></ve-line>
    </col-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        chartData1: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        },

        chartData2: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    }
  }
</script>

<style>
  .text {
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
  }

  .box-card {
    width: 800px;
  }
</style>
