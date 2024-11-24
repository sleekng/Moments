<template>
  <div v-if="isLoading" class="progress-bar"></div>
  <div :class="{ 'blurred-content': isLoading }">
    <Alert ref="alertComponent" />

    <RouterView @showCreateWishlistModal="openCreateWishlistModal" @showCategoryModal="showCategoryModal = true" @showShareAddressModal="openShareAddressModal"  />

    <CategoryPopup
      v-if="showCategoryModal"
      @close="closeCategoryModal"
      @showCreateWishlistModal="openCreateWishlistModal"
    />


     <!-- Share Modal -->
     <div v-if="isShareMenuOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
                            <div class="bg-white rounded-lg shadow-lg p-6 relative max-w-lg w-full">
                            <button @click="toggleShareMenu" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                                <i class="fas fa-times"></i>
                            </button>
                            <div class="flex space-x-4 items-center pb-2">
                                <span class="font-bold text-lg">Share with friends</span>
                            </div>
                            <div class="grid grid-cols-2 pt-4 gap-4">
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
      </div>
    
    <CreateWishlistModal
      v-if="showCreateWishlistModal"
      :selectedCategory="selectedCategory"
      :wishlist="editingWishlist"
      @createWishList="createdWishList"
      @updateWishList="UpdatedWishList"
      @close="closeCreateWishlistModal"
    />

    <CreatedWishlistModal 
      v-if="wishlistCreated || wishlistUpdated" 
      :wishlistUpdated="wishlistUpdated"
      @shareWishlist ="toggleShareMenu"
      :title="modalTitle"
      :description="modalDescription"
      :createdWishlistId="createdWishlistId"
      @viewWishlist="viewCreatedWishlist" 
      @makeAWish="openCreateWishModal"
      :viewWishlistText="viewWishlistText"
      :makeAWishText="makeAWishText"
    />

    <CreatedWishModal 
      @closeCreatedModal="closeCreatedModal"
      v-if="wishCreated || wishUpdated" 
      :title="WishmodalTitle"
      :description="WishmodalDescription"
      :createdWishId="createdWishId"
      @viewWish="viewCreatedWish" 
      @makeAWish="openCreateWishModal"
      :updateType="updateType"
    />

    <CreateWishModal v-if="showCreateWishModal" @createWish="createdWish"
      @updateWish="UpdatedWish" :wishlistId="currentWishlistId" @close="closeCreateWishModal" />
  </div>
</template>

<script>
import CreatedWishModal from '@/components/Dashboard/CreatedWishModal.vue';
import CreateWishModal from '@/components/Dashboard/CreateWishModal.vue';
import { onMounted, watch } from 'vue';
import { RouterView } from 'vue-router';
import CreateWishlistModal from '@/components/Dashboard/CreateWishlistModal.vue';

import Alert from '@/components/Alert.vue';
import { eventBus } from '@/eventBus.js';
import CategoryPopup from '@/components/Dashboard/CategoryPopup.vue';
import CreatedWishlistModal from './components/Dashboard/CreatedWishlistModal.vue';

export default {
  components: {
    CreateWishlistModal,
    CategoryPopup,
    Alert,
    CreatedWishlistModal,
    CreateWishModal,
    CreatedWishModal
  },
  data() {
    return {
      isShareMenuOpen: false,
      updateType: null,
      showCategoryModal: false,
      showCreateWishlistModal: false,
      isLoading: false,
      selectedCategory: null,
      editingWishlist: null,
      wishlistCreated: false,
      wishlistCreated: false,
      wishlistUpdated: false,
      createdWishlistId: null,
      currentWishlistId:null,
      showCreateWishModal:false
    };
  },
  computed: {
    modalTitle() {
      return this.wishlistCreated ? 'New Wishlist Created! ✨' : 'Wishlist Updated! ✨';
    },
    modalDescription() {
      return this.wishlistCreated 
        ? 'Your wishlist is live and ready to shine! Start adding those dream wish items and share it with friends to get the gifts you’ve been wishing for.'
        : 'Your wishlist is looking more fabulous already! Don’t forget to share your newly updated wishlist with your friends.';
    },
    viewWishlistText() {
      return this.wishlistCreated ? 'View Wishlist' : 'Maybe Later';
    },
    makeAWishText() {
      return this.wishlistCreated ? 'Make a Wish' : 'Share with Friends';
    }
  },
  mounted() {
    onMounted(() => {
      eventBus.setLoading(false);
    });

    watch(
      () => eventBus.loading,
      (newValue) => {
        this.isLoading = newValue;
      }
    );

    watch(
      () => eventBus.message,
      (newMessage) => {
        if (newMessage) {
          this.successMessage = newMessage;
          this.$refs.alertComponent.showAlert(newMessage);
        }
      }
    );

    eventBus.onError = this.handleError;
  },
  methods: {

    toggleShareMenu() {
      this.isShareMenuOpen = !this.isShareMenuOpen;
    },
    copyLink() {
      navigator.clipboard.writeText(`${window.location.href}`).then(() => {
        eventBus.onSuccess('Profile link copied to clipboard!');
      });
    },
    shareToEmail() {
      const subject = encodeURIComponent(`Check out this profile: ${this.user.username}`);
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
      const url = encodeURIComponent(`${window.location.href}`);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    },
    shareToInstagram() {
      eventBus.onSuccess('Instagram sharing is not supported directly from the web. Feature is coming soon');
    },


    closeCreatedModal() {
      this.wishCreated = this.wishUpdated = false;
    },

    viewCreatedWish() {
      this.$router.push({ name: 'Wishlist', params: { id: this.createdWishlistId } });
      this.wishCreated = false;
      this.wishUpdated = false;
    },

    createdWish(wishData) {
      console.log(wishData.wishlist_id + 'woking');
      this.currentWishlistId = wishData.wishlist_id
      this.createdWishId = wishData.id;
      this.editingWish = null;
      this.updateType = 'created';
      this.showCreateWishModal = false;
      this.wishCreated = true;
      /* this.currentWishlistId = wishData.wishlist_id || this.currentWishlistId; */
    },
    UpdatedWish(wishData) { 
      console.log('Wish modified:', wishData);
      this.createdWishId = wishData.id;
      this.editingWish = null;
      this.updateType = 'updated';
      this.showCreateWishlistModal = false;
      this.wishUpdated = true;
    },

    openCreateWishModal() {
    console.log('Opening wish modal for wishlist ID:', this.currentWishlistId); // Debugging
    this.wishlistCreated = false;
    this.wishlistUpdated = false;
    this.editingWish = null;
    this.showCreateWishModal = true;
  },
  closeCategoryModal() {
      this.showCategoryModal = false;
    },
    createdWishList(wishlistData) {
    this.createdWishlistId = wishlistData.id;
    this.currentWishlistId = wishlistData.id; // Ensure this is set
    this.editingWishlist = null;
    this.showCreateWishlistModal = false;
    this.wishlistCreated = true;
  },
    UpdatedWishList(wishlistData) {

      console.log('Wishlist modified:', wishlistData);
      this.createdWishlistId = wishlistData.id;
      this.editingWishlist = null;
      this.showCreateWishlistModal = false;
      this.wishlistUpdated = true;
    },

    openCreateWishlistModal(category, wishlist = null) {
      this.selectedCategory = category;
      this.editingWishlist = wishlist;
      this.showCreateWishlistModal = true;
    },
    closeCreateWishlistModal() {
      this.showCreateWishlistModal = false;
      this.editingWishlist = null;
    },
    handleError(message) {
      this.$refs.alertComponent.showAlert(message);
    },
    viewCreatedWishlist() {
/*       this.$router.push({ name: 'Wishlist', params: { id: this.createdWishlistId } });
 */

      window.location.href = this.$router.resolve({ name: 'Wishlist', params: { id: this.createdWishlistId } }).href;


      this.wishlistCreated = false;
      this.wishlistUpdated = false;
    }
  }
};
</script>

<style>
.blurred-content {
  transition: filter 0.3s ease;
  filter: blur(5px);
  pointer-events: none;
}

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #E567F8;
  animation: progress-bar-animation 1.5s linear infinite;
  z-index: 2000;
}

@keyframes progress-bar-animation {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}
</style>
