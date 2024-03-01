<template>
	<list-box :name="name" :word="word">
		<swiper class="swiper" next-margin="50rpx" :style="{height:`${rows*200}rpx`}">
			<swiper-item class="swiper-item" v-for="(item,index) in columns" :key="index">
				<course-item v-for="(item1,index1) in courseData.slice(index*rows,(index+1)*rows)"
				 :key="index1" :item="item1"></course-item>
			</swiper-item>
		</swiper>
	</list-box>
</template>

<script>
	import courseItem from '@/components/common/course-item.vue'
	import courseData from '@/mock/courseData.js'
	import listBox from './list-box.vue'
	export default{
		components:{
			courseItem,listBox
		},
		props:{
			rows:{
				type:Number,
				default:4
			},
			columns:{
				type:Number,
				default:2
			},
			courseData:{
				type:Array,
				default:()=>courseData
			},
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
		.swiper{
			height: 800rpx;
			background-color: #fff;
			.swiper-item{
				padding: 20rpx;
			}
		}
</style>