import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
// 全局引入混合文件
import mixin from './common/mixin/mixin.js'
Vue.mixin(mixin)

import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif