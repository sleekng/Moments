<template>
    <div class="lg:px-12 px-4 py-8 rounded-b-lg bg-white cursor-pointer">
      <div class="lg:mb-8 mb-4">
        <div class="lg:text-2xl lg:font-bold" style="font-family: Mukta">Search results for “ <span class="">{{ search }}</span> ”</div>
      </div>
      <div v-if="selectedOption === 'Friends'">
            <div v-for="result in results" :key="result.id" class="flex flex-col sm:flex-row justify-between  w-full p-4 border-b border-gray-300">
          <div class="flex lg:items-center space-x-4">
            <img :src="result.imgSrc" alt="Profile" class="lg:w-20 lg:h-20 w-16 h-16 rounded-full" />
            <div>
              <div class=" text-base lg:text-lg font-medium" style="font-family: Mukta">{{ result.name }}</div>
              <div class="text-sm text-gray-600" style="font-family: Mukta">{{ result.username }}</div>
              <div class="lg:mt-2 mt-1 flex space-x-2 lg:space-x-3 text-gray-600" style="font-family: Mukta">
                <span><span class="font-bold">{{ result.wishlists }}</span> Wishlist</span>
                <span><span class="font-bold">{{ result.friends }}</span> Friends</span>
                <span><span class="font-bold">{{ result.likes }}</span> Likes</span>
              </div>
            </div>
          </div>
          <div class="flex self-end lg:self-auto lg:items-center space-x-4">

            <button
              v-if="result.friendStatus === 'friends'"
              class="bg-gray-200 text-gray-800 lg:py-3  py-2 w-[180px] px-4 rounded-full shadow focus:outline-none cursor-default"
              style="font-family: Mukta"
            >
              Friends
            </button>
            <button
              v-else
              class="bg-primaryColor text-white lg:py-3  py-2  w-[180px] px-6 rounded-full shadow hover:shadow-lg focus:outline-none"
              style="font-family: Mukta"
            >
              Send friend <span class="hidden lg:inline">request</span>
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="flex flex-wrap ">
          <WishlistCard v-for="wishlist in results" :key="wishlist.id" :wishlist="wishlist" class="w-full md:w-auto lg:flex-shrink-0 my-4 lg:m-4" />
        </div>

      </div>
    </div>
  </template>
  
  <script>
  import WishlistCard from '@/components/Dashboard/WishlistCard.vue';
  
  export default {
    name: 'SearchResultsComponent',
    props: {
      results: {
        type: Array,
        required: true
      },
      search: {
        type: String,
        required: true
      },
      selectedOption: {
        type: String,
        required: true
      }
    },
    components: {
      WishlistCard
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles if needed */
  </style>
  