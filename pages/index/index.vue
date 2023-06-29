<template>
	<view>
		<!-- #ifdef MP -->
		<!-- 搜索框在小程序中显示 -->
		<search-input></search-input>
		<!-- #endif -->
	</view>
</template>

<script>
	import searchInput from '@/components/common/search-input.vue'
	export default {
		components: {
			searchInput
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

</style>