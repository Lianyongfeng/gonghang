<template>
	<div class="shopcart-wrapper">
		<div class="title">
			<span @click="back"><i class="iconfont icon-jiantou-copy"></i></span>
			<span>购物车</span>
			<span @click="edit">
				{{editText}}
			</span>
		</div>
		<div class="shopcart-content">
			<div class="shopcart-box" v-for="(item,index) in shopcart">
				<div class="radios">
					<span class="radios-bg" :class="checked!=true?'on':''" @click="check($event,index)"></span>
					<input type="checkbox" name="radios" value="1" checked="">
				</div>
				<div class="right">
					<div class="right-bg">
						<img :src="web + item.original_img" />
					</div>
					<div class="right-text">

						<div>{{item.goods_name}}</div>
						<div>
							<span>{{item.spec_key_name}}</span>
						</div>
						<div>
							<span>￥{{item.goods_price}}</span>
							<span>x{{item.goods_num}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="settlement">
			<div>
				<span class="del" v-show="editBea" @click="del">删除</span>
				<span>总价：</span>
				<span>￥{{total}}</span>
			</div>
			<div @click="settlement">
				<span>结算（ {{num}} ）</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activity: [],
				editBea: false,
				editText: '编辑',
				shopcart: [],
				cartObj: [],
				attribute: [],
				total: 0,
				num: 0,
				checked: [],
				id: [],
				web: ''
			}
		},
		inject: ['reload'],
		mounted() {
			this.web = localStorage.getItem('web');
			this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/cart/index').then(response => {
				this.shopcart = response.data.data.goods_list
				console.log(response.data.data)
				let totalPrice = 0; //临时总价
				for(let i = 0; i < this.shopcart.length; i++) {
					totalPrice += this.shopcart[i].goods_num * this.shopcart[i].goods_price
					console.log(totalPrice)
				}

				this.num = this.shopcart.length
				this.total = parseFloat(totalPrice)
			}, response => {
				console.log('数据加载失败')
			})
		},
		methods: {
			check(e, index) {
				this.checked[index] = !e.target.checked
				console.log(this.checked)
			},
			back() {
				this.$router.go(-1)
			},
			settlement() {
				for(let i = 0; i < this.shopcart.length; i++) {
					this.id[i] = this.shopcart[i].id
				}
				if(this.id.length >= 2) {
					this.id = this.id.join("|")
					console.log(typeof this.id)
				} else {
					this.id = this.id.join("")
					this.id = parseInt(this.id)
					console.log(typeof this.id)
				}

				this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/cart/cart2' + '?' + 'cart_ids=' + this.id).then(response => {
					this.$router.push({
						name:'Order',
						params: {
							cart_ids: this.id
						}
					});
				}, response => {
					console.log('数据加载失败')
				})
			},
			edit() {
				if(this.editBea == true) {
					this.editBea = false
					this.editText = '编辑'
				} else {
					this.editBea = true
					this.editText = '完成'
				}
			},
			del() {
				for(let i = 0; i < this.shopcart.length; i++) {
					this.id[i] = this.shopcart[i].id
				}
				console.log(this.id.join("|"))
				this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/cart/delete' + '?' + 'cart_ids=' + this.id.join("|")).then(response => {

				}, response => {
					console.log('数据加载失败')
				})
				this.reload()
			}
		}
	}
</script>

<style lang="less">
	html {
		background: #f5f5f5;
	}
	
	.shopcart-wrapper {
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
		.shopcart-content {
			width: 100%;
			margin-top: 90px;
			padding: 20px;
			box-sizing: border-box;
			background: #FFFFFF;
			.shopcart-box {
				width: 100%;
				display: flex;
				border-bottom: 1px #EEEEEE solid;
				align-items: center;
				box-sizing: border-box;
				padding: 20px 0;
				.radios {
					position: relative;
					display: inline-flex;
					align-items: center;
					color: #999999;
					span {
						display: inline-block;
						width: 40px;
						height: 40px;
						border-radius: 50%;
						box-sizing: border-box;
						margin-right: 10px;
					}
					.radios-bg {
						background: url(../../assets/img/radios.png);
						background-size: 100%;
					}
					.on {
						background: none;
						border: 3px #c4c4c4 solid;
					}
					input {
						position: absolute;
						left: 0;
						width: 30px;
						height: 30px;
						display: inline-block;
						opacity: 0;
						cursor: pointer;
						outline: none;
						-webkit-appearance: none;
					}
				}
				.right {
					display: flex;
					position: relative;
					.right-bg {
						width: 195px;
						height: 195px;
						img {
							width: 100%;
						}
					}
					.right-text {
						width: 420px;
						padding-left: 20px;
						position: relative;
						box-sizing: border-box;
						div:nth-child(1) {
							color: #333333;
							font-size: 28px;
							padding: 16px 0;
							box-sizing: border-box;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap
						}
						div:nth-child(2) {
							font-size: 26px;
							color: #999999;
						}
						div:nth-child(3) {
							position: absolute;
							bottom: 10px;
							display: flex;
							align-items: center;
							width: 100%;
							span:nth-child(1) {
								font-size: 30px;
								color: #ff4040;
							}
							span:nth-child(2) {
								right: 0;
								position: absolute;
							}
						}
					}
				}
			}
		}
		.settlement {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 90px;
			border-top: 1px #bfbfc3 solid;
			box-sizing: border-box;
			background: #FFFFFF;
			display: flex;
			div:nth-child(1) {
				line-height: 90px;
				text-align: right;
				flex: 2;
				padding-right: 40px;
				box-sizing: border-box;
				font-size: 26px;
				color: #444444;
				position: relative;
				span:nth-child(2) {
					color: #e52f46;
				}
				.del {
					position: absolute;
					left: 30px;
					font-size: 28px;
					color: #e52f46;
				}
			}
			div:nth-child(2) {
				line-height: 90px;
				flex: 1;
				text-align: center;
				background: #e52f46;
				color: #fff;
				font-size: 26px;
			}
		}
	}
</style>