<template>
	<view>
		  <!-- #ifdef MP-WEIXIN -->
		<uni-search-bar :focus="true" v-model="content" :radius="20"  @focus="doSearch()"
		placeholder="请搜索你想要的内容" @cancel="navBack()" @confirm="doSearch" ref="searchBar"
		>
		</uni-search-bar>
		<!--#endif -->
		<key-word @search="doSearch"></key-word>
	</view>
</template>

<script>
	let currentWebview=null
	import keyWord from './components/keyword.vue'
	export default {
		components:{
			keyWord
		},
		data() {
			return {
				content:'',
				params:{},
			}
		},
		methods: {
			doSearch(obj){
			console.log(obj)
			console.log('search')	
			console.log(this.content)
			//#ifdef MP-WEIXIN
			this.content=obj.value
			//#endif
			},
		},
		onLoad(options){
			//#ifdef APP-PLUS
		     currentWebview = this.$scope.$getAppWebview()
			//#endif
			console.log(options)
			if(options.params){
				const params=JSON.parse(options.params)
			    console.log(options.params)
			}else{
				//#ifdef APP-PLUS
				currentWebview.setTitleNViewSearchInputFocus(true);		
			    //#endif
			}
		},
		onNavigationBarButtonTap (e){
		this.navBack()
		},
		onNavigationBarSearchInputChanged(e){
			this.content=e.text
		},
		onNavigationBarSearchInputConfirmed(e){
			console.log(this.content)
			//#ifdef APP-PLUS
			currentWebview.setTitleNViewSearchInputFocus(true)
			this.doSearch()
			//#endif
		}
	}
</script>

<style>

</style>
