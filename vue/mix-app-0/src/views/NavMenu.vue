<template>
  <div class="about">

    <el-divider>这是面包屑演示</el-divider>
    <el-row :gutter="4">
      <el-col :span="8">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/views/navmenu' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/views/navmenu' }">活动管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/views/navmenu' }">活动列表</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/views/navmenu' }">活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>

      <el-col :span="8">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item ><el-link :underline="false" icon="el-icon-home">首页</el-link></el-breadcrumb-item>
          <el-breadcrumb-item ><el-link :underline="false" icon="el-icon-user">用户</el-link></el-breadcrumb-item>
          <el-breadcrumb-item ><el-link :underline="false" icon="el-icon-edit">搜索</el-link></el-breadcrumb-item>
          <el-breadcrumb-item ><el-link :underline="false" icon="el-icon-edit">编辑</el-link></el-breadcrumb-item>
          <el-breadcrumb-item ><el-link :underline="false">查看<i class="el-icon-view el-icon--right"></i> </el-link></el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>

      <el-col :span="8">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/views/navmenu' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/views/navmenu' }">活动管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/views/navmenu' }">活动列表</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/views/navmenu' }">活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

    <el-divider>这是菜单演示</el-divider>
    <el-row :gutter="4">
      <el-col :span="4">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="4">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="8">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me">去饿了吗</a></el-menu-item>
          <el-menu-item index="4"><el-link href="https://www.ele.me">去饿了吗</el-link></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

    <el-divider>这是下拉演示</el-divider>

    <el-row :gutter="4">
      <el-col :span="4" :offset="2">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">黄金糕</el-dropdown-item>
            <el-dropdown-item command="b">狮子头</el-dropdown-item>
            <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
            <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>

      <el-col :span="4">
        <el-select v-model="value1" multiple clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>

      <el-col :span="2">
        <el-dropdown split-button type="primary">
          默认尺寸
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>

      <el-col :span="2">
        <el-dropdown size="medium" split-button type="primary">
          中等尺寸
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>

      <el-col :span="2">
        <el-dropdown size="small" split-button type="primary">
          小型尺寸
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>

      <el-col :span="2">
        <el-dropdown size="mini" split-button type="primary">
          超小尺寸
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',

        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: []
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.key, this.keyPath = key, keyPath
        // console.log(key, keyPath);
      },
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>


<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
