<template>
  <div>
    <!-- Listen to the custom event from AppHeader -->
    <RouterView @showCategoryModal="showCategoryModal = true" />

    <!-- Global Modals -->
    <CategoryPopup
      v-if="showCategoryModal"
      @close="closeCategoryModal"
      @showCreateWishlistModal="openCreateWishlistModal"
    />
    <CreateWishlistModal
      v-if="showCreateWishlistModal"
      @createWishList="createWishList"
      @close="closeCreateWishlistModal"
    />
    
<!--     <CreatedWishlistModal v-if="showCreatedWishlistModal" @close="closeCreatedWishlistModal" title=" New Wishlist Created! ✨" description=" Your wishlist is live and ready to shine! Start adding those dream wish items and share it with friends to get the gifts you’ve been wishing for." viewWishlistText="View Wishlist" makeAWishText="Make a Wish" />
    <UpdatedWishlistModal v-if="showUpdatedWishlistModal" @close="closeUpdatedWishlistModal" title=" Wishlist Updated! ✨" description=" Your wishlist is looking more fabulous already! Don’t forget to share your newly updated wishlist with your friends." viewWishlistText="Maybe Later" makeAWishText="Share with Friends" /> -->
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import CreateWishlistModal from '@/components/Dashboard/CreateWishlistModal.vue';
import CategoryPopup from '@/components/Dashboard/CategoryPopup.vue';

import CreatedWishlistModal from '@/components/Dashboard/CreatedWishlistModal.vue';
import UpdatedWishlistModal from '@/components/Dashboard/UpdatedWishlistModal.vue';

export default {
  components: {
    CategoryPopup,
    CreateWishlistModal,
    CreatedWishlistModal,
    UpdatedWishlistModal
  },
  data() {
    return {
      showCategoryModal: false,
      showCreateWishlistModal: false,
      showCreatedWishlistModal: true,
      showUpdatedWishlistModal:true
    };
  },
  methods: {
    createWishList() {
      this.showCreatedWishlistModal = true;
      this.showCreateWishlistModal = false;
    },
    closeCategoryModal() {
      this.showCategoryModal = false;
    },
    closeCreatedWishlistModal() {
      this.showCreateWishlistModal = false;
      this.showCreatedWishlistModal= false;
    },
    closeUpdatedWishlistModal() {
      this.showCreateWishlistModal = false;
      this.showUpdatedWishlistModal= false;
    },
    openCreateWishlistModal() {
      this.showCategoryModal = false;
      this.showCreateWishlistModal = true;
    },
    closeCreateWishlistModal(){
      this.showCreateWishlistModal = false;
    }
  },
};
</script>
