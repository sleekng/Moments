<template>
    <div class="flex flex-row items-center justify-between w-full h-[42px] gap-4">
      <div class="flex flex-row items-center gap-4">
        <i class="fas fa-times w-8 h-8 cursor-pointer" @click="$emit('close')"></i>
        <h1 class="text-2xl font-bold text-[#121212]">Profile Analytics</h1>
      </div>
      <div class="flex flex-row items-center gap-4">
        <span class="text-base font-medium text-[#2d3036]">Nov 8 - Dec 2</span>
        <div 
          class="flex flex-row items-center gap-1.5 px-3 py-2 border border-[#e0e1e4] rounded-lg cursor-pointer"
          @click="toggleDropdown"
        >
          <span class="text-base text-[#4c515b]">Last 30 days</span>
          <i class="fas fa-chevron-down w-3 h-3"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileAnalyticsHeader',
    methods: {
      toggleDropdown() {
        // Implement dropdown toggle logic
        this.$emit('toggleDateRange');
      }
    }
  }
  </script>
  
  