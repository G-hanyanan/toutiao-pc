// 全局注册自定义组件

import layoutAside from '@/components/home/layout-aside.vue'

export default {
  install: function (Vue) {
    Vue.component('layout-aside', layoutAside)
  }
}
