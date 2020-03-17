<template>
  <div class="echarts">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="在Vue中使用echarts" name="1">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>

      <el-collapse-item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
    </el-collapse>

    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="可收起的图标" name="1">
        <el-row :gutter="4">
          <el-col :span="8">
            <el-card shadow="hover">
              <div slot="header"><span>卡片名称1</span></div>
              <div id="myChart1" :style="{width: '300px', height: '300px'}"></div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <div slot="header"><span>卡片名称2</span></div>
              <div id="myChart2" :style="{width: '300px', height: '300px'}"></div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <div slot="header"><span>卡片名称3</span></div>
              <div id="myChart3" :style="{width: '300px', height: '300px'}"></div>
            </el-card>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>


  </div>
</template>

<script scoped>
export default {
  name: 'echarts',
  data () {
    return {
      activeNames: ['1']
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        myChart1.setOption({
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

        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        myChart2.setOption({
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

        let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
        myChart3.setOption({
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
</style>
