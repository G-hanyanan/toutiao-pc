// axios拦截器 统一注入token
import axios from 'axios'

// 配置axios默认地址，
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

axios.interceptors.request.use(function (config) {
  // axios统一设置token
  const token = window.localStorage.getItem('user-token')
  config.headers.Authorization = `Bearer ${token}`
  // 请求成功执行
  return config
}, function (err) {
// 请求失败执行
  Promise.reject(err)
})

export default axios
