import echarts from 'echarts'

export default {
  mounted() {
    this.drawLine3()
  },
  methods: {
    drawLine3() {
      const myChart = echarts.init(document.getElementById('myChart3'))
      myChart.setOption({
        title: { text: 'vue中引入ECharts3', x: 'center', y: 'bottom' },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['温度', '湿度', '风力']
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月'
            ],
            axisPointer: {
              type: 'shadow',
              lineStyle: {
                color: '#222',
                opacity: 0.2
                // width: 1
              },
              label: {
                show: true
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
              data: [
                {
                  type: 'max',
                  name: '最大值'
                }
              ]
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
              data: [
                {
                  type: 'max',
                  name: '最大值'
                }
              ]
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
              data: [
                {
                  type: 'max',
                  name: '最大值'
                }
              ]
            },
            itemStyle: {
              normal: {
                // color: '985'
              }
            }
          }
        ]
      })
    }
  }
}
