<template>
  <div class="publications-page">
    <div class="hero-section">
      <div class="hero-background">
        <img src="@/assets/tree.jpg" alt="风景图" class="background-image">
        <div class="hero-overlay">
          <SiteHeader />
          
          <div class="hero-content">
            <!-- 装饰符号：两个橙色菱形 -->
            <div class="decorative-diamonds">
              <div class="diamond"></div>
              <div class="diamond"></div>
            </div>
            
            <h2 class="main-heading">
              <span class="heading-line">TAKE A PEEK</span>
              <span class="heading-line"><span class="underlined">AT OUR</span> PUBLICATIONS</span>
            </h2>
            
            <!-- GOOGLE SCHOLAR按钮 -->
            <div class="google-scholar-btn">
              <a href="#" class="btn-google-scholar">GOOGLE SCHOLAR</a>
            </div>
            
            <!-- 装饰符号：向下箭头 -->
            <div class="decorative-arrow">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L10 18M10 18L16 12M10 18L4 12" stroke="#D2691E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="publications-content">
      <div class="container">
        <div class="filter-section">
          <div class="filter-group">
            <label>年份筛选：</label>
            <select v-model="selectedYear" @change="filterPublications">
              <option value="">全部年份</option>
              <option v-for="year in availableYears" :key="year" :value="year">
                {{ year }}
              </option>
            </select>
          </div>
          
          <div class="filter-group">
            <label>类型筛选：</label>
            <select v-model="selectedType" @change="filterPublications">
              <option value="">全部类型</option>
              <option value="期刊">期刊论文</option>
              <option value="会议">会议论文</option>
              <option value="专利">专利</option>
            </select>
          </div>
        </div>
        
        <div class="publications-list">
          <div 
            v-for="publication in filteredPublications" 
            :key="publication.id"
            class="publication-item"
          >
            <div class="publication-header">
              <h3 class="publication-title">{{ publication.title }}</h3>
              <div class="publication-type">{{ publication.type }}</div>
            </div>
            
            <div class="publication-authors">
              <strong>作者：</strong>{{ publication.authors }}
            </div>
            
            <div class="publication-venue">
              <strong>发表于：</strong>{{ publication.venue }}
            </div>
            
            <div class="publication-meta">
              <span class="publication-year">{{ publication.year }}</span>
              <span v-if="publication.impact" class="impact-factor">
                影响因子: {{ publication.impact }}
              </span>
              <span v-if="publication.citations" class="citations">
                引用次数: {{ publication.citations }}
              </span>
            </div>
            
            <div class="publication-abstract" v-if="publication.abstract">
              <strong>摘要：</strong>{{ publication.abstract }}
            </div>
            
            <div class="publication-links">
              <a 
                v-if="publication.doi" 
                :href="publication.doi" 
                target="_blank" 
                class="link-btn doi-link"
              >
                DOI
              </a>
              <a 
                v-if="publication.pdf" 
                :href="publication.pdf" 
                target="_blank" 
                class="link-btn pdf-link"
              >
                PDF
              </a>
              <button 
                v-if="publication.bibtex"
                @click="showBibtex(publication)"
                class="link-btn bibtex-btn"
              >
                BibTeX
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- BibTeX 模态框 -->
    <div v-if="showBibtexModal" class="modal-overlay" @click="closeBibtex">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>BibTeX 引用</h3>
          <button @click="closeBibtex" class="close-btn">×</button>
        </div>
        <div class="modal-body">
          <pre class="bibtex-content">{{ selectedBibtex }}</pre>
          <button @click="copyBibtex" class="copy-btn">复制到剪贴板</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue'

export default {
  name: 'PublicationsPage',
  components: { SiteHeader },
  data() {
    return {
      selectedYear: '',
      selectedType: '',
      showBibtexModal: false,
      selectedBibtex: '',
      publications: [
        {
          id: 1,
          title: '基于深度学习的智能农业传感器数据融合方法研究',
          authors: '张三, 李四, 王五',
          venue: '农业工程学报',
          year: 2024,
          type: '期刊',
          impact: 2.85,
          citations: 15,
          abstract: '本文提出了一种基于深度学习的多传感器数据融合方法，用于提高农业环境监测的精度和可靠性。通过对比实验验证了该方法的有效性。',
          doi: 'https://doi.org/10.1234/example.2024.001',
          pdf: '/papers/zhang2024_sensor_fusion.pdf',
          bibtex: '@article{zhang2024sensor,\n  title={基于深度学习的智能农业传感器数据融合方法研究},\n  author={张三 and 李四 and 王五},\n  journal={农业工程学报},\n  year={2024},\n  volume={40},\n  number={3},\n  pages={123--130}\n}'
        },
        {
          id: 2,
          title: 'IoT-Enabled Precision Agriculture: A Machine Learning Approach',
          authors: 'Li Ming, Chen Wei, Liu Hua',
          venue: 'IEEE Transactions on Industrial Informatics',
          year: 2024,
          type: '期刊',
          impact: 11.7,
          citations: 32,
          abstract: 'This paper presents a comprehensive IoT-enabled precision agriculture system that leverages machine learning algorithms for crop monitoring and yield prediction.',
          doi: 'https://doi.org/10.1109/TII.2024.001',
          pdf: '/papers/li2024_iot_agriculture.pdf',
          bibtex: '@article{li2024iot,\n  title={IoT-Enabled Precision Agriculture: A Machine Learning Approach},\n  author={Li, Ming and Chen, Wei and Liu, Hua},\n  journal={IEEE Transactions on Industrial Informatics},\n  year={2024},\n  volume={20},\n  number={5},\n  pages={3245--3256}\n}'
        },
        {
          id: 3,
          title: '无线传感器网络在智慧农业中的应用与优化',
          authors: '王小明, 赵丽华',
          venue: '第十八届全国农业信息化学术会议',
          year: 2023,
          type: '会议',
          citations: 8,
          abstract: '探讨了无线传感器网络在智慧农业中的关键技术和应用场景，提出了网络优化策略。',
          doi: 'https://doi.org/10.1234/conf.2023.045',
          pdf: '/papers/wang2023_wsn.pdf',
          bibtex: '@inproceedings{wang2023wsn,\n  title={无线传感器网络在智慧农业中的应用与优化},\n  author={王小明 and 赵丽华},\n  booktitle={第十八届全国农业信息化学术会议论文集},\n  pages={156--162},\n  year={2023}\n}'
        },
        {
          id: 4,
          title: '一种用于土壤检测的多参数传感器设计',
          authors: '李研究员, 张工程师',
          venue: '中华人民共和国国家知识产权局',
          year: 2023,
          type: '专利',
          abstract: '本发明公开了一种集成多种传感元件的土壤检测传感器，能够同时检测土壤的pH值、湿度、温度和营养成分。',
          patent_number: 'CN202310123456.7'
        }
      ]
    }
  },
  
  computed: {
    availableYears() {
      const years = [...new Set(this.publications.map(p => p.year))]
      return years.sort((a, b) => b - a)
    },
    
    filteredPublications() {
      let filtered = this.publications
      
      if (this.selectedYear) {
        filtered = filtered.filter(p => p.year == this.selectedYear)
      }
      
      if (this.selectedType) {
        filtered = filtered.filter(p => p.type === this.selectedType)
      }
      
      return filtered.sort((a, b) => b.year - a.year)
    }
  },
  
  methods: {
    filterPublications() {
      // 筛选逻辑已在 computed 中处理
    },
    
    showBibtex(publication) {
      this.selectedBibtex = publication.bibtex
      this.showBibtexModal = true
    },
    
    closeBibtex() {
      this.showBibtexModal = false
      this.selectedBibtex = ''
    },
    
    async copyBibtex() {
      try {
        await navigator.clipboard.writeText(this.selectedBibtex)
        alert('BibTeX已复制到剪贴板')
      } catch (err) {
        console.error('复制失败:', err)
        alert('复制失败，请手动选择复制')
      }
    }
  }
}
</script>

<style scoped>
.publications-page {
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
  margin-top: 0rem;
}

.main-heading {
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 1.2;
  margin: 0 0 2rem 0;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
  color: white; /* 改为白色 */
  letter-spacing: 1px;
}

.heading-line {
  display: block;
}

.underlined {
  text-decoration: underline;
  text-decoration-color: #FFD700; /* 金色下划线，更醒目 */
  text-decoration-thickness: 3px;
  text-underline-offset: 8px;
}

/* 装饰菱形 */
.decorative-diamonds {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.diamond {
  width: 16px;
  height: 16px;
  background: #FF8C00; /* 深橙色，更醒目 */
  transform: rotate(45deg);
  box-shadow: 0 2px 8px rgba(255, 140, 0, 0.4);
}

/* GOOGLE SCHOLAR按钮 */
.google-scholar-btn {
  margin: 2.5rem 0;
}

.btn-google-scholar {
  display: inline-block;
  padding: 15px 32px;
  border: 3px solid #FF4500; /* 更粗的红色边框 */
  background: rgba(255, 69, 0, 0.1); /* 半透明红色背景 */
  color: #FF4500; /* 红色文字 */
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 69, 0, 0.2);
}

.btn-google-scholar:hover {
  background: #FF4500;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 69, 0, 0.4);
}

/* 装饰箭头 */
.decorative-arrow {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
}

.decorative-arrow svg {
  width: 24px;
  height: 24px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
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

.publications-content {
  padding: 5rem 0;
}

.filter-section {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-group label {
  font-weight: 500;
  color: #2d3748;
}

.filter-group select {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  background: white;
}

.publications-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.publication-item {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.publication-item:hover {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.publication-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.publication-title {
  color: #2d3748;
  font-size: 1.3rem;
  line-height: 1.4;
  flex: 1;
  margin-right: 1rem;
}

.publication-type {
  background: #ff6b35;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
}

.publication-authors,
.publication-venue {
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.publication-meta {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  font-size: 0.9rem;
}

.publication-year {
  color: #2d3748;
  font-weight: 600;
}

.impact-factor,
.citations {
  color: #667eea;
  font-weight: 500;
}

.publication-abstract {
  color: #4a5568;
  line-height: 1.6;
  margin: 1rem 0;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 5px;
}

.publication-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.link-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.doi-link {
  background: #48bb78;
  color: white;
}

.pdf-link {
  background: #ed8936;
  color: white;
}

.bibtex-btn {
  background: #667eea;
  color: white;
}

.link-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* 模态框样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #718096;
}

.modal-body {
  padding: 1.5rem;
}

.bibtex-content {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 5px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.4;
  white-space: pre-wrap;
  margin-bottom: 1rem;
}

.copy-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
}

.copy-btn:hover {
  background: #5a6fd8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-background {
    height: 100vh;
  }
  
  .hero-content {
    padding: 0 1rem;
    margin-top: 1rem;
  }
  
  .main-heading {
    font-size: 2.5rem;
    letter-spacing: 0.5px;
  }
  
  .decorative-diamonds {
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .diamond {
    width: 14px;
    height: 14px;
  }
  
  .btn-google-scholar {
    padding: 12px 24px;
    font-size: 1rem;
    letter-spacing: 1px;
  }
  
  .filter-section {
    flex-direction: column;
    gap: 1rem;
  }
  
  .publication-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .publication-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .publication-links {
    flex-wrap: wrap;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style> 