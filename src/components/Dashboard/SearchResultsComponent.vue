<template>
    <div class="px-12 py-8 bg-white cursor-pointer">
      <div class="mb-8">
        <div class="text-2xl font-bold" style="font-family: Mukta">Search results for “{{ search }}”</div>
      </div>
      <div v-if="selectedOption === 'Friends'">
        <div v-for="result in results" :key="result.id" class="flex justify-between w-full p-5 border-b border-gray-300">
          <div class="flex items-center space-x-4">
            <img :src="result.imgSrc" alt="Profile" class="w-20 h-20 rounded-full" />
            <div>
              <div class="text-lg font-medium" style="font-family: Mukta">{{ result.name }}</div>
              <div class="text-sm text-gray-600" style="font-family: Mukta">{{ result.username }}</div>
              <div class="mt-2 flex space-x-3 text-gray-600" style="font-family: Mukta">
                <span><span class="font-bold">{{ result.wishlists }}</span> Wishlist</span>
                <span><span class="font-bold">{{ result.friends }}</span> Friends</span>
                <span><span class="font-bold">{{ result.likes }}</span> Likes</span>
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <button
              v-if="result.friendStatus === 'friends'"
              class="bg-gray-200 text-gray-800 py-3 w-[180px] px-4 rounded-full shadow focus:outline-none cursor-default"
              style="font-family: Mukta"
            >
              Friends
            </button>
            <button
              v-else
              class="bg-primaryColor text-white py-3 w-[180px] px-6 rounded-full shadow hover:shadow-lg focus:outline-none"
              style="font-family: Mukta"
            >
              Send friend request
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="flex flex-wrap ">
          <WishlistCard v-for="wishlist in results" :key="wishlist.id" :wishlist="wishlist" class=" flex-shrink-0 m-4" />
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
  