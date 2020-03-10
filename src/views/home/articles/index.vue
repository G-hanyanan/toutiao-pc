<template>
  <el-card>
    <!-- 面包屑组件 -->
    <bread-crumb slot="header">
      <template slot="title">评论管理</template>
    </bread-crumb>
    <el-form style="padding-left:80px">
      <!-- 文章状态 单选组件 -->
      <el-form-item label="文章状态：">
        <el-radio-group v-model="searchForm.status">
          <el-radio-button label="5">全部</el-radio-button>
          <el-radio-button label="1">草稿</el-radio-button>
          <el-radio-button label="2">待审核</el-radio-button>
          <el-radio-button label="3">审核通过</el-radio-button>
          <el-radio-button label="4">审核失败</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <!-- 频道选择 -->
      <el-form-item label="频道选择：">
        <el-select v-model="searchForm.channel_id" placeholder="请选择频道">
          <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <!-- 时间选择 -->
      <el-form-item label="时间选择：">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      // select的选项
      options: [],
      // 表单中的值
      searchForm: {
        status: 5, // 文章状态的model
        channel_id: '' // select选项的id
      },
      value1: ''
    }
  },
  methods: {
    // 加载文章频道
    getChannels () {
      this.$axios({
        url: 'channels'
      }).then(res => {
        this.options = res.data.channels
      })
    }
  },
  created () {
    // 加载文章频道
    this.getChannels()
  }
}
</script>

<style>
</style>
