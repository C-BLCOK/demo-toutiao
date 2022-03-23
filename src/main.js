import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入 vant
import Vant from 'vant'
import 'vant/lib/index.css'

// 安装 vant 插件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
