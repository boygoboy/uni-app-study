<template>
	<view class="banner-box">
		<view class="banner-bg" 
		<!-- #ifdef APP-PLUS || H5 -->
				:style="gradientStyle"
		<!-- #endif -->
		<!-- #ifdef MP -->
		     :style="{backgroundImage: `linear-gradient(${bcgcolor} 50%, #F8F9FB)`}"
		<!-- #endif -->
		></view>
			<swiper  circular :indicator-dots="true" class="banner-swip"
			 :autoplay="true" :interval="3000" 
			 indicator-color="rgba(255,255,255,0.5)" 
			 indicator-active-color="#ffffff"
			 :current="swiperIndex"
			 @change="handleSwiperChange"
				:duration="800">
				<swiper-item v-for="(item,index) in swiperdata" 
				class="swiper-item"
				:key="index">
				<image :src="item.imageUrl"></image>
				</swiper-item>
			</swiper>
	</view>
</template>

<script>
	export default{
		props:{
			swiperdata:{
				type:Array,
				default:()=>[
					{
					id: 1,
					imageUrl: "/static/images/banner1.jpg",
					background: "#45328c",
					advertUrl: '/pages/course/course-details'
					},
					{
					id: 2,
					imageUrl: "/static/images/banner2.jpg",
					background: "#006C00",
					advertUrl: '/pages/course/course-details'
					},
					{
					id: 3,
					imageUrl: "/static/images/banner3.jpg",
					v: "#0072B7",
					advertUrl: '/pages/course/course-details'
					}
				]
			}
		},
		data(){
			return{
				swiperIndex:0,
				bcgcolor:''
			}
		},
		methods:{
			handleSwiperChange(e){
				this.swiperIndex=e.detail.current
				this.bcgcolor=this.swiperdata[this.swiperIndex].background?this.swiperdata[this.swiperIndex].background:'#345dc2'
			}
		},
		watch:{
			swiperdata:{
				handler(val){
					if(val&&val.length>0){
						this.swiperIndex=0
						this.bcgcolor=this.swiperdata[0].background
					}
				},
				immediate:true
			}
		},
 computed: {
	 // #ifdef APP-PLUS || H5
	 gradientStyle() {
	   return {
	     backgroundImage: `linear-gradient(${this.bcgcolor} 50%, #F8F9FB)`
	   }
	 }
	 // #endif

  }
	}
</script>

<style lang="scss">
	.banner-box {
		position: relative;
         padding-top: 120rpx;
		 /* #ifdef APP-PLUS */
		 padding-top: calc(var(--status-bar-height) + 120rpx);
		 /* #endif */
		.banner-bg {
			height: 470rpx;
			/* #ifdef APP-PLUS */
			height: calc(var(--status-bar-height) + 470rpx);
			/* #endif */
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			transition: .5s;
		}

		.banner-swip {
			height: 350rpx;
		    width: 100%;
			.swiper-item{
				height: 100%;
				width: 100%;
				padding: 0 30rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 15rpx;
				}
			}
		}

	}
</style>