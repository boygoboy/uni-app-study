<template>
	<view>
		<!-- #ifdef MP -->
		<!-- 搜索框在小程序中显示 -->
		<search-input></search-input>
		<!-- #endif -->
		<mxg-banner></mxg-banner>
		
		<category-box></category-box>
		<view class="list-box">
			<swiper-course></swiper-course>
		</view>
	</view>
</template>

<script>
	import searchInput from '@/components/common/search-input.vue'
	import mxgBanner from '@/components/common/mxg-banner.vue'
	import categoryBox from  './components/category-box.vue'
	import swiperCourse from './components/swiper-course.vue'
	export default {
		components: {
			searchInput,mxgBanner,categoryBox,
			swiperCourse
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
         this.switchPlacelolder()
		},
		methods: {
			switchPlacelolder() {
				// #ifdef APP-PLUS
				const switchData = ['html', 'css', 'js', 'vue', 'react', 'node']
				const currentWebview = this.$scope
			.$getAppWebview(); //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
				//设置searchInput的样式
				let index = 0
				currentWebview.setStyle({
					"titleNView": {
						"searchInput": {
							"placeholder": switchData[index]
						}
					}
				});
				setInterval(() => {
					index=index<switchData.length?++index:0
					currentWebview.setStyle({
						"titleNView": {
							"searchInput": {
								"placeholder": switchData[index]
							}
						}
					});
				}, 5000)
				// #endif
			}
		}
	}
</script>

<style lang="scss">
.list-box{
	padding: 0 30rpx;
}
</style>