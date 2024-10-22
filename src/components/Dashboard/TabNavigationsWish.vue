<template>
  <div class="lg:px-12 px-4 bg-white">
    <div class="flex justify-between items-center">
      <!-- Tabs -->
      <div class="flex">
        <!-- My Wishlist Tab -->
        <div class="flex flex-col items-center cursor-pointer" @click="switchTab('myWishes')">
          <div :class="activeTab === 'myWishes' ? 'text-gray-900' : 'text-[#616874]'" class="lg:text-base text-[12px] px-2 whitespace-nowrap lg:px-8 font-medium">
            My Wishlist <span class="text-[16px]">10</span>
          </div>
          <div :class="activeTab === 'myWishes' ? 'bg-black' : ''" class="w-full h-1 mt-2"></div>
        </div>

        <!-- Reserved Wish Tab -->
        <div class="flex flex-col items-center cursor-pointer" @click="switchTab('reserved')">
          <div :class="activeTab === 'reserved' ? 'text-gray-900' : 'text-[#616874]'" class="lg:text-base text-[12px] px-2 whitespace-nowrap lg:px-8 font-medium">
            Reserved Wish <span class="text-[16px]">10</span>
          </div>
          <div :class="activeTab === 'reserved' ? 'bg-black' : ''" class="w-full h-1 mt-2"></div>
        </div>

        <!-- Received Wish Tab -->
        <div class="flex flex-col items-center cursor-pointer" @click="switchTab('received')">
          <div :class="activeTab === 'received' ? 'text-gray-900' : 'text-[#616874]'" class="lg:text-base text-[12px] px-2 whitespace-nowrap lg:px-8 font-medium">
            Received Wish <span class="text-[16px]">10</span>
          </div>
          <div :class="activeTab === 'received' ? 'bg-black' : ''" class="w-full h-1 mt-2"></div>
        </div>
      </div>


      <!-- Sort By Dropdown -->
      <div class="relative flex items-center space-x-2 z-40" @mouseleave="toggleDropdown">
        <img src="/assets/sort-vertical-svgrepo-com-1.svg" alt="Sort Icon" class="lg:h-4 lg:w-4 h-8 w-8 mr-2 lg:mr-auto" @click="toggleDropdown">
        <span class="text-base hidden lg:inline font-medium text-[#616874] cursor-pointer" @click="toggleDropdown">Sort by</span>
        <img src="/assets/dropdown.svg" alt="Dropdown Icon" class="h-4 w-4 hidden lg:inline" @click="toggleDropdown">
        
        <!-- Dropdown -->
        <div v-if="isDropdownOpen"  class="w-52 absolute top-6 -right-5 bg-white rounded-lg shadow-lg p-2 border border-gray-200">
          <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer bg-purple-50" @mouseover="hover($event)" @mouseout="unhover($event)">
            <span class="ml-2 text-primaryColor hover:text-primaryColor w-full font-medium">Pirority</span>
            <img src="/assets/check.svg" class="w-3 h-3 ml-auto" alt="Check">
          </div>
          <hr>
          <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer bg-purple-50" @mouseover="hover($event)" @mouseout="unhover($event)">
            <span class="ml-2 text-primaryColor hover:text-primaryColor w-full font-medium">Name</span>
            <img src="/assets/check.svg" class="w-3 h-3 ml-auto" alt="Check">
          </div>
          <hr>
          <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer" @mouseover="hover($event)" @mouseout="unhover($event)">
            <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Number of likes</span>
          </div>
          <hr>
          <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer" @mouseover="hover($event)" @mouseout="unhover($event)">
            <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Amount</span>
          </div>
          <hr>
          <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer" @mouseover="hover($event)" @mouseout="unhover($event)">
            <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Quantity</span>
          </div>
          <hr>
          <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer mt-2 bg-purple-50" @mouseover="hover($event)" @mouseout="unhover($event)">
            <span class="ml-2 text-primaryColor hover:text-primaryColor w-full font-medium">Ascending</span>
            <img src="/assets/check-2.svg" class="w-3 h-3 ml-auto" alt="Check">
          </div>
          <hr>
          <div class="flex items-center my-1 p-2  rounded-lg cursor-pointer" @mouseover="hover($event)" @mouseout="unhover($event)">
            <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Descending</span>
          </div>
        </div>
      </div>


    </div>
    <!-- Horizontal Line -->
    <div class="border-t border-gray-300"></div>
  </div>
</template>


<script>
export default {
  name: 'TabNavigationsWish',
  props: {
    activeTab: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isDropdownOpen: false, // Track the dropdown visibility
    };
  },
  methods: {
    switchTab(tab) {
        this.$emit('switchTab', tab); // Emit event to parent


    },
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
