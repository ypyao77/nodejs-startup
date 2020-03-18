<template>
  <div class="echarts2">
    <el-row :gutter="4">
      <el-col :span="8">
        <el-card shadow="hover">
          <div id="myChart2" style="width: 100%; height: 300px"></div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="hover">
          <div id="myChart1" style="width: 100%; height: 300px"></div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="hover">
          <div id="myChart3" style="width: 100%; height: 300px"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script scoped>
export default {
  name: 'echarts2',
  data () {
    return {
    }
  },

  mounted(){
    this.drawLine1();
    this.drawLine2();
    this.drawLine3();
  },

  methods: {
    drawLine1(){
      let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
      myChart1.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '牛子裤', '大衣', '靴子', 'T恤', '卫衣', '羽绒服']
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20, 21, 32, 17, 13, 27, 31]
          }]
      });
    },

    drawLine2() {
      const myChart = this.$echarts.init(document.getElementById('myChart2'));
      const option = {
        // title: 'vue中引入ECharts',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999',
            },
          },
        },
        legend: {
          data: ['蒸发量', '降水量', '平均温度'],
        },
        xAxis: [{
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisPointer: {
            type: 'shadow',
          },
        }],
        yAxis: [{
          type: 'value',
          name: '水量',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value}ml',
          },
        }, {
          type: 'value',
          name: '温度',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value}°C',
          },
        }],
        series: [{
          name: '蒸发量',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        }, {
          name: '降水量',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        }, {
          name: '平均温度',
          type: 'line',
          yAxisIndex: 1,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
        }],
      };
      myChart.setOption(option);
    },

    drawLine3() {
      const myChart3 = this.$echarts.init(document.getElementById('myChart3'));
      myChart3.setOption({
          tooltip: {
            trigger: 'axis'
          },
          xAxis: [
            {
              type: 'category',
              data : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
              axisPointer: {
                type: 'shadow',
                lineStyle: {
                  color: '#222',
                  opacity: 0.2,
                  // width: 1
                },
                label: {
                  show: true,
                  // backgroundColor: '#657'
                },
                handle: {
                  // show: true,
                  // color: '#827'
                }
              }
            }
          ],
          yAxis: [
            {
              min: 500,
              max: 2500,
              interval: 500,
              type: 'value',
              name: '度',
              splitNumber: 4
            },
            {
              min: 0,
              max: 10,
              interval: 2,
              type: 'value',
              name: '级',
              splitNumber: 4
            }
          ],
          series: [
            {
              name: '温度',
              type: 'line',
              smooth: true,
              data: [1770, 1852, 2000, 1055, 899, 1944, 2345, 2011, 1959],
              markPoint: {
                data: [{
                  type: 'max',
                  name: '最大值'
                }]
              },
              itemStyle: {
                normal: {
                  // color: '777'
                }
              }
            },
            {
              name: '湿度',
              type: 'line',
              smooth: true,
              data: [886, 1123, 984, 2121, 1944, 955, 1459, 1799, 2045],
              markPoint: {
                data: [{
                  type: 'max',
                  name: '最大值'
                }]
              },
              itemStyle: {
                normal: {
                    // color: '682'
                }
              }
            },
            {
              name: '风力',
              type: 'line',
              smooth: true,
              data: [9, 7, 4, 5, 7, 5, 9, 1, 6],
              yAxisIndex: 1,
              markPoint: {
                data: [{
                  type: 'max',
                  name: '最大值'
                }]
              },
              itemStyle: {
                normal: {
                  // color: '985'
                }
              }
            },
          ]
      });
    }
  }
}
</script>

<style>
#echarts2 {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
