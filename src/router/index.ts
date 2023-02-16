import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const Index = () => import('../views/index/index.vue');
const routes:Array<RouteRecordRaw> = [
	{
	    path: '/',
	    name: 'Index',
	    meta: {
	      title: '首页',
	      keepAlive: true,
	      isShowComNav: false, // 是否显示公共的导航栏
	      requireLogin: false
	    },
	    component: Index
	  },
]
const router = createRouter({
	routes,
	history: createWebHistory()
})

export default router

