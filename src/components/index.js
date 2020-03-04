// 全局注册自定义组件

import layoutAside from '@/components/home/layout-aside.vue'
import layoutHeader from '@/components/home/layout-header.vue'

export default {
  install: function (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHeader)
  }
}
