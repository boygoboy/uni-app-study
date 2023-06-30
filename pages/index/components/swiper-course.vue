<template>
	<view class="swiper-box">
		<view class="title-box row center space-between">
			<view class="title-item">
				<text class="title">热门推荐</text>
				<text class="word">HOT</text>
			</view>
			<view class="action-btn">
				<text>全部</text>
				<text class="iconfont icon-right"></text>
			</view>
		</view>
             <swiper class="swiper" next-margin="50rpx">
				<swiper-item class="swiper-item" v-for="(item,index) in 2" :key="index">
					{{item}}
				</swiper-item>
			</swiper>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	.swiper-box{
		margin-top: 20rpx;
		.title-box{
			.title-item{
				.title{
					margin-right: 14rpx;
					font-size: 46rpx;
					font-weight: 500;
					
				}
				.word{
					background-image: linear-gradient(to right,$mxg-color-orange,$mxg-text-color-red);
					border-radius: 30rpx 30rpx 30rpx 0rpx;
					padding: 0 10rpx;
				}
			}
			.action-btn{
				color: $mxg-text-color-grey;
				.icon-right{
					font-size: 26rpx;
				}
			}
		}
		.swiper{
			height: 800rpx;
			background-color: red;
			.swiper-item{
				padding: 20rpx;
			}
		}
	}
</style>