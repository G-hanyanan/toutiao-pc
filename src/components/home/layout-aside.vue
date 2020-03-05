<template>
  <div class="layout-aside">
    <!-- 顶部logo图片 -->
    <div class="img" style="textAlign:center">
      <img src="../../assets/img/logo_admin.png" alt />
    </div>
    <!-- 菜单 -->
    <el-menu router text-color="#adafb5" background-color="#353b4e" active-text-color="#ffd04b">
      <!-- 首页 -->
      <el-menu-item>
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 内容管理 -->
      <el-submenu  index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/publish">发布文章</el-menu-item>
          <el-menu-item index="/home/articles">内容列表</el-menu-item>
          <el-menu-item index="/home/comment">评论列表</el-menu-item>
          <el-menu-item index="/home/material">素材管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 粉丝管理 -->
      <el-submenu  index="2">
        <template slot="title">
          <i class="el-icon-star-on"></i>
          <span>粉丝管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/fans">图文数据</el-menu-item>
          <el-menu-item index="/home/fans">粉丝概况</el-menu-item>
          <el-menu-item index="/home/fansphoto">粉丝图像</el-menu-item>
          <el-menu-item index="/home/fanslist">粉丝列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 账户信息 -->
      <el-menu-item>
        <i class="el-icon-postcard"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scopend>
.layout-aside {
  height: 100vh;
  background-color: #323745;
  .img {
    padding: 20px 0;
    background-color: #2e2f32;
  }
  .el-menu {
      border: 0 solid #000;
  }
}
</style>
