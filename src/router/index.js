import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home' // 引如home 组件
import Login from '@/views/login'
import secondHome from '@/views/home/second-home'

Vue.use(VueRouter)

const routes = [{
  // 默认地址，转到登录页面
  path: '/',
  redirect: '/login'
},
{
  // 登录组件
  path: '/login',
  name: 'Login',
  component: Login
},
{
  // 主页组件
  path: '/home',
  name: 'Home',
  component: Home,
  children: [{
    path: '', // 二级路由默认组件
    component: secondHome
  }, {
    // 评论列表
    path: 'comment', // 二级路由简写地址
    component: () => import('@/views/home/comment') // 按需加载
  }, {
    // 素材管理
    path: 'material', // 二级路由简写地址
    component: () => import('@/views/home/material') // 按需加载
  }, {
    // 文章管理
    path: 'articles', // 二级路由简写地址
    component: () => import('@/views/home/articles') // 按需加载
  }]

}

// {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// }
]

const router = new VueRouter({
  routes
})

export default router
