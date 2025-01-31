<template>
    <div class="bg-white p-4 rounded-lg border border-[#f0f0f0]">
      <!-- Header section -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-[20px] font-semibold text-[#121212] leading-[150%]">
          Top performing wishlist
        </h2>
        
        <!-- Button group -->
        <div class="flex gap-1.5 p-1 rounded-lg border border-[#f0f0f0]">
          <button 
            class="px-3 py-2 rounded text-xs font-medium leading-[120%] tracking-[-0.24px]"
            :class="[
              activeFilter === 'engagement' 
                ? 'bg-[#eaebed] text-[#121212]' 
                : 'bg-white text-[#4c515b]'
            ]"
            @click="setFilter('engagement')"
          >
            Engagement
          </button>
          <button
            class="px-3 py-2 rounded text-xs font-medium leading-[120%] tracking-[-0.24px]"
            :class="[
              activeFilter === 'fulfilled'
                ? 'bg-[#eaebed] text-[#121212]'
                : 'bg-white text-[#4c515b]'
            ]"
            @click="setFilter('fulfilled')"
          >
            Fulfilled
          </button>
        </div>
      </div>
  
      <!-- Wishlists grid -->
      <div class="flex gap-3 overflow-x-auto">
        <div v-for="(wishlist, index) in wishlists" :key="index" 
             class="min-w-[211px] h-[250px] rounded-lg bg-white relative">
          <!-- Wishlist image -->
          <div class="w-full h-full rounded-lg overflow-hidden bg-[#fcede0]">
            <img :src="wishlist.image" class="w-full h-full object-cover" alt="Wishlist cover" />
          </div>
  
          <!-- Stats overlay -->
          <div class="absolute top-3 left-3 flex gap-1.5 bg-[#121212] rounded-full px-2 py-1.5">
            <div class="flex items-center gap-1.5">
              <i class="fas fa-heart text-xs text-[#f8f9fa]"></i>
              <span class="text-xs text-[#f8f9fa]">{{ wishlist.likes }}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <i class="fas fa-eye text-xs text-[#f8f9fa]"></i>
              <span class="text-xs text-[#f8f9fa]">{{ wishlist.views }}</span>
            </div>
          </div>
  
          <!-- Title overlay -->
          <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[rgba(18,18,18,1)] to-[rgba(18,18,18,0.57)]">
            <h3 class="text-lg font-semibold text-[#f5f6f7] mb-1">{{ wishlist.title }}</h3>
            <div class="flex items-center gap-1">
              <i class="fas fa-gift text-xs text-[#f8f9fa]"></i>
              <span class="text-base text-[#f8f9fa]">{{ wishlist.wishCount }} Wishes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TopPerformingWishlist',
    data() {
      return {
        activeFilter: 'engagement',
        wishlists: [
          {
            title: 'Wishlist title',
            wishCount: 10,
            likes: 200,
            views: 200,
            image: 'https://dashboard.codeparrot.ai/api/image/Z50kG2keShv06lPv/5-1.png'
          },
          {
            title: 'Wishlist title',
            wishCount: 10,
            likes: 200,
            views: 200,
            image: 'https://dashboard.codeparrot.ai/api/image/Z50kG2keShv06lPv/5-1-2.png'
          },
          {
            title: 'Wishlist title',
            wishCount: 10,
            likes: 200,
            views: 200,
            image: 'https://dashboard.codeparrot.ai/api/image/Z50kG2keShv06lPv/5-1-3.png'
          },
          {
            title: 'Wishlist title',
            wishCount: 10,
            likes: 200,
            views: 200,
            image: 'https://dashboard.codeparrot.ai/api/image/Z50kG2keShv06lPv/5-1-4.png'
          },
          {
            title: 'Wishlist title',
            wishCount: 10,
            likes: 200,
            views: 200,
            image: 'https://dashboard.codeparrot.ai/api/image/Z50kG2keShv06lPv/5-1-5.png'
          }
        ]
      }
    },
    methods: {
      setFilter(filter) {
        this.activeFilter = filter;
      }
    }
  }
  </script>
  
  