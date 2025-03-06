<template>
  <div class="flex flex-col w-auto lg:p-6 bg-white rounded-2xl gap-4 sm:gap-6">
    <ProfileAnalyticsHeader class="flex-grow h-auto" @close="$emit('close')" />
    <AnalyticsSummaryCards class="flex-grow h-auto" :analyticsData="analyticsData" />
    <TopPerformingWishlist class="flex-grow h-auto" :wishlists="analyticsData.top_wishlists" />
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <WishPerformanceGraph class="h-auto" :wishData="analyticsData.wishGraph" />
      <AudiencePieChart class="h-auto" :audienceData="analyticsData.pieChart" />
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
  }
};
</script>
