<template>
    <div id="app">
        <div id="top"></div>
        <div id="aside">
        <el-menu router="true" mode="horizontal">
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
    data() {
			return {
				sysName:'xxx管理平台',
				sysUserName: '',
				sysUserAvatar: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
        },
    methods: {
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});
			}
		},
    mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}

		}
}
</script>

<style scoped>

</style>
