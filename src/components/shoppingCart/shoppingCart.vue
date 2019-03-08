<template>
	<div class="shoppingCart">
		<div class="fixed-shoppingCart">
			<div class="star" @click="collection">
				<div v-if="collectionData">
					<img src="../../assets/img/collection-active.png" />
					<span>已收藏</span>
				</div>
				<div v-else>
					<img src="../../assets/img/collection-normal.png" />
					<span>收藏</span>
				</div>
			</div>
			<div class="cart" @click="cart">
				<img src="../../assets/img/shopcart.png" />
				<span v-show="shoppingCart" class="confirm-cart"></span>
				<span>购物车</span>
			</div>
			<div class="join" @click="joinShopCart">加入购物车</div>
			<div class="pay" @click="paying">立即购买</div>
		</div>
		<div class="choice-wrapper" v-show="close">
			<div class="choice-content">
				<div class="choice-top">
					<div class="choice-bg"><img :src="web + pic" /></div>
					<div class="top-text">
						<div>
							<span v-if="boer==true">￥{{goods.shop_price}}</span>
							<span v-else>￥{{goodsPrice}}</span>
						</div>
						<div>请选择商品</div>
						<div>
							<span v-if="boer==true">库存：{{goods.store_count}}</span>
							<span v-else>库存：{{count}}</span>
						</div>
					</div>
					<div class="fork" @click="fork"><i class="iconfont icon-error"></i></div>
				</div>
				<div class="choice-type" v-for="(aItem,index) in options">
					<div class="model">
						<span>{{aItem.spec_name}}</span>
						<ul>
							<li :index="bInex" v-for="(bItem,bInex) in aItem.item" @click="model(index,bInex)" :class="sel[index] == bInex?'model-active':''">{{bItem.item}}</li>
						</ul>
					</div>
				</div>
				<div class="confirm">
					<div class="no-credit" v-if="creditIndex==1" @click="confirmCart(shopcart)">
						确认添加
					</div>
					<div class="yes-credit" v-else @click="onPay">
						分期购买
					</div>
				</div>
			</div>
		</div>
		<div class="choice-wrapper" v-show="pay">
			<div class="choice-content">
				<div class="choice-top">
					<div class="choice-bg"><img :src="web + pic" /></div>
					<div class="top-text">
						<div>
							<span v-if="boer==true">￥{{goods.shop_price}}</span>
							<span v-else>￥{{goodsPrice}}</span>
						</div>
						<div>请选择商品</div>
						<div>
							<span v-if="boer==true">库存：{{goods.store_count}}</span>
							<span v-else>库存：{{count}}</span>
						</div>
					</div>
					<div class="fork" @click="fork"><i class="iconfont icon-error"></i></div>
				</div>
				<div class="choice-type" v-for="(aItem,index) in options">
					<div class="model">
						<span>{{aItem.spec_name}}</span>
						<ul>
							<li :index="bInex" v-for="(bItem,bInex) in aItem.item" @click="model(index,bInex)" :class="sel[index] == bInex?'model-active':''">{{bItem.item}}</li>
						</ul>
					</div>
				</div>
				<div class="confirm">
					<div class="no-credit" v-if="creditIndex==1" @click="onPay">
						确认购买
					</div>
					<div class="yes-credit" v-else @click="onPay">
						分期购买
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				collectionData: false,
				close: false,
				modelIndex: 0,
				activeIndex: 0,
				num: 1,
				creditIndex: 1,
				pay: false,
				shoppingCart: false,
				sel: [],
				gId: [],
				options: [],
				arr: [],
				pic: '',
				name: '',
				price: [],
				goodsPrice: '',
				count: '',
				boer: true,
				idArr: '',
				cArr: '',
				arrId: [],
				shopcart: [],
				cartObj: [],
				goods_id: '',
				goods_num: 1,
				item_id: '',
				web: '',
				onId:''

			}
		},
		props: ['goods'],
		mounted() {
			this.web = localStorage.getItem('web');
			var that = this
			var car = {}
			var cArr = []
			this.options = this.$parent.goods.filter_spec
			console.log(this.options)
			this.pic = this.$parent.goods.goods_images_list[0].image_url
			this.name = this.$parent.goods.goods_name
			this.price = this.$parent.goods.spec_goods_price
			this.goods_id = this.$parent.goods.id
			for(let j in this.price) {
				car = j
				cArr.push(car)
			}
			this.cArr = cArr
			for(let i = 0; i < this.cArr.length; i++) {
				this.cArr[i] = this.cArr[i].split('_')
			}
			console.log(this.cArr)

		},
		methods: {
			collection() {
				if(this.collectionData == true) {
					this.collectionData = false
				} else {
					this.collectionData = true
				}

			},
			joinShopCart() {
				this.close = true
			},
			fork() {
				this.close = false
				this.pay = false
			},
			model(index, bInex) {
				this.sel[index] = bInex
				this.sel = this.sel.concat([]);
				this.gId[index] = this.options[index].item[bInex].item_id
				var price = ''
				var count = ''
				var mark = 'a' + index + 'b' + bInex;
				var name = this.options[index].spec_name
				var vaule = this.options[index].item[bInex].item
				var id = this.options[index].item[bInex].item_id
				var img = this.options[index].item[bInex].src
				var parentIndex = index
				var sonIndex = bInex
				var aText = this.name
				var obj = {
					name: name,
					vaule: vaule,
					id: id,
					parentIndex: parentIndex,
					mark: mark,
					img: img,
					aText: aText,
					sonIndex: sonIndex
				}
				var arr1 = this.arr.filter(item => item.mark != mark);
				arr1.push(obj)
				console.log(this.arr)
				this.arr = arr1
				this.pic = img
				var arrId = []
				arrId[index] = id + ""
				if(arrId.length == this.options.length) {
					this.boer = false
				}
				this.arrId[index] = arrId[index]
				var attribute = []
				attribute[index] = vaule
				this.shopcart[index] = attribute[index]
				for (let j = 0;j<this.cArr.length;j++) {
					if(this.isContained(this.cArr[j],this.arrId)){
						if(this.cArr[j].length == this.arrId.length){
							console.log(this.cArr[j])
							this.onId = this.cArr[j].join("_")
						}
					}
					
				}
				if(this.onId!=0){
					this.item_id = this.price[this.onId].item_id
					console.log(this.price)
				}
			},
			isContained(a, b) {
				if(!(a instanceof Array) || !(b instanceof Array)) return false;
				if(a.length < b.length) return false;
				var aStr = a.toString();
				for(var i = 0, len = b.length; i < len; i++) {
					if(aStr.indexOf(b[i]) == -1) return false;
				}
				return true;
			},
			color(e) {
				this.activeIndex = e.target.getAttribute('data-index')
			},
			add() {
				this.num++
			},
			reduce() {
				this.num--
					if(this.num < 1) {
						this.num = 1
						alert("最少数量必须为1")
					}
			},
			credit(e) {
				this.creditIndex = e.target.getAttribute('data-index')
			},
			paying() {
				this.pay = true

			},
			confirmCart(shopcart) {
				var that = this;
				that.shoppingCart = true
				that.close = false
				that.pay = false
				console.log(shopcart)
				that.$axios.post('http://tigergti.cs.jihuliwu.cn/home/cart/addcart' + '?' + 'goods_id=' + that.goods_id + '&' + 'goods_num=' + that.goods_num + '&' + 'item_id=' + that.item_id).then(response => {
					console.log(that.item_id)
				}, response => {
					console.log('数据加载失败')
				})
			},
			onPay() {
				this.$router.push({
					path: "/order"
				});
			},
			cart() {
				this.$router.push({
					path: "/shopcart"
				});
			}
		}
	}
</script>

<style lang="less">
	.shoppingCart {
		width: 100%;
		height: 100%;
		z-index: 100;
		.fixed-shoppingCart {
			position: fixed;
			background: #fff;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 100px;
			z-index: 10;
			border-top: 2px #EEEEEE solid;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.star {
				flex: 1;
				div {
					text-align: center;
					img {
						width: 40px;
						height: 40px;
					}
					span {
						display: block;
						text-align: center;
						font-size: 22px;
						color: #666666;
						margin-top: 4px;
					}
				}
			}
			.cart {
				flex: 1;
				text-align: center;
				position: relative;
				img {
					width: 40px;
					height: 40px;
				}
				span {
					display: block;
					text-align: center;
					font-size: 22px;
					color: #666666;
					margin-top: 4px;
				}
				.confirm-cart {
					width: 15px;
					height: 15px;
					border-radius: 50%;
					background: #e52f46;
					position: absolute;
					z-index: 100;
					right: 34px;
					top: -6px;
				}
			}
			.join {
				line-height: 100px;
				height: 100%;
				flex: 2;
				text-align: center;
				background: #ff9b19;
				color: #fff;
				font-size: 28px;
			}
			.pay {
				line-height: 100px;
				height: 100%;
				text-align: center;
				flex: 2;
				background: #e52f46;
				color: #fff;
				font-size: 28px;
			}
		}
		.choice-wrapper {
			width: 100%;
			height: 100%;
			position: fixed;
			left: 0;
			top: 0;
			z-index: 100;
			background: rgba(0, 0, 0, 0.5);
			.choice-content {
				width: 100%;
				overflow-y: auto;
				position: absolute;
				bottom: 0;
				left: 0;
				background: #FFFFFF;
				padding-top: 20px;
				box-sizing: border-box;
				.choice-top {
					padding: 0 20px;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					position: relative;
					.choice-bg {
						width: 180px;
						display: flex;
						justify-content: center;
						align-items: center;
						height: 180px;
						padding: 20px;
						box-sizing: border-box;
						border: 1px #EEEEEE solid;
						margin-right: 20px;
						img {
							width: 100%;
						}
					}
					.top-text {
						div {
							padding: 15px 0;
							box-sizing: border-box;
							font-size: 28px;
							color: #333333;
						}
						div:nth-child(1) {
							font-size: 28px;
							color: #d73f3e;
						}
					}
					.fork {
						position: absolute;
						right: 20px;
						top: 10px;
						i {
							font-size: 40px;
						}
					}
				}
				.choice-type {
					padding: 0 20px;
					box-sizing: border-box;
					width: 100%;
					margin-top: 10px;
					.model {
						width: 100%;
						span {
							display: block;
							padding: 30px 0;
							box-sizing: border-box;
							font-size: 28px;
							color: #333333;
						}
						ul {
							width: 100%;
							display: flex;
							flex-flow: wrap;
							li {
								list-style: none;
								display: inline-block;
								padding: 20px 30px;
								box-sizing: border-box;
								border: 2px #EEEEEE solid;
								border-radius: 5px;
								margin-right: 20px;
								margin-bottom: 20px;
							}
							.model-active {
								background: #e23046;
								color: #FFFFFF;
								border: 2px #e23046 solid;
							}
						}
					}
					.color {
						width: 100%;
						span {
							display: block;
							padding: 30px 0;
							box-sizing: border-box;
							font-size: 28px;
							color: #333333;
						}
						ul {
							width: 100%;
							display: flex;
							flex-flow: wrap;
							li {
								list-style: none;
								display: inline-block;
								padding: 20px 30px;
								box-sizing: border-box;
								border: 2px #EEEEEE solid;
								border-radius: 5px;
								margin-right: 20px;
								margin-bottom: 20px;
							}
							.color-active {
								background: #e23046;
								color: #FFFFFF;
								border: 2px #e23046 solid;
							}
						}
					}
					.num {
						width: 100%;
						display: flex;
						align-items: center;
						position: relative;
						margin: 40px 0;
						div:nth-child(1) {
							font-size: 28px;
							color: #333333;
						}
						div:nth-child(2) {
							position: absolute;
							right: 10px;
							font-size: 26px;
							color: #333333;
							display: flex;
							button {
								width: 60px;
								height: 60px;
								border: 2px #e0e0e0 solid;
								border-radius: 5px;
								background: #f5f5f5;
								color: #9e9e9e;
								box-sizing: border-box;
								outline: none;
							}
							input {
								width: 114px;
								outline: none;
								height: 60px;
								border: 2px #e0e0e0 solid;
								border-radius: 5px;
								background: #fff;
								text-align: center;
								box-sizing: border-box;
							}
						}
					}
					.credit {
						width: 100%;
						span {
							display: block;
							padding: 30px 0;
							box-sizing: border-box;
							font-size: 28px;
							color: #333333;
						}
						ul {
							width: 100%;
							display: flex;
							flex-flow: wrap;
							li {
								list-style: none;
								display: inline-block;
								padding: 20px 30px;
								box-sizing: border-box;
								border: 2px #EEEEEE solid;
								border-radius: 5px;
								margin-right: 20px;
								margin-bottom: 20px;
							}
							.credit-active {
								background: #e23046;
								color: #FFFFFF;
								border: 2px #e23046 solid;
							}
						}
					}
				}
				.confirm {
					margin-top: 30px;
					width: 100%;
					.no-credit {
						width: 100%;
						text-align: center;
						height: 98px;
						line-height: 98px;
						background: rgb(255, 185, 70);
						color: #fff;
					}
					.yes-credit {
						color: #fff;
						width: 100%;
						text-align: center;
						height: 98px;
						line-height: 98px;
						background: #e23046;
					}
				}
			}
		}
	}
</style>