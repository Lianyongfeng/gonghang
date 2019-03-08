<template>
	<div id="app">
		<div v-wechat-title="$route.meta.title"></div>
		<router-view v-wechat-title="$route.meta.title" v-if="isRouterAlive"/>
		<Tabbar v-show="$route.meta.showFooter"></Tabbar>
	</div>
</template>

<script>
	import Tabbar from './components/tabbar/tabbar';
	export default {
		name: 'App',
		provide() {
			return {
				reload: this.reload
			}
		},
		data() {
			return {
				isRouterAlive: true
			}
		},
		created: function() {
			//			this.$router.push('/')
		},
		components: {
			Tabbar
		},
		methods: {
			reload() {
				this.isRouterAlive = false
				this.$nextTick(function() {
					this.isRouterAlive = true
				})
			}
		}
	}
</script>

<style>
	#app {
		font-family: "微软雅黑";
	}
</style>