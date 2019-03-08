<template>
	<div class="tabberWarp">
		<div class="warp">
			<Item :txt='item.txt' :page='item.page' @change='getVal' v-for='item in tabbarDes' :sel='selected' :key='item.index'>
				<img :src="item.normalImg" slot='normalImg'>
				<img :src="item.activeImg" slot='activeImg'>
			</Item>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Item from '../tabbarItem/tabbarItem'
	export default {
		components: {
			Item
		},
		data: function() {
			return {
				selected: 'home',
				tabbarDes: [{
						txt: '首页',
						page: 'home',
						normalImg: require('../../assets/img/tabbar-home-normal.png'),
						activeImg: require('../../assets/img/tabbar-home-active.png')
					},
					{
						txt: '分类',
						page: 'classify',
						normalImg: require('../../assets/img/tabbar-classify-normal.png'),
						activeImg: require('../../assets/img/tabbar-classify-active.png')
					},
					{
						txt: '活动',
						page: 'activity',
						normalImg: require('../../assets/img/tabbar-activity-normal.png'),
						activeImg: require('../../assets/img/tabbar-activity-active.png')
					},
					{
						txt: '购物车',
						page: 'shopcart',
						normalImg: require('../../assets/img/tabbar-shopcart-normal.png'),
						activeImg: require('../../assets/img/tabbar-shopcart-active.png')
					},
					{
						txt: '我的',
						page: 'my',
						normalImg: require('../../assets/img/tabbar-my-normal.png'),
						activeImg: require('../../assets/img/tabbar-my-active.png')
					}
				]
			}
		},
		methods: {
			getVal: function(res) {
				this.selected = res;
				console.log(res)
			}
		}
	}
</script>
<style lang="less">
	.tabberWarp {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 104px;
		background: #fff;
		border-top: 1px #bfbfc3 solid;
		img {
			margin: 10px 0;
		}
		.warp {
			width: 100%;
			border-top: 1px solid #eee;
			background: #fff;
			display: flex;
			align-items: center;
			justify-content: space-around;
			font-size: 0;
			img {
				width: 45px;
			}
		}
	}
</style>