<template>
  <div v-if="isLoading" class="progress-bar"></div>
  <div :class="{ 'blurred-content': isLoading }">
    <Alert ref="alertComponent" />

    <RouterView @showCreateWishlistModal="openCreateWishlistModal" @showCategoryModal="showCategoryModal = true" />

    <CategoryPopup
      v-if="showCategoryModal"
      @close="closeCategoryModal"
      @showCreateWishlistModal="openCreateWishlistModal"
    />
    
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
      this.$router.push({ name: 'Wishlist', params: { id: this.createdWishlistId } });
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
