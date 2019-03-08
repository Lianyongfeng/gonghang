<template>
	<div class="newaddress-wrapper">
		<div class="title">
			<span @click="back"><i class="iconfont icon-jiantou-copy"></i></span>
			<span>地址管理</span>
			<span>
				<i class="iconfont icon-dianhua"></i>
			</span>
		</div>
		<div class="newaddress-content">
			<div>
				<span>联系人</span>
				<input type="text" name="" id="" value="" placeholder="请输入你的姓名" v-model="name" />
			</div>
			<div>
				<span>联系电话</span>
				<input type="" name="" id="" value="" placeholder="请输入你的联系电话" v-model="mobile" />
			</div>
			<div class="region">
				<div>所在地区</div>
				<div>
					<span @click="toAddress">{{city}}</span>
					<span><i class="iconfont icon-icon1"></i></span>
				</div>
			</div>
			<div class="specific">
				<div>详情地址</div>
				<textarea name="" rows="" cols="" style="resize:none" placeholder="请您在此处输入详细地址"></textarea>
			</div>
		</div>
		<v-distpicker type="mobile" @selected='selected' v-show="addInp">
		</v-distpicker>
		<div class="mask" v-show="mask"></div>
		<div class="add-address" @click="newAddress">
			<div>确认添加</div>
		</div>
	</div>
</template>

<script>
	import VDistpicker from 'v-distpicker'
	import qs from 'qs'
	export default {
		data() {
			return {
				city: '请选择',
				addInp: false,
				mask: false,
				name: '',
				mobile: '',
				id:'',
				web:''
			}
		},
		components: {
			VDistpicker
		},
		mounted() {
			this.web = localStorage.getItem('web');
			this.id = this.$route.params.address_id
			this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/user/edit_address'+ '?' + 'address_id=' + this.id).then(response => {
				console.log(response.data)
			}, response => {
				console.log('数据加载失败')
			})
		},

		methods: {
			back() {
				this.$router.go(-1)
			},
			newAddress() {
				let postData = {
					consignee: this.name,
					email: '45454',
					country: '4545',
					province: '45454',
					city: '45',
					district: '4545',
					twon: '454',
					address: '4545',
					zipcode: '4545',
					mobile: this.mobile,
					is_default: 0
				}
				this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/user/edit_address').then(response => {
					console.log(response.data)
				}, response => {
					console.log('数据加载失败')
				})
				this.$router.go(-1)
			},
			toAddress() {
				this.mask = true;
				this.addInp = true;
			},
			// 省市区三级联动
			selected(data) {
				this.mask = false;
				this.addInp = false;
				this.city = data.province.value + ' ' + data.city.value + ' ' + data.area.value

			},

		}
	}
</script>

<style lang="less">
	html {
		background: #f5f5f5;
	}
	
	.newaddress-wrapper {
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
		.newaddress-content {
			padding: 20px;
			box-sizing: border-box;
			background: #fff;
			margin-top: 90px;
			>div {
				color: #444444;
				font-size: 26px;
				padding: 20px 0;
				box-sizing: border-box;
				width: 100%;
				border-bottom: 1px #EEEEEE solid;
				display: flex;
				align-items: center;
				>span {
					flex: 1;
				}
				>input {
					height: 100%;
					outline: none;
					text-align: right;
					flex: 2;
				}
				::-webkit-input-placeholder {
					color: #bbbbbb;
				}
			}
			.region {
				>div:nth-child(1) {
					height: 100%;
					flex: 1;
				}
				>div:nth-child(2) {
					height: 100%;
					flex: 2;
					text-align: right;
					color: #bbbbbb;
					sapn {
						i {
							font-size: 30px;
						}
					}
				}
			}
			.specific {
				border: none;
				flex-flow: wrap;
				div {
					width: 100%;
				}
				textarea {
					display: block;
					width: 100%;
					outline: none;
					border: none;
					margin-top: 20px;
					height: 200px;
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