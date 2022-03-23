import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/Home.vue'
import User from '@/views/user/User.vue'
import Word from '@/views/word/Word.vue'

// 安装路由插件
Vue.use(VueRouter)

// 路由规则
const routes = [
  // 首页路由规则
  { path: '/', component: Home },
  // 主页路由规则
  { path: '/user', component: User },
  // 动物世界路由规则
  { path: '/word', component: Word }
]

const router = new VueRouter({
  // 调用、挂载路由
  routes
})

// 共享路由
export default router
