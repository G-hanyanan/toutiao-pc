<template>
  <div>
    <el-row type="flex" align="middle" class="layout-header">
      <el-col :span="12" class="left">
        <i class="el-icon-s-fold"></i>
        <span>江苏传智播客教育科技股份有限公司</span>
      </el-col>
      <el-col :span="12" class="right">
        <el-row type="flex" align="middle" justify="end">
          <!-- 用户头像 -->
          <img :src="this.userInfo.photo" alt />
          <!-- 下拉菜单 -->
          <el-dropdown trigger="click">
            <span>
              {{this.userInfo.name}}
              <i class="el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>git地址</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    // 获取用户信息
    const token = window.localStorage.getItem('user-token')
    this.$axios({
      url: '/user/profile', // 请求地址
      headers: { Authorization: `Bearer ${token}` } // 请求头参数
    }).then(res => {
      this.userInfo = res.data.data
      console.log(res)
    })
  }
}
</script>

<style lang="less" scoped>
.layout-header {
  height: 60px;
  .left {
    color: #444;
    i {
      font-size: 22px;
      margin-right: 10px;
    }
  }
  .right {
    padding: 0 20px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 10px
    }
  }
}
</style>
