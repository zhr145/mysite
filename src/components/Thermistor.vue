<template>
    <div class="chart-container">
      <div ref="chart" style="width: 600px; height: 400px;"></div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import * as echarts from 'echarts';
  
  export default {
    name: 'TemperatureChart',
    data() {
      return {
        chart: null,
      };
    },
    mounted() {
      this.initChart();
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('http://localhost:8000/api/data/');
          this.updateChart(response.data);
        } catch (error) {
          console.error('获取数据失败:', error);
        }
      },
      initChart() {
        this.chart = echarts.init(this.$refs.chart);
        this.chart.setOption({
          title: { text: '温度变化图' },
          tooltip: { trigger: 'axis' },
          xAxis: { type: 'time' },
          yAxis: { name: '温度 (°C)' },
          series: [{
            name: '温度',
            type: 'line',
            data: []
          }]
        });
      },
      updateChart(data) {
        const chartData = data.map(item => [new Date(item.timestamp), item.value]);
        this.chart.setOption({
          series: [{ data: chartData }]
        });
      }
    }
  };
  </script>