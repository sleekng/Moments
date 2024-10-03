<template>
    <div class="bg-white  rounded-t-lg px-12  pt-12 pb-4 ">
      <div class="flex items-start mb-8">
        <!-- Avatar -->
        <img src="/assets/avatar.svg" alt="Avatar" class="h-32 w-32 rounded-full mr-6">
        
        <!-- User Information -->
        <div class="flex-1">
          <div class="flex items-center mb-2">
            <h2 class="text-2xl font-medium mr-4">Ayomide Shotayo</h2>
            <p class="text-lg text-gray-600">@ayomide_sm</p>
          </div>
          
          <div class="flex items-center text-[#616874]  mb-6">
            <span class="mr-2">🎂 Birthday, April 20</span>
            <span class="flex items-center">
              <img src="/assets/frame-1618868316.svg" alt="Location" class="h-5 w-5 ">
              Lagos, Nigeria
            </span>
          </div>
          
          <div class="flex text-[#616874] mb-6">
            <div class="mr-4">
              <span class="font-bold  text-[black] text-xl">10</span> Wishlist
            </div>
            <div class="mr-4">
              <span class="font-bold  text-[black] text-xl">200k</span> Friends
            </div>
            <div>
              <span class="font-bold  text-[black] text-xl">300</span> Likes
            </div>
          </div>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex space-x-4">
          <button @click="showAnalyticsModal" class="bg-gray-100 text-[#2D3036] py-2 px-6 rounded-full">
            View analytics
          </button>
          <button class="bg-gray-100 text-[#2D3036] py-2 px-6 rounded-full">
            Share profile
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileDetails',

    methods:{
      showAnalyticsModal(){
        
        
      }
    }
  };
  </script>
  
  <style scoped>
  /* Additional styles if required */
  </style>
  