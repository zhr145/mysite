<template>
  <div id="app">
    <!-- 移除全局顶部导航栏 -->
    
    <nav class="app-nav" v-if="showNav">
      <div class="nav-container">
        <router-link to="/" class="nav-logo">
          🌡️ IoT监控系统
        </router-link>
        
        <div class="nav-links">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/yjDemo" class="nav-link">演示系统</router-link>
          <router-link to="/about" class="nav-link">关于</router-link>
        </div>
      </div>
    </nav>
    
    <main class="app-main" :class="{ 'with-nav': showNav }">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    showNav() {
      // 可以根据路由决定是否显示导航栏
      //return this.$route.path !== '/'
      return false  
    }
  },
  
  created() {
    // 全局错误处理
    this.$http.interceptors.response.use(
      response => response,
      error => {
        console.error('API请求错误:', error)
        
        if (error.response) {
          // 服务器返回错误状态码
          const status = error.response.status
          if (status === 404) {
            console.error('API端点不存在')
          } else if (status === 500) {
            console.error('服务器内部错误')
          }
        } else if (error.request) {
          // 请求发送但没有收到响应
          console.error('无法连接到服务器')
        }
        
        return Promise.reject(error)
      }
    )
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* 移除固定背景，让各个页面组件控制自己的背景 */
}

#app {
  min-height: 100vh;
}

.app-nav {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
}

.nav-logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background 0.3s;
}

/* 仅限定在旧的 .app-nav 内部，避免影响新站点头部 SiteHeader */
.app-nav .nav-link:hover,
.app-nav .nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.2);
}

.app-main {
  min-height: 100vh;
}

.app-main.with-nav {
  padding-top: 60px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    height: auto;
    padding: 10px 20px;
  }
  
  .nav-links {
    margin-top: 10px;
    gap: 15px;
  }
  
  .app-main.with-nav {
    padding-top: 100px;
  }
}

/* 全局样式 */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5a6fd8;
  transform: translateY(-2px);
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.loading {
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 1.2rem;
}
</style>