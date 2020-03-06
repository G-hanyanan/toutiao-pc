// axios拦截器 统一注入token
import axios from 'axios'
import router from '@/router'
import JSONBig from 'json-bigint'

// 配置axios默认地址，
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 统一处理大数字问题
axios.defaults.transformResponse = [function (data) {
  // 如果data不为空，就返回一个处理过的大数字
  return data ? JSONBig.parse(data) : {}
}]

axios.interceptors.request.use(function (config) {
  // axios统一设置token
  const token = window.localStorage.getItem('user-token')
  config.headers.Authorization = `Bearer ${token}`
  // 请求成功执行
  return config
}, function (err) {
// 请求失败执行
  return Promise.reject(err)
})

axios.interceptors.response.use(function (response) {
  // 响应成功执行
  // 脱掉一层daat
  response.data = response.data.data
  // 返回响应数据
  return response
}, function (err) {
  // 响应失败执行
  // 统一处理401异常
  // 如果response.status === 401
  if (err.response.status === 401) {
    // 删除旧token
    localStorage.removeItem('user-token')
    // 返回登录页面重新获取token
    router.push('/login')
  }
  // 返回一个错误，否则cath接收不到数据
  return Promise.reject(err)
})

export default axios
