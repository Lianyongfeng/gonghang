<template>
	<div class="address-wrapper">
		<div class="title">
			<span @click="back"><i class="iconfont icon-jiantou-copy"></i></span>
			<span>地址管理</span>
			<span>
				<i class="iconfont icon-dianhua"></i>
			</span>
		</div>
		<div class="address-centent">
			<div class="address-box" v-for="(item,index) in address_list" @click="thisAddress(item)">
				<div class="box-header">
					<span>{{item.consignee}}</span>
					<span>{{item.mobile}}</span>
				</div>
				<div class="box-cneter">{{item.province}} {{item.city}} {{item.district}} {{item.twon}} {{item.address}}</div>
				<div class="box-footer">
					<div class="radios">
						<span class="radios-bg" :class="item.is_default==0?'on':''"></span>
						<input type="radio" name="radios" checked="checked" @click="check(item.is_default,index)">默认选择地址
					</div>
					<div>
						<span @click="edit(index)"><i class="iconfont icon-bianji"></i> 编辑</span>
						<span @click="del(index)"><i class="iconfont icon-shanchu"></i> 删除</span>
					</div>
				</div>
			</div>
		</div>
		<div class="add-address" @click="newAddress">
			<div>新建收货地址</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activity: [],
				address_list: [],
				index: '',
				web:'',
				add:''
			}
		},
		inject: ['reload'],
		mounted() {
			this.web = localStorage.getItem('web');
			this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/user/address_list').then(response => {
				var that = this
				that.address_list = response.data.data
				console.log(that.address_list)
			}, response => {
				console.log('数据加载失败')
			})
		},
		methods: {
			check(item_default, index) {
				for(let i = 0; i < this.address_list.length; i++) {
					this.address_list[i].is_default = 0
				}
				this.address_list[index].is_default = 1
				this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/user/set_default'+'?'+'id=' + this.address_list[index].address_id).then(response => {
					console.log(response.data)
				},response => {
					console.log('数据加载失败')
				})

			},
			back() {
				this.$router.go(-1)
			},
			newAddress() {
				this.$router.push({
					path: "/newaddress"
				})
			},
			del(index) {
				let id = this.address_list[index].address_id
				console.log(id)
				this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/user/del_address/' + '?' + 'id=' + id).then(response => {
					console.log(response)
					console.log(id)
				}, response => {
					console.log('数据加载失败')
				})
				this.reload()
			},
			edit(index) {
				let id = this.address_list[index].address_id
				this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/user/edit_address/' + '?' + 'address_id=' + id+'&'+'act=0').then(response => {
					console.log(response)
					this.$router.push({
						path: "/edit"+'?' + 'address_id=' + id
					})
				}, response => {
					console.log('数据加载失败')
				})
			},
			thisAddress(item){
				this.add = item
				this.$router.push({
					path: "/order"
				});
			}
		}
	}
</script>

<style lang="less">
	html {
		background: #f5f5f5;
	}
	
	.address-wrapper {
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
		}
		.address-centent {
			width: 100%;
			margin-top: 100px;
			.address-box {
				width: 100%;
				padding: 10px 20px;
				box-sizing: border-box;
				background: #fff;
				margin-bottom: 10px;
				>div {
					padding: 16px 0;
					box-sizing: border-box;
					font-size: 24px;
					color: #444444;
				}
				.box-header {
					display: flex;
					align-items: center;
					position: relative;
					width: 100%;
					span:nth-child(1) {
						font-size: 28px;
					}
					span:nth-child(2) {
						position: absolute;
						right: 0;
						font-size: 24px;
					}
				}
				.box-footer {
					display: flex;
					align-items: center;
					width: 100%;
					border-top: 1px #EEEEEE solid;
					position: relative;
					.radios {
						position: relative;
						display: inline-flex;
						align-items: center;
						color: #999999;
						span {
							display: inline-block;
							width: 30px;
							height: 30px;
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
					>div:nth-child(2) {
						position: absolute;
						right: 0px;
						span:nth-child(1) {
							margin-right: 70px;
						}
						span {
							i {
								font-size: 30px;
							}
						}
					}
				}
			}
		}
		.add-address {
			position: fixed;
			bottom: 20px;
			left: 0;
			text-align: center;
			width: 100%;
			padding: 0 20px;
			box-sizing: border-box;
			height: 76px;
			div {
				width: 100%;
				height: 100%;
				background: #e52f46;
				color: #fff;
				line-height: 76px;
				border-radius: 12px;
				font-size: 26px;
			}
		}
	}
</style>