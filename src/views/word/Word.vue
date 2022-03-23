<template>
  <div>
     <van-nav-bar title="环球时报" fixed/>
     <Artical v-for="item in artlist" :key="item.id" :title="item.title"
:art_id="item.art_id"
:aut_id="item.aut_id"
:comm_count="item.comm_count"
:pubdate="item.pubdate"
:aut_name="item.aut_name"
:cover="item.cover"></Artical>
  </div>
</template>
<script>
// 按需导入API
// import { getWoreMsgAPI } from '@/api/wordAPI.js'
import Artical from '@/components/artical/Artical.vue'
import { getArticalListAPI } from '@/api/articalAPI.js'
export default {
  name: 'MyHome',
  components: {
    Artical
  },
  data () {
    return {
      // 初始化axios请求参数
      page: 1,
      limit: 30,
      // 储存文章数据的数组
      artlist: []
    }
  },
  created () {
    // 发起axios请求
    this.initArticleList()
  },
  methods: {
    // 获取数据的函数
    // 在API中创建axios请求函数，在这里通过函数传参，在created中调用函数发起axios请求
    async initArticleList () {
      const { data: res } = await getArticalListAPI(this.page, this.limit)
      // 将服务器响应的数据存入数组
      this.artlist = res
    }
  }
}
</script>
<style lang="less" scoped>

</style>
