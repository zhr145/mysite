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
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  
  // 输出目录
  outputDir: 'dist',
  
  // 静态资源目录
  assetsDir: 'static',

  // 明确声明单页应用入口与模板，避免重复生成 index.html
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  // 调整 CopyWebpackPlugin，显式忽略 public/index.html，避免与 HtmlWebpackPlugin 冲突
  chainWebpack: config => {
    if (config.plugins.has('copy')) {
      config.plugin('copy').tap(args => {
        const patterns = (args[0] && args[0].patterns) ? args[0].patterns : []
        args[0].patterns = patterns.map(p => {
          const next = { ...p }
          if (next.ignore) {
            next.ignore = Array.isArray(next.ignore) ? next.ignore.concat(['index.html']) : ['index.html']
          }
          next.globOptions = Object.assign({}, next.globOptions, {
            ignore: [].concat((next.globOptions && next.globOptions.ignore) || [], ['**/index.html'])
          })
          return next
        })
        return args
      })
    }
  },
  
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
