<template>
  <div>
    <van-nav-bar title="今日头条" fixed/>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
<van-list v-model="loading" :finished="finished" finished-text="没有更多了" error-text="网络出了点问题，点击重新加载" @load="onLoad">

 <Artical v-for="item in artlist"
:key="item.id"
:title="item.title"
:art_id="item.art_id"
:aut_id="item.aut_id"
:comm_count="item.comm_count"
:pubdate="item.pubdate"
:aut_name="item.aut_name"
:cover="item.cover"
></Artical>
</van-list>
</van-pull-refresh>
  </div>
</template>
<script>
// 按需导入数据请求API
import { getArticalListAPI } from '@/api/articalAPI.js'
import Artical from '@/components/artical/Artical.vue'
export default {
  name: 'MyHome',
  components: {
    Artical
  },
  data () {
    return {
      // 初始化axios请求参数
      page: 1,
      limit: 10,
      // 储存文章数据的数组
      artlist: [],
      // 节流阀loading
      // 是否正在更新下一页数据，下拉更新数据
      // 值为true时，不会触发load事件
      // 数据每一页数据更新完毕记得，改为false
      loading: true,
      // 所有未读数据是否加载完毕，上滑加载更多
      finished: false
    }
  },
  created () {
    // 发起axios请求
    this.initArticleList()
  },
  methods: {
    // 获取数据的函数
    // 在API中创建axios请求函数，在这里通过函数传参，在created中调用函数发起axios请求
    async initArticleList (isReFresh) {
      const { data: res } = await getArticalListAPI(this.page, this.limit)
      // 将服务器响应的数据存入数组
      // this.artlist = res
      // 上拉加载更多时，拓展运算符拼接数组，[...旧数据, ...新数据]
      // this.artlist = [...this.artlist, ...res]
      if (isReFresh) {
        // 下拉刷新，[新数据，旧数据]
        this.artlist = [...res, ...this.artlist]
        this.isLoading = false
      } else {
        // 上滑更多，[旧数据，新数据]
        this.artlist = [...this.artlist, ...res]
      }
      // 下一页数据请求成功后 打开 节流阀
      this.loading = false
      // 若服务器返回res为空数组，则没有更多数据，提示用户“没有更多了”
      if (res.length === 0) {
        this.finished = true
      }
    },
    // 上滑加载更多，请求下一页数据
    onLoad () {
      // 1、让页码值+1
      this.page++
      // 2、请求下一页数据
      this.initArticleList()
    },
    // 下拉刷新数据
    onRefresh () {
      // 1、让页码值+1
      this.page++
      // 2、请求新数据
      this.initArticleList(true)
    }
  }
}
</script>
<style>
</style>
