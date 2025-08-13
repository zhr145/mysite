<template>
  <div class="video-monitor">
    <header class="monitor-header">
      <h1>实时视频监控</h1>
      <button @click="goBack" class="back-btn">返回首页</button>
    </header>

    <div class="video-container">
      <div class="video-wrapper">
        <img 
          :src="videoUrl" 
          alt="实时视频流" 
          @error="handleVideoError"
          @load="handleVideoLoad"
        />
        <div v-if="videoError" class="error-overlay">
          <p>视频流连接失败</p>
          <button @click="retryConnection" class="retry-btn">重试连接</button>
        </div>
        <div v-if="loading" class="loading-overlay">
          <p>正在连接视频流...</p>
        </div>
      </div>
      
      <div class="video-info">
        <h3>监控信息</h3>
        <div class="info-item">
          <span class="label">视频源:</span>
          <span class="value">{{ videoSource }}</span>
        </div>
        <div class="info-item">
          <span class="label">状态:</span>
          <span :class="['status', statusClass]">{{ connectionStatus }}</span>
        </div>
        <div class="info-item">
          <span class="label">最后更新:</span>
          <span class="value">{{ lastUpdate }}</span>
        </div>
      </div>
    </div>

    <div class="controls">
      <button @click="refreshVideo" class="control-btn">
        🔄 刷新视频
      </button>
      <button @click="toggleFullscreen" class="control-btn">
        🔍 全屏显示
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoMonitor',
  data() {
    return {
      videoUrl: 'http://192.168.6.61:8081',
      videoSource: '192.168.6.61:8081',
      videoError: false,
      loading: true,
      connectionStatus: '连接中...',
      lastUpdate: '--'
    }
  },
  
  computed: {
    statusClass() {
      if (this.videoError) return 'error'
      if (this.loading) return 'loading'
      return 'success'
    }
  },
  
  mounted() {
    this.updateTimestamp()
    this.timestampInterval = setInterval(this.updateTimestamp, 1000)
  },
  
  beforeUnmount() {
    if (this.timestampInterval) {
      clearInterval(this.timestampInterval)
    }
  },
  
  methods: {
    handleVideoError() {
      this.videoError = true
      this.loading = false
      this.connectionStatus = '连接失败'
    },
    
    handleVideoLoad() {
      this.videoError = false
      this.loading = false
      this.connectionStatus = '已连接'
    },
    
    retryConnection() {
      this.videoError = false
      this.loading = true
      this.connectionStatus = '重新连接中...'
      
      // 通过修改URL参数强制重新加载
      const timestamp = new Date().getTime()
      this.videoUrl = `http://192.168.6.61:8081?t=${timestamp}`
    },
    
    refreshVideo() {
      this.retryConnection()
    },
    
    toggleFullscreen() {
      const videoWrapper = document.querySelector('.video-wrapper img')
      if (videoWrapper) {
        if (videoWrapper.requestFullscreen) {
          videoWrapper.requestFullscreen()
        } else if (videoWrapper.webkitRequestFullscreen) {
          videoWrapper.webkitRequestFullscreen()
        } else if (videoWrapper.mozRequestFullScreen) {
          videoWrapper.mozRequestFullScreen()
        }
      }
    },
    
    updateTimestamp() {
      if (!this.videoError && !this.loading) {
        this.lastUpdate = new Date().toLocaleTimeString()
      }
    },
    
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.video-monitor {
  padding: 20px;
  background: #f5f5f5;
  min-height: 100vh;
}

.monitor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.back-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.video-container {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  margin-bottom: 20px;
}

.video-wrapper {
  position: relative;
  background: #000;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.video-wrapper img {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
  display: block;
}

.error-overlay,
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
}

.retry-btn {
  margin-top: 15px;
  background: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.video-info {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  height: fit-content;
}

.info-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.label {
  font-weight: bold;
  color: #333;
}

.value {
  color: #666;
}

.status.success {
  color: #4CAF50;
  font-weight: bold;
}

.status.error {
  color: #f44336;
  font-weight: bold;
}

.status.loading {
  color: #ff9800;
  font-weight: bold;
}

.controls {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.control-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

.control-btn:hover {
  background: #5a6fd8;
}

@media (max-width: 768px) {
  .video-container {
    grid-template-columns: 1fr;
  }
  
  .controls {
    flex-direction: column;
    gap: 10px;
  }
}
</style> 