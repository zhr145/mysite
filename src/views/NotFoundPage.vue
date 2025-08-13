<template>
  <div class="not-found-page">
    <div class="error-container">
      <div class="error-animation">
        <div class="error-404">404</div>
        <div class="error-text">页面走丢了</div>
      </div>
      
      <div class="error-description">
        <p>抱歉，您访问的页面不存在或已被移动。</p>
        <p>让我们帮您找到正确的地方。</p>
      </div>
      
      <div class="error-actions">
        <router-link to="/" class="btn btn-primary">
          回到首页
        </router-link>
        <button @click="goBack" class="btn btn-outline">
          返回上页
        </button>
      </div>
      
      <div class="quick-links">
        <h3>您可能想访问：</h3>
        <div class="links-grid">
          <router-link to="/research" class="quick-link">
            <div class="link-icon">🔬</div>
            <div class="link-text">研究领域</div>
          </router-link>
          <router-link to="/publications" class="quick-link">
            <div class="link-icon">📚</div>
            <div class="link-text">发表论文</div>
          </router-link>
          <router-link to="/latest-news" class="quick-link">
            <div class="link-icon">📰</div>
            <div class="link-text">科研进展</div>
          </router-link>
          <router-link to="/about" class="quick-link">
            <div class="link-icon">👥</div>
            <div class="link-text">关于我们</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    }
  },
  mounted() {
    // 设置页面标题
    document.title = '页面未找到 - HZAU AIoT Lab'
  }
}
</script>

<style scoped>
.not-found-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.error-container {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.error-animation {
  margin-bottom: 2rem;
}

.error-404 {
  font-size: 8rem;
  font-weight: bold;
  color: #ff6b35;
  line-height: 1;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
}

.error-text {
  font-size: 2rem;
  color: #2d3748;
  font-weight: 300;
  margin-bottom: 2rem;
}

.error-description {
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
}

.error-description p {
  margin-bottom: 0.5rem;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.btn {
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  display: inline-block;
}

.btn-primary {
  background: #ff6b35;
  color: white;
}

.btn-primary:hover {
  background: #ff5722;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(255, 107, 53, 0.3);
}

.btn-outline {
  background: transparent;
  color: #2d3748;
  border-color: #2d3748;
}

.btn-outline:hover {
  background: #2d3748;
  color: white;
}

.quick-links {
  border-top: 1px solid #e2e8f0;
  padding-top: 2rem;
}

.quick-links h3 {
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.quick-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
  color: #4a5568;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.quick-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  color: #667eea;
  border-color: #667eea;
}

.link-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.link-text {
  font-size: 0.9rem;
  font-weight: 500;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

@media (max-width: 768px) {
  .error-container {
    padding: 2rem;
  }
  
  .error-404 {
    font-size: 6rem;
  }
  
  .error-text {
    font-size: 1.5rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 