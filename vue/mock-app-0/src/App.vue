<template>
  <div id="app">
    <el-button @click.native="handleUserList">user-list</el-button>
    <el-button @click.native="handleUser">user</el-button>

    <p>姓名： {{dlgName}}       年龄： {{dlgSex}}</p>
    <p> {{ENV}} </p>
    <p> {{ENV_APPNAME}} </p>
    <p> {{ENV_SECRET}} </p>

    <router-view />
  </div>
</template>

<script>
  // import mock from '@/../mock/index.js'
  import axios from 'axios'

  export default {
    data() {
      return {
        dlgName: '',
        dlgSex: 0,
        ENV: '',
        ENV_APPNAME: '',
        ENV_SECRET: ''
      };
    },
    methods: {
      handleUserList() {
        axios.get("/api/list").then(response => {
          if (response.data) {
            let dlgList = response.data["list"]

            this.dlgName = dlgList[1]["username"]
            this.dlgSex = dlgList[1]["sex"]
          }

          this.ENV = process.env
          this.ENV_APPNAME =process.env.VUE_APP_APPNAME
          this.ENV_SECRET = process.env.VUE_APP_SECRET
        })
      },
      handleUser() {
        axios.get("/api/user").then(response => {
          if (response.data) {
            let dlgList = response.data["list"]

            this.dlgName = dlgList[0]["username"]
            this.dlgSex = dlgList[0]["sex"]
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
