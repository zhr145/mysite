const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  // 开发服务器配置
  devServer: {
    host: '0.0.0.0',
    port: 8081,  // 明确设置端口
    proxy: {
      // 代理API请求到Django后端
      '/api': {
        target: 'http://192.168.6.19:8000',
        //target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug'
        
      }
    }
  },
  
  // 生产环境构建配置
  publicPath: process.env.NODE_ENV === 'production' ? '/static/' : '/',
  
  // 输出目录
  outputDir: 'dist',
  
  // 静态资源目录
  assetsDir: 'static',
  
  // 生产环境source map
  productionSourceMap: false,
  
  // PWA配置（可选）
  pwa: {
    name: 'IoT监控系统',
    themeColor: '#667eea',
    msTileColor: '#667eea',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default'
  }
})
