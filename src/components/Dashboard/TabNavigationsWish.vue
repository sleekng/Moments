<template>
  <div class="lg:px-12 px-4 bg-white">
    <div class="flex justify-between items-center">
      <!-- Tabs -->
      <div class="flex">
        <!-- My Wishlist Tab -->
        <div class="flex flex-col items-center cursor-pointer" @click="switchTab('myWishes')">
          <div :class="activeTab === 'myWishes' ? 'text-gray-900' : 'text-[#616874]'" class="lg:text-base text-[12px] px-2 whitespace-nowrap lg:px-8 font-medium">
            My Wishes <span class="text-[16px]">{{ myWishesCount ? myWishesCount : 0 }}</span>
          </div>
          <div :class="activeTab === 'myWishes' ? 'bg-black' : ''" class="w-full h-1 mt-2"></div>
        </div>

               <!-- Reserved Wish Tab -->
               <div class="flex flex-col items-center cursor-pointer" @click="switchTab('reserved')">
          <div :class="activeTab === 'reserved' ? 'text-gray-900' : 'text-[#616874]'" class="lg:text-base text-[12px] px-2 whitespace-nowrap lg:px-8 font-medium">
            Reserved Wish <span class="text-[16px]">{{ reservedCount }}</span>
          </div>
          <div :class="activeTab === 'reserved' ? 'bg-black' : ''" class="w-full h-1 mt-2"></div>
        </div>

        <!-- Received Wish Tab -->
        <div class="flex flex-col items-center cursor-pointer" @click="switchTab('received')">
          <div :class="activeTab === 'received' ? 'text-gray-900' : 'text-[#616874]'" class="lg:text-base text-[12px] px-2 whitespace-nowrap lg:px-8 font-medium">
            Received Wish <span class="text-[16px]">{{ receivedCount }}</span>
          </div>
          <div :class="activeTab === 'received' ? 'bg-black' : ''" class="w-full h-1 mt-2"></div>
        </div>
      </div>


      <!-- Sort By Dropdown -->
      <div class="relative flex items-center space-x-2 z-40" >
        
        <i class="fa-regular text-gray-600 fa-arrow-up-arrow-down" @click="toggleDropdown"></i>
        <span class="text-base hidden lg:inline font-medium text-[#616874] cursor-pointer" @click="toggleDropdown">Sort by</span>
        <i class="fa-regular text-gray-600 fa-angles-up-down" @click="toggleDropdown"></i>
        
        <!-- Dropdown for all tabs -->
        <div v-if="isDropdownOpen"  class="w-52 absolute top-6 -right-3 bg-white rounded-lg shadow-lg p-2 border border-gray-200">
          <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer hover:bg-primaryColor/10"
               :class="{'bg-primaryColor/10': sortBy === 'priority'}"
               @click="setSorting('priority')">
            <span class="ml-2" :class="sortBy === 'priority' ? 'text-primaryColor' : 'text-gray-800'">Priority</span>
            <img v-if="sortBy === 'priority'" src="/assets/check.svg" class="w-3 h-3 ml-auto" alt="Check">
          </div>
          <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer hover:bg-primaryColor/10"
               :class="{'bg-primaryColor/10': sortBy === 'name'}"
               @click="setSorting('name')">
            <span class="ml-2" :class="sortBy === 'name' ? 'text-primaryColor' : 'text-gray-800'">Name</span>
            <img v-if="sortBy === 'name'" src="/assets/check.svg" class="w-3 h-3 ml-auto" alt="Check">
          </div>
          <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer hover:bg-primaryColor/10"
               :class="{'bg-primaryColor/10': sortBy === 'likes'}"
               @click="setSorting('likes')">
            <span class="ml-2" :class="sortBy === 'likes' ? 'text-primaryColor' : 'text-gray-800'">Number of likes</span>
            <img v-if="sortBy === 'likes'" src="/assets/check.svg" class="w-3 h-3 ml-auto" alt="Check">
          </div>
          <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer hover:bg-primaryColor/10"
               :class="{'bg-primaryColor/10': sortBy === 'amount'}"
               @click="setSorting('amount')">
            <span class="ml-2" :class="sortBy === 'amount' ? 'text-primaryColor' : 'text-gray-800'">Amount</span>
            <img v-if="sortBy === 'amount'" src="/assets/check.svg" class="w-3 h-3 ml-auto" alt="Check">
          </div>
          <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer hover:bg-primaryColor/10"
               :class="{'bg-primaryColor/10': sortBy === 'quantity'}"
               @click="setSorting('quantity')">
            <span class="ml-2" :class="sortBy === 'quantity' ? 'text-primaryColor' : 'text-gray-800'">Quantity</span>
            <img v-if="sortBy === 'quantity'" src="/assets/check.svg" class="w-3 h-3 ml-auto" alt="Check">
          </div>
          <hr>
          <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer mt-2"
               :class="{'bg-primaryColor/10': sortOrder === 'asc'}"
               @click="setSortOrder('asc')">
            <span class="ml-2" :class="sortOrder === 'asc' ? 'text-primaryColor' : 'text-gray-800'">Ascending</span>
            <img v-if="sortOrder === 'asc'" src="/assets/check-2.svg" class="w-3 h-3 ml-auto" alt="Check">
          </div>
          <div class="flex items-center my-1 p-2 rounded-lg cursor-pointer"
               :class="{'bg-primaryColor/10': sortOrder === 'desc'}"
               @click="setSortOrder('desc')">
            <span class="ml-2" :class="sortOrder === 'desc' ? 'text-primaryColor' : 'text-gray-800'">Descending</span>
            <img v-if="sortOrder === 'desc'" src="/assets/check-2.svg" class="w-3 h-3 ml-auto" alt="Check">
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
    },
   
    myWishesCount: {
      required: true
    },
    reservedCount: {
      type: Number,
      default: 0
    },
    receivedCount: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isDropdownOpen: false,
      sortBy: 'name',
      sortOrder: 'asc'
    };
  },
  methods: {
    switchTab(tab) {
        this.$emit('switchTab', tab); // Emit event to parent


    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    setSorting(type) {
      this.sortBy = type;
      this.$emit('sort', { sortBy: this.sortBy, sortOrder: this.sortOrder });
    },
    setSortOrder(order) {
      this.sortOrder = order;
      this.$emit('sort', { sortBy: this.sortBy, sortOrder: this.sortOrder });
    }
  },
};
</script>

<style scoped>
/* Additional styles if required */
</style>
