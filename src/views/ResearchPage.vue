<template>
  <div class="research-page">
    <div class="hero-section">
      <div class="hero-background">
        <img src="@/assets/flower.jpg" alt="风景图" class="background-image">
        <div class="hero-overlay">
          <SiteHeader />
          
          <div class="hero-content">
            <h2 class="main-heading">
              <span class="heading-line">SEEING WORLDS OF</span>
              <span class="heading-line">POSSIBILITY</span>
            </h2>
            
            <p class="main-description">
              在樱花盛开的季节，我们不禁思考：<strong>生命如何绽放？</strong> 就像这些樱花一样，我们的研究也在探索农业物联网技术如何让生命更加美好。从智能传感器到精准农业，我们致力于理解自然系统的奥秘，发现隐藏在美丽背后的科学原理，创造惠及农业和人类的技术创新。
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="research-areas">
      <div class="container">
        <div class="areas-grid">
          <div 
            v-for="area in researchAreas" 
            :key="area.id"
            class="area-card"
          >
            <div class="area-image">
              <img :src="area.image" :alt="area.title" loading="lazy">
            </div>
            <div class="area-content">
              <h3 class="area-title">{{ area.title }}</h3>
              <p class="area-description">{{ area.description }}</p>
              <ul class="area-highlights">
                <li v-for="highlight in area.highlights" :key="highlight">
                  {{ highlight }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue'

export default {
  name: 'ResearchPage',
  components: { SiteHeader },
  data() {
    return {
      researchAreas: [
        {
          id: 1,
          title: '智能传感技术',
          description: '开发下一代农业传感器系统，实现农业环境的精确监测和数据采集。',
          image: '/api/placeholder/400/300',
          highlights: [
            '多参数环境传感器开发',
            '无线传感器网络构建',
            '边缘计算集成',
            '低功耗设计优化'
          ]
        },
        {
          id: 2,
          title: '精准农业',
          description: '利用数据驱动方法和机器学习技术，优化农业生产管理决策。',
          image: '/api/placeholder/400/300',
          highlights: [
            '作物生长模型建立',
            '病虫害智能识别',
            '产量预测算法',
            '资源优化配置'
          ]
        },
        {
          id: 3,
          title: '环境监测',
          description: '构建智能化农业环境监测体系，保障农产品质量安全。',
          image: '/api/placeholder/400/300',
          highlights: [
            '土壤质量实时监测',
            '水质安全检测',
            '气象数据分析',
            '污染源追踪'
          ]
        },
        {
          id: 4,
          title: '数据科学',
          description: '运用大数据和人工智能技术，挖掘农业数据价值。',
          image: '/api/placeholder/400/300',
          highlights: [
            '农业大数据平台',
            '深度学习应用',
            '预测模型开发',
            '决策支持系统'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.research-page {
  min-height: 100vh;
}

/* 页面头部导航栏 */


.hero-section {
  position: relative;
  min-height: 100vh;
}

.hero-background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  margin-top: 2rem;
}

.hero-content {
  position: absolute;
  top: 45%; /* 从50%调整到45%，让内容稍微上移 */
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 100%;
  max-width: 800px;
  padding: 0 2rem;
  margin-top: 0rem; /* 为导航栏留出空间 */
}

.main-heading {
  font-size: 3rem;
  font-weight: 300;
  line-height: 1.2;
  margin: 0 0 2rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.heading-line {
  display: block;
}

.main-description {
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

.main-description strong {
  font-weight: 600;
}

.research-areas {
  padding: 5rem 0;
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
}

.area-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.area-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.area-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.area-content {
  padding: 2rem;
}

.area-title {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.area-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.area-highlights {
  list-style: none;
  padding: 0;
}

.area-highlights li {
  color: #718096;
  padding: 0.5rem 0;
  border-left: 3px solid #ff6b35;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .hero-background {
    height: 100vh;
  }
  
  .hero-content {
    padding: 0 1rem;
    margin-top: 1rem;
  }
  
  .main-heading {
    font-size: 2rem;
  }
  
  .main-description {
    font-size: 1rem;
  }
  
  .areas-grid {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style> 