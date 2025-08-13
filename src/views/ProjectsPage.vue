<template>
  <div class="projects-page">
    <div class="hero-section">
      <SiteHeader />
      
      <div class="container">
        <h1 class="page-title">项目展示</h1>
        <p class="page-subtitle">探索我们正在进行的创新研究项目</p>
      </div>
    </div>

    <!-- 项目列表 -->
    <section class="projects-section">
      <div class="container">
        <div class="projects-grid">
          <div 
            v-for="project in projects" 
            :key="project.id"
            class="project-card"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.title" loading="lazy">
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-meta">
                <span class="project-status" :class="project.status">{{ project.statusText }}</span>
                <span class="project-date">{{ project.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue'

export default {
  name: 'ProjectsPage',
  components: { SiteHeader },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: '智能农业传感器网络',
          description: '开发基于物联网的农业环境监测系统，实时监控土壤湿度、温度、光照等参数。',
          image: '/api/placeholder/400/250',
          status: 'ongoing',
          statusText: '进行中',
          date: '2024-2025'
        },
        {
          id: 2,
          title: '精准灌溉控制系统',
          description: '利用AI算法优化灌溉策略，实现水资源的高效利用和作物产量的提升。',
          image: '/api/placeholder/400/250',
          status: 'completed',
          statusText: '已完成',
          date: '2023-2024'
        },
        {
          id: 3,
          title: '农业机器人研发',
          description: '开发适用于温室和农田的智能机器人，实现自动化种植、收获和病虫害检测。',
          image: '/api/placeholder/400/250',
          status: 'ongoing',
          statusText: '进行中',
          date: '2024-2026'
        }
      ]
    }
  },
  
  mounted() {
    // 滚动监听器现在在App.vue中全局处理
  },
  
  methods: {
  }
}
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
}

/* 页面头部导航栏 */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 0 4rem; /* 减少顶部内边距，因为导航栏现在是页面内容的一部分 */
  text-align: center;
}

/* 导航样式已抽取到 SiteHeader 组件内 */

.page-title {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.projects-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.project-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.project-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-status {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-status.ongoing {
  background: #e6fffa;
  color: #319795;
}

.project-status.completed {
  background: #f0fff4;
  color: #38a169;
}

.project-date {
  color: #718096;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style>
