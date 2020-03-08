<template>
  <el-card>
    <!-- 面包屑组件 -->
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <!-- tabs选项卡 -->
    <el-tabs v-model="activeName" type="card" @tab-click="ChangeTab">
      <el-tab-pane label="全部素材" name="all">
        <!-- 上传素材按钮 -->
        <el-row type="flex" justify="end" style="marginRight:40px">
          <el-upload
          action=""
          :multiple="false"
          :http-request='upLoad'
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-row>

        <!-- 素材区域 -->
        <div class="img-list">
          <el-card
            class="imgCard"
            :body-style="{ padding: '0' }"
            v-for="item in list"
            :key="item.id"
          >
            <img :src="item.url" alt class="image" />
            <!-- 操作按钮 -->
            <el-row class="icon" type="flex" justify="space-around">
              <el-button type="text" @click='collectOrCancel(item)'>
                <i class="el-icon-star-on" :style="{color:item.is_collected?'red':'black'}"></i>
              </el-button>
              <el-button type="text" @click='delMaterial(item)'>
                <i class="el-icon-delete-solid"></i>
              </el-button>
            </el-row>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="收藏素材" name="collect">
        <div class="img-list">
          <el-card
            class="imgCard"
            :body-style="{ padding: '0' }"
            v-for="item in list"
            :key="item.id"
          >
            <img :src="item.url" alt class="image" />
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 分页组件 -->
    <el-row type="flex" justify="center" style="height:80px" align="middle">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="this.pages.total"
        :page-size="this.pages.per_page"
        @current-change="currentChange"
        :current-page="this.pages.currentPage"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      // 当前选中的选项卡name
      activeName: 'all',
      list: [],
      pages: {
        per_page: 10, // 每页10条数据
        total: 0, // 数据总数
        currentPage: 1
      }
    }
  },
  methods: {
    // 收藏或者取消收藏
    collectOrCancel (row) {
      this.$axios({
        url: '/user/images/' + row.id,
        method: 'put',
        data: { collect: !row.is_collected }
      }).then(() => {
        this.$message.success('操作成功')
        this.getMaterial()
      }).catch(() => {
        this.$message.error('操作失败')
      })
    },
    // 删除素材
    delMaterial (row) {},
    // 上传素材方法
    upLoad (params) {
      const data = new FormData()
      data.append('image', params.file)
      // FormData类型
      this.$axios({
        url: '/user/images',
        method: 'post',
        data
      }).then(() => {
        // 重新加载数据
        this.getMaterial()
      })
    },
    // 分页组件当前页事件
    currentChange (newPage) {
      // 当前点击的是第几页
      this.pages.currentPage = newPage
      // 重新加载数据
      this.getMaterial()
    },
    //   加载素材资源
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect',
          per_page: this.pages.per_page, // 每页请求10条数据
          page: this.pages.currentPage // 请求第几页的数据
        } // 根据当前选中的选项卡请求资源
      }).then(res => {
        this.list = res.data.results
        this.pages.total = res.data.total_count // 数据总数
      })
    },
    // 选项卡切换，重新加载数据
    ChangeTab () {
      // 选项卡切换，将分页当前页数赋值为1
      this.pages.currentPage = 1
      this.getMaterial()
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang='less' scoped>
.img-list {
  width: 1400px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
.imgCard {
  width: 240px;
  height: 240px;
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
