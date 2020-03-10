<template>
    <div id="app">
        <div id="top"></div>
        <div id="aside">
        <el-menu router="true">
            <el-menu-item index="/dashboard">
                <i class="el-icon-location"></i>
                <span slot="title">仪表盘</span>
            </el-menu-item>

            <el-submenu>
                <template slot="title">
                    <i class="el-icon-menu" />
                    <span>目录1</span>
                </template>
                <el-menu-item index="/menu1">
                    <i class="el-icon-edit" />
                    <span>菜单1</span>
                </el-menu-item>
                <el-menu-item index="/menu2">
                    <i class="el-icon-document" />
                    <span>菜单2</span>
                </el-menu-item>
            </el-submenu>

            <el-submenu>
                <template slot="title">
                    <i class="el-icon-message" />
                    <span>目录2</span>
                </template>
                <el-menu-item index="/menu3">
                    <i class="el-icon-time" />
                    <span>菜单3</span>
                </el-menu-item>
            </el-submenu>

            <el-menu-item index="/form">
                <i class="el-icon-location"></i>
                <span slot="title">Form</span>
            </el-menu-item>
            <el-menu-item index="/table">
                <i class="el-icon-location"></i>
                <span slot="title">Table</span>
            </el-menu-item>
            <el-menu-item index="/dialog">
                <i class="el-icon-location"></i>
                <span slot="title">Dialog</span>
            </el-menu-item>

            <el-menu-item index="/i-cannot-find-this-page">
                <i class="el-icon-location"></i>
                <span slot="title">无效页面</span>
            </el-menu-item>
        </el-menu>
        </div>
        <div id="main">
            <router-view />
        </div>
        <div id="footer" />
    </div>
</template>

<script>
    export default {
    name: 'App'
}
</script>

<style>
    #app {
        /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    #top {
        padding: 0px;
        position: absolute;
        height: 50px;
        line-height: 50px;
        top: 0px;
        left: 0px;
        right: 0px;
        background-color: #409EFF;
        color: white;
    }
    
    #main {
        position: absolute;
        top: 50px;
        left: 230px;
        right: 0px;
        bottom: 0px;
    }
    
    #aside {
        position: absolute;
        left: 0px;
        top: 50px;
        width: 230px;
        bottom: 0px;
    }
    
    #aside el-menu {
        margin: 0px;
    }
    
    #footer {
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        text-align: center;
        height: 30px;
        background-color: #409EFF;
        line-height: 30px;
    }
</style>