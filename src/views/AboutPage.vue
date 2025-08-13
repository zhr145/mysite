<template>
  <div class="about-page">
    <div class="hero-section">
      <SiteHeader />
      
      <div class="container">
        <h1 class="page-title">关于我们</h1>
        <p class="page-description">
          了解华中农业大学AIoT实验室的历史、愿景和团队成员
        </p>
      </div>
    </div>
    
    <div class="content-section">
      <div class="container">
        <h2>实验室简介</h2>
        <p>华中农业大学AIoT实验室是一个专注于农业物联网技术的研究团队，我们致力于培养科学研究中一个经常被忽视的属性：好奇心。</p>
        
        <h2>我们的使命</h2>
        <p>从智能传感器到精准农业，我们的工作旨在理解农业系统的复杂性，探索生命科学背后的物理原理，以及如何利用简单的概念构建惠农技术。</p>
        
        <h2>研究方向</h2>
        <ul>
          <li>农业物联网技术</li>
          <li>智能传感器开发</li>
          <li>精准农业系统</li>
          <li>环境监测技术</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue'

export default {
  name: 'AboutPage',
  components: { SiteHeader }
}
</script>

<style scoped>
.about-page {
  min-height: 100vh;
}

/* 页面头部导航栏 */
.page-header {
  padding: 2rem 0;
  margin-bottom: 2rem;
}

/* 导航样式已抽取到 SiteHeader 组件内 */

.nav-link {
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 1rem 0;
  position: relative;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-family: 'Arial', sans-serif;
}

.nav-link:hover {
  color: #ffd700;
  transform: translateY(-2px);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #ffd700;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

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

.content-section {
  padding: 5rem 0;
  background: white;
}

.content-section h2 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.content-section p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.content-section ul {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.content-section li {
  margin-bottom: 0.5rem;
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