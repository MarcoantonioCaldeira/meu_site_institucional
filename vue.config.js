const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'  ? '/meu_site_institucional/' : '/',
  transpileDependencies: true,
  lintOnSave:false
})
