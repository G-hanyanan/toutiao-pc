// 全局注册自定义组件

import layoutAside from '@/components/home/layout-aside.vue'
import layoutHeader from '@/components/home/layout-header.vue'
import breadCrumb from '@/components/bread-crumb'

export default {
  install: function (Vue) {
    Vue.component('layout-aside', layoutAside) // 侧边导航栏组件
    Vue.component('layout-header', layoutHeader) // 头部组件
    Vue.component('bread-crumb', breadCrumb) // 封装面包屑组件
  }
}
