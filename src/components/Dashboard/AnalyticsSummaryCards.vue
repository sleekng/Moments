<template>
    <div class="flex flex-row gap-3 w-full">
      <!-- Total Impressions -->
      <div class="flex-1 bg-[#fdebff] rounded-lg p-7">
        <div class="flex flex-row gap-4">
          <div class="w-12 h-12 rounded-full bg-[#e567f8] flex items-center justify-center">
            <i class="fas fa-chart-bar w-6 h-6 text-white"></i>
          </div>
          <div class="flex flex-col gap-0.5">
            <span class="text-[#575757] text-sm font-normal">Total Impressions</span>
            <span class="text-[#121212] text-2xl font-semibold">50.1k</span>
          </div>
        </div>
      </div>
  
      <!-- Total Friends -->
      <div class="flex-1 bg-[#dffeff] rounded-lg p-7">
        <div class="flex flex-row gap-4">
          <div class="w-12 h-12 rounded-full bg-[#47e3e8] flex items-center justify-center">
            <i class="fas fa-user-friends w-6 h-6 text-white"></i>
          </div>
          <div class="flex flex-col gap-0.5">
            <span class="text-[#575757] text-sm font-normal">Total Friends</span>
            <span class="text-[#121212] text-2xl font-semibold">3384</span>
          </div>
        </div>
      </div>
  
      <!-- Total Likes -->
      <div class="flex-1 bg-[#feebeb] rounded-lg p-7">
        <div class="flex flex-row gap-4">
          <div class="w-12 h-12 rounded-full bg-[#e32e2e] flex items-center justify-center">
            <i class="fas fa-heart w-6 h-6 text-white"></i>
          </div>
          <div class="flex flex-col gap-0.5">
            <span class="text-[#575757] text-sm font-normal">Total Likes</span>
            <span class="text-[#121212] text-2xl font-semibold">20.1k</span>
          </div>
        </div>
      </div>
  
      <!-- Total Views -->
      <div class="flex-1 bg-[#e2f5ff] rounded-lg p-7">
        <div class="flex flex-row gap-4">
          <div class="w-12 h-12 rounded-full bg-[#37b1b5] flex items-center justify-center">
            <i class="fas fa-eye w-6 h-6 text-white"></i>
          </div>
          <div class="flex flex-col gap-0.5">
            <span class="text-[#575757] text-sm font-normal">Total Views</span>
            <span class="text-[#121212] text-2xl font-semibold">20.1k</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AnalyticsSummaryCards',
    props: {
      analyticsData: {
        type: Object,
        default: () => ({
          impressions: 50100,
          friends_count: 3384,
          likes_count: 20100,
          views: 20100
        })
      }
    }
  }
  </script>
  
  