<template>
  <div class="demo-page">
    <div class="hero-section">
      <SiteHeader />
      
      <div class="container">
        <h1 class="page-title">演示系统</h1>
        <p class="page-description">
          实时视频监控和演示系统
        </p>
      </div>
    </div>
    
    <div class="demo-container">
      <div class="container">
        <h2>实时视频演示</h2>
        <img src="http://192.168.6.61:8081" alt="实时视频流" />
      </div>
    </div>
    
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue'

export default {
  name: 'yjDemo',
  components: { SiteHeader }
};
</script>

<style scoped>
.demo-page {
  min-height: 100vh;
}

/* 导航样式已抽取到 SiteHeader 组件内 */

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 0 4rem; /* 减少顶部内边距，因为导航栏现在是页面内容的一部分 */
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 300;
}

.page-description {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.demo-container {
  padding: 5rem 0;
}

.demo-container h2 {
  color: #2d3748;
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
}

.demo-container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: block;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style>