<template>
  <div class="bhamla-home">
    <!-- Hero Section -->
    <section class="hero-section">
      <SiteHeader />
      
      <div class="hero-content">
        <div class="hero-left">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="bold">科学驱动</span> <em>好奇心</em><br>
              <span class="bold radical">根本</span> <em>创新</em>
            </h1>
            <p class="hero-description">
              华中农业大学AIoT实验室是一个专注于农业物联网技术的研究团队，
              我们致力于培养科学研究中一个经常被忽视的属性：<strong>好奇心</strong>。
              从智能传感器到精准农业，我们的工作旨在理解农业系统的复杂性，
              探索生命科学背后的物理原理，以及如何利用简单的概念构建惠农技术。
            </p>
            <div class="hero-buttons">
              <router-link to="/research" class="btn btn-primary">
                我们的研究
              </router-link>
            </div>
          </div>
        </div>
        
        <div class="hero-right">
          <div class="hero-image-container">
            <img 
              src="@/assets/our_research.jpeg" 
              alt="实验室研究图片"
              class="hero-image"
              loading="lazy"
            />
            <div class="image-overlay"></div>
          </div>
        </div>
      </div>
      
      <!-- 滚动指示器 -->
      <div class="scroll-indicator" @click="scrollToNext">
        <div class="scroll-text">滚动</div>
        <div class="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section" ref="aboutSection">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">致力于理解农业系统的体验</h2>
        </div>
        
        <div class="about-content">
          <div class="about-text">
            <p class="about-description">
              华中农业大学AIoT实验室正在通过跨学科合作和神经科学、生理学、行为学原理的应用，
              在农业物联网技术理解方面开辟新天地。
            </p>
            <p class="about-description">
              智慧农业是一个新兴的研究领域；我们产生的数据直接为农业从业者和其他利益相关者
              提供最佳实践和政策信息。<strong>通过我们的研究和实践，
              我们旨在理解和改善农业技术的伦理应用。</strong>
            </p>
          </div>
          
          <div class="about-image">
            <img 
              src="@/assets/xu_conversion.jpeg" 
              alt="实验室设备"
              loading="lazy"
            />
          </div>
        </div>
        
        <div class="about-actions">
          <router-link to="/about" class="btn btn-outline">
            关于实验室
          </router-link>
        </div>
        
        <div class="fun-fact">
          <h3 class="fact-title"><strong>你知道吗？</strong></h3>
          <p class="fact-text">
            全球每年有数万亿个农业传感器被用于食品生产、环境监测、
            精准农业、病虫害防控等应用。
          </p>
        </div>
      </div>
    </section>

    <!-- Research Areas Section -->
    <section class="research-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">探索 <strong>我们的</strong> 研究领域</h2>
        </div>
        
        <div class="research-grid">
          <div 
            v-for="area in researchAreas" 
            :key="area.id"
            class="research-card"
            @click="navigateToResearch(area.id)"
          >
            <div class="card-image">
              <img :src="area.image" :alt="area.title" loading="lazy">
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ area.title }}</h3>
              <p class="card-description">{{ area.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="research-link">
          <router-link to="/research" class="link-more">
            更多研究项目 →
          </router-link>
        </div>
      </div>
    </section>

    <!-- Media Coverage Section -->
    <section class="media-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title"><strong>HZAU AIoT Lab</strong> 媒体报道</h2>
        </div>
        
        <div class="media-grid">
          <div 
            v-for="media in mediaItems" 
            :key="media.id"
            class="media-item"
          >
            <div class="media-image">
              <img :src="media.image" :alt="media.title" loading="lazy">
            </div>
            <div class="media-content">
              <h3 class="media-title">{{ media.title }}</h3>
              <p class="media-source">{{ media.source }}</p>
              <p class="media-excerpt">{{ media.excerpt }}</p>
              <a :href="media.link" class="media-link" target="_blank">
                阅读更多 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News Section -->
    <section class="news-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">最新动态 <strong>来自</strong> 我们的实验室</h2>
        </div>
        
        <div class="news-grid">
          <div 
            v-for="news in latestNews" 
            :key="news.id"
            class="news-item"
          >
            <div class="news-date">{{ formatDate(news.date) }}</div>
            <h3 class="news-title">{{ news.title }}</h3>
            <p class="news-excerpt">{{ news.excerpt }}</p>
          </div>
        </div>
        
        <div class="news-link">
          <router-link to="/latest-news" class="btn btn-outline">
            查看所有动态
          </router-link>
        </div>
      </div>
    </section>

    <!-- Join Section -->
    <section class="join-section">
      <div class="container">
        <div class="join-content">
          <div class="join-text">
            <h2 class="join-title">加入团队</h2>
            <p class="join-description">
              我们正在寻找充满好奇心的研究人员，从本科生到博士后，
              加入我们的团队。我们的研究兴趣涵盖广泛的主题：
              农业物联网工具、极端和超快速生物物理学、软物质物理学。
            </p>
            <router-link to="/join-lab" class="btn btn-primary">
              申请加入
            </router-link>
          </div>
          
          <div class="join-positions">
            <h3>开放职位</h3>
            <div class="position-item">
              <h4>博士后研究员</h4>
              <p>农业物联网、软机器人技术、精准农业诊断</p>
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
  name: 'BhamlaStyleHome',
  components: { SiteHeader },
  data() {
    return {
      researchAreas: [
        {
          id: 1,
          title: '智能传感技术',
          description: '开发下一代农业传感器和监测系统',
          image: '/api/placeholder/300/200'
        },
        {
          id: 2,
          title: '精准农业',
          description: '利用数据驱动方法优化农业生产',
          image: '/api/placeholder/300/200'
        },
        {
          id: 3,
          title: '环境监测',
          description: '实时监测和分析农业环境参数',
          image: '/api/placeholder/300/200'
        }
      ],
      mediaItems: [
        {
          id: 1,
          title: '农业物联网技术如何改变传统农业',
          source: '科技日报',
          excerpt: '华中农业大学AIoT实验室的最新研究显示，物联网技术在农业中的应用...',
          image: '/api/placeholder/200/150',
          link: '#'
        },
        {
          id: 2,
          title: '智慧农业：科技助力乡村振兴',
          source: '人民日报',
          excerpt: '通过智能传感器和数据分析，农业生产效率显著提升...',
          image: '/api/placeholder/200/150',
          link: '#'
        }
      ],
      latestNews: [
        {
          id: 1,
          date: new Date('2025-01-28'),
          title: '招聘4名博士后研究员',
          excerpt: '招聘博士后 — 农业物联网、软机器人技术、精准农业诊断。'
        },
        {
          id: 2,
          date: new Date('2025-01-24'),
          title: '实验室将迁至新址',
          excerpt: '我们将于2026年秋季迁至新的农业科技大楼。'
        },
        {
          id: 3,
          date: new Date('2025-01-24'),
          title: '李明获得最佳论文奖',
          excerpt: '李明凭借其创新的传感器设计获得了1000元奖金。'
        }
      ]
    }
  },
  
  mounted() {
    this.setupScrollAnimations();
  },
  
  methods: {
    scrollToNext() {
      this.$refs.aboutSection.scrollIntoView({ 
        behavior: 'smooth' 
      });
    },
    
    navigateToResearch(areaId) {
      this.$router.push(`/research?area=${areaId}`);
    },
    
    formatDate(date) {
      return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    
    setupScrollAnimations() {
      // 滚动动画逻辑
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);
      
      // 观察所有需要动画的元素
      document.querySelectorAll('.section-header, .research-card, .media-item, .news-item')
        .forEach(el => observer.observe(el));
    }
  }
}
</script>

<style scoped>
/* 基础变量 */
:root {
  --hero-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --text-primary: #2d3748;
  --text-secondary: #4a5568;
  --text-light: #718096;
  --accent-color: #ff6b35;
  --border-light: #e2e8f0;
}

/* 导航样式已抽取到 SiteHeader 组件内 */

/* 容器 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  background: var(--hero-gradient);
  /* 备用方案：如果CSS变量不工作，使用直接的渐变 */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 改为从顶部开始 */
  position: relative;
  overflow: hidden;
  padding: 2rem 0 4rem; /* 减少顶部内边距，因为导航栏现在是页面内容的一部分 */
  
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  padding-top: 70px; /* 移除顶部内边距 */
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.2;
  color: white;
  margin-bottom: 2rem;
  font-weight: 300;
}

.hero-title .bold {
  font-weight: 700;
}

.hero-title .radical {
  color: var(--accent-color);
}

.hero-title em {
  font-style: italic;
  color: #ffd700;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
}

.hero-image-container {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
}

/* 滚动指示器 */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.scroll-indicator:hover {
  transform: translateX(-50%) translateY(-5px);
}

.scroll-text {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.scroll-arrow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* 按钮样式 */
.btn {
  display: inline-block;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
}

.btn-primary {
  background: var(--accent-color);
  color: white;
}

.btn-primary:hover {
  background: #ff5722;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(255, 107, 53, 0.3);
}

.btn-outline {
  background: transparent;
  color: var(--text-primary);
  border-color: var(--border-light);
}

.btn-outline:hover {
  background: var(--text-primary);
  color: white;
}

/* Section 通用样式 */
section {
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  color: var(--text-primary);
  font-weight: 300;
  line-height: 1.3;
}

.section-title strong {
  font-weight: 700;
}

/* About Section */
.about-section {
  background: white;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 3rem;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.about-image img {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.about-actions {
  text-align: center;
  margin-bottom: 4rem;
}

.fun-fact {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  max-width: 600px;
  margin: 0 auto;
}

.fact-title {
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.fact-text {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Research Section */
.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.research-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.research-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.card-description {
  color: var(--text-light);
  line-height: 1.5;
}

/* Media Section */
.media-section {
  background: white;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.media-item {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  transition: all 0.3s ease;
}

.media-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.media-image {
  flex: 0 0 150px;
}

.media-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.media-content {
  padding: 1.5rem;
  flex: 1;
}

.media-title {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.media-source {
  color: var(--accent-color);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.media-excerpt {
  color: var(--text-light);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.media-link {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 500;
}

/* News Section */
.news-grid {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.news-item {
  border-left: 4px solid var(--accent-color);
  padding: 1.5rem;
  background: white;
  border-radius: 0 10px 10px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.news-date {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.news-title {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.news-excerpt {
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Join Section */
.join-section {
  background: var(--hero-gradient);
  /* 备用方案：如果CSS变量不工作，使用直接的渐变 */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.join-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.join-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.join-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.join-positions h3 {
  margin-bottom: 1.5rem;
  color: #ffd700;
}

.position-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.position-item h4 {
  margin-bottom: 0.5rem;
}

/* 链接样式 */
.link-more, .news-link {
  text-align: center;
}

.link-more {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
}

.link-more:hover {
  text-decoration: underline;
}

/* 动画 */
.section-header,
.research-card,
.media-item,
.news-item {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.section-header.animate-in,
.research-card.animate-in,
.media-item.animate-in,
.news-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* 响应式设计 */
@media (max-width: 768px) {
  /* 导航样式由 SiteHeader 组件处理 */
  
  .hero-section {
    padding-top: 0; /* 移动端也移除顶部边距 */
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding-top: 120px; /* 移动端导航栏更高，需要更多空间 */
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .research-grid {
    grid-template-columns: 1fr;
  }
  
  .media-grid {
    grid-template-columns: 1fr;
  }
  
  .media-item {
    flex-direction: column;
  }
  
  .media-image {
    flex: none;
    height: 150px;
  }
  
  .join-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  section {
    padding: 3rem 0;
  }
}
</style> 