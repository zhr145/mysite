<template>
  <div class="news-page">
    <div class="hero-section">
      <SiteHeader />
      
      <div class="container">
        <h1 class="page-title">科研进展</h1>
        <p class="page-description">
          了解实验室最新的研究动态、学术成果和重要活动
        </p>
      </div>
    </div>
    
    <div class="news-content">
      <div class="container">
        <div class="news-grid">
          <article 
            v-for="news in newsList" 
            :key="news.id"
            class="news-article"
          >
            <div class="news-header">
              <div class="news-date">{{ formatDate(news.date) }}</div>
              <div class="news-category">{{ news.category }}</div>
            </div>
            
            <h2 class="news-title">{{ news.title }}</h2>
            
            <div class="news-image" v-if="news.image">
              <img :src="news.image" :alt="news.title" loading="lazy">
            </div>
            
            <div class="news-excerpt">
              {{ news.excerpt }}
            </div>
            
            <div class="news-meta">
              <span class="author">{{ news.author }}</span>
              <span class="read-time">{{ news.readTime }} 分钟阅读</span>
            </div>
            
            <button @click="readMore(news.id)" class="read-more-btn">
              阅读全文 →
            </button>
          </article>
        </div>
        
        <div class="pagination">
          <button 
            class="page-btn" 
            :disabled="currentPage === 1"
            @click="prevPage"
          >
            ← 上一页
          </button>
          <span class="page-info">第 {{ currentPage }} 页，共 {{ totalPages }} 页</span>
          <button 
            class="page-btn"
            :disabled="currentPage === totalPages"
            @click="nextPage"
          >
            下一页 →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue'

export default {
  name: 'NewsPage',
  components: { SiteHeader },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 6,
      newsList: [
        {
          id: 1,
          title: '招聘4名博士后研究员',
          excerpt: '我们正在招聘博士后研究员，研究方向包括农业物联网、软机器人技术、精准农业诊断等领域。欢迎有志于农业科技创新的研究人员加入我们的团队。',
          date: new Date('2025-01-28'),
          category: '招聘信息',
          author: '实验室管理员',
          readTime: 3,
          image: '/api/placeholder/600/300'
        },
        {
          id: 2,
          title: '实验室将迁至新的农业科技大楼',
          excerpt: '为了更好地开展科研工作，我们将于2026年秋季迁至新建的农业科技大楼。新实验室将配备最先进的设备和更大的研究空间。',
          date: new Date('2025-01-24'),
          category: '实验室动态',
          author: '李教授',
          readTime: 2,
          image: '/api/placeholder/600/300'
        },
        {
          id: 3,
          title: '李明同学获得最佳论文奖',
          excerpt: '我们的博士生李明凭借其在智能传感器设计方面的创新研究，获得了IEEE农业工程学会的最佳论文奖和1000元奖金。',
          date: new Date('2025-01-20'),
          category: '学术成果',
          author: '张导师',
          readTime: 4,
          image: '/api/placeholder/600/300'
        },
        {
          id: 4,
          title: '新型土壤传感器技术突破',
          excerpt: '我们开发的新型土壤多参数传感器在精度和稳定性方面取得重大突破，相关研究成果已发表在《农业工程学报》上。',
          date: new Date('2025-01-15'),
          category: '技术突破',
          author: '王研究员',
          readTime: 5,
          image: '/api/placeholder/600/300'
        },
        {
          id: 5,
          title: '与国际合作伙伴签署合作协议',
          excerpt: '实验室与荷兰瓦赫宁根大学签署了为期3年的合作协议，将在精准农业和智能灌溉技术方面开展深入合作。',
          date: new Date('2025-01-10'),
          category: '国际合作',
          author: '实验室主任',
          readTime: 3,
          image: '/api/placeholder/600/300'
        },
        {
          id: 6,
          title: '参加国际农业科技展览会',
          excerpt: '我们的研究团队将参加在德国汉诺威举办的国际农业科技展览会，展示我们在AIoT领域的最新研究成果。',
          date: new Date('2025-01-05'),
          category: '学术活动',
          author: '宣传组',
          readTime: 2,
          image: '/api/placeholder/600/300'
        }
      ]
    }
  },
  
  computed: {
    totalPages() {
      return Math.ceil(this.newsList.length / this.itemsPerPage)
    },
    
    paginatedNews() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.newsList.slice(start, end)
    }
  },
  
  methods: {
    formatDate(date) {
      return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    
    readMore(newsId) {
      // 这里可以跳转到详细页面或打开模态框
      this.$router.push(`/news/${newsId}`)
    },
    
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
        this.scrollToTop()
      }
    },
    
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        this.scrollToTop()
      }
    },
    
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.news-page {
  min-height: 100vh;
}

/* 页面头部导航栏 */


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

.news-content {
  padding: 5rem 0;
  background: #f8f9fa;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.news-article {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.news-article:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 0;
}

.news-date {
  color: #718096;
  font-size: 0.9rem;
}

.news-category {
  background: #ff6b35;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.news-title {
  color: #2d3748;
  font-size: 1.3rem;
  margin: 1rem 1.5rem;
  line-height: 1.4;
}

.news-image {
  margin: 0 1.5rem;
  border-radius: 10px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-excerpt {
  color: #4a5568;
  line-height: 1.6;
  padding: 1rem 1.5rem;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  color: #718096;
  font-size: 0.9rem;
}

.read-more-btn {
  background: #ff6b35;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 1rem 1.5rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.read-more-btn:hover {
  background: #ff5722;
  transform: translateY(-2px);
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
}

.page-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.page-btn:hover:not(:disabled) {
  background: #5a6fd8;
  transform: translateY(-2px);
}

.page-btn:disabled {
  background: #e2e8f0;
  color: #a0aec0;
  cursor: not-allowed;
}

.page-info {
  color: #4a5568;
  font-weight: 500;
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .pagination {
    flex-direction: column;
    gap: 1rem;
  }
}
</style> 