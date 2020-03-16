<template>
  <div class="center" id="myChart" :style="{width: '300px', height: '300px'}">
  </div>
</template>

<script scoped>
export default {
  name: 'echarts',
  data () {
    return {
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  }
}
</script>

<style scoped>
  .center{
    display: block;
    _position: fixed;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height:500px;
    margin-left: -200px;
    margin-top: -150px;
    z-index: 10001;
    box-shadow: 2px 2px 4px #A0A0A0, -2px -2px 4px #A0A0A0;
    background-color: #fff;
  }
</style>