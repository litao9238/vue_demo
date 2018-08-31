# vue_test

> this is test

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 目录说明
┌
─
└
├

┌── build  项目构建配置
├── config 项目属性配置
├── dist   项目打包目录
├── mocks  项目mocks配置
├── README.md       说明文件
├── index.html      前端模板挂载页面
├── package.json    node.js项目配置文件
└── src
    ├── App.vue     入口文件
    ├── main.js     主文件
    ├── assets      资源文件
    ├── axios       所有的API接口都统一配置在此地
    ├── components  公共组件
    ├── router      路由配置
    ├── store       状态管理
    ├── style       样式文件
    └── views       路由视图



新增依赖
一. less

	1. npm install less less-loader --save

	2. 在webpack.base.conf.js添加
		{
			test: /\.less$/,
			loader: "style-loader!css-loader!less-loader"
		}
	3. 在组件中的style 添加lang="less"

二. axios
	
	1. npm install axios --save
	
	2. main.js页引入
	
		import axios from "axios";
		
		Vue.prototype.axios = axios;
		
三. vuex

	1. npm install vuex --save
	
		具体参考
		入门介绍: https://www.jianshu.com/p/68e41dcb8361
		官方文档: https://vuex.vuejs.org/zh
		
四. Element-ui

	1. npm install element-ui --save
	
	2. main.js页引入
	
		完整引入
		import ElementUI from 'element-ui';
		import 'element-ui/lib/theme-chalk/index.css';
		
五. mock

	1. npm install mockjs --save-dev
	
	2. 在src目录下建立一个mock文件夹, 并在里面新建一个mock.js文件
	
	3. 在main页引入
	
		import "./mock/mock"
			
	4. 使用Mock对象创建假数据, 并提供相应接口, 具体查阅mock文档
	
	5. 在vue中请求上面接口地址
	
六. babel

	1. npm install --save-dev babel-plugin-syntax-dynamic-import
	
		安装后才可以在路由使用此方法设置动态路由
		const Home = () => import('../views/home/Home');