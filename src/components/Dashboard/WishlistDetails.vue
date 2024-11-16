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
           
            <div class="flex items-center" @click.stop="toggleLike">
        <i :class="selectedWishlist.liked_by_me ? 'fa-solid fa-heart text-red-500' : 'fa-light fa-heart'" class="mr-1 cursor-pointer text-[14px]"></i>
        <span>{{ selectedWishlist.likes_count }}</span>
      </div>
            <div class="flex items-center text-gray-600 space-x-1">
              <img src="/assets/eye.svg" alt="Views" class="w-4 h-4">
              <span>{{ selectedWishlist.views_count }} Views</span>
            </div>
          </div>
        </div>
      </div>

    <div class="lg:flex space-x-4 absolute right-10 hidden ">
        <button v-if="canShow" @click="$emit('editWishlist', selectedWishlist)" class="bg-gray-200 py-2 px-6 rounded-full text-sm font-medium text-gray-900">
            Edit
        </button>
        <button @click="toggleShareMenu" class="bg-gray-200 py-2 px-6 rounded-full text-sm font-medium text-gray-900">
            Share wishlist
        </button>

        
      </div>
      <!-- Share with Friends Dropdown -->
      <div v-if="isShareMenuOpen" @mouseleave="toggleShareMenu" class="absolute top-24 right-10 w-[500px] bg-white shadow-lg rounded-lg p-4 z-40">
      <div class="flex space-x-4 items-center pb-2">
        <button @click="toggleShareMenu" class="text-gray-500 hover:text-gray-700">
          <i class="fas fa-times"></i>
        </button>
        <span class="font-bold text-lg">Share with friends</span>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 pt-4 gap-4">
        <button @click="copyLink" class="flex items-center space-x-2 p-2 border hover:bg-gray-100 rounded-lg">
          <i class="fas fa-link"></i>
          <span>Copy Link</span>
        </button>
        <button @click="shareToEmail" class="flex items-center space-x-2 p-2 border hover:bg-gray-100 rounded-lg">
          <i class="fas fa-envelope"></i>
          <span>Share to Email</span>
        </button>
        <button @click="shareToWhatsApp" class="flex items-center space-x-2 p-2 border hover:bg-gray-100 rounded-lg">
          <i class="fab fa-whatsapp"></i>
          <span>Share to Whatsapp</span>
        </button>
        <button @click="shareToTwitter" class="flex items-center space-x-2 p-2 border hover:bg-gray-100 rounded-lg">
          <i class="fab fa-twitter"></i>
          <span>Share to Twitter</span>
        </button>
        <button @click="shareToFacebook" class="flex items-center space-x-2 p-2 border hover:bg-gray-100 rounded-lg">
          <i class="fab fa-facebook"></i>
          <span>Share to Facebook</span>
        </button>
        <button @click="shareToInstagram" class="flex items-center space-x-2 p-2 border hover:bg-gray-100 rounded-lg">
          <i class="fab fa-instagram"></i>
          <span>Share to Instagram</span>
        </button>
      </div>
      </div>
    <div class=" mb-4 lg:hidden block">
        <button @click="toggleMenu" class="absolute  top-12 right-4 p-1 h-10 flex justify-center items-center w-10 bg-gray-200 rounded-full toggle-menu-button">
          <img src="/assets/frame-1618868216.svg" alt="Menu" class="h-6 w-6" />
        </button>

      <!-- DropdownMenu -->
      <div v-if="isDropdownOpen" @mouseleave="closeMenu" onclick="closeMenu" class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-20 z-50 right-8">
        <div @click="toggleShareMenu" class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer">
          <img src="/assets/share.svg" class="w-4 h-4" alt="Share" />
          <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Share wishlist</span>
        </div>
        <div @click="$emit('editWishlist', selectedWishlist)" class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
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
import { eventBus } from '@/eventBus.js';
export default {
  name: 'WishlistDetails',
  props: {
    selectedWishlist: {
      type: Object
    },
    canShow: {
      type: Boolean
    }
  },

  mounted(){
    console.log(this.selectedWishlist);
    
  },
    data() {
        return {
            isDropdownOpen: false,
            isShareMenuOpen: false,
        }
        },
        methods: {
            toggleMenu() {
                this.isDropdownOpen = !this.isDropdownOpen
            }
            ,
            closeMenu() {
                this.isDropdownOpen = false
            },
            
    toggleShareMenu() {
      this.isShareMenuOpen = !this.isShareMenuOpen;
    },
    copyLink() {
      navigator.clipboard.writeText(`${window.location.href}/`).then(() => {
        eventBus.onSuccess('Profile link copied to clipboard!');
      });
    },
    shareToEmail() {
      const subject = encodeURIComponent(`Check out this profile: ${this.selectedWishlist.name}`);
      const body = encodeURIComponent(`${window.location.href}`);
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    },
    shareToWhatsApp() {
      const text = encodeURIComponent(`Check out this profile: ${window.location.href}`);
      window.open(`https://wa.me/?text=${text}`, '_blank');
    },
    shareToTwitter() {
      const text = encodeURIComponent(`Check out this profile: ${window.location.href}`);
      window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
    },
    shareToFacebook() {
      const url = encodeURIComponent(`${window.location.href}/`);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    },
    shareToInstagram() {
      eventBus.onSuccess('Instagram sharing is not supported directly from the web. Feature is coming soon');
    },
    showAnalyticsModal() {
      this.$emit('showAnalyticsModal');
    },

    async toggleLike() {
      try {
        const likeStatus = !this.selectedWishlist.liked_by_me;
        const response = await this.$axios.put(`${this.$baseURL}/wishlists/${this.selectedWishlist.id}`, {
          like: likeStatus
        }, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });
        if (response.data.success) {
          this.selectedWishlist.liked_by_me = response.data.data.liked_by_me;
          this.selectedWishlist.likes_count = response.data.data.likes_count;
        }
      } catch (error) {
        console.error('Error toggling like status:', error);
        eventBus.onError('Failed to update like status.');
      }
    }
            }


}
</script>

  
<style scoped>
/* Additional styles if needed */
</style>
