import { defineStore } from 'pinia'
import { getUserInfoAsync } from '@/http/api/user'
export const useUserInfoStore = defineStore('userInfoStore', () => {
    const userInfo = ref <any>('11')
    const saveUserInfo = (userInfoObj: any) => {
        userInfo.value =  userInfoObj
    }
  
    const getAndUpdateUserInfo = async() => {
        const email = '1410837981@qq.com'
        const data = await getUserInfoAsync(email)
        console.log(data)

    }
    return {
        userInfo,
        saveUserInfo,
        getAndUpdateUserInfo
    }
})