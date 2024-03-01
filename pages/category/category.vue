<template>
	<view class="category">
		<scroll-view  scroll-y="true" class="left noScorll">
				<view class="tab-box">
					<view class="tab" v-for="(item,index) in categoryList" :key="index"
					:class="activeIndex==index?'active':''"
					@click="switchTab(index,item)"
					>{{item.name}}</view>
				</view>		
		</scroll-view>
		<scroll-view  scroll-y="true" class="right noScorll">
		    <view class="tag-box">
				<view class="tag" v-for="(item,index) in searchtagList" :key="index"
				@click="toSearch(item)"
				>{{item.name}}</view>
			</view>		
		</scroll-view>
	</view>
</template>

<script>
	import api from '@/api/course.js'
	export default {
		data() {
			return {
				activeIndex:0,
				categoryList:[],
				searchtagList:[],
			}
		},
		methods: {
			async getCategotyList(index){
				let res=await api.getCategoryList()
				this.categoryList=res.data
				this.getLabelList(this.activeIndex)
			},
			async getLabelList(activeIndex){
				this.activeIndex=activeIndex
				this.searchtagList=this.categoryList[activeIndex].labelList
			},
			switchTab(index,item){
				this.activeIndex=index
				this.getLabelList(index)
			},
			toSearch(item,activeIndex){
				const params={
					labelId:item.id,
					name:item.name,
					activeIndex:this.activeIndex
				}
			  this.navTo(`/pages/search/search?params=${JSON.stringify(params)}`)	
			},
		},
		onNavigationBarButtonTap(e){
		if(e.index==0){
		  this.navTo('/pages/search/search')
		}	
		},
		onLoad(){
			this.getCategotyList()
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
}
.category{
	display: flex;
	height: 100%;
	.left{
		width: 230rpx;
		background-color: #f8f9fb;
		.tab-box{
			display: flex;
			flex-direction: column;
			justify-content: center;
			.tab{
				padding: 90rpx 10rpx;
				text-align: center;
				color: #8a8a8a;
				position: relative;
				&:before{ // 在.tab 分类前加上内容 |
				position: absolute;
				content: '';
				width: 0rpx;
				height: 0rpx;
				border-right: 6rpx solid $uni-color-primary;
				border-radius: 30rpx;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				transition: .3s;
				}
			}
			.active{
				font-size: 33rpx;
				font-weight: bold;
				color: $mxg-text-color-blue;
				&:before{
					height: 50rpx;
				}
			}
		}
	}
	.right{
		.tag-box{
			display: flex;
			flex-wrap: wrap;
			.tag{
				min-width: 160rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				border: solid 1px #afafaf;
				border-radius: 30rpx;
				margin: 20rpx 10rpx;
				padding: 0 10rpx;
				font-size: 28rpx;
			}
		}
	}
}
</style>
