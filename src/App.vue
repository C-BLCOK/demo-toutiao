<template>
  <div>

    <!-- 路由占位符 -->
<router-view></router-view>
    <!-- tagbar 底部导航栏 -->
<van-tabbar route v-model="active">
  <van-tabbar-item badge="3">
    <span>自定义</span>
    <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template>
  </van-tabbar-item>
  <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
   <van-tabbar-item icon="browsing-history-o" replace to="/word">世界</van-tabbar-item>
  <van-tabbar-item icon="user-circle-o" replace to="/user">我的</van-tabbar-item>
</van-tabbar>

  </div>
</template>

<script>

export default {
  name: 'MyApp'
}
</script>

<style lang="less" scoped></style>
