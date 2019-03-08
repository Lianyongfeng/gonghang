<template>
	<div class="commodity-wrapper">
		<div class="title">
			<span @click="back"><i class="iconfont icon-jiantou-copy"></i></span>
			<span data-num="1" :class="spanActive==1?'active':''" @click="show($event)">商品</span>
			<span data-num="2" :class="spanActive==2?'active':''" @click="show($event)">详情</span>
			<span>
				<i class="iconfont icon-dianhua"></i>
			</span>
		</div>
		<div class="commodity-one" v-if="spanActive==1">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item,index) in goods.goods_images_list">
						<img :src="web + item.image_url" />
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<div class="text">
				<div class="text-money">
					￥{{goods.shop_price}}
				</div>
				<div class="header">
					{{goods.goods_name}}
				</div>
				<div class="other">
					<span v-for="(item,index) in goods.attribute">{{item}}</span>
				</div>
			</div>
		</div>
		<div class="commodity-two" v-else>
			<div class="two-nav">
				<span data-num="1" :class="twoActive==1?'span-active':''" @click="tShow($event)">商品介绍</span>
				<span data-num="2" :class="twoActive==2?'span-active':''" @click="tShow($event)">规格参数</span>
				<span data-num="3" :class="twoActive==3?'span-active':''" @click="tShow($event)">服务说明</span>
			</div>
			<div class="two-content-one" v-if="twoActive==1">
				<!--<img src="../../assets/img/introduce-bg1.jpg" />-->
				<div v-html="content"></div>
			</div>
			<div class="two-content-two" v-else-if="twoActive==2">
				<div><span v-for="(item,index) in goods.attribute">{{item}}</span></div>
			</div>
			<div class="two-content-three" v-else>
				<!--<img src="../../assets/img/explain-bg1.jpg" />-->
				<div v-html="service"></div>
			</div>
		</div>
		<shoppingCart :goods="goods" v-if="goods!=0"></shoppingCart>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	export default {
		data() {
			return {
				spanActive: 1,
				twoActive: 1,
				id: '',
				goods: [],
				service: '',
				content:'',
				web:''
			}
		},
		mounted() {
			this.web = localStorage.getItem('web');
			var Tswiper = new Swiper('.swiper-container', {
				initialSlide: 0,
				autoplay: true,
				slidesPerView: 'auto',
				pagination: {
					el: '.swiper-pagination',
				},
				observer: true,
				observeParents: true,
				observeSlideChildren: true,
			})
			this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/goods/goodsInfo' + '?' + 'id=' + this.id).then(response => {
				var that = this
				console.log(response.data.data)
				that.goods = response.data.data.goods_info
				that.service = that.goods.service
				that.content = that.goods.goods_content
				this.service = this.htmldecode(this.service)
				this.service = this.service.replace("\"", "").replace("\"", "");
				this.service = this.service.replace(/\"/g, "");
				this.content = this.htmldecode(this.content)
				this.content = this.content.replace("\"", "").replace("\"", "");
				this.content = this.content.replace(/\"/g, "");
			}, response => {
				console.log('数据加载失败')
			})
		},
		methods: {
			show(e) {
				this.spanActive = e.target.getAttribute('data-num')
			},
			tShow(e) {
				this.twoActive = e.target.getAttribute('data-num')
			},
			back() {
				this.$router.go(-1)
			},
			getOrder() {
				this.id = this.$route.params && this.$route.params.id
			},
			htmlencode(s) {
				var div = document.createElement('div');
				div.appendChild(document.createTextNode(s));
				return div.innerHTML;
			},
			htmldecode(s) {
				var div = document.createElement('div');
				div.innerHTML = s;
				return div.innerText || div.textContent;
			}

		},
		created() {
			this.getOrder()
		}
	}
</script>

<style lang="less">
	.commodity-wrapper {
		width: 100%;
		height: 100%;
		background: #fff;
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
		.commodity-one {
			.swiper-container {
				margin-top: 90px;
				width: 100%;
				height: 750px;
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
					text-align: center;
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
			.text {
				width: 100%;
				padding: 20px;
				box-sizing: border-box;
				.text-money {
					padding: 10px 0;
					font-size: 36px;
					font-weight: bold;
					color: #e01212;
				}
				.header {
					font-size: 28px;
					color: #333333;
					line-height: 150%;
				}
				.other {
					font-size: 24px;
					color: #999999;
					line-height: 150%;
				}
			}
		}
		.commodity-two {
			width: 100%;
			height: 100%;
			margin-top: 90px;
			background: #EEEEEE;
			.two-nav {
				width: 100%;
				height: 90px;
				background: #EEEEEE;
				display: flex;
				padding: 0 20px;
				box-sizing: border-box;
				span {
					font-size: 26px;
					color: #333333;
					flex: 1;
					text-align: center;
					height: 100%;
					line-height: 90px;
					box-sizing: border-box;
				}
				.span-active {
					border-bottom: 4px #e52f46 solid;
				}
			}
			.two-content-one {
				width: 100%;
				box-sizing: border-box;
				img {
					width: 100%;
				}
			}
			.two-content-two {
				width: 100%;
				background: #EEEEEE;
				height: 100%;
				div {
					width: 100%;
					padding: 20px;
					box-sizing: border-box;
					background: #FFFFFF;
					font-size: 24px;
					color: #999999;
					line-height: 150%;
				}
			}
			.two-content-three {
				width: 100%;
				padding: 0 20px;
				box-sizing: border-box;
				font-size: 24px;
				line-height: 150%;
				div{
					margin-top: 20px;
				}
				img {
					width: 100%;
				}
			}
		}
	}
</style>