import { defineStore } from 'pinia'

export const useTokenStore = defineStore('useTokenStore', () => {
    const token = ref<string | null > (localStorage.getItem('token'))
    const saveToken = (token: string) => {
        localStorage.setItem('token', token)
    }
    return {
        token,
        saveToken
    }
})