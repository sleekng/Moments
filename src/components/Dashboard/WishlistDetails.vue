<template>
    <div v-if="selectedWishlist" class="flex justify-center w-full items-start p-12 bg-white mt-6 rounded-t-lg relative">
      <!-- Update the template to use properties from the wishlist prop -->
      <div class="flex flex-col items-center">
        <div class="relative">
          <img :src="selectedWishlist.photo || '/assets/wishlist-category-placeholder.svg'" alt="Wishlist Category" class="w-40 h-40 lg:w-52 lg:h-52 object-cover bg-gray-100 rounded-full">
        </div>
        <div class="mt-4 inline-flex flex-col space-y-4 text-center">
          <div>
            <div class="inline-flex items-center justify-center bg-primaryMainBright text-primaryColor py-2 px-4 rounded-full text-sm font-medium">
              <span>{{ selectedWishlist.category.name }}</span>
            </div>
          </div>
          <div class="space-y-1">
            <h2 class="text-3xl font-semibold text-gray-900">{{ selectedWishlist.title }}</h2>
            <p class="text-gray-600">{{ selectedWishlist.description }}</p>
          </div>
          <div>
            <div class="mt-4 inline-flex px-2 pr-4 items-center justify-center space-x-2 bg-gray-900 text-white py-2 rounded-full">
              <div class="bg-white text-gray-900 w-7 h-7 flex items-center justify-center rounded-full font-semibold">{{ new Date(selectedWishlist.date).getDate() }}</div>
              <span>{{ new Date(selectedWishlist.date).toLocaleString('default', { month: 'short' }) }}, {{ new Date(selectedWishlist.date).getFullYear() }}</span>
            </div>
          </div>
          <div class="mt-4 flex space-x-4 justify-center">
            <div class="flex items-center text-gray-600 space-x-1">
              <img src="/assets/heart.svg" alt="Likes" class="w-4 h-4">
              <span>{{ selectedWishlist.likes_count }} Likes</span>
            </div>
            <div class="flex items-center text-gray-600 space-x-1">
              <img src="/assets/eye.svg" alt="Views" class="w-4 h-4">
              <span>{{ selectedWishlist.views_count }} Views</span>
            </div>
          </div>
        </div>
      </div>

    <div class="lg:flex space-x-4 absolute right-10 hidden ">
        <button @click="$emit('editWishlist', selectedWishlist)" class="bg-gray-200 py-2 px-6 rounded-full text-sm font-medium text-gray-900">
            Edit
        </button>
        <button class="bg-gray-200 py-2 px-6 rounded-full text-sm font-medium text-gray-900">
            Share wishlist
        </button>
    </div>
    <div class=" mb-4 lg:hidden block">
        <button @click="toggleMenu" class="absolute  top-12 right-4 p-1 h-10 flex justify-center items-center w-10 bg-gray-200 rounded-full toggle-menu-button">
          <img src="/assets/frame-1618868216.svg" alt="Menu" class="h-6 w-6" />
        </button>

      <!-- DropdownMenu -->
      <div v-if="isDropdownOpen" @mouseleave="closeMenu" onclick="closeMenu" class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-20 z-50 right-8">
        <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer">
          <img src="/assets/share.svg" class="w-4 h-4" alt="Share" />
          <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Share wishlist</span>
        </div>
        <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
          <img src="/assets/edit.svg" class="w-4 h-4" alt="Edit" />
          <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Edit</span>
        </div>
      </div>
    </div>
</div>

<div v-else class="flex justify-center w-full items-center p-12 bg-white mt-6 rounded-t-lg">
    <span class="text-gray-500 text-lg">No Wishlist Selected</span>
  </div>
</template>

  
<script>
export default {
  name: 'WishlistDetails',
  props: {
    selectedWishlist: {
      type: Object
    }
  },

  mounted(){
    console.log(this.selectedWishlist);
    
  },
    data() {
        return {
            isDropdownOpen: false
        }
        },
        methods: {
            toggleMenu() {
                this.isDropdownOpen = !this.isDropdownOpen
            }
            ,
            closeMenu() {
                this.isDropdownOpen = false
            }
            }


}
</script>

  
<style scoped>
/* Additional styles if needed */
</style>
