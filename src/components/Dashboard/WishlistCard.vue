 <template>
  <div @click="viewWishlist" class="card group hover:border-primaryColor h-full cursor-pointer" :class="['bg-white rounded-lg shadow-md p-4 border', isDropdownOpen ? 'border-primaryColor' : 'border-gray-100']">
    <div v-if="isExplore" class="flex items-center space-x-2 mt-2 pb-2">
      <div class="flex items-center space-x-2">
        <img :src="wishlist.user.avatar || '/assets/avatar.svg'" alt="Avatar" class="w-6 h-6 rounded-full">
        <span class="font-bold whitespace-nowrap text-sm">{{ wishlist.user.first_name }} {{ wishlist.user.last_name }}</span>
        <span class="text-gray-600 font-normal text-xs">@{{ wishlist.user.username }}</span>
      </div>
    </div>
    
     <!-- Conditional Image and Menu-option for Dashboard -->
    <div  class="relative mb-4">
      <img class="w-full h-56 object-cover rounded-md" :src="wishlist.photo || '/assets/wishlist-category-placeholder.svg'" alt="Wishlist Image" />
      <button v-if="isDashboard" @click.stop="toggleMenu" class="absolute z-40 top-2 right-2 p-1 bg-gray-200 rounded-full toggle-menu-button transition-opacity opacity-0 group-hover:opacity-100">
        <img src="/assets/frame-1618868216.svg" alt="Menu" class="h-6 w-6" />
      </button>

      <!-- DropdownMenu -->
        <div  v-if="isDropdownOpen" @mouseleave="closeMenu" class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-50 -right-20">
        <div class="flex relative items-center p-2 group moment-text-effect-parent cursor-pointer">
          <i class="fa-regular fa-arrow-up-from-bracket moment-text-effect-child "></i>
          <span class="ml-2 text-gray-800 moment-text-effect-child w-full font-medium">Share wishlist with friends</span>
        </div>
        <div class="flex relative items-center p-2 group moment-text-effect-parent cursor-pointer border-t border-gray-200" @click.stop="$emit('editWishlist', wishlist)">
          <i class="fa-light fa-pen-to-square moment-text-effect-child"></i>
          <span class="ml-2 text-gray-800 moment-text-effect-child w-full font-medium">Edit wishlist</span>
        </div>
        <div class="flex relative items-center p-2 group moment-text-effect-parent cursor-pointer border-t border-gray-200" @click.stop="$emit('deleteWishlist', wishlist.id)">
          <i class="fa-light fa-light fa-circle-xmark moment-text-effect-child"></i>
          <span class="ml-2 text-gray-800 moment-text-effect-child w-full font-medium">Delete</span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col space-y-2">
      <!-- Tag -->
      <div class="bg-[#FEF7FF] text-primaryColor px-3 py-1 whitespace-nowrap rounded-full w-min text-xs">{{ wishlist.category.name }}</div>
      <!-- Title -->
      <h3 class="text-xl font-semibold">{{ wishlist.title }}</h3>
      <!-- Description -->
      <!-- Wishes -->
      <div class="flex items-center text-gray-600">
        <i class="fa-solid fa-gift mr-1   text-primaryColor text-[12px]"></i>
        <span class="font-bold mr-1">{{ wishlist.wishes_count }}</span> Wishes
      </div>
    </div>

    <!-- Stats -->
    <div class="flex justify-end space-x-2 items-center mt-4 text-gray-600">
      <div class="flex items-center">
        <i class="fa-light fa-heart mr-1 text-[14px]"></i>
        <span>{{ wishlist.likes_count }}</span>
      </div>
      <div class="flex items-center">
        <i class="fa-light fa-eye mr-1 text-[14px]"></i>
        <span>{{ wishlist.views_count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/eventBus.js';

export default {
  name: 'WishlistCard',
  props: {
    wishlist: {
      type: Object,
      required: true,
    },
    openDropdownId: {
      required: true,
    },
  },
  computed: {
    isDashboard() {
      return this.$route.path === '/dashboard';
    },
    isExplore() {
      return this.$route.path === '/explore';
    },
    isDropdownOpen() {
      // Check if this card's dropdown should be open
      return this.openDropdownId === this.wishlist.id;
    },
  },
  methods: {
    toggleMenu() {
      // Emit the event to the parent to toggle this dropdown
      this.$emit('toggleDropdown', this.wishlist.id);
    },
    closeMenu() {
      // Emit the event to the parent to toggle this dropdown
      this.$emit('closeDropdown', this.wishlist.id);
    },
    viewWishlist() {
      this.$router.push({ name: 'Wishlist', params: { id: this.wishlist.id } });
    }
  },
};
</script>

<style scoped>
/* Additional styles if required can be added here */

.moment-text-effect-parent:hover {
  background-color: #FEF4FF;
  transition: all 0.2s linear;
}

.moment-text-effect-parent:hover .moment-text-effect-child {
 color: #E567F8;
 transition: all 0.2s linear;
  
}
</style>
