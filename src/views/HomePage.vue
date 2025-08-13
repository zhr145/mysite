<template>
  <div class="home-page">
    <header class="hero-section">
      <h1>华中农业大学 AIoT 实验室</h1>
      <p class="subtitle">物联网温度监控与数据可视化系统</p>
    </header>
    
    <main class="features-section">
      <div class="feature-grid">
        <div class="feature-card" @click="navigateTo('/dashboard')">
          <div class="icon">📊</div>
          <h3>温度监控</h3>
          <p>实时温度数据监控与历史数据分析</p>
        </div>
        
        <div class="feature-card" @click="navigateTo('/video')">
          <div class="icon">📹</div>
          <h3>视频监控</h3>
          <p>实时视频流监控环境状态</p>
        </div>
        
        <div class="feature-card" @click="navigateTo('/about')">
          <div class="icon">ℹ️</div>
          <h3>关于系统</h3>
          <p>了解系统功能和技术架构</p>
        </div>
      </div>
    </main>
    
    <footer class="footer">
      <p>&copy; 2024 华中农业大学 AIoT 实验室</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    navigateTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-family: 'Arial', sans-serif;
}

.hero-section {
  text-align: center;
  padding: 80px 20px;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.features-section {
  padding: 60px 20px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
  backdrop-filter: blur(10px);
}

.feature-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.2);
}

.icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.feature-card p {
  opacity: 0.9;
  line-height: 1.6;
}

.footer {
  text-align: center;
  padding: 40px 20px;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style> 