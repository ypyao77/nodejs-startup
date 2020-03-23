<template>
  <div class="scroll">
    <el-row :gutter="4">
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

    <el-row :gutter="4"></el-row>

    <el-row :gutter="4">
      <el-col :span="4">
        <ul class="infinite-list" v-infinite-scroll="load1" style="overflow:auto">
          <li v-for="i in count1" :key="i" class="infinite-list-item" infinite-scroll-distance="10px">
            <i class="el-icon-edit">{{ i }}</i>
          </li>
        </ul>
      </el-col>

      <el-col :span="4">
        <div class="infinite-list-wrapper" style="overflow:auto">
          <ul class="list" v-infinite-scroll="loadScroll" infinite-scroll-disabled="disabled2" infinite-scroll-distance="10px">
            <li v-for="x in count2" :key="x" class="list-item">{{ x }}</li>
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
        this.count2 += 1;
        this.loading2 = false;
      }, 1000);
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
@import "./div.css";
@import "./scroll1.css";
@import "./scroll2.css";
</style>
