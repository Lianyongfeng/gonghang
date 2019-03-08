<template>
	<div class="allorder-wrapper">
		<div class="title">
			<span @click="back"><i class="iconfont icon-jiantou-copy"></i></span>
			<span>我的订单</span>
			<span>
				<i class="iconfont icon-dianhua"></i>
			</span>
		</div>
		<div class="allorder-nav">
			<span data-index="1" :class="navIndex==1?'active':''" @click="navChange">全部</span>
			<span data-index="2" :class="navIndex==2?'active':''" @click="navChange">待付款</span>
			<span data-index="3" :class="navIndex==3?'active':''" @click="navChange">待发货</span>
			<span data-index="4" :class="navIndex==4?'active':''" @click="navChange">待收货</span>
		</div>
		<div class="all" v-if="navIndex==1">
			<div class="box" v-if="item.order_status>0" v-for="(item,index) in order_list">
				<div class="header">
					<span>订单号：{{item.order_sn}}</span>
					<span v-if="item.order_status==2">待付款</span>
					<span v-if="item.order_status==3">待发货</span>
					<span v-if="item.order_status==4">待收货</span>
				</div>
				<div class="content" v-for="(goodsItem,goodsIndex) in item.goods_list">
					<div class="bg">
						<img :src="web + goodsItem.original_img" />
					</div>
					<div class="text">
						<div class="name">{{goodsItem.goods_name}}</div>
						<div class="gb">{{goodsItem.spec_key_name}}</div>
						<div class="price">
							<span>￥{{goodsItem.goods_price}}</span>
							<span>x{{goodsItem.goods_num}}</span>
						</div>
					</div>
				</div>
				<div class="footer">
					<div>
						<span>实付：</span>
						<span>￥{{item.total_amount}}</span>
					</div>
					<div v-if="item.order_status==2">立即付款</div>
					<div v-if="item.order_status==3">提醒发货</div>
					<div v-if="item.order_status==4">确认收货</div>
				</div>
			</div>
		</div>
		<div class="all" v-if="navIndex==2">
			<div class="box" v-if="item.order_status==2" v-for="(item,index) in order_list">
				<div class="header">
					<span>订单号：{{item.order_sn}}</span>
					<span v-if="item.order_status==2">待付款</span>
					<span v-if="item.order_status==3">待发货</span>
					<span v-if="item.order_status==4">待收货</span>
				</div>
				<div class="content" v-for="(goodsItem,goodsIndex) in item.goods_list">
					<div class="bg">
						<img :src="web + goodsItem.original_img" />
					</div>
					<div class="text">
						<div class="name">{{goodsItem.goods_name}}</div>
						<div class="gb">{{goodsItem.spec_key_name}}</div>
						<div class="price">
							<span>￥{{goodsItem.goods_price}}</span>
							<span>x{{goodsItem.goods_num}}</span>
						</div>
					</div>
				</div>
				<div class="footer">
					<div>
						<span>实付：</span>
						<span>￥{{item.total_amount}}</span>
					</div>
					<div v-if="item.order_status==2">立即付款</div>
					<div v-if="item.order_status==3">提醒发货</div>
					<div v-if="item.order_status==4">确认收货</div>
				</div>
			</div>
		</div>
		<div class="all" v-if="navIndex==3">
			<div class="box" v-if="item.order_status==3" v-for="(item,index) in order_list">
				<div class="header">
					<span>订单号：{{item.order_sn}}</span>
					<span v-if="item.order_status==2">待付款</span>
					<span v-if="item.order_status==3">待发货</span>
					<span v-if="item.order_status==4">待收货</span>
				</div>
				<div class="content" v-for="(goodsItem,goodsIndex) in item.goods_list">
					<div class="bg">
						<img :src="web + goodsItem.original_img" />
					</div>
					<div class="text">
						<div class="name">{{goodsItem.goods_name}}</div>
						<div class="gb">{{goodsItem.spec_key_name}}</div>
						<div class="price">
							<span>￥{{goodsItem.goods_price}}</span>
							<span>x{{goodsItem.goods_num}}</span>
						</div>
					</div>
				</div>
				<div class="footer">
					<div>
						<span>实付：</span>
						<span>￥{{item.total_amount}}</span>
					</div>
					<div v-if="item.order_status==2">立即付款</div>
					<div v-if="item.order_status==3">提醒发货</div>
					<div v-if="item.order_status==4">确认收货</div>
				</div>
			</div>
		</div>
		<div class="all" v-if="navIndex==4">
			<div class="box" v-if="item.order_status==4" v-for="(item,index) in order_list">
				<div class="header">
					<span>订单号：{{item.order_sn}}</span>
					<span v-if="item.order_status==2">待付款</span>
					<span v-if="item.order_status==3">待发货</span>
					<span v-if="item.order_status==4">待收货</span>
				</div>
				<div class="content" v-for="(goodsItem,goodsIndex) in item.goods_list">
					<div class="bg">
						<img :src="web + goodsItem.original_img" />
					</div>
					<div class="text">
						<div class="name">{{goodsItem.goods_name}}</div>
						<div class="gb">{{goodsItem.spec_key_name}}</div>
						<div class="price">
							<span>￥{{goodsItem.goods_price}}</span>
							<span>x{{goodsItem.goods_num}}</span>
						</div>
					</div>
				</div>
				<div class="footer">
					<div>
						<span>实付：</span>
						<span>￥{{item.total_amount}}</span>
					</div>
					<div v-if="item.order_status==2">立即付款</div>
					<div v-if="item.order_status==3">提醒发货</div>
					<div v-if="item.order_status==4">确认收货</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navIndex: 1,
				order_list:[],
				web:''
			}
		},
		components: {},
		mounted() {
			this.web = localStorage.getItem('web');
			this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/order/order_list').then(response => {
				var that = this
				that.order_list = response.data.data.order_list
				console.log(that.order_list)
			}, response => {
				console.log('数据加载失败')
			})
			this.navIndex = localStorage.getItem('navIndex');
			console.log(this.navIndex)
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
		background: #F5F5F5;
	}
	
	.allorder-wrapper {
		width: 100%;
		height: 100%;
		position: relative;
		padding-bottom: 100px;
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
			span:nth-child(3) {
				font-size: 26px;
				color: #e52f46;
			}
		}
		.allorder-nav {
			margin-top: 90px;
			width: 100%;
			height: 90px;
			background: #FFFFFF;
			display: flex;
			padding: 0 20px;
			justify-content: center;
			box-sizing: border-box;
			span {
				margin: 0 40px;
				line-height: 90px;
				height: 100%;
			}
			.active {
				color: #e52f46;
				border-bottom: 3px #e52f46 solid;
				box-sizing: border-box;
			}
		}
		.all {
			width: 100%;
			.box {
				width: 100%;
				padding: 20px;
				box-sizing: border-box;
				background: #FFFFFF;
				margin-top: 20px;
				.header {
					padding: 20px 0;
					box-sizing: border-box;
					position: relative;
					width: 100%;
					span:nth-child(1) {
						font-size: 24px;
						color: #444444;
					}
					span:nth-child(2) {
						font-size: 24px;
						color: #d73f3e;
						position: absolute;
						right: 0;
					}
				}
				.content {
					display: flex;
					width: 100%;
					background: #f5f5f5;
					padding: 10px;
					box-sizing: border-box;
					.bg {
						width: 185px;
						height: 185px;
						img {
							width: 100%;
						}
					}
					.text {
						width: 500px;
						padding-left: 20px;
						box-sizing: border-box;
						.name {
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
							padding-right: 20px;
							box-sizing: border-box;
							color: #333333;
							font-size: 28px;
							line-height: 120%;
						}
						.gb {
							padding: 20px 0;
							box-sizing: border-box;
							font-size: 26px;
							color: #999999;
						}
						.price {
							position: relative;
							span:nth-child(1) {
								font-size: 30px;
								color: #ff4040;
							}
							span:nth-child(2) {
								font-size: 28px;
								color: #999999;
								position: absolute;
								right: 0;
							}
						}
					}
				}
				.footer {
					width: 100%;
					text-align: right;
					div:nth-child(1) {
						padding: 10px 0;
						box-sizing: border-box;
						font-size: 26px;
						span:nth-child(1) {
							color: #6b6b6b;
						}
						span:nth-child(2) {
							color: #ff4040;
						}
					}
					div:nth-child(2) {
						margin-top: 20px;
						width: 140px;
						height: 50px;
						background: #e52f46;
						color: #FFFFFF;
						text-align: center;
						line-height: 50px;
						display: inline-block;
						border-radius: 6px;
					}
				}
			}
		}
	}
</style>