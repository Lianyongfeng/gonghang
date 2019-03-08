import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home'
import Classify from '../pages/classify/classify'
import My from '../pages/my/my'
import Shopcart from '../pages/shopcart/shopcart'
import Activity from '../pages/activity/activity'
import Commodity from '../pages/commodity/commodity'
import Order from '../pages/order/order'
import Pay from '../pages/pay/pay'
import Sure from '../pages/sure/sure'
import Remind from '../pages/remind/remind'
import Address from '../pages/address/address'
import newAddress from '../pages/newaddress/newaddress'
import Invoice from '../pages/invoice/invoice'
import Collection from '../pages/collection/collection'
import Coupon from '../pages/coupon/coupon'
import allOrder from '../pages/allorder/allorder'
import Footprint from '../pages/footprint/footprint'
import Edit from '../pages/edit/edit'
Vue.use(Router)
export default new Router({
	routes: [{
			path: '/home',
			component: Home,
			meta: {
				title: '首页',
				index: 0,
				showFooter: true
			},
			children: [

			]
		},
		{
			path: '/classify',
			component: Classify,
			meta: {
				title: '分类',
				index: 1,
				showFooter: true
			},
		},
		{
			path: '/my',
			component: My,
			meta: {
				title: '我的',
				index: 0,
				showFooter: true
			},
		},
		{
			path: '/shopcart',
			component: Shopcart,
			meta: {
				title: '购物车',
				index: 0,
				showFooter: false
			},
		},
		{
			path: '/activity',
			component: Activity,
			meta: {
				title: '活动',
				index: 0,
				showFooter: true
			},
		},
		{
			path: '/commodity/:id',
			component: Commodity,
			meta: {
				title: '详情',
				index: 1,
				showFooter: false
			},
		},
		{
			path: '/order',
			component: Order,
			name:'Order',
			meta: {
				title: '确认订单',
				index: 2,
				showFooter: false
			},
		},
		{
			path: '/pay',
			component: Pay,
			name:'Pay',
			meta: {
				title: '订单详情',
				index: 2,
				showFooter: false
			},
		},
		{
			path: '/sure',
			component: Sure,
			meta: {
				title: '确认收货',
				index: 2,
				showFooter: false
			},
		},
		{
			path: '/remind',
			component: Remind,
			meta: {
				title: '提醒发货',
				index: 2,
				showFooter: false
			},
		},
		{
			path: '/address',
			component: Address,
			meta: {
				title: '地址管理',
				index: 1,
				showFooter: false
			},
		},
		{
			path: '/newaddress',
			component: newAddress,
			meta: {
				title: '添加地址',
				index: 2,
				showFooter: false
			},
		},
		{
			path: '/invoice',
			component: Invoice,
			meta: {
				title: '发票信息',
				index: 2,
				showFooter: false
			},
		},
		{
			path: '/collection',
			component: Collection,
			meta: {
				title: '我的收藏',
				index: 1,
				showFooter: false
			},
		},
		{
			path: '/coupon',
			component: Coupon,
			meta: {
				title: '我的优惠券',
				index: 1,
				showFooter: false
			},
		},
		{
			path: '/allorder',
			component: allOrder,
			meta: {
				title: '我的订单',
				index: 1,
				showFooter: false
			},
		},
		{
			path: '/footprint',
			component: Footprint,
			meta: {
				title: '我的足迹',
				index: 1,
				showFooter: false
			},
		},
		{
			path: '/edit',
			component: Edit,
			meta: {
				title: '地址管理',
				index: 1,
				showFooter: false
			},
		},
		{
			path: '/',
			redirect: '/home'
		},
	],
//	mode: 'history',
})