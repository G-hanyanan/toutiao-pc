import router from '@/router'

// 全局前置导航守卫
router.beforeEach(function (to, from, next) {
//   判断要进入页面是否是/home开头的
  if (to.path.startsWith('/home')) {
    //   获取token
    var token = localStorage.getItem('user-token')
    // 如果有token，就继续，如果没有，就返回到login界面
    token ? next() : next('/login')
  } else {
    next()
  }
})
