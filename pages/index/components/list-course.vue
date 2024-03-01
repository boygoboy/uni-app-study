<template>
	<list-box :name="name" :word="word">
		<course-item v-for="(item,index) in courseData" :key="index"
		:item="item"></course-item>
	</list-box>
</template>

<script>
	import listBox from './list-box.vue'
	import courseData from '@/mock/courseData.js'
	import courseItem from '@/components/common/course-item.vue'
	export default{
		components:{
			listBox,courseItem
		},
		props:{
			name:{
				type:String,
				default:null
			},
			word:{
				type:String,
				default:null
			},
			courseData:{
				type:Array,
				default:()=>courseData
			}
		}
	}
</script>

<style>
</style>