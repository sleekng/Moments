<template>
    <div class="graph-container">
      <!-- Header section -->
      <div class="header">
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
          <h3 class="stat-value">27</h3>
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
        <div class="y-axis">
          <div v-for="value in [40, 30, 20, 10, 0]" :key="value" class="y-label">
            <span>{{ value }}</span>
            <div class="grid-line"></div>
          </div>
        </div>
  
        <!-- Graph content -->
        <div class="graph-content">
          <!-- Line chart will be rendered here -->
          <div class="tooltip" v-if="showTooltip" :style="tooltipStyle">
            <div class="tooltip-date">Tuesday, Dec 2, 2024</div>
            <div class="tooltip-stats">
              <div class="tooltip-stat">
                <span>Reserved:</span>
                <strong>27</strong>
              </div>
              <div class="tooltip-stat">
                <span>Fulfilled:</span>
                <strong>12</strong>
              </div>
              <div class="tooltip-stat">
                <span>Received:</span>
                <strong>5</strong>
              </div>
            </div>
          </div>
        </div>
  
        <!-- X-axis -->
        <div class="x-axis">
          <span v-for="n in 12" :key="n" class="x-label">{{ n }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WishPerformanceGraph',
    data() {
      return {
        showTooltip: false,
        tooltipStyle: {
          left: '0px',
          top: '0px'
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
    max-width: 528px;
    height: auto;
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
  
  .graph {
    position: relative;
    flex-grow: 1;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 40px 1fr;
    grid-template-rows: 1fr 30px;
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
  
  