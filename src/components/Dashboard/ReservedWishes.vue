<template>
  <div class="lg:px-12 py-8 bg-white rounded-b-lg" @mouseleave="handleCloseDropdown">
    <!-- Reserved Wishes -->
     
   <div class="mb-8">
      <div class="text-[18px] lg:text-2xl font-bold mb-4">Wishes You Reserved for Your Friends</div>
      <div class="flex w-full overflow-x-auto space-x-3 lg:space-x-6">
        <WishCard 
          v-for="(wish, index) in filteredWishes('reserved')" 
          :key="wish.id || index" 
          :wish="wish" 
          @deleteWish="handleDeleteWish"  
          @editWish="openEditWishModal" 
          @preview="preview" 
          :openDropdownId="openDropdownId" 
          @toggleDropdown="handleToggleDropdown" 
          @closeDropdown="handleCloseDropdown" 
          class="md:w-[286px] w-40 flex-shrink-0" 
        />
      </div>
    </div>

    <!-- Fulfilled Wishes -->
    <div class="mb-8" v-if="filteredWishes('fulfiled').length >0">
      <div class="text-[18px] lg:text-2xl font-bold mb-4">Wishes You've Fulfilled for Your Friends <span class="hidden lg:inline">...awww</span></div>
      <div class="flex w-full overflow-x-auto space-x-3 lg:space-x-6">
        <WishCard 
          v-for="(wish, index) in filteredWishes('fulfiled')" 
          :key="wish.id || index" 
          :wish="wish" 
          @deleteWish="handleDeleteWish" 
          @editWish="openEditWishModal" 
          @preview="preview" 
          :openDropdownId="openDropdownId" 
          @toggleDropdown="handleToggleDropdown" 
          @closeDropdown="handleCloseDropdown" 
          class="md:w-[286px] w-40 flex-shrink-0" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import WishCard from '@/components/Dashboard/WishCard.vue';

export default {
  components: {
    WishCard,
  },
  props: {
    wishes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      openDropdownId: null,
    };
  },
  methods: {
    openEditWishModal(wish) {
      this.$emit('editWish', wish);
    },
    handleDeleteWish(wishId) {
      this.$emit('deleteWish', wishId);
    },
    preview(wishId) {
      this.$emit('preview', wishId);
    },
    handleToggleDropdown(wishId) {
      this.openDropdownId = this.openDropdownId === wishId ? null : wishId;
    },
    handleCloseDropdown() {
      this.openDropdownId = null;
    },
    filteredWishes(status) {
      return this.wishes.filter(wish => wish.status === status);
    },
  },
};
</script>
