import { defineStore } from 'pinia'
import { useUserInfoStore } from './user'
import { initResetFun } from '@/utils/storeUtils'
export interface IAppStore  {
	useUserInfoStore: ReturnType <typeof useUserInfoStore>,
}

const appStore:IAppStore = {} as IAppStore
export const initAppStore = () => {
	appStore.useUserInfoStore = useUserInfoStore()
	console.log(useUserInfoStore())
	 // 重写reset方法
	// initResetFun(appStore);
}

export default appStore

