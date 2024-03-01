<template>
	<view>
		<!-- #ifdef MP -->
		<!-- 搜索框在小程序中显示 -->
		<search-input @click.native="navTo('/pages/search/search')"></search-input>
		<!-- #endif -->
		
		<mxg-banner :swiperdata="swiperdata"></mxg-banner>
		<!--
		 @init="mescrollInit" @down="downCallback" @up="upCallback"为固定值,不可删改(与mescroll-mixins保持一致)
		 :down="downOption" :up="upOption" 绝大部分情况无需配置 
		 :top="顶部偏移量" :bottom="底部偏移量" :topbar="状态栏" :safearea="安全区" (常用)
		// 此处支持写入原生组件 
		-->
			 <mescroll-body @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">	
		<category-box :categorydata="categorydata"></category-box>
		<view class="list-box">
			<swiper-course name="热门推荐" word="HOT" :rows="5" :columns="2" :courseData="hotData"></swiper-course>
				<scroll-course name="最近上新" word="NEWS" :courseData="newData"></scroll-course>
		   <swiper-course name="免费精选" word="FREE" :rows="4" :columns="2" :courseData="freeData"></swiper-course>
		<list-course name="付费精品" word="NICE" :courseData="payData"></list-course>
		</view>
			 </mescroll-body>
	</view>
</template>

<script>
	import searchInput from '@/components/common/search-input.vue'
	import mxgBanner from '@/components/common/mxg-banner.vue'
	import categoryBox from  './components/category-box.vue'
	import swiperCourse from './components/swiper-course.vue'
	import scrollCourse from './components/scroll-course.vue'
	import listCourse from './components/list-course.vue'
	import api from '@/api/course.js'
 import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js"
	export default {
		mixins: [MescrollMixin], // 使用mixin
		components: {
			searchInput,mxgBanner,categoryBox,swiperCourse,scrollCourse,listCourse
		},
		data() {
			return {
				title: 'Hello',
				swiperdata:[],
				categorydata:[],
				hotData:[],
				newData:[],
				freeData:[],
				payData:[],
				downOption:{
					offset: 50
				},
				upOption:{
					// textLoading: '亲亲，在查询下页数据中',
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 10, // 每页数据的数量
					},
					textNoMore: '-- 我是有底线的 --', 
				}
			}
		},
		onLoad() {
         this.switchPlacelolder()
		this.getAdverList()
		},
		onNavigationBarButtonTap(e){
		 console.log(e)	
		 if(e.index==0){
			 uni.scanCode({
			 	success: function (res) {
			 		console.log('条码类型：' + res.scanType);
			 		console.log('条码内容：' + res.result);
					uni.navigateTo({
						url: `/pages/public/web-view/web-view?url=${res.result}`
					});
			 	}
			 });
		 }
		},
		onNavigationBarSearchInputClicked(e){
		   this.navTo('/pages/search/search')
		},
		methods: {
			switchPlacelolder() {
				// #ifdef APP-PLUS
				const switchData = ['html', 'css', 'js', 'vue', 'react', 'node']
				const currentWebview = this.$scope
			.$getAppWebview(); //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
				//设置searchInput的样式
				let index = 0
				currentWebview.setStyle({
					"titleNView": {
						"searchInput": {
							"placeholder": switchData[index]
						}
					}
				});
				setInterval(() => {
					index=index<switchData.length?++index:0
					currentWebview.setStyle({
						"titleNView": {
							"searchInput": {
								"placeholder": switchData[index]
							}
						}
					});
				}, 5000)
				// #endif
			},
			async getCategoryList(){
				let res=await api.getCategoryList()
				this.categorydata=res.data
			},
			async getAdverList(){
				let res=await api.getAdverList(1)
				this.swiperdata=res.data
			},
			async getHotData(){
				let res=await api.getList({sort:'hot'},1,8)
				this.hotData=res.data.records
			},
			async getNewData(){
				let res=await api.getList({sort:'new'},1,8)
				this.newData=res.data.records
			},
			async getFreeData(){
				let res =await api.getList({isFree:1},1,10)
				this.freeData=res.data.records
			},
			async getPayData(){
				let res=await api.getList({isFree:0})
				this.payData=res.data.records
			},
			async upCallback(page){
				console.log(page)
				console.log('上拉加载')
				if(page.num==1){
					this.getCategoryList()
					this.getHotData()
					this.getNewData()
					this.getFreeData()
					this.getPayData()
				}
				const res =await api.getList({isFree:1},page.num,page.size)
				const curList =res.data.records
				if(page.num==1){
					this.payData=[]
					
				}
				this.payData=this.payData.concat(curList)
				this.mescroll.endBySize(curList.length, res.data.total)
			}
		}
	}
</script>

<style lang="scss">
.list-box{
	padding: 0 30rpx;
}
</style>