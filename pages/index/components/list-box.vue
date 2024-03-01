<template>
	<view class="swiper-box">
		<view class="title-box row center space-between">
			<view class="title-item">
				<text class="title">{{name}}</text>
				<text class="word">{{word}}</text>
			</view>
			<view class="action-btn">
				<text>全部</text>
				<text class="iconfont icon-right"></text>
			</view>
		</view>
<slot></slot>
	</view>
</template>

<script>
	export default{
		props:{
			name:{
				type:String,
				default:'热门推荐'
			},
			word:{
				type:String,
				default:'HOT'
			}
		}
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
					color: #fff;
				}
			}
			.action-btn{
				color: $mxg-text-color-grey;
				.icon-right{
					font-size: 26rpx;
				}
			}
		}
	}
</style>