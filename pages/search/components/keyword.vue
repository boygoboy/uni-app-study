<template>
	<view class="key-word">
	 <view class="hot-search">热门搜索</view>
	 <view class="tag-list">
		 <view v-for="(item,index) in hotList" :key="index" @click="clickTagHandler(item)">
			 {{item}}
		 </view>
	 </view>
	 <view class="history-search">
		 <view class="title">历史搜索</view>
		 <view class="clear" @click="clearHistory">清空</view>
	 </view>
	 <view class="tag-list">
		 <view v-for="(item,index) in historyList" :key="index" @click="clickTagHandler(item)">
			 {{item}}
		 </view>
	 </view>
	</view>
</template>

<script>
	const key='histoty_list'
	export default{
		data(){
			return{
				hotList:['Java', 'SpringBoot', 'SpringCloud', 'Python', 'Vue', 'React'],
				historyList:uni.getStorageSync(key)
			}
		},
		methods:{
			clickTagHandler(item){
				//#ifdef APP-PLUS
				const currentWebview = this.$mp.page.$getAppWebview();
				currentWebview.setTitleNViewSearchInputText(item);
				//#endif
				//#ifdef H5
				const placeholder = document.querySelector('.uni-page-head-search-placeholder')
				placeholder.innerHTML = ''
				const inputSearch = document.querySelector('.uni-input-input[type=search]');
				inputSearch.value = item;
				//#endif
				this.$emit('search',{value:item})
			},
			clearHistory(){
				this.historyList=[]
				uni.removeStorageSync(key)
			}
		}
	}
</script>

<style lang="scss">
	.key-word{
		padding: 25rpx;
		.hot-search{
			font-size: 30rpx;
			color: #222222;
		}
		.tag-list{
			display: flex;
			flex-wrap: wrap;
			margin-top: 20rpx;
			margin-bottom: 60rpx;
			view{
				font-size: 25rpx;
				color: #222222;
				border: 1px solid #222222;
				margin: 10rpx;
				padding: 6rpx 15rpx;
				border-radius: 8rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
		.history-search{
			display: flex;
			justify-content: space-between;
			.title{
				font-size: 30rpx;
				color: #222222;
			}
			.clear{
				font-size: 28rpx;
				color: #bbbbbc;
			}
		}
	}
</style>