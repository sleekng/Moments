<template>
  <div class="flex flex-col sm:flex-row items-center justify-between w-full h-auto sm:h-[42px] gap-2 sm:gap-4">
    <div class="flex flex-row items-center w-full gap-2 sm:gap-4">
      <i class="fas fa-times text-xl cursor-pointer" @click="$emit('close')"></i>
      <h1 class="text-xl sm:text-2xl font-bold text-[#121212]">Profile Analytics</h1>
    </div>
    <div class="flex flex-row items-center w-full justify-between sm:justify-end gap-2 sm:gap-4">
      <span class="text-sm sm:text-base font-medium text-[#2d3036]">Nov 8 - Dec 2</span>
      <div 
        class="flex flex-row items-center gap-1 px-2 py-1 sm:px-3 sm:py-2 border border-[#e0e1e4] rounded-lg cursor-pointer"
        @click="toggleDropdown"
      >
        <span class="text-sm sm:text-base text-[#4c515b]">Last 30 days</span>
        <i class="fas fa-chevron-down text-xs  "></i>
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
