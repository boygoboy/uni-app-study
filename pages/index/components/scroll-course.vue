<template>
	<view>
		<list-box :name="name" :word="word">
			<scroll-view class="scroll-box" scroll-x="true">
				<view class="scroll-item" v-for="(item,index) in courseData" :key="index">
					<course-item
					:isColumn="true" :item="item"></course-item>
				</view>
			</scroll-view>
		</list-box>
	</view>

</template>

<script>
	import listBox from './list-box.vue'
	import courseItem from '@/components/common/course-item.vue'
	import courseData from '@/mock/courseData.js'
	export default {
		components: {
			listBox,courseItem
		},
		props: {
			name: {
				type: String,
				default: '近期上新'
			},
			word: {
				type: String,
				default: 'NEWS'
			},
			courseData:{
				type:Array,
				default:()=>courseData
			}
		}
	}
</script>

<style lang="scss" scoped>
	.scroll-box{
		margin-top: 10rpx;
		height: 380rpx;
		white-space: nowrap;
		.scroll-item{
			display: inline-block;
			margin-right: 20rpx;
			padding: 0 10rpx;
			width: 360rpx;
			height: 320rpx;
			background-color: #fff;
			padding: 0 10rpx;
			border-radius: 20rpx;
			box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
		}
	}
</style>
