const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置打包成产品模式后能在本地打开网页
  publicPath: './'
})
