<template>
	<div class="collection-wrapper">
		<div class="title">
			<span @click="back"><i class="iconfont icon-jiantou-copy"></i></span>
			<span>我的足迹</span>
			<span>
				<i class="iconfont icon-dianhua"></i>
			</span>
		</div>
		<div class="hot-wrapper">
			<div class="hot-content">
				<div class="products-wrapper" v-for="(item,index) in products" @click="jump">
					<div class="products-bg"><img :src="web + item.original_img" /></div>
					<div class="products-text">
						<span>{{item.goods_name}}</span>
						<span>{{item.shop_price}}</span>
						<span v-if="item.loan" class="loan">
							分期
						</span>
						<span v-else>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { formatDate } from '../../assets/js/common'
	export default {
		filters: {
			formatDate(time) {
				time = time * 1000
				let date = new Date(time)
				console.log(new Date(time))
				return formatDate(date, 'yyyy/MM/dd');
			}
		},
		data() {
			return {
				products: [],
				bea: false,
				web:''
			}
		},
		mounted() {
			this.web = localStorage.getItem('web');
			this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/user/visit_log').then(response => {
				var that = this
				that.products = response.data.data.visit_log
				console.log(that.products)
			}, response => {
				console.log('数据加载失败')
			})
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			jump() {
				this.$router.push({
					path: "/commodity"
				});
			}
		}
	}
</script>

<style lang="less">
	html {
		background: #f5f5f5;
	}
	
	.collection-wrapper {
		width: 100%;
		height: 100%;
		padding-bottom: 130px;
		box-sizing: border-box;
		background: #F5F5F5;
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
		.hot-wrapper {
			margin-top: 110px;
			height: 100%;
			width: 100%;
			.hot-content {
				width: 100%;
				padding: 0 20px;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				flex-flow: wrap;
				.products-wrapper {
					width: 345px;
					margin-bottom: 20px;
					.products-bg {
						width: 345px;
						height: 345px;
						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}
					.products-text {
						padding: 20px 10px;
						position: relative;
						box-sizing: border-box;
						line-height: 150%;
						background: #fff;
						span:nth-child(1) {
							color: #202020;
							font-size: 26px;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
						}
						span:nth-child(2) {
							display: inline-block;
							font-size: 30px;
							color: #ff3434;
							margin-top: 6px;
						}
						.loan {
							position: absolute;
							display: inline-block;
							font-size: 24px;
							color: #d73f3e;
							border: 2px #d73f3e solid;
							width: 80px;
							border-radius: 10px;
							height: 36px;
							box-sizing: border-box;
							text-align: center;
							line-height: 32px;
							right: 10px;
							margin-top: 4px;
						}
					}
				}
			}
		}
	}
</style>