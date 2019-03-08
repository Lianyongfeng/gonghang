<template>
	<div class="coupon-wrapper">
		<div class="title">
			<span @click="back"><i class="iconfont icon-jiantou-copy"></i></span>
			<span>发票信息</span>
			<span>
				领取
			</span>
		</div>
		<div class="coupon-nav">
			<span data-index="1" :class="navIndex==1?'active':''" @click="navChange">未使用</span>
			<span data-index="2" :class="navIndex==2?'active':''" @click="navChange">已过期</span>
		</div>
		<div class="coupon-content" v-if="navIndex==1">
			<div class="coupon-box" v-for="(item,index) in cupon" v-if="item.use_end_time*1000>nowDate">
				<div class="left">
					<span>￥{{item.money}}</span>
					<span>满{{item.condition}}可用</span>
				</div>
				<div class="right">
					<div>
						<span>{{item.name}}</span>
						<span>{{item.use_end_time|formatDate}}前有效</span>
					</div>
					<div v-if="item.status==null">未使用</div>
				</div>
			</div>
		</div>
		<div class="coupon-two" v-else>
			<div class="coupon-box" v-for="(item,index) in cupon" v-if="item.use_end_time*1000<nowDate">
				<div class="left">
					<span>￥{{item.money}}</span>
					<span>满{{item.condition}}可用</span>
				</div>
				<div class="right">
					<div>
						<span>{{item.name}}</span>
						<span>{{item.use_end_time|formatDate}}前有效</span>
					</div>
					<div>已过期</div>
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
				navIndex: 1,
				cupon: [],
				nowDate:'',
				bea:'',
				web:''
			}
		},
		components: {},
		mounted() {
			this.web = localStorage.getItem('web');
			this.nowDate = new Date().getTime();
			
			console.log(this.nowDate)
			this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/user/coupon').then(response => {
				var that = this
				that.cupon = response.data.data.cupon_list
				console.log(that.cupon)
			}, response => {
				console.log('数据加载失败')
			})
		},

		methods: {
			back() {
				this.$router.go(-1)
			},
			navChange(e) {
				this.navIndex = e.target.getAttribute('data-index')
			}
		}
	}
</script>

<style lang="less">
	html {
		background: #f5f5f5;
	}
	
	.coupon-wrapper {
		width: 100%;
		height: 100%;
		padding-bottom: 110px;
		box-sizing: border-box;
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
		.coupon-nav {
			width: 100%;
			height: 90px;
			margin-top: 90px;
			background: #FFFFFF;
			padding: 0 20px;
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			span {
				margin: 0 30px;
				font-size: 24px;
				color: #444444;
				height: 100%;
				line-height: 90px;
			}
			.active {
				color: #e52f46;
				border-bottom: 3px #e52f46 solid;
				box-sizing: border-box;
			}
		}
		.coupon-content {
			padding: 0 20px;
			box-sizing: border-box;
			width: 100%;
			.coupon-box {
				margin-top: 20px;
				width: 100%;
				height: 150px;
				background: url(../../assets/img/coupon-bg.png) no-repeat;
				background-size: 100%;
				display: flex;
				.left {
					flex: 2;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-flow: column;
					span {
						padding: 10px 0;
						box-sizing: border-box;
					}
					span:nth-child(1) {
						font-size: 44px;
						color: #ff3a3a;
					}
					span:nth-child(2) {
						font-size: 24px;
						color: #999999;
					}
				}
				.right {
					flex: 4;
					display: flex;
					padding-left: 40px;
					box-sizing: border-box;
					align-items: center;
					position: relative;
					div:nth-child(1) {
						display: flex;
						flex-flow: column;
						span {
							padding: 10px 0;
							box-sizing: border-box;
						}
						span:nth-child(1) {
							width: 300px;
							line-height: 120%;
							font-size: 32px;
							color: #000000;
						}
						span:nth-child(2) {
							font-size: 24px;
							color: #888888;
						}
					}
					div:nth-child(2) {
						position: absolute;
						right: 40px;
						font-size: 26px;
						color: #e52f46;
					}
				}
			}
		}
		.coupon-two {
			padding: 0 20px;
			box-sizing: border-box;
			width: 100%;
			.coupon-box {
				margin-top: 20px;
				width: 100%;
				height: 150px;
				background: url(../../assets/img/coupon-bg.png) no-repeat;
				background-size: 100%;
				display: flex;
				.left {
					flex: 2;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-flow: column;
					span {
						padding: 10px 0;
						box-sizing: border-box;
					}
					span:nth-child(1) {
						font-size: 44px;
						color: #ff3a3a;
					}
					span:nth-child(2) {
						font-size: 24px;
						color: #999999;
					}
				}
				.right {
					flex: 4;
					display: flex;
					padding-left: 40px;
					box-sizing: border-box;
					align-items: center;
					position: relative;
					div:nth-child(1) {
						display: flex;
						flex-flow: column;
						span {
							padding: 10px 0;
							box-sizing: border-box;
						}
						span:nth-child(1) {
							width: 300px;
							font-size: 32px;
							color: #000000;
							line-height: 120%;
						}
						span:nth-child(2) {
							font-size: 24px;
							color: #888888;
						}
					}
					div:nth-child(2) {
						position: absolute;
						right: 40px;
						font-size: 26px;
						color: #e52f46;
					}
				}
			}
		}
	}
</style>