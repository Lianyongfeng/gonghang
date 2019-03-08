<template>
	<div class="wrapper">
		<div class="title">
			<span><i class="iconfont icon-jiantou-copy"></i></span>
			<span>HUAWEI产品专区</span>
			<span>
				<i class="iconfont icon-fenxiang" @click="share"></i>
				<i class="iconfont icon-dianhua"></i>
			</span>
		</div>
		<div class="share" v-if="bea">
			<div class="share-box">
				<div class="share-top">
					<span>分享</span>
				</div>
				<div class="share-flex">
					<div>
						<span><i class="iconfont icon-weixinhaoyou1"></i></span>
						<span>微信好友</span>
					</div>
					<div>
						<span><i class="iconfont icon-weixinpengyouquan"></i></span>
						<span>微信朋友圈</span>
					</div>
					<div>
						<span><i class="iconfont icon-duanxin"></i></span>
						<span>短信</span>
					</div>
				</div>
			</div>
			<div class="share-over" @click="closeShare"></div>
		</div>
		<div v-else class="share-none"></div>
		<div class="swiper-container" @click="jump">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in banner">
					<img :src="item.ad_code" />
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<div class="nav-wrapper">
			<div class="content">
				<div class="phone">
					<img src="../../assets/img/phone-logo.png">
				</div>
				<span>手机</span>
			</div>
			<div class="content">
				<div class="notebook">
					<img src="../../assets/img/notebook-logo.png" />
				</div>
				<span>电脑</span>
			</div>
			<div class="content">
				<div class="watch">
					<img src="../../assets/img/watch-logo.png" />
				</div>
				<span>智能</span>
			</div>
			<div class="content">
				<div class="other">
					<img src="../../assets/img/other-logo.png" />
				</div>
				<span>其他</span>
			</div>
		</div>
		<div class="hot-wrapper">
			<div class="hot-title">
				<img src="../../assets/img/hot-bg.png" />
			</div>
			<div class="hot-content">
				<div class="products-wrapper" v-for="(item,index) in products" @click="jump(item)">
					<div class="products-bg"><img :src="web + item.original_img" /></div>
					<div class="products-text">
						<span>{{item.goods_name}}</span>
						<span>￥{{item.shop_price}}</span>
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
	import Swiper from 'swiper';
	export default {
		data() {
			return {
				products: [],
				bea: false,
				banner:[],
				web:''
			}
		},
		created(){
			this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/index').then(response => {
				var that = this
				console.log(response.data.data)
				that.banner = response.data.data.banner
				that.products = response.data.data.hot_goods
				that.web = response.data.data.weburl
				console.log(that.web)
				localStorage.setItem('web',that.web);
			}, response => {
				console.log('数据加载失败')
			})
		},
		mounted() {
			new Swiper('.swiper-container', {
				autoplay: true,
				loop: true,
				slidesPerView: 'auto',
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},
			})
		},
		methods: {
			share() {
				this.bea = true
			},
			closeShare() {
				this.bea = false
			},
			jump(products) {
				this.$router.push({path: "/commodity/"+products.goods_id});
			}
		}
	}
</script>

<style lang="less">
	.wrapper {
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
				i:nth-child(1) {
					margin-right: 20px;
				}
			}
		}
		.share-none {
			opacity: 0;
			transition: all .5s;
		}
		.share {
			width: 100%;
			height: 100%;
			position: fixed;
			z-index: 100;
			background: rgba(0, 0, 0, 0.5);
			top: 0;
			left: 0;
			transition: all .5s;
			.share-over {
				width: 100%;
				height: 100%;
			}
			.share-box {
				position: absolute;
				left: 0;
				bottom: 0;
				background: #fff;
				width: 100%;
				.share-top {
					text-align: center;
					font-size: 30px;
					padding: 20px;
					box-sizing: border-box;
					border-bottom: 1px #EEEEEE solid;
				}
				.share-flex {
					width: 100%;
					padding: 20px;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					span {
						display: block;
						text-align: center;
						margin: 10px 0;
						i {
							color: #1afa29;
							font-size: 50px;
						}
					}
					span:nth-child(2) {
						font-size: 18px;
					}
				}
			}
		}
		.swiper-container {
			margin-top: 90px;
			width: 100%;
			height: 300px;
			position: relative;
			overflow: hidden;
			.swiper-wrapper {
				width: 100%;
				height: 100%;
				.swiper-slide {
					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
			}
			.swiper-pagination {
				text-align: right;
				padding-right: 20px;
				box-sizing: border-box;
			}
			.swiper-pagination-bullet {
				width: 20px;
				height: 20px;
				opacity: 1;
				background: #fff;
				margin: 0 10px;
				border: 1px #e42f46 solid;
			}
			.swiper-pagination-bullet-active {
				background: #e42f46;
			}
		}
		.nav-wrapper {
			width: 100%;
			height: 200px;
			padding: 0 20px;
			box-sizing: border-box;
			background: #FFFFFF;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.content {
				text-align: center;
				div {
					width: 100px;
					height: 100px;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				span {
					display: block;
					margin-top: 10px;
					text-align: center;
					font-size: 26px;
					color: #333333;
				}
				.phone {
					background: linear-gradient(#e14b49, #cd0d0c);
					img {
						width: 48px;
						height: 70px;
					}
				}
				.notebook {
					background: linear-gradient(#e9b75e, #e79c41);
					img {
						width: 82px;
						height: 51px;
					}
				}
				.watch {
					background: linear-gradient(#3cefed, #0fb3fd);
					img {
						width: 49px;
						height: 67px;
					}
				}
				.other {
					background: linear-gradient(#d549e9, #b266fc);
					img {
						width: 62px;
						height: 55px;
					}
				}
			}
		}
		.hot-wrapper {
			width: 100%;
			.hot-title {
				width: 100%;
				img {
					width: 100%;
				}
			}
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