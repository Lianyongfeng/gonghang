<template>
	<div class="activity-wrapper">
		<div class="title">
			<span><i class="iconfont icon-jiantou-copy"></i></span>
			<span>活动</span>
			<span>
				<i class="iconfont icon-dianhua"></i>
			</span>
		</div>
		<div class="activity-content" v-for="(item,index) in activity">
			<div class="activity-title">
				<span>{{item.title}}</span>
				<span><i class="iconfont icon-icon1"></i></span>
			</div>
			<div class="activity-bg">
				<img :src="web + item.thumb"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activity: [],
				web:''
			}
		},
		mounted() {
			this.web = localStorage.getItem('web');
			this.$axios.post('http://tigergti.cs.jihuliwu.cn/home/index/article').then(response => {
				var that = this
				that.activity = response.data.data.article_list
				console.log(that.activity)
			}, response => {
				console.log('数据加载失败')
			})
		}
	}
</script>

<style lang="less">
	html{
		background: #f5f5f5;
	}
	.activity-wrapper{
		width: 100%;
		height: 100%;
		padding-bottom: 120px;
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
		.activity-content{
			width: 100%;
			margin-top: 90px;
			margin-bottom: 20px;
			.activity-title{
				width: 100%;
				padding: 20px;
				box-sizing: border-box;
				background: #fff;
				display: flex;
				align-items: center;
				position: relative;
				span:nth-child(1){
					font-size: 28px;
					color: #444444;
				}
				span:nth-child(2){
					position: absolute;
					right: 20px;
					color: #d73f3e;
				}
			}
			.activity-bg{
				width: 100%;
				height: 270px;
				img{
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}
</style>