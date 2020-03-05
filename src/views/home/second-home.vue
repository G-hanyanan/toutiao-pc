<template>
  <div class="second-home">
    <el-carousel :interval="2000" type="card" height="350px">
      <el-carousel-item v-for="item in list" :key="item">
        <el-image :src="item" :fit="cover"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'http://00.minipic.eastday.com/20170821/20170821133945_d41d8cd98f00b204e9800998ecf8427e_1.jpeg',
        'http://pic1.win4000.com/wallpaper/2020-03-05/5e6091b100ea7.jpg',
        'http://cdn.xnwimg.com/down/f:%7B37868E9A-DF21-A32A-ABF9-6AE5AC3D523B%7D/8.jpg'
      ]
    }
  }
}
</script>

<style lang="less">
.second-home {
  height: calc(100vh - 60px);
}
</style>
