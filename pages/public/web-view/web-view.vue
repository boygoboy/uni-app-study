<template>
	<view>
	<web-view :src="url" v-if="isOpen()"></web-view>
	<view v-else class="tip-box">
		<text>如需浏览，请长按网址复制后使用浏览器访问：</text>
		<text selectable>{{url}}</text>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:''
			}
		},
		methods: {
			isOpen(){
				if(this.url){
					return this.url.indexOf('mengxuegu.com')!==-1
				}
			}
		},
		onLoad(options){
			this.url=options.url
		}
	}
</script>

<style lang="scss">
.tip-box{
	position: relative;
	top: 200rpx;
	margin: 0 auto;
}
</style>
