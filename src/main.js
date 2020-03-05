import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/permission'
import ElementUi from 'element-ui' // 引入Element-ui框架
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import '@/styles/index.less' // 引入初始化less文件
import axios from '@/utils/requery'
import Components from '@/components'

// 全局注册自定义组件
Vue.use(Components)

// 全局引用axios
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(ElementUi) // 全局注册ElementUi
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
