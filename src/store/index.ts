import { defineStore } from 'pinia'
import { useUserInfoStore } from './user'
import { useTokenStore } from './token'
import { initResetFun } from '@/utils/storeUtils'
export interface IAppStore  {
	useUserInfoStore: ReturnType <typeof useUserInfoStore>,
	useTokenStore: ReturnType<typeof useTokenStore>
}

const appStore:IAppStore = {} as IAppStore
export const initAppStore = () => {
	appStore.useUserInfoStore = useUserInfoStore()
	appStore.useTokenStore = useTokenStore()
	 // 重写reset方法
	// initResetFun(appStore);
}

export default appStore

