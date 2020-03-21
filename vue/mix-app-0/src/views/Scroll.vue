<template>
  <div class="scroll">
    <el-row :gutter="10">
      <el-col :span="4">
        <div class="div1">实现左边竖线, 实现左边竖线, 实现左边竖线, 实现左边竖线</div>
      </el-col>
      <el-col :span="4">
        <div class="div2">实现左边竖线, 实现左边竖线, 实现左边竖线, 实现左边竖线</div>
      </el-col>
      <el-col :span="4">
        <div class="div3">实现左边竖线, 实现左边竖线, 实现左边竖线, 实现左边竖线</div>
      </el-col>
      <el-col :span="4">
        <div class="div4">实现左边竖线, 实现左边竖线, 实现左边竖线, 实现左边竖线</div>
      </el-col>
      <el-col :span="4">
        <div class="div5">实现左边竖线, 实现左边竖线, 实现左边竖线, 实现左边竖线</div>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="4" :offset="2">
        <ul class="infinite-list" v-infinite-scroll="load1" style="overflow:auto">
          <li v-for="i in count1" :key="i" class="infinite-list-item">{{ i }}</li>
        </ul>
      </el-col>

      <el-col :span="4" :offset="2">
        <div class="infinite-list-wrapper" style="overflow:auto">
          <ul
            class="list"
            v-infinite-scroll="loadScroll"
            infinite-scroll-disabled="disabled2"
            infinite-scroll-distance="10px"
          >
            <li v-for="i in count2" :key="i" class="list-item">{{ i }}</li>
          </ul>
          <p v-if="loading2">加载中...</p>
          <p v-if="noMore2">没有更多了</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count1: 0,
      count2: 5,
      loading2: false
    };
  },
  computed: {
    noMore2() {
      return this.count2 >= 10;
    },
    disabled2() {
      return this.loading2 || this.noMore2;
    }
  },
  methods: {
    loadScroll() {
      this.loading2 = true;
      setTimeout(() => {
        this.count2 += 2;
        this.loading2 = false;
      }, 2000);
    },
    load1() {
      if (this.count1 < 10) {
        this.count1 += 2;
      }
    }
  }
};
</script>

<style scoped>
.div1 {
  /* width: 200px; */
  /* height: 120px; */
  line-height: 26px;
  text-align: left;
  background: #cccccc;
  position: relative;
  text-indent: 2em;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow-x: auto;
  overflow-y: auto;
}
.div1 {
  border-left: 5px solid blue;
}

.div2 {
  /* height: 120px; */
  line-height: 29px;
  text-align: left;
  background: #ccc;
  position: relative;
  text-indent: 2em;
  padding-left: 10px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  overflow-x: auto;
  overflow-y: auto;
}
.div2::before {
  content: "";
  width: 5px;
  height: 120px;
  position: absolute;
  top: 0;
  left: 0;
  background: green;
}

.div3 {
  line-height: 26px;
  text-align: left;
  background: #ccc;
  position: relative;
  text-indent: 2em;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow-x: auto;
  overflow-y: auto;
}
/* 内阴影 */
.div3 {
  box-shadow: inset 5px 0px 0 0 red;
}
/* 外阴影  有些Chrome（比如：Chrome/70.0）版本上会底部1px兼容性问题，显示效果如下图*/
.div3 {
  box-shadow: -5px 0px 0 0 purple;
}

.div4 {
  line-height: 26px;
  text-align: left;
  background: #ccc;
  position: relative;
  text-indent: 2em;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow-x: auto;
  overflow-y: auto;
}
.div4 {
  filter: drop-shadow(-5px 0 0 yellow);
}

.div5 {
  line-height: 26px;
  text-align: left;
  background: #ccc;
  position: relative;
  text-indent: 2em;
  padding-left: 10px;
  padding-right: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow-x: auto;
  overflow-y: auto;
}
.div5 {
  background-image: linear-gradient(90deg, red 0px, red 5px, transparent 5px);
}

/* #box {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-y: auto;
} */

.infinite-list-item {
  width: 100%;
  background: #aaaaaa;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  list-style: none;
  padding: 0 1rem;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  border-bottom: 2px solid #e7e7e7;
}

.box {
  width: 100%;
  margin: 0 auto;
}
.list {
  padding: 0;
  font-size: 14px;
}
.list-item {
  width: 100%;
  background: #cccccc;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  list-style: none;
  padding: 0 1rem;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  border-bottom: 2px solid #e7e7e7;
}
.loading span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #409eff;
  border-left: transparent;
  animation: zhuan 0.5s linear infinite;
  border-radius: 50%;
}
@keyframes zhuan {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
