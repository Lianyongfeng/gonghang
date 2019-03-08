<template>
	<div class="invoice-wrapper">
		<div class="title">
			<span @click="back"><i class="iconfont icon-jiantou-copy"></i></span>
			<span>发票信息</span>
			<span>
				<i class="iconfont icon-dianhua"></i>
			</span>
		</div>
		<div class="invoice-content">
			<div class="invoice-header">
				<div>发票抬头</div>
				<div>
					<span>个人</span>
					<span><i class="iconfont icon-icon1"></i></span>
				</div>
			</div>
			<div class="invoice-header">
				<div>发票内容</div>
				<div>
					<span>明细</span>
					<span><i class="iconfont icon-icon1"></i></span>
				</div>
			</div>
			<div class="invoice-email">
				<div>收票人邮箱</div>
				<textarea placeholder="请填写邮箱账号" name="" rows="" cols="" style="resize:none"></textarea>
			</div>
		</div>
		<div class="invoice-sure" @click="invoice">
			<div>确认</div>
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
		components: {
		},
		mounted() {
			this.web = localStorage.getItem('web');
		},

		methods: {
			back() {
				this.$router.go(-1)
			},
			invoice(){
				this.$router.go(-1)
			}

		}
	}
</script>

<style lang="less">
	html{
		background: #f5f5f5;
	}
	.invoice-wrapper {
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
		.invoice-content{
			margin-top: 100px;
			width: 100%;
			height: 100%;
			padding: 20px;
			box-sizing: border-box;
			background: #FFFFFF;
			.invoice-header{
				position: relative;
				display: flex;
				align-items: center;
				width: 100%;
				font-size: 26px;
				color: #444444;
				box-sizing: border-box;
				padding: 20px 0;
				border-bottom: 1px #EEEEEE solid;
				div:nth-child(2){
					right: 0;
					position: absolute;
					display: flex;
					align-items: center;
					span{
						i{
							line-height: 40px;
							color: #bbbbbb;
							font-size: 34px;
						}
					}
				}
			}
			.invoice-email{
				width: 100%;
				padding: 20px 0;
				box-sizing: border-box;
				div{
					margin-bottom: 20px;
					font-size: 26px;
					color: #444444;
				}
				textarea{
					display: block;
					width: 100%;
					border: none;
					outline: none;
					height: 200px;
					
				}
				textarea::-webkit-input-placeholder{
					color: #BBBBBB;
				}
			}
		}
		.invoice-sure{
			position: fixed;
			bottom: 20px;
			left: 0;
			text-align: center;
			width: 100%;
			padding: 0 20px;
			box-sizing: border-box;
			height: 76px;
			div{
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