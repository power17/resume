import Request from './index'
import CONFIG from '@/config'


const http = new Request({
    baseURL: CONFIG.serverAddress,
    timeout: 10000,
    validateStatus: function (status) {
        switch(status) {
            case 401: 
                ElMessage.error('用户信息过期或无权限，请重新登录')
                break
        }
        return status >= 200 && status < 300; // 默认值
    },

} )

export default http