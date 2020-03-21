import echarts from 'echarts';

export default {
  // mounted() {
  //   this.drawLine1();
  // },
  methods: {
    drawLine1() {
      let myChart = echarts.init(document.getElementById('myChart1'));
      myChart.setOption({
        title: { text: 'vue中引入ECharts1', x: 'center', y: 'bottom' },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '牛子裤', '大衣', '靴子', 'T恤', '卫衣', '羽绒服']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20, 21, 32, 17, 13, 27, 31]
          }
        ]
      });
    }
  }
};
