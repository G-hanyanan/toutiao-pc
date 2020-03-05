import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home' // 引如home 组件
import Login from '@/views/login'
import secondHome from '@/views/home/second-home'
import homeComment from '@/views/home/comment'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
},
{
  path: '/login',
  name: 'Login',
  component: Login
},
{
  path: '/home',
  name: 'Home',
  component: Home,
  children: [{
    path: '', // 二级路由默认组件
    component: secondHome
  }, {
    path: 'comment', // 二级路由简写地址
    component: homeComment
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
