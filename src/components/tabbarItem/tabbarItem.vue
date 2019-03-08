<template>
	<div class="itemWarp flex_mid" @click='changePage'>
		<span v-show='!bol'>
  			<slot name='normalImg'></slot>
 		</span>
		<span v-show='bol'>
  			<slot name='activeImg'></slot>
 		</span>
		<span v-text='txt' v-if="!bol" style="color:#999 ;"></span>
		<span v-text='txt' v-else style="color:#e52f46 ;"></span>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'Item',
		props: {
			txt: {
				type: String
			},
			page: {
				type: String
			},
			sel: {
				type: String
			}
		},
		computed: {
			bol: function() {
				if(this.sel == this.page) {
					return true;
				}
				return false;
			}
		},
		methods: {
			changePage: function() {
				//点击跳转对应的页面
				this.$router.push('/' + this.page);
				this.$emit('change', this.page)
			}
		}
	}
</script>
<style lang="less">
	.itemWarp {
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		span {
			font-size: 20px;
		}
	}
</style>