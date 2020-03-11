<template>
  <div id="app">
    <el-button @click.native="handleUserList">user-list</el-button>
    <p>姓名： {{dlgName}}       年龄： {{dlgSex}}</p>

    <router-view />
  </div>
</template>

<script>
  // import mock from '@/../mock/index.js'
  import axios from 'axios'

  export default {
    data() {
      return {
        outerVisible: false,
        dlgName: '',
        dlgSex: 0
      };
    },
    methods: {
      handleUserList() {
        axios.get("/api/list").then(response => {
          if (response.data) {
            console.log(response.data)
            let dlgList = response.data["list"]

            this.dlgName = dlgList[1]["username"]
            this.dlgSex = dlgList[1]["sex"]
          }
        })
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
