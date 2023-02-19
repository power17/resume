import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const Index = () => import('@/views/index/index.vue');
const Template = () => import('@/views/template/index.vue');
const Word = () => import('@/views/word/index.vue');
const WordPreview = () => import('@/views/wordPreview/index.vue');
const PPT = () => import('@/views/ppt/index.vue');
const PPTPreview = () => import('@/views/pptPreview/index.vue');
// 软件分享
const SoftShare = () => import('@/views/softShare/index.vue');
const SoftDetail = () => import('@/views/softDetail/index.vue');

// 图片压缩
const ImgCompress = () => import('@/views/imgCompress/index.vue');
// 私有部署
const WebCode = () => import('@/views/webCode/index.vue');

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
	   {
	      path: '/template',
	      name: 'Template',
	      meta: {
	        title: '模板列表',
	        keepAlive: true,
	        isShowComNav: true,
	        requireLogin: false
	      },
	      component: Template
	    },
	    {
	      path: '/word',
	      name: 'Word',
	      meta: {
	        title: '简历模板',
	        keepAlive: true,
	        isShowComNav: true,
	        requireLogin: false
	      },
	      component: Word
	    },
	    {
	      path: '/ppt',
	      name: 'PPT',
	      meta: {
	        title: 'PPT模板',
	        keepAlive: true,
	        isShowComNav: true,
	        requireLogin: false
	      },
	      component: PPT
	    },
	    {
	      path: '/soft',
	      name: 'Soft',
	      meta: {
	        title: '软件分享',
	        keepAlive: true,
	        isShowComNav: true,
	        requireLogin: false
	      },
	      component: SoftShare
	    },
	    {
	      path: '/softDetail',
	      name: 'SoftDetail',
	      meta: {
	        title: '软件详情',
	        keepAlive: true,
	        isShowComNav: true,
	        requireLogin: false
	      },
	      component: SoftDetail
	    },
	    {
	      path: '/imgCompress',
	      name: 'ImgCompress',
	      meta: {
	        title: '图片压缩',
	        keepAlive: true,
	        isShowComNav: true,
	        requireLogin: false
	      },
	      component: ImgCompress
	    },
	    {
	      path: '/webCode',
	      name: 'WebCode',
	      meta: {
	        title: '私有部署',
	        keepAlive: true,
	        isShowComNav: true,
	        requireLogin: false
	      },
		   component: WebCode
		},
]
const router = createRouter({
	routes,
	history: createWebHistory()
})

export default router

