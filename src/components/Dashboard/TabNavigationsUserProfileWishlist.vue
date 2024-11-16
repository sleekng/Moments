<template>
  <div class=" lg:px-12 bg-white">
    <div class="flex justify-between items-center ">
      <!-- Tabs -->
      <div class="flex overflow-x-auto">
        <!-- My Wishlist Tab -->
        <div class="flex flex-col items-center cursor-pointer" >
          <div  class="lg:text-lg text-[12px] whitespace-nowrap py-2 font-bold text-gray-900">
            {{ user.first_name }}'s wishlist
          </div>
        </div>

      </div>
      
      <!-- Sort By Dropdown -->
      <div class="relative flex items-center space-x-2 z-30" @mouseleave="isDropdownOpen = false">
        
        <i class="fa-regular text-gray-600 fa-arrow-up-arrow-down" @click="toggleDropdown"></i>
        <span class="text-base hidden lg:inline font-medium text-[#616874] cursor-pointer" @click="toggleDropdown">Sort by</span>
        <i class="fa-regular text-gray-600 fa-angles-up-down" @click="toggleDropdown"></i>
        
        <!-- Dropdown  MyWishList -->
         <template v-if="selectedTab == 'myWishes' ">
            <div v-if="isDropdownOpen"  class="w-52 absolute top-6 -right-5 bg-white rounded-lg shadow-lg p-2 border border-gray-200">
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer bg-purple-50" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-primaryColor hover:text-primaryColor w-full font-medium">Name</span>
                <img src="/assets/check.svg" class="w-3 h-3 ml-auto" alt="Check">
              </div>
              <hr>
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Event date</span>
              </div>
              <hr>
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Number of likes</span>
              </div>
              <hr>
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Number of views</span>
              </div>
              <hr>
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer mt-2 bg-purple-50" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-primaryColor font-medium hover:text-primaryColor w-full">Ascending</span>
                <img src="/assets/check-2.svg" class="w-3 h-3 ml-auto" alt="Check">
              </div>
              <hr>
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Descending</span>
              </div>
            </div>
         </template>


         <!-- DropDown Resevered Wish -->
         <template v-if="selectedTab == 'reserved'">
            <div v-if="isDropdownOpen"  class="w-52 absolute top-6 -right-5 bg-white rounded-lg shadow-lg p-2 border border-gray-200">
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer bg-purple-50" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-primaryColor hover:text-primaryColor w-full font-medium">Name</span>
                <img src="/assets/check.svg" class="w-3 h-3 ml-auto" alt="Check">
              </div>
              <hr>
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Amount</span>
              </div>
              <hr>
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Date reserved</span>
              </div>
              <hr>
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer mt-2 bg-purple-50" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-primaryColor hover:text-primaryColor w-full font-medium">Ascending</span>
                <img src="/assets/check-2.svg" class="w-3 h-3 ml-auto" alt="Check">
              </div>
              <hr>
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Descending</span>
              </div>
            </div>
         </template>

         <!-- DropDown Saved Wish -->
         <template v-if="selectedTab == 'saved'">
            <div v-if="isDropdownOpen"  class="w-52 absolute top-6 -right-5 bg-white rounded-lg shadow-lg p-2 border border-gray-200">
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer bg-purple-50" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-primaryColor w-full hover:text-primaryColor  font-medium">Name</span>
                <img src="/assets/check.svg" class="w-3 h-3 ml-auto" alt="Check">
              </div>
              <hr>
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-gray-800  w-full hover:text-primaryColor font-medium">Amount</span>
              </div>
              <hr>
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-gray-800  w-full hover:text-primaryColor font-medium">Date Saved</span>
              </div>
              <hr>
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer mt-2 bg-purple-50" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-primaryColor w-full font-medium">Ascending</span>
                <img src="/assets/check-2.svg" class="w-3 h-3 ml-auto" alt="Check">
              </div>
              <hr>
              <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer" @mouseover="hover($event)" @mouseout="unhover($event)">
                <span class="ml-2 text-gray-800  w-full hover:text-primaryColor font-medium">Descending</span>
              </div>
            </div>
         </template>

      </div>
 


    </div>
    <!-- Horizontal Line -->
    <div class="border-t border-gray-300"></div>
  </div>
</template>


<script>
export default {
  name: 'TabNavigationsWishlist',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedTab: 'myWishes',
      isDropdownOpen: false, // Track the dropdown visibility
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
    hover(event) {
      event.currentTarget.classList.add('bg-primaryMainBright');
    },
    unhover(event) {
      event.currentTarget.classList.remove('bg-primaryMainBright');
    },
  },
};
</script>

<style scoped>
/* Additional styles if required */
</style>
