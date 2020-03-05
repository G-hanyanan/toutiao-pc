<template>
  <el-card>
    <el-breadcrumb slot="header" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <slot name="title"></slot>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="list">
      <el-table-column prop="title" label="标题" width="600"></el-table-column>
      <el-table-column :formatter="formatterBool" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <!-- el-table-column组件 scoped slot 可以获取到 row, column, $index 和 store -->
        <template slot-scope='obj'>
          <el-button size="small" type="text">修改</el-button>
          <!-- openOrClose需要将本行数据传进去 -->
          <el-button @click='openOrClose(obj.row)' size="small" type="text">{{obj.row.comment_status ? '关闭' : '打开'}}评论</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
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
    // 处理评论状态布尔值不显示
    formatterBool (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },
    // 打开、关闭评论
    openOrClose (row) {
      // console.log(row)
      // alert(row.comment_status)
      const status = row.comment_status ? '打开' : '关闭'
      // 调用$confirm方法即可打开消息提示
      this.$confirm(`${status}评论, 是否继续?`, '提示').then(() => {
        this.$axios({
          url: '/comments/status',
          method: 'put', // 请求类型
          // query参数
          params: {
            article_id: row.id // 文章id
          },
          //  body参数
          data: {
            allow_comment: !row.comment_status // 当前状态是关闭，就打开评论 取反
          }
        }).then(() => {
          this.$message({
            showClose: true,
            message: `${status}评论成功`,
            type: 'success'
          })
        }).catch(() => {
          this.$message({
            showClose: true,
            message: `${status}评论失败`,
            type: 'error'
          })
        })
      }).catch(() => {
        return false
      })
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>
</style>
