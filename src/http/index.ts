import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import axios from 'axios'
class Request {
    instance: AxiosInstance
    constructor (config: AxiosRequestConfig) {
        this.instance = axios.create(config)

       

    }
    request(config: AxiosRequestConfig) {
        return new Promise((resolve, reject) => {
            this.instance
                .request(config)
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        })
     
    }
}

export default Request