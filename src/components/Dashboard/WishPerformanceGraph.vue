<template>
  <div class="bg-white p-4 sm:p-6 rounded-lg border border-[#f0f0f0] flex flex-col gap-4">
      <!-- Header section -->
      <div class="flex flex-col lg:flex-row justify-between ">
        <h2 class="title">Wish performance</h2>
        <div class="legends">
          <div class="legend-item">
            <div class="color-dot reserved"></div>
            <span>Reserved</span>
          </div>
          <div class="legend-item">
            <div class="color-dot fulfilled"></div>
            <span>Fulfilled</span>
          </div>
          <div class="legend-item">
            <div class="color-dot received"></div>
            <span>Received</span>
          </div>
        </div>
      </div>
  
      <!-- Stats section -->
      <div class="stats">
        <div class="stat-header">
          <h3 class="stat-value">{{wishData.received.length}}</h3>
          <div class="stat-details">
            <p class="stat-label">Wishes received</p>
            <div class="stat-trend">
              <i class="fas fa-arrow-up trend-arrow"></i>
              <span class="trend-value">10.2%</span>
              <span class="trend-period">Last 30 days</span>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Graph section -->
      <div class="graph">
        <!-- Y-axis -->
        <canvas ref="wishPerformanceChart" width="400" height="200"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { format } from 'date-fns';
Chart.register(...registerables);

  export default {
    name: 'WishPerformanceGraph',
    props: {
    wishData: {
      type: Object,
      required: true,
      default: () => ({
        reserved: [],
        fulfilled: [],
        received: []
      })
    }
  },
    data() {
      return {
        showTooltip: false,
        tooltipStyle: {
          left: '0px',
          top: '0px'
        }
      }
    },
    mounted() {
    if (this.wishData) {
      this.renderChart();
    }
  },

  methods: {
    renderChart() {
      const ctx = this.$refs.wishPerformanceChart.getContext('2d');
      const labels = this.getUniqueDates();

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Reserved',
              data: this.getDataForType('reserved'),
              borderColor: '#e567f8',
              backgroundColor: '#e567f8',
              tension: 0.4,
              fill: false
              
            },
            {
              label: 'Fulfilled',
              data: this.getDataForType('fulfilled'),
              borderColor: '#47e3e8',
              tension: 0.4,
              fill: false
            },
            {
              label: 'Received',
              data: this.getDataForType('received'),
              borderColor: '#7cc1e8',
              tension: 0.4,
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                title: (tooltipItems) => {
                  // Format the date using date-fns
                  return format(new Date(tooltipItems[0].parsed.x), 'EEEE, MMM d, yyyy');
                }
              }
            }
          },
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
                displayFormats: {
                  day: 'MMM d'
                }
              },
              grid: {
                display: false
              }
            },
            y: {
              beginAtZero: true,
              grid: {
                color: '#f0f0f0'
              },
              ticks: {
                stepSize: 1
              }
            }
          }
        }
      });
    },
    getUniqueDates() {
      try {
        const allDates = [
          ...(this.wishData.reserved || []).map(item => new Date(item.date)),
          ...(this.wishData.fulfilled || []).map(item => new Date(item.date)),
          ...(this.wishData.received || []).map(item => new Date(item.date))
        ];
        return [...new Set(allDates)].sort((a, b) => a - b);
      } catch (error) {
        console.error('Error in getUniqueDates:', error);
        return [];
      }
    },
    getDataForType(type) {
      try {
        const dataArray = this.wishData[type] || [];
        return dataArray.map(item => ({
          x: new Date(item.date),
          y: item.count
        }));
      } catch (error) {
        console.error(`Error in getDataForType for ${type}:`, error);
        return [];
      }
    }
  }


  }
  </script>
  
  <style scoped>
  .graph-container {
    background-color: #fefefe;
    border: 1px solid #f0f0f0;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
  
    height: 400px !important;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 38px;
  }
  
  .title {
    font-family: Mukta;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: #121212;
    margin: 0;
  }
  
  .legends {
    display: flex;
    gap: 10px;
  }
  
  .legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: Mukta;
    font-weight: 400;
    font-size: 14px;
    line-height: 145%;
    color: #616874;
  }
  
  .color-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  
  .color-dot.reserved { background-color: #e567f8; }
  .color-dot.fulfilled { background-color: #47e3e8; }
  .color-dot.received { background-color: #7cc1e8; }
  
  .stats {
    margin-top: 24px;
  }
  
  .stat-header {
    display: flex;
    flex-direction: column;
    gap: -1px;
  }
  
  .stat-value {
    font-family: Mukta;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #3b3f46;
    margin: 0;
  }
  
  .stat-label {
    font-family: Mukta;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #616874;
    margin: 0;
  }
  
  .stat-trend {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  
  .trend-arrow {
    color: #188c43;
  }
  
  .trend-value {
    font-family: Mukta;
    font-weight: 500;
    font-size: 12px;
    color: #188c43;
  }
  
  .trend-period {
    font-family: Mukta;
    font-weight: 400;
    font-size: 10px;
    line-height: 150%;
    color: #616874;
  }
  

  
  .y-axis {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .y-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: Mukta;
    font-weight: 400;
    font-size: 12px;
    color: #4c515b;
  }
  
  .grid-line {
    width: 100%;
    height: 1px;
    background-color: #eaebed;
  }
  
  .x-axis {
    grid-column: 2;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
  
  .x-label {
    font-family: Mukta;
    font-weight: 400;
    font-size: 12px;
    color: #898e99;
  }
  
  .tooltip {
    position: absolute;
    background: white;
    border-radius: 4px;
    padding: 6px;
    min-width: 138px;
  }
  
  .tooltip-date {
    font-family: Mukta;
    font-weight: 400;
    font-size: 8px;
    line-height: 150%;
    color: #898e99;
    margin-bottom: 5px;
  }
  
  .tooltip-stats {
    display: flex;
    gap: 8px;
  }
  
  .tooltip-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .tooltip-stat span {
    font-family: Mukta;
    font-weight: 400;
    font-size: 10px;
    line-height: 150%;
    color: #6b7280;
  }
  
  .tooltip-stat strong {
    font-family: Mukta;
    font-weight: 600;
    font-size: 13px;
    line-height: 130%;
    color: #121212;
  }
  </style>
  
  