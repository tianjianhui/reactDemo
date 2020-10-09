import Axios from 'axios'
const axios = Axios.create({
    timeout: 10000,
    baseURL: 'https://www.fastmock.site/mock/ff32b18bb678ebfbf31bc51c04360048/test/api',
    headers: {
      'Content-Type': 'application/json'
    }
})
// 请求拦截器
axios.interceptors.request.use(config => {
    console.log('config', config)
    return config
})
// 响应拦截器
axios.interceptors.response.use(res => {
    console.log('res', res)
    return res
})
export default axios