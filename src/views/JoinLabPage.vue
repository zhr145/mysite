<template>
  <div class="join-lab-page">
    <div class="hero-section">
      <div class="container">
        <h1 class="page-title">加入我们</h1>
        <p class="page-description">
          成为HZAU AIoT实验室的一员，共同推动农业科技创新
        </p>
      </div>
    </div>
    
    <div class="join-content">
      <div class="container">
        <!-- 开放职位 -->
        <section class="positions-section">
          <h2 class="section-title">开放职位</h2>
          <div class="positions-grid">
            <div 
              v-for="position in openPositions" 
              :key="position.id"
              class="position-card"
            >
              <div class="position-header">
                <h3 class="position-title">{{ position.title }}</h3>
                <div class="position-type">{{ position.type }}</div>
              </div>
              
              <div class="position-details">
                <div class="position-description">
                  {{ position.description }}
                </div>
                
                <div class="position-requirements">
                  <h4>任职要求：</h4>
                  <ul>
                    <li v-for="req in position.requirements" :key="req">
                      {{ req }}
                    </li>
                  </ul>
                </div>
                
                <div class="position-benefits">
                  <h4>我们提供：</h4>
                  <ul>
                    <li v-for="benefit in position.benefits" :key="benefit">
                      {{ benefit }}
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="position-actions">
                <button @click="applyPosition(position)" class="apply-btn">
                  立即申请
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <!-- 实验室文化 -->
        <section class="culture-section">
          <h2 class="section-title">实验室文化</h2>
          <div class="culture-grid">
            <div class="culture-item">
              <div class="culture-icon">🚀</div>
              <h3>创新驱动</h3>
              <p>鼓励大胆创新，支持原创性研究，追求技术突破</p>
            </div>
            <div class="culture-item">
              <div class="culture-icon">🤝</div>
              <h3>协作共赢</h3>
              <p>促进团队合作，分享知识经验，共同成长进步</p>
            </div>
            <div class="culture-item">
              <div class="culture-icon">🎯</div>
              <h3>目标导向</h3>
              <p>明确研究目标，注重实际应用，产出高质量成果</p>
            </div>
            <div class="culture-item">
              <div class="culture-icon">🌱</div>
              <h3>持续学习</h3>
              <p>保持学习热情，关注前沿技术，提升专业能力</p>
            </div>
          </div>
        </section>
        
        <!-- 申请流程 -->
        <section class="process-section">
          <h2 class="section-title">申请流程</h2>
          <div class="process-timeline">
            <div class="process-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>提交申请</h4>
                <p>发送简历和研究计划到我们的邮箱</p>
              </div>
            </div>
            <div class="process-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>初步筛选</h4>
                <p>我们会在一周内回复初步筛选结果</p>
              </div>
            </div>
            <div class="process-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>面试交流</h4>
                <p>通过线上或线下面试了解您的研究背景</p>
              </div>
            </div>
            <div class="process-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>最终确认</h4>
                <p>双方确认合作意向，正式加入实验室</p>
              </div>
            </div>
          </div>
        </section>
        
        <!-- 联系我们 -->
        <section class="contact-section">
          <h2 class="section-title">联系我们</h2>
          <div class="contact-content">
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div>
                  <h4>邮箱地址</h4>
                  <p>recruitment@hzau-aiot.edu.cn</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div>
                  <h4>实验室地址</h4>
                  <p>湖北省武汉市洪山区华中农业大学农业科技大楼</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div>
                  <h4>联系电话</h4>
                  <p>+86 027-87280123</p>
                </div>
              </div>
            </div>
            
            <div class="contact-form">
              <h3>快速咨询</h3>
              <form @submit.prevent="submitInquiry">
                <div class="form-group">
                  <label>姓名</label>
                  <input v-model="inquiry.name" type="text" required>
                </div>
                <div class="form-group">
                  <label>邮箱</label>
                  <input v-model="inquiry.email" type="email" required>
                </div>
                <div class="form-group">
                  <label>感兴趣的研究方向</label>
                  <select v-model="inquiry.interest" required>
                    <option value="">请选择</option>
                    <option value="智能传感技术">智能传感技术</option>
                    <option value="精准农业">精准农业</option>
                    <option value="环境监测">环境监测</option>
                    <option value="数据科学">数据科学</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>留言</label>
                  <textarea v-model="inquiry.message" rows="4" placeholder="请简要介绍您的背景和兴趣"></textarea>
                </div>
                <button type="submit" class="submit-btn">提交咨询</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JoinLabPage',
  data() {
    return {
      inquiry: {
        name: '',
        email: '',
        interest: '',
        message: ''
      },
      openPositions: [
        {
          id: 1,
          title: '博士后研究员',
          type: '全职',
          description: '从事农业物联网、智能传感技术或精准农业相关研究工作。',
          requirements: [
            '计算机科学、电子工程、农业工程或相关专业博士学位',
            '具有物联网、传感器技术或数据分析相关研究经验',
            '具备良好的英文读写能力，能够发表高质量学术论文',
            '具有团队合作精神和独立解决问题的能力'
          ],
          benefits: [
            '具有竞争力的薪酬待遇',
            '良好的科研环境和设备条件',
            '参与国际学术会议的机会',
            '职业发展指导和支持'
          ]
        },
        {
          id: 2,
          title: '硕士研究生',
          type: '学位项目',
          description: '在导师指导下开展农业物联网技术相关的硕士学位研究。',
          requirements: [
            '计算机、电子、农业工程等相关专业本科学位',
            '对农业科技和物联网技术有浓厚兴趣',
            '具备基本的编程能力和数学基础',
            '学习能力强，有研究热情'
          ],
          benefits: [
            '系统的研究生培养体系',
            '参与前沿科研项目的机会',
            '学术交流和实践机会',
            '毕业后就业指导'
          ]
        },
        {
          id: 3,
          title: '研究助理',
          type: '兼职/实习',
          description: '协助开展实验室日常研究工作，参与项目开发和数据分析。',
          requirements: [
            '本科在读或应届毕业生',
            '计算机、电子工程或相关专业背景',
            '熟悉Python、Java或C++等编程语言',
            '责任心强，工作认真细致'
          ],
          benefits: [
            '灵活的工作时间安排',
            '实践经验和技能提升',
            '研究生升学推荐机会',
            '项目补贴和绩效奖励'
          ]
        }
      ]
    }
  },
  
  methods: {
    applyPosition(position) {
      // 可以打开申请表单或跳转到申请页面
      const subject = `申请${position.title}职位`
      const body = `您好，我对${position.title}职位很感兴趣，希望能够了解更多信息。`
      const mailtoLink = `mailto:recruitment@hzau-aiot.edu.cn?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
    },
    
    submitInquiry() {
      // 这里可以连接到后端API
      console.log('提交咨询:', this.inquiry)
      
      // 模拟提交成功
      alert('咨询已提交，我们会尽快与您联系！')
      
      // 重置表单
      this.inquiry = {
        name: '',
        email: '',
        interest: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.join-lab-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 0 4rem;
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

.join-content {
  padding: 5rem 0;
}

.section-title {
  font-size: 2.5rem;
  color: #2d3748;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 300;
}

/* 职位卡片 */
.positions-section {
  margin-bottom: 5rem;
}

.positions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.position-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.position-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.position-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.position-title {
  color: #2d3748;
  font-size: 1.5rem;
}

.position-type {
  background: #ff6b35;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.position-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.position-requirements,
.position-benefits {
  margin-bottom: 1.5rem;
}

.position-requirements h4,
.position-benefits h4 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.position-requirements ul,
.position-benefits ul {
  list-style: none;
  padding: 0;
}

.position-requirements li,
.position-benefits li {
  color: #4a5568;
  padding: 0.25rem 0;
  padding-left: 1rem;
  position: relative;
}

.position-requirements li::before,
.position-benefits li::before {
  content: '•';
  color: #ff6b35;
  position: absolute;
  left: 0;
}

.apply-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  width: 100%;
}

.apply-btn:hover {
  background: #5a6fd8;
  transform: translateY(-2px);
}

/* 文化价值观 */
.culture-section {
  background: #f8f9fa;
  padding: 5rem 0;
  margin: 0 -2rem;
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.culture-item {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.culture-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.culture-item h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.culture-item p {
  color: #4a5568;
  line-height: 1.6;
}

/* 申请流程 */
.process-section {
  margin: 5rem 0;
}

.process-timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.step-number {
  background: #667eea;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content h4 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.step-content p {
  color: #4a5568;
  line-height: 1.6;
}

/* 联系表单 */
.contact-section {
  background: #f8f9fa;
  padding: 5rem 0;
  margin: 0 -2rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-icon {
  font-size: 1.5rem;
  margin-top: 0.25rem;
}

.contact-item h4 {
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.contact-item p {
  color: #4a5568;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.contact-form h3 {
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.submit-btn {
  background: #ff6b35;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  width: 100%;
}

.submit-btn:hover {
  background: #ff5722;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .positions-grid {
    grid-template-columns: 1fr;
  }
  
  .culture-grid {
    grid-template-columns: 1fr;
  }
  
  .process-timeline {
    grid-template-columns: 1fr;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .culture-section,
  .contact-section {
    margin: 0 -1rem;
  }
}
</style> 