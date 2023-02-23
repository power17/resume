import Request from './index'
import CONFIG from '@/config'

const http = new Request({
    baseURL: CONFIG.serverAddress,
    timeout: 10000

} )

export default http