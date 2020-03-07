<template>
  <el-card>
    <!-- 面包屑组件 -->
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <!-- tabs选项卡 -->
    <el-tabs v-model="activeName" type="card" @tab-click="ChangeTab">
      <el-tab-pane label="全部素材" name="all">
    <!-- 素材区域 -->
        <el-row type="flex" justify="center">
          <el-card
            class="imgCard"
            :body-style="{ padding: '0' }"
            v-for="item in list"
            :key="item.id"
          >
            <img :src="item.url" alt="" class="image">
            <!-- 操作按钮 -->
            <el-row class="icon" type="flex" justify="space-around">
              <el-button type="text">
                <i class="el-icon-star-on"></i>
              </el-button>
              <el-button type="text">
                <i class="el-icon-delete-solid"></i>
              </el-button>
            </el-row>
          </el-card>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="收藏素材" name="collect">收藏素材</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      // 当前选中的选项卡name
      activeName: 'all',
      list: []
    }
  },
  methods: {
    //   加载素材资源
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: { collect: this.activeName === 'collect' } // 根据当前选中的选项卡请求资源
      }).then((res) => {
        this.list = res.data.results
      })
    },
    // 选项卡切换，重新加载数据
    ChangeTab () {
      this.getMaterial()
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang='less' scoped>
.imgCard {
  width: 240px;
  height: 280px;
  position: relative;
      margin: 10px 20px;
  .image {
      width: 240px;
      height: 240px;
  }
  .icon {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #f4f5f6;
    width: 100%;
    i {
      font-size: 20px;
    }
  }
}
</style>
