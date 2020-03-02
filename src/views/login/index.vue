<template>
  <div class="bg">
    <el-card class="card">
      <div class="logo">
        <img style="height:40px" src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form>
        <el-form-item>
          <el-input style="marginTop:40px" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width:60%"  placeholder="请输入验证码"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox>您是否已阅读协议</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.bg {
  background-image: url("../../assets/img/login_bg.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 450px;
    height: 350px;
    background-color: rgba(0, 0, 0, 0);
    .logo {
      text-align: center;
    }
  }
}
</style>
