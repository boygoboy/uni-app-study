<template>
<view class="course-item" :class="isColumn?'column':'row'">
<view class="left-box">
	<image :src="item.mainImage" lazy-load class="image-avator"></image>
<view class="item-time">
	{{item.totalTime}}
</view>
</view>
<view class="right-box">
	<view class="course-title">
		{{item.title}}
	</view>
	<view class="course-info">
		<view class="name iconfont icon-laoshi">{{item.nickName}}</view>
		<view class="count">
			<view class="money iconfont" v-if="item.isFree">
				免费
			</view>
			<view class="money iconfont icon-moneybag" v-else>
				{{item.priceOriginal||item.priceDiscount}}
			</view>
			<view class="user-count iconfont icon-video">
				{{item.studyTotal}}
			</view>
		</view>
	</view>
</view>
</view>
</template>

<script>
	
	export default{
		props:{
			isColumn:{
				type:Boolean,
				default:false
			},
			item:{
				type:Object,
				default:()=>({
					id: 1,
					mainImage:`../../static/images/banner3.jpg`,
					totalTime: '00:59:08',
					title: 'SpringBoot项目实战教程SpringCloud OAuth2 Vue分布式微服务架构',
					nickName: '梦老师1', // 课程老师
					isFree: 0, //是否免费：0收费，1免费
					priceOriginal: 999, // 原价
					priceDiscount: 699.9, // 优惠价
					studyTotal: 899
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.course-item{
		display:flex;
		padding-bottom: 10rpx;
		margin-bottom: 10rpx;
	    border-bottom: solid 1rpx #eaeaea;
		.left-box{
			position: relative;
			margin-right: 20rpx;
			width: 290rpx;
		     .row{
				 display: flex;
				 flex-direction: row;
			 }
			 .column{
				 display: flex;
				 flex-direction: column;
			 }
			.image-avator{
				width: 290rpx;
				height: 160rpx;
				border-radius: 10rpx;
			}
			.item-time{
				font-size: 20rpx;
				color: #fff;
				background-color: rgba(51, 51, 51, .4);
				padding: 0 5rpx;
				position: absolute;
				right: 1rpx;
				bottom: 1rpx;
			}
		}
		.right-box{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 290rpx;
			.course-title{
				font-size: 32rpx;
				overflow:hidden;
				text-overflow:ellipsis;
				display:-webkit-box;
				height: 78rpx;
				-webkit-box-orient:vertical;
				-webkit-line-clamp:2;
				white-space: pre-wrap !important;
			}
			.course-info{
				.name{
					font-size: 22rpx;
					color: #ababab;
				}
				.count{
					display: flex;
					align-items: center;
					.money{
						width: 140rpx;
						color: $mxg-color-orange;;
					}
					.user-count{
						margin-top: 10rpx;
						font-size: 22rpx;
						
					}
				}
			}
		}
	}
</style>