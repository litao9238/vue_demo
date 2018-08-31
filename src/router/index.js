import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 主页
const Home = () => import('../views/home/Home');
// 组件部分
const Component = () => import('../views/Component/component');


export default new Router({
	routes: [{
		path: '/',
		name: 'Home',
		component: Home
	},{
		path: '/component',
		name: 'Component',
		component: Component
	}]
})