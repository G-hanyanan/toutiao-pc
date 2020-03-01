import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui' // 引入Element-ui框架
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import '@/styles/index.less' // 引入初始化less文件

Vue.config.productionTip = false
Vue.use(ElementUi) // 全局注册ElementUi
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
