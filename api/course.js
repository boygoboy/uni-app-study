import request from '@/common/js/request.js'


export default{
	getCategoryList(){
		return request({
			url:'/article/api/category/label/list',
		})
	},
	
	getAdverList(position=1){
		return request({
			url:`/article/api/advert/show/${position}`
		})
	},
	getList(query,current=1,size=10){
		return request({
			url:'/course/api/course/search',
			method:'post',
			data:{
				...query,
				current,
				size
			}
		})
	}
}