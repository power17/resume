<template>
	<div class="nav-bar-box">
	    <logo-com
	      icon-color='#fff'>
		</logo-com>
		<div class="center">
			<el-menu
			    :default-active="route.name"
			    class="el-menu-demo"
			    mode="horizontal"
				 :ellipsis="false"
			    @select="handleSelect"
			  >
				   <template v-for="(item, index) in menuList" :key="item.path">
				          <template v-if="item.children">
				            <el-sub-menu
				              :index="item.name"
				              popper-class="navbar-popper-box"
				              :show-timeout="0"
				              :hide-timeout="100"
				            >
				              <template #title>{{ item.title }}</template>
				              <el-menu-item
				                v-for="(childItem, childIndex) in item.children"
				                :key="childItem.path"
				                :index="childItem.name"
				                >{{ childItem.title }}</el-menu-item
				              >
				            </el-sub-menu>
				          </template>
				          <template v-else>
				            <el-menu-item :index="item.name">{{ item.title }}</el-menu-item>
				          </template>
					</template>	  
			</el-menu>
		</div>
		 <div class="right">
		      <!-- 登录注册以及用户展示区域 -->
		      <div class="user-box">
				  <div  class="logon-register-box">
				            <el-button class="register-btn" >注册</el-button>
				            <el-button class="login-btn" type="primary">登录</el-button>
				  </div>
			  </div>
			  <div class="user-avatar-box">
				   <el-dropdown>
				            <span class="el-dropdown-link">
								<el-avatar :size="50" src="https://smallpig.site:9000/navigation/file-1662356569784.png" />	
						    </span>							  
							<template #dropdown>
							    <el-dropdown-menu>
							        <el-dropdown-item >个人中心</el-dropdown-item>
							        <el-dropdown-item >退出登录</el-dropdown-item>
							    </el-dropdown-menu>
							</template>
					</el-dropdown>
								  
			  </div>
					  
		</div>			
	</div>
</template>

<script setup lang="ts">
	 interface IBgcColor {
	    bgColor?: string;
	    fontColor?: string;
	    iconColor?: string;
	    position?: string;
	  }
	  const route = useRoute();
	  const props = withDefaults(defineProps<IBgcColor>(), {
	    bgColor: '',
	    fontColor: '',
	    iconColor: '#fff',
	    position: 'fixed'
	  });
	 // 菜单列表
	   const menuList = reactive([
	     {
	       iconfont: '',
	       name: 'Template',
	       title: '在线制作',
	       children: null,
	       path: '/template'
	     },
	     {
	       iconfont: '',
	       name: 'TemplateDownload',
	       title: '模板下载',
	       children: [
	         {
	           iconfont: '',
	           name: 'Word',
	           title: '简历模板',
	           children: null,
	           path: '/word'
	         },
	         {
	           iconfont: '',
	           name: 'PPT',
	           title: 'PPT模板',
	           children: null,
	           path: '/ppt'
	         }
	       ]
	     },
	     {
	       iconfont: '',
	       name: 'Resourceshare',
	       title: '资源分享',
	       children: [
	         {
	           iconfont: '',
	           name: 'Soft',
	           title: '软件分享',
	           children: null,
	           path: '/soft'
	         }
	       ]
	     },
	     {
	       iconfont: '',
	       name: 'OnlineTool',
	       title: '在线工具',
	       children: [
	         {
	           iconfont: '',
	           name: 'ImgCompress',
	           title: '图片压缩',
	           children: null,
	           path: '/imgCompress'
	         }
	       ]
	     },
	     {
	       iconfont: '',
	       name: 'WebCode',
	       title: '私有部署',
	       children: null,
	       path: '/webcode'
	     }
	   ]);
	const router = useRouter()   
	const handleSelect = (path: string) => {
		router.push({
			name: path
		})
	}
</script>

<style lang="scss" scoped>
  .nav-bar-box {
    display: flex;
    height: 70px;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    background-color: v-bind('bgColor');
    z-index: 10;
    user-select: none;
    padding: 0 60px;
    position: v-bind('props.position');
    top: 0;
    transition: all 0.3s;
	background: #2ddd9d;
    .center {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-menu {
        border: none;
        height: 100%;
        background-color: rgba(255, 255, 255, 0);
        display: flex;
        justify-content: center;
        align-items: center;
        .el-menu-item {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          color: v-bind('fontColor');
          padding: 0 15px !important;
          letter-spacing: 3px;
          font-size: 16px;
          border-bottom: 4px solid transparent;
          transition: all 0.3s;
          &:hover {
            // color: #2ddd9d;
            border-color: #2ddd9d;
            background-color: rgba(#ccc, 0.1);
          }
        }
        .el-sub-menu {
          height: 100%;
          color: v-bind('fontColor');
          border-bottom: 4px solid transparent;
          &:hover {
            border-bottom: 4px solid #2ddd9d !important;
            background-color: rgba(#ccc, 0.1);
          }
          :deep(.el-sub-menu__title) {
            letter-spacing: 3px;
            font-size: 16px;
            color: v-bind('fontColor');
            border: none;
            &:hover {
              background-color: rgba(#ccc, 0.1);
            }
          }
        }
        .is-active {
          background-color: rgba(255, 255, 255, 0);
          // color: #21a474;
          border-bottom: 4px solid #2ddd9d !important;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      .contact-me {
        cursor: pointer;
        margin-right: 15px;
        font-size: 14px;
        color: v-bind('iconColor');
      }
      .svg-icon {
        cursor: pointer;
      }
      .user-box {
        display: flex;
        .logon-register-box {
          display: flex;
          .el-button {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 30px;
            width: 65px;
          }
          .register-btn {
            margin-left: 15px;
          }
          .login-btn {
          }
        }
        .user-avatar-box {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 15px;
          .name-content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: v-bind('nameColor');
            background-color: v-bind('iconColor');
          }
        }
      }
    }
  }
</style>
<style lang="scss">
  .navbar-popper-box {
    overflow: hidden;
    border: none;
    border-radius: 0;
    .el-menu {
      padding: 0;
      min-width: 134px;
      .el-menu-item {
        height: 50px;
        font-size: 14px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 2px;
      }
    }
  }
</style>
