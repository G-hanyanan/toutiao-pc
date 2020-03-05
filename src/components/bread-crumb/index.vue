<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <slot name="title"></slot>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <template>
      <el-table>
        <el-table-column prop="id" label="标题" width="600"></el-table-column>
        <el-table-column prop="name" label="评论状态"></el-table-column>
        <el-table-column prop="date" label="总评论数"></el-table-column>
        <el-table-column prop="date" label="粉丝评论数"></el-table-column>
        <el-table-column prop="date" label="操作"></el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{ id: 1, name: '张三', date: '2020年3月5日21:54:48' }]
    }
  }
}
</script>

<style>
</style>
