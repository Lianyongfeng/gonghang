<template>
	<div class="my-wrapper">
		<div class="title">
			<span><i class="iconfont icon-jiantou-copy"></i></span>
			<span>我的</span>
			<span>
				<i class="iconfont icon-dianhua"></i>
			</span>
		</div>
		<div class="my-header">
			<div class="header">
				<img src="../../assets/img/header-portrait.jpg" alt="" />
				<span>13975412345</span>
			</div>
		</div>
		<div class="my-order" @click="allOrder(1)">
			<span>我的订单</span>
			<span>
				全部订单
			</span>
			<span><i class="iconfont icon-icon1"></i></span>
		</div>
		<div class="order-state">
			<div class="state-wrapper" @click="allOrder(1)" data-index="1">
				<span><i class="iconfont icon-dingdan"></i></span>
				<span>全部订单</span>
			</div>
			<div class="state-wrapper" @click="allOrder(2)" data-index="2">
				<span><i class="iconfont icon-daifukuan"></i></span>
				<span>待付款</span>
			</div>
			<div class="state-wrapper" @click="allOrder(3)" data-index="3">
				<span><i class="iconfont icon-daifahuo"></i></span>
				<span>待发货</span>
			</div>
			<div class="state-wrapper" @click="allOrder(4)" data-index="4">
				<span><i class="iconfont icon-daishouhuo"></i></span>
				<span>待收货</span>
			</div>
		</div>
		<div class="my-other">
			<div class="order-wrapper" @click="coupon">
				<span><i class="iconfont icon-buqiajuan"></i></span>
				<span>我的优惠券</span>
				<span><i class="iconfont icon-icon1"></i></span>
			</div>
			<div class="order-wrapper" @click="address">
				<span><i class="iconfont icon-dizhi"></i></span>
				<span>地址管理</span>
				<span><i class="iconfont icon-icon1"></i></span>
			</div>
			<div class="order-wrapper" @click="collection">
				<span><i class="iconfont icon-star"></i></span>
				<span>我的收藏</span>
				<span><i class="iconfont icon-icon1"></i></span>
			</div>
			<div class="order-wrapper" @click="footprint">
				<span><i class="iconfont icon-zuji"></i></span>
				<span>我的足迹</span>
				<span><i class="iconfont icon-icon1"></i></span>
			</div>
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
		methods:{
			address(){
				this.$router.push({path: "/address"});
			},
			collection(){
				this.$router.push({path: "/collection"});
			},
			coupon(){
				this.$router.push({path: "/coupon"});
			},
			allOrder(index){
				console.log(index)
				localStorage.setItem('navIndex',index);
				this.$router.push({path: "/allorder"});
			},
			footprint(){
				this.$router.push({path: "/footprint"});
			}
		}
	}
</script>

<style lang="less">
	html {
		background: #f0f0f0;
	}
	
	.my-wrapper {
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
		.my-header {
			margin-top: 90px;
			width: 100%;
			height: 300px;
			background: url(../../assets/img/my-header-bg.png) no-repeat center center;
			background-size: cover;
			.header {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-flow: column;
				img {
					width: 150px;
					height: 150px;
					border: #ffc0c0 1px solid;
					border-radius: 50%;
				}
				span {
					display: block;
					margin-top: 20px;
					font-size: 28px;
					color: #000000;
				}
			}
		}
		.my-order{
			width: 100%;
			padding: 30px 20px;
			box-sizing: border-box;
			background: #fff;
			display: flex;
			align-items: center;
			position: relative;
			border-bottom: 1px #f0f0f0 solid;
			span:nth-child(1){
				font-size: 28px;
				color: #333333;
			}
			span:nth-child(2){
				font-size: 24px;
				color: #868686;
				position: absolute;
				right: 50px;
			}
			span:nth-child(3){
				position: absolute;
				right: 20px;
				i{
					color: #868686;
					font-size: 30px;
				}
			}
		}
		.order-state{
			width: 100%;
			display: flex;
			height: 140px;
			padding: 0 20px;
			box-sizing: border-box;
			background: #fff;
			justify-content: space-around;
			align-items: center;
			.state-wrapper{
				display: flex;
				flex-flow: column;
				text-align: center;
				span{
					i{
						font-size: 46px;
						color: #e52f46;
						font-weight: 900;
					}
				}
				span:nth-child(1){
					margin-bottom: 16px;
				}
				span:nth-child(2){
					font-size: 24px;
					color: #333333;
				}
			}
		}
		.my-other{
			width: 100%;
			margin-top: 20px;
			.order-wrapper{
				position: relative;
				align-items: center;
				display: flex;
				background: #fff;
				width: 100%;
				padding: 0 20px;
				box-sizing: border-box;
				height: 90px;
				border:  1px #f0f0f0 solid;
				span:nth-child(1){
					display: block;
					width: 50px;
					i{
						font-size: 40px;
						color: #999999;
					}
				}
				span:nth-child(2){
					font-size: 28px;
					color: #333333;
					display: block;
					margin-left:20px ;
				}
				span:nth-child(3){
					position: absolute;
					right: 20px;
					i{
						font-size: 30px;
						color: #999999;
					}
				}
			}
		}
	}
</style>