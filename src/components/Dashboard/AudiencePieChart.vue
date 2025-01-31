<template>
    <div :style="styles.container">
      <div :style="styles.header">
        <h2 :style="styles.title">Audience</h2>
      </div>
      <div :style="styles.chartContainer">
        <div :style="styles.wrapper">
          <!-- Male Stats -->
          <div :style="styles.genderStats">
            <div :style="styles.indicator('#47e3e8')"></div>
            <div :style="styles.statsContent">
              <span :style="styles.label">Male</span>
              <span :style="styles.percentage">84.1%</span>
            </div>
          </div>
  
          <!-- Pie Chart -->
          <div :style="styles.pieChart">
            <img src="https://dashboard.codeparrot.ai/api/image/Z50kG2keShv06lPv/pie-char.png" alt="Audience Distribution" :style="styles.chartImage" />
          </div>
  
          <!-- Female Stats -->
          <div :style="styles.genderStats">
            <div :style="styles.indicator('#e567f8')"></div>
            <div :style="styles.statsContent">
              <span :style="styles.label">Female</span>
              <span :style="styles.percentage">15.9%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AudiencePieChart',
    data() {
      return {
        styles: {
          container: {
            display: 'flex',
            flexDirection: 'column',
            padding: '16px',
            gap: '16px',
            background: '#fefefe',
            borderRadius: '10px',
            border: '1px solid #f0f0f0',
            minWidth: '320px',
            maxWidth: '100%',
            height: 'auto',
            boxSizing: 'border-box'
          },
          header: {
            display: 'flex',
            flexDirection: 'row',
            gap: '8px',
            height: 'auto'
          },
          title: {
            fontFamily: 'Mukta',
            fontSize: '20px',
            fontWeight: '600',
            lineHeight: '150%',
            color: '#121212',
            margin: 0
          },
          chartContainer: {
            display: 'flex',
            flexDirection: 'row',
            padding: '10px',
            gap: '10px',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          },
          wrapper: {
            display: 'flex',
            flexDirection: 'row',
            gap: '32px',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
          },
          genderStats: {
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            height: '44px',
            alignItems: 'center'
          },
          indicator: (color) => ({
            width: '4px',
            height: '100%',
            backgroundColor: color,
            borderRadius: '8px'
          }),
          statsContent: {
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            marginLeft: '14px'
          },
          label: {
            fontFamily: 'Mukta',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '12px',
            color: '#575757'
          },
          percentage: {
            fontFamily: 'Mukta',
            fontSize: '20px',
            fontWeight: '600',
            lineHeight: '28px',
            color: '#121212'
          },
          pieChart: {
            width: '220px',
            height: '220px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          },
          chartImage: {
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }
        }
      }
    }
  }
  </script>
  
  