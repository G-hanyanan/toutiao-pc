<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <slot name="title"></slot>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data='list'>
      <el-table-column prop="title" label="标题" width="600"></el-table-column>
      <el-table-column :formatter='caozuo' prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <el-button size="small" type="text">修改</el-button>
        <el-button size="small" type="text">关闭评论</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    // 加载评论数据
    getComment () {
      this.$axios({
        url: '/articles', // 请求地址
        params: { response_type: 'comment' } // 请求get参数
      }).then(res => {
        this.list = res.data.results
      })
    },
    caozuo (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>
</style>
