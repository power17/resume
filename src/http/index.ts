import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import axios from 'axios'
class Request {
    instance: AxiosInstance
    constructor (config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.instance.interceptors.request.use((config) => {
            return config
        })
        this.instance.interceptors.response.use((res) => {
            if(res.status < 200 || res.status >= 300) ElMessage.error('接口请求异常')
            if(res.data.data.data.status < 200 || res.data.data.data.status >= 300) ElMessage.error('后台服务报错')
            return res
        })

       

    }
    request(config: AxiosRequestConfig) {
        // 请求头带上token
        if(!config.headers) {
            config.headers = {}
            config.headers.Authorization= 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjE0MTA4Mzc5ODFAcXEuY29tIiwicm9sZXMiOlsiVXNlciJdLCJpYXQiOjE2NzY1NTE0NDMsImV4cCI6MTcxMjU1MTQ0M30.tgWxEgiKShSmdfF7dPqPu-K-qlp8VQbU0MG9Byl0QEA'
        }   
        return new Promise((resolve, reject) => {
            this.instance
                .request(config)
                .then(res => {
                    resolve(res.data.data.data)
                }).catch(err => {
                    reject(err)
                })
        })
     
    }
}

export default Request