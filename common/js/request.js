import {msg} from './util.js'
let BASE_URL='/api'

//#ifndef H5
BASE_URL='https://mock.mengxuegu.com/mock/64db273df3137672a699ec86/mxg-education-app'
//#endif

const request=(options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method:options.method||'GET',
			data:options.data||{},
			timeout:8000,
			success:(res)=>{
				const code=res.data.code
				resolve(res.data)
			},
			fail:(err)=>{
				msg('接口请求失败')
				reject(err)
			}
		})
	})
}

export default request