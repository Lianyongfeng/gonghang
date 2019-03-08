<template>
	<div class="classify-wrapper">
		<div class="title">
			<span><i class="iconfont icon-jiantou-copy"></i></span>
			<span>分类</span>
			<span>
				<i class="iconfont icon-dianhua"></i>
			</span>
		</div>
		<div class="classify-nav">
			<div  v-for="(item,index) in classify" :class="index==clickIndex?'nav-active':'nav-item'" :index="index" @click="tab(index)">
				{{item.name}}
			</div>
		</div>
		<div class="classify-products">
			<div v-for="(item,index) in classify" class="product-item" :index="index" v-if="index==clickIndex">
				<div class="product-details" v-for="(productItem,productIndex) in item.son">
					<div class="details-item" @click="jump(productItem)" >
						<img :src="web + productItem.original_img"/>
						<span>{{productItem.goods_name}}</span>
					</div>
				</div>
			</div>
			<div v-else style="display: none;">	
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				classify: [],
				clickIndex:0,
				web:''
			}
		},
		mounted() {
			this.web = localStorage.getItem('web');
			this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/goods/goodsList').then(response => {
				var that = this
				console.log(response.data.data)
				that.classify = response.data.data.list
			}, response => {
				console.log('数据加载失败')
			})
		},
		methods:{
			tab:function(navIndex){
				this.clickIndex = navIndex
				console.log(this.clickIndex)
			},
			jump(productItem){
				this.$router.push({path: "/commodity/"+productItem.goods_id});
			}
		}
	}
</script>

<style lang="less">
	.classify-wrapper {
		height: 100%;
		width: 100%;
		padding-bottom: 100px;
		box-sizing: border-box;
		position: fixed;
		background: #fff;
		display: flex;
		.title {
			border-bottom: 2px #EEEEEE solid;
			justify-content: space-between;
			left: 0;
			top: 0;
			z-index: 100;
			position: fixed;
			width: 100%;
			height: 90px;
			background: #fff;
			display: flex;
			align-items: center;
			padding: 0 20px;
			box-sizing: border-box;
			font-size: 32px;
			color: #000;
			span {
				i {
					font-size: 40px;
					color: #d73f3e;
				}
			}
		}
		.classify-nav {
			width: 166px;
			height: 100%;
			background: #EEEEEE;
			overflow-y: auto;
			margin-top: 90px;
			.nav-item {
				width: 100%;
				padding: 30px 0;
				box-sizing: border-box;
				text-align: center;
				background: #EEEEEE;
				color: #999999;
			}
			.nav-active{
				width: 100%;
				padding: 30px 0;
				box-sizing: border-box;
				text-align: center;
				background: #FFFFFF;
				color: #333333;
			}
		}
		.classify-products{
			width: 586px;
			height: 100%;
			padding: 20px 0;
			box-sizing: border-box;
			overflow-y: auto;
			margin-top: 90px;
			.product-item{
				width: 100%;
				padding: 0 10px;
				box-sizing: border-box;
				display: flex;
				margin: 0 20px;
				flex-flow: wrap;
				.product-details{
					width: 160px;
					display: flex;
					justify-content: center;
					margin-bottom: 30px;
					.details-item{
						width: 160px;
						img{
							width: 100%;
						}
						span{
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;
							overflow: hidden;
							font-size: 24px;
							text-align: center;
							color: #333333;
							margin: 10px 0;
							line-height: 120%;
						}
					}
				}
			}
		}
	}
</style>