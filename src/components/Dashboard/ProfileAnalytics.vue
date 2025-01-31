<template>
  <div :style="styles.container">
    <ProfileAnalyticsHeader :style="styles.header" @close="$emit('close')" />
    <AnalyticsSummaryCards :style="styles.summaryCards" :analyticsData="analyticsData" />
    <TopPerformingWishlist :style="styles.topWishlist" />
    <div :style="styles.bottomSection">
      <WishPerformanceGraph :style="styles.wishGraph" />
      <AudiencePieChart :style="styles.audienceChart" />
    </div>
  </div>
</template>

<script>
import ProfileAnalyticsHeader from './ProfileAnalyticsHeader.vue';
import AnalyticsSummaryCards from './AnalyticsSummaryCards.vue';
import TopPerformingWishlist from './TopPerformingWishlist.vue';
import WishPerformanceGraph from './WishPerformanceGraph.vue';
import AudiencePieChart from './AudiencePieChart.vue';

export default {
  components: {
    ProfileAnalyticsHeader,
    AnalyticsSummaryCards,
    TopPerformingWishlist,
    WishPerformanceGraph,
    AudiencePieChart
  },
  props: {
    analyticsData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      styles: {
        container: {
          display: 'flex',
          flexDirection: 'column',
          width: '1136px',
          padding: '32px',
          backgroundColor: '#fefefe',
          borderRadius: '32px',
          gap: '24px'
        },
        header: {
          flexGrow: 1,
          height: 'auto'
        },
        summaryCards: {
          flexGrow: 1,
          height: 'auto'
        },
        topWishlist: {
          flexGrow: 1,
          height: 'auto'
        },
        bottomSection: {
          display: 'flex',
          flexDirection: 'row',
          gap: '16px'
        },
        wishGraph: {
          flexGrow: 1,
          height: 'auto'
        },
        audienceChart: {
          flexGrow: 1,
          height: 'auto'
        }
      }
    };
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>

