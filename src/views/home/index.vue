<template>
<!-- 外层容器 所有的子容器都需要放在container内 -->
  <el-container>
    <!-- 侧边栏容器 -->
    <el-aside width="230px">
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧容器 上下布局 用外层容器包裹 -->
    <el-container>
      <!-- 头部容器 -->
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <!-- 主要内容区域 -->
      <el-main style="padding: 0 0 0 10px">
        <!-- 这里放的是二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style>
</style>
