<template>
  <div class="loginBg">
    <el-card class="card">
      <!-- 头部logo -->
      <div class="logo">
        <img style="height:40px" src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单 -->
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
        <!-- 表单容器 -->
        <el-form-item prop="mobile">
          <!-- 手机号输入框 -->
          <el-input v-model="loginForm.mobile" style="marginTop:40px" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <!-- 验证码输入框 -->
          <el-input v-model="loginForm.code" style="width:60%" placeholder="请输入验证码"></el-input>
          <!-- 发送验证码按钮 -->
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="checked">
          <!-- 是否同意协议 -->
          <el-checkbox v-model="loginForm.checked">您是否已阅读协议</el-checkbox>
        </el-form-item>
        <el-form-item>
          <!-- 登录按钮 -->
          <el-button style="width:100%" type="primary" @click='submitLoginForm'>登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        checked: false // 是否同意协议
      },
      loginRules: {
        // 手机号输入框规则
        mobile: [{
          required: true,
          message: '请输入您的手机号'
        }, {
          pattern: /^1[3-9]\d{9}$/, // 正则表达式
          message: '您的手机号格式不正确'
        }],
        // 验证码框规则
        code: [{
          required: true,
          message: '请输入您的验证码'
        }, {
          pattern: /^\d{6}$/, // 正则表达式
          message: '验证码为6位数字'
        }],
        checked: [{
          validator: function (rule, value, callback) {
            value ? callback() : callback(new Error('您必须同意协议'))
          }
        }]
      }
    }
  },
  methods: {
    // 登录点击事件
    submitLoginForm () {
      // 表单数据校验
      this.$refs.loginForm.validate((isOk) => {
        if (isOk) {
          // 数据校验成功，发送请求
          this.$axios({
            url: '/authorizations', // 请求地址
            data: this.loginForm, // 请求体参数
            method: 'post' // 请求类型
          }).then(res => {
            // 请求成功，需要将返回的token存储在本地缓存中
            window.localStorage.setItem('user-token', res.data.token)
            // 跳转到主页
            this.$router.push('/home')
          }).catch(() => {
            // 请求失败，弹出错误框
            this.$alert('手机号或者验证码错误')
          })
        } else {
          // 数据校验失败，发送请求
          this.$alert('校验未通过')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.loginBg {
  background-image: url("../../assets/img/login_bg2.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 450px;
    height: 350px;
    background-color: rgba(255, 255, 255, .1);
    border: 0 solid #000;
    .logo {
      text-align: center;
    }
  }
}
</style>
