import { defineStore } from 'pinia'
export const useUserInfoStore = defineStore('userInfoStore', () => {
    const userInfo = ref <any>('11')
    const saveUserInfo = (userInfoObj: any) => {
        userInfo.value =  userInfoObj
    }
    return {
        userInfo,
        saveUserInfo
    }
})