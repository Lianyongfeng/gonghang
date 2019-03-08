<template>
	<div class="order-wrapper">
		<div class="title">
			<span @click="back"><i class="iconfont icon-jiantou-copy"></i></span>
			<span>订单详情</span>
			<span>
				<i class="iconfont icon-dianhua"></i>
			</span>
		</div>
		<div class="order-addressee">
			<div>
				<div class="addressee-name">
					<span>收件人：新际</span>
					<span>020-28170311</span>
				</div>
				<div class="addressee-ip">
					<span>地址：广东省 广州市 番禺区 市桥街道 天安节能科技园23栋405</span>
				</div>
			</div>
			<div>
				<i class="iconfont icon-icon1"></i>
			</div>
		</div>
		<div class="order-more">
			<div class="more-top">
				<div>订单清单</div>
				<div class="more-detailed">
					<div class="more-bg">
						<img src="../../assets/img/order-bg1.jpg" />
					</div>
					<div class="detailed-text">
						<div class="detailed-name">Huawei/华为 Mate 20 全面屏珍珠屏超大广角徕卡三镜头旗舰官方正Huawei/华为 Mate 20 全面屏珍珠屏超大广角徕卡三镜头旗舰官方正Huawei/华为 Mate 20 全面屏珍珠屏超大广角徕卡三镜头旗舰官方正</div>
						<div class="detailed-gb">6GB+256GB</div>
						<div class="detailed-money">
							<span>￥3999.00</span>
							<span>x1</span>
						</div>
					</div>
				</div>
			</div>
			<div class="order-invoice">
				<div>发票信息</div>
				<div>
					<span>无</span>
					<span><i class="iconfont icon-icon1"></i></span>
				</div>
			</div>
			<div class="order-code">
				<input type="number" placeholder="营销代码（可输入9为数字）" />
			</div>
			<div class="order-discount">
				<div>
					<span>商品金额</span>
					<span>￥3999.00</span>
				</div>
				<div>
					<span>运费金额</span>
					<span>￥0.00</span>
				</div>
				<div>
					<span>优惠金额</span>
					<span>-￥0.00</span>
				</div>
				<div>
					<span>分期</span>
					<span>首期￥2001，后续￥1999*2期</span>
				</div>
			</div>
		</div>
		<div class="order-time">
			<div>订单号：201807094G23405</div>
			<div>创建时间：2018-07-09</div>
		</div>
		<div class="go-Pay" @click="sure">
			<div>提醒发货</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				web:''
			}
		},
		mounted() {
			this.web = localStorage.getItem('web');
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			sure(){
				this.$router.push({path: "/sure"});
			}
		}
	}
</script>

<style lang="less">
	html {
		background: #f5f5f5;
	}
	
	.order-wrapper {
		width: 100%;
		height: 100%;
		padding-bottom: 100px;
		box-sizing: border-box;
		.title {
			width: 100%;
			background: #fff;
			height: 90px;
			padding: 0 20px;
			box-sizing: border-box;
			border-bottom: 2px #EEEEEE solid;
			display: flex;
			position: fixed;
			left: 0;
			top: 0;
			z-index: 100;
			font-size: 32px;
			justify-content: space-between;
			align-items: center;
			span {
				i {
					font-size: 40px;
					color: #d73f3e;
				}
			}
			.active {
				color: #e52f46;
			}
		}
		.order-addressee {
			margin-top: 100px;
			margin-bottom: 10px;
			width: 100%;
			background: #FFFFFF;
			padding: 20px;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			>div:nth-child(1) {
				.addressee-name,
				.addressee-ip {
					color: #444444;
					font-size: 26px;
					line-height: 150%;
				}
			}
			>div:nth-child(2) {
				i {
					font-size: 40px;
					color: #d6d6d6;
				}
			}
		}
		.order-more {
			width: 100%;
			background: #FFFFFF;
			padding: 20px;
			box-sizing: border-box;
			.more-top {
				width: 100%;
				>div:nth-child(1) {
					font-size: 26px;
					color: #444444;
					margin-bottom: 20px;
				}
				.more-detailed {
					display: flex;
					width: 100%;
					background: #f5f5f5;
					padding: 10px;
					box-sizing: border-box;
					.more-bg {
						width: 185px;
						height: 185px;
						img {
							width: 100%;
						}
					}
					.detailed-text {
						padding: 10px 20px;
						box-sizing: border-box;
						width: 500px;
						line-height: 150%;
						.detailed-name {
							padding-right: 20px;
							box-sizing: border-box;
							font-size: 28px;
							color: #333333;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
							overflow: hidden;
						}
						.detailed-gb {
							color: #999999;
							font-size: 26px;
							margin-top: 5px;
							margin-bottom: 10px;
						}
						.detailed-money {
							position: relative;
							span:nth-child(1) {
								color: #ff4040;
								font-size: 30px;
							}
							span:nth-child(2) {
								font-size: 28px;
								color: #999999;
								right: 0;
								position: absolute;
							}
						}
					}
				}
			}
			.order-invoice {
				width: 100%;
				background: #FFFFFF;
				display: flex;
				align-items: center;
				padding: 20px 0;
				box-sizing: border-box;
				border-bottom: 2px #EEEEEE solid;
				font-size: 26px;
				position: relative;
				div:nth-child(2) {
					position: absolute;
					right: 0;
					span {
						i {
							font-size: 30px;
							color: #c3c3c3;
						}
					}
				}
			}
			.order-code {
				width: 100%;
				height: 90px;
				padding: 20px 0;
				box-sizing: border-box;
				background: #FFFFFF;
				border-bottom: 2px #EEEEEE solid;
				font-size: 26px;
				input {
					outline: none;
					width: 100%;
					height: 100%;
					padding-left: 10px;
					box-sizing: border-box;
				}
				input::-webkit-input-placeholder {
					color: #bbbbbb;
					font-size: 26px;
				}
			}
			.order-discount {
				width: 100%;
				background: #fff;
				div {
					padding: 20px 0;
					box-sizing: border-box;
					position: relative;
					span {
						font-size: 26px;
					}
					span:nth-child(2) {
						position: absolute;
						right: 0;
						color: #e52f46;
					}
				}
			}
		}
		.order-time {
			margin-top: 10px;
			width: 100%;
			background: #FFFFFF;
			padding: 0 20px;
			box-sizing: border-box;
			div {
				padding: 20px 0;
				box-sizing: border-box;
				font-size: 26px;
				color: #333333;
			}
		}
		.go-Pay{
			width: 100%;
			height: 76px;
			padding: 0 20px;
			box-sizing: border-box;
			position: absolute;
			bottom: 20px;
			div{
				width: 100%;
				height: 100%;
				background: #e52f46;
				text-align: center;
				line-height: 76px;
				color: #FFFFFF;
				font-size: 26px;
				border-radius: 10px;
				
			}
		}
	}
</style>