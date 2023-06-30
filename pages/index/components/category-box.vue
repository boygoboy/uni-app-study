<template>
	<view class="category-box">
		<view v-for="(item,index) in categorydata.slice(0,7)" :key="item.id">
			{{item.name}}
		</view>
		<view>全部分类</view>
	</view>
</template>

<script>
	export default{
		props:{
			categorydata:{
				type:Array,
				default:()=>[
					{
					id: 1,
					name: 'Java',
					},
					{
					id: 2,
					name: '前端',
					},
					{
					id: 3,
					name: 'Python',
					},
					{
					id: 4,
					name: 'UI设计',
					},
					{
					id: 5,
					name: '运维',
					},
					{
					id: 6,
					name: '人工智能',
					},
					{
					id: 7,
					name: '实战课程',
					}
				]
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.category-box{
		display:flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding:20rpx 30rpx 0rpx 30rpx;
		view{
			width: 160rpx;
			 height: 70rpx;
			 line-height: 70rpx;
			 background-color: $mxg-color-grey;
			 border-radius: 20rpx;
			 margin-bottom: 20rpx;
			 font-size: 26rpx;
			 overflow: hidden;
			 text-align: center;
		}
	}
</style>