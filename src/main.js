import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/permission'
import ElementUi from 'element-ui' // 引入Element-ui框架
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import '@/styles/index.less' // 引入初始化less文件
import axios from 'axios'
import Components from '@/components'

// 全局注册自定义组件
Vue.use(Components)

// 配置axios默认地址，全局引用
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(ElementUi) // 全局注册ElementUi
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
