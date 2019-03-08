import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import './assets/css/iconfont.css'
import './assets/css/index.css'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import mTabbar from './components/tabbar/tabbar';
import mTabbarItem from './components/tabbarItem/tabbarItem';
import shoppingCart from './components/shoppingCart/shoppingCart';
Vue.config.productionTip = false
Vue.component('mTabbar', mTabbar)
Vue.component('shoppingCart', shoppingCart)
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.headers.common['token'] = "f4c902c9ae5a2a9d8f84868ad064e706"
//设置请求头
axios.defaults.headers.post["Content-type"] = "application/json"
Vue.use(require('vue-wechat-title'))
Vue.prototype.baseURL = process.env.API_ROOT

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})