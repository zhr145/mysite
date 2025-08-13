<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>温度监控仪表板</h1>
      <button @click="goBack" class="back-btn">返回首页</button>
    </header>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>当前温度</h3>
        <div class="stat-value">{{ currentTemp }}°C</div>
        <div class="stat-time">{{ updateTime }}</div>
      </div>
      
      <div class="stat-card">
        <h3>平均温度</h3>
        <div class="stat-value">{{ avgTemp }}°C</div>
      </div>
      
      <div class="stat-card">
        <h3>最高温度</h3>
        <div class="stat-value">{{ maxTemp }}°C</div>
      </div>
      
      <div class="stat-card">
        <h3>最低温度</h3>
        <div class="stat-value">{{ minTemp }}°C</div>
      </div>
    </div>

    <div class="controls">
      <button 
        v-for="period in timePeriods" 
        :key="period.value"
        @click="changePeriod(period.value)"
        :class="['time-btn', { active: selectedPeriod === period.value }]"
      >
        {{ period.label }}
      </button>
      
      <div class="date-selector">
        <input 
          type="date" 
          v-model="selectedDate" 
          @change="loadDataByDate"
          class="date-input"
        >
      </div>
    </div>

    <div class="chart-container">
      <canvas ref="chartCanvas" id="temperatureChart"></canvas>
    </div>

    <div class="loading" v-if="loading">加载中...</div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// 注册Chart.js组件
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'TemperatureDashboard',
  data() {
    return {
      currentTemp: '--',
      avgTemp: '--',
      maxTemp: '--', 
      minTemp: '--',
      updateTime: '--',
      selectedPeriod: 24,
      selectedDate: '',
      loading: false,
      chartData: [],
      chart: null,
      timePeriods: [
        { label: '1小时', value: 1 },
        { label: '6小时', value: 6 },
        { label: '24小时', value: 24 },
        { label: '7天', value: 168 }
      ]
    }
  },
  
  async mounted() {
    await this.loadStatistics()
    await this.loadChartData()
    this.initChart()
    
    // 每30秒自动刷新数据
    this.refreshInterval = setInterval(() => {
      this.loadStatistics()
      this.loadChartData()
    }, 30000)
  },
  
  beforeUnmount() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval)
    }
    if (this.chart) {
      this.chart.destroy()
    }
  },
  
  methods: {
    async loadStatistics() {
      try {
        const response = await this.$http.get(`thermistor/statistics/?hours=${this.selectedPeriod}`)
        const stats = response.data.statistics
        
        this.currentTemp = stats.latest_temperature || '--'
        this.avgTemp = stats.average_temperature || '--'
        this.maxTemp = stats.max_temperature || '--'
        this.minTemp = stats.min_temperature || '--'
        this.updateTime = stats.latest_timestamp ? 
          new Date(stats.latest_timestamp).toLocaleString() : '--'
      } catch (error) {
        console.error('加载统计数据失败:', error)
      }
    },
    
    async loadChartData() {
      this.loading = true
      try {
        let url = `thermistor/temperature/range/?hours=${this.selectedPeriod}`
        if (this.selectedDate) {
          url = `thermistor/temperature/?start_date=${this.selectedDate}&end_date=${this.selectedDate}`
        }
        
        const response = await this.$http.get(url)
        
        if (response.data.chart_data) {
          this.updateChart(response.data.chart_data)
        } else if (response.data.data) {
          this.processTemperatureData(response.data.data)
        }
      } catch (error) {
        console.error('加载图表数据失败:', error)
      } finally {
        this.loading = false
      }
    },
    
    processTemperatureData(data) {
      const chartData = {
        labels: data.map(item => new Date(item.timestamp).toLocaleTimeString()),
        datasets: [{
          label: '温度(°C)',
          data: data.map(item => item.temperature),
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.1
        }]
      }
      this.updateChart(chartData)
    },
    
    initChart() {
      const ctx = this.$refs.chartCanvas.getContext('2d')
      this.createChart(ctx)
    },
    
    createChart(ctx) {
      this.chart = new ChartJS(ctx, {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: '温度(°C)',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            y: {
              beginAtZero: false,
              title: {
                display: true,
                text: '温度 (°C)'
              }
            },
            x: {
              title: {
                display: true,
                text: '时间'
              }
            }
          },
          plugins: {
            title: {
              display: true,
              text: '温度变化趋势'
            },
            legend: {
              display: true
            }
          }
        }
      })
    },
    
    updateChart(chartData) {
      if (this.chart) {
        this.chart.data = chartData
        this.chart.update()
      }
    },
    
    async changePeriod(hours) {
      this.selectedPeriod = hours
      this.selectedDate = '' // 清除日期选择
      await this.loadStatistics()
      await this.loadChartData()
    },
    
    async loadDataByDate() {
      if (this.selectedDate) {
        await this.loadChartData()
      }
    },
    
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
  background: #f5f5f5;
  min-height: 100vh;
}

.dashboard-header {
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  color: #667eea;
  margin: 10px 0;
}

.stat-time {
  font-size: 0.8rem;
  color: #666;
}

.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.time-btn {
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px 15px;
  cursor: pointer;
  transition: all 0.3s;
}

.time-btn:hover {
  background: #e0e0e0;
}

.time-btn.active {
  background: #4CAF50;
  color: white;
  border-color: #45a049;
}

.date-selector {
  margin-left: 20px;
}

.date-input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.chart-container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

#temperatureChart {
  width: 100% !important;
  height: 400px !important;
}

.loading {
  text-align: center;
  padding: 20px;
  color: #666;
}
</style> 