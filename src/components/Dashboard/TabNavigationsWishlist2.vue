<template>
  <div class="px-12 bg-white">
    <div class="flex justify-between items-center">
      <!-- Tabs -->
      <div class="flex">
        <!-- My Wishlist Tab -->
        <div class="flex flex-col items-center cursor-pointer" @click="switchTab('Wishes')">
          <div :class="activeTab === 'Wishes' ? 'text-gray-900' : 'text-[#616874]'" class="text-lg px-8 font-medium">
            Wishlist For You
          </div>
          <div :class="activeTab === 'Wishes' ? 'bg-black' : ''" class="w-full h-1 mt-2"></div>
        </div>

        <!-- Reserved Wish Tab -->
        <div class="flex flex-col items-center cursor-pointer" @click="switchTab('Friends')">
          <div :class="activeTab === 'Friends' ? 'text-gray-900' : 'text-[#616874]'" class="text-lg px-8 font-medium">
            Friends
          </div>
          <div :class="activeTab === 'Friends' ? 'bg-black' : ''" class="w-full h-1 mt-2"></div>
        </div>

      </div>
      

    </div>
    <!-- Horizontal Line -->
    <div class="border-t border-gray-300"></div>
  </div>
</template>


<script>
export default {
  name: 'TabNavigationsWishlist2',
  props: {
    activeTab: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedTab: 'Wishes',
      isDropdownOpen: false, // Track the dropdown visibility
    };
  },
  methods: {
    switchTab(tab) {
      this.$emit('switchTab', tab); // Emit event to parent
      this.selectedTab = tab; // Update the selected tab
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
