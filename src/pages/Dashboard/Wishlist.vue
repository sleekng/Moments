<template>
  <div class="bg-gray-100 pb-10">
    <AppHeader @showCategoryModal="$emit('showCategoryModal')" />

    <div v-if="!loading" class="container mx-auto pt-20">
      <WishlistDetails  @editWishlist="handleEditWishlist" :selectedWishlist="currentWishlist" />

      <TabNavigationsWish 
        :myWishesCount="wishes.length" 
        :reservedCount="reservedWishes.length"
        :activeTab="activeTab" 
        @switchTab="setActiveTab" 
      />
      
      <div  class="grid grid-cols-2 w-full lg:grid-cols-4 gap-4 lg:gap-6 px-4 lg:px-12 py-6 pb-12 bg-white rounded-b-lg" @mouseleave="handleCloseDropdown">
        <!-- Empty State Centered -->
        <div v-if="activeTab === 'myWishes' && wishes.length === 0" class="col-span-2 lg:col-span-4 flex justify-center">
          <EmptyState 
            title="No wishes yet" 
            message="Start adding items to your wishlist."
            :showButton="true" 
            buttonText="Add wish"
            @button-click="openCreateWishModal"
          />
        </div>
        <div v-if="activeTab == 'myWishes' && wishes.length > 0" class="flex flex-col items-center justify-center bg-gray-100 h-full rounded-lg p-4 py-8  cursor-pointer" @click="showCreateWishModal = true">
                <div class="flex items-center justify-center w-12 h-12 bg-black rounded-full mb-4">
                    <img src="/assets/add.svg" alt="Add" class="h-5 w-5">
                </div>
                <div class="text-lg font-medium text-center text-gray-800 leading-relaxed">Make a Wish</div>
        </div>
        <div v-if="activeTab === 'reserved' && reservedWishes.length === 0" class="col-span-2 lg:col-span-4 flex justify-center">
          <EmptyState 
            title="No wishes reserved"
            message="Your friends haven't reserved any wishes for you yet. Keep sharing your wishlist!"
            :showButton="false"
          />
        </div>
        <div v-if="activeTab === 'received' && receivedWishes.length === 0" class="col-span-2 lg:col-span-4 flex justify-center">
          <EmptyState 
            title="No wishes received"
            message="You haven't received any wishes from your friends yet. Share your wishlist with them."
            :showButton="false"
          />
        </div>
        
        <WishCard 
          v-for="wish in filteredWishes" 
          :key="wish.id" 
          :wish="wish" 
          @preview="prevWish" 
          :openDropdownId="openDropdownId" 
          @deleteWish="handleDeleteWish"
          @toggleDropdown="handleToggleDropdown" 
          @closeDropdown="handleCloseDropdown" 
          @editWish="openEditWishModal"
        />
      </div>
    </div>

    <!-- Modals -->
    <WishDetailView 
      @deleteWish="handleDeleteWish" 
      @editWish="openEditWishModal" 
      @wishUpdated="handleWishUpdate"
      v-if="showWishDetailsModal" 
      @close="closeWishDetailsModal" 
      :wish="showPrevWish"
      :loggedInUser="currentUser.username"
    />

    <CreateWishModal  
      v-if="showCreateWishModal"     
      @createWish="createdWish"
      @updateWish="updatedWish"
      :wishlistId="currentWishlist.id"
      :wish="editingWish"
      @addWish="addWish"
      @close="closeCreateWishModal"
    />

    <DeleteConfirmationModal 
      v-if="showDeleteModal" 
      :title="'Wish'" 
      :description="'Are you sure you want to delete this wish? This action cannot be undone.'" 
      @confirm="confirmDelete" 
      @cancel="cancelDelete" 
    />

    <CreatedWishModal 
      @closeCreatedModal="closeCreatedModal"
      v-if="wishCreated || wishUpdated" 
      :title="wishmodalTitle"
      :description="wishmodalDescription"
      :createdWishId="createdWishId"
      :currentWishlistId="currentWishlist.id"
      @viewWish="viewCreatedWish" 
      @makeAWish="openCreateWishModal"
      :updateType="updateType"
    />
  </div>
  <Loader :show="loading" />
</template>

<script>
import axios from 'axios';
import Loader from '@/components/Loader.vue';
import AppHeader from '@/components/Dashboard/AppHeader.vue';
import CreatedWishModal from '@/components/Dashboard/CreatedWishModal.vue';
import CreateWishModal from '@/components/Dashboard/CreateWishModal.vue';
import WishlistDetails from '@/components/Dashboard/WishlistDetails.vue';
import TabNavigationsWish from '@/components/Dashboard/TabNavigationsWish.vue';
import WishCard from '@/components/Dashboard/WishCard.vue';
import WishDetailView from '@/components/Dashboard/WishDetailView.vue';
import DeleteConfirmationModal from '@/components/Dashboard/DeleteConfirmationModal.vue';
import { eventBus } from '@/eventBus.js';
import EmptyState from '@/components/Dashboard/EmptyState.vue';

export default {
  name: "Wishlist",
  emits: ['showCategoryModal', 'showCreateWishlistModal'],
  components: {
    Loader,
    EmptyState,
    AppHeader,
    WishlistDetails,
    TabNavigationsWish,
    WishCard,
    WishDetailView,
    CreateWishModal,
    DeleteConfirmationModal,
    CreatedWishModal,
  },
  data() {
    return {
      updateType: null,
      showPrevWish: null,
      openDropdownId: null,
      currentWishlistId: null,
      showWishDetailsModal: false,
      showCreateWishModal: false,
      wishToDelete: null,
      activeTab: 'myWishes',
      currentWishlist: null,
      showDeleteModal: false,
      editingWish: null,
      reservedWishes: [],
      wishes: [],
      wishUpdated: false,
      wishCreated: false,
      createdWishId: null,
      loading:false,
      currentUser: null, // Add currentUser to data
    };
  },
  computed: {
    filteredWishes() {
      if (this.activeTab === 'reserved') {
        return this.wishes.filter(wish => wish.status === 'reserved');
      } else {
        return this.wishes;
      }
    },
    wishmodalTitle() {
      return this.wishCreated ? 'Wish Added! 🥳' : 'Wish Updated! 🥳';
    },
    wishmodalDescription() {
      return this.wishCreated 
        ? 'Your wishlist just got even better! Keep adding more wishes to make it truly magical.'
        : 'Your wish has been updated to perfection! Check out your wishlist to see all your amazing items.';
    },
  },
  async created() {
    this.loadCurrentUser(); // Load user data when component is created
    this.loadData();
  },
  methods: {

    loadCurrentUser() {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData) {
        this.currentUser = userData;
      }
    },

    async loadData() {

      this.loading = true;  // Start loading
      try {
        const wishlistId = this.$route.params.id;
        await Promise.all([
        await this.fetchWishlistDetails(wishlistId),
        await this.fetchWishes(wishlistId),
        ]);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        this.loading = false;  // Stop loading
      }
    },

    handleEditWishlist(wishlist) {
      this.$emit('showCreateWishlistModal', wishlist.category, wishlist);
    },

    closeCreatedModal() {
      this.wishCreated = this.wishUpdated = false;
      this.loadData();
    },
    viewCreatedWish() {
      this.$router.push({ name: 'Wishlist', params: { id: this.createdWishlistId } });
      this.wishCreated = false;
      this.wishUpdated = false;
    },
    createdWish(wishData) {
      this.createdWishId = wishData.id;
      this.editingWish = null;
      this.updateType = 'created';
      this.showCreateWishModal = false;
      this.wishCreated = true;
    },
    updatedWish(wishData) { 
      this.createdWishId = wishData.id;
      this.editingWish = null;
      this.updateType = 'updated';
      this.showCreateWishModal = false;
      this.wishUpdated = true;

    },
    handleWishUpdate(updatedWish) {
      const index = this.wishes.findIndex(w => w.id === updatedWish.id);
      if (index !== -1) {
        this.wishes.splice(index, 1, updatedWish);
      }
    },
    async handleDeleteWish(wishId) {
      this.wishToDelete = wishId;
      this.showDeleteModal = true;
    },
    async confirmDelete() {
      eventBus.setLoading(true);
      try {
        await this.$axios.delete(`${this.$baseURL}/wishes/${this.wishToDelete}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });
        this.wishes = this.wishes.filter(wish => wish.id !== this.wishToDelete);
        eventBus.onSuccess('Wish deleted successfully.');
      } catch (error) {
        console.error('Error deleting wish:', error.response?.data?.message || error.message);
      } finally {
        eventBus.setLoading(false);
        this.showDeleteModal = false;
        this.showWishDetailsModal = false;
      }
    },
    cancelDelete() {
      this.showDeleteModal = false;
    },
    closeCreateWishModal() {
      this.showCreateWishModal = false;
      this.editingWish = null;
    },
    openCreateWishModal() {
      this.editingWish = null;
      this.wishCreated = this.wishUpdated = false;
      this.showCreateWishModal = true;
    },
    openEditWishModal(wish) {
      this.editingWish = { ...wish }; // Ensure you're passing a copy of the wish to avoid direct mutations
      this.showWishDetailsModal = false;
      this.showCreateWishModal = true;
    },
    prevWish(wishId) {
      this.showWishDetailsModal = true;
      this.showPrevWish = this.wishes.find(w => w.id === wishId);
    },
    closeWishDetailsModal() {
      this.showWishDetailsModal = false;
      this.showPrevWish = null;
    },
    setActiveTab(tab) {
      this.activeTab = tab;
      if (tab === 'reserved') {
        this.reservedWishes = this.wishes.filter(wish => wish.status === 'reserved');
      }
    },
    handleToggleDropdown(wishId) {
      this.openDropdownId = this.openDropdownId === wishId ? null : wishId;
    },
    handleCloseDropdown() {
      this.openDropdownId = null;
    },
    async fetchWishlistDetails(wishlistId) {
      try {
        const response = await this.$axios.get(`${this.$baseURL}/wishlists/${wishlistId}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });
        this.currentWishlist = response.data.data;
      } catch (error) {
        console.error('Error fetching wishlist details:', error);
      }
    },
    async fetchWishes(wishlistId) {
      try {
        const response = await this.$axios.get(`${this.$baseURL}/wishlists/${wishlistId}/wishes`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });
        this.wishes = response.data.data;
        this.reservedWishes = this.wishes.filter(wish => wish.status === 'reserved');
      } catch (error) {
        console.error('Error fetching wishes:', error);
      }
    },
    addWish(updatedWish) {
      const index = this.wishes.findIndex(wish => wish.id === updatedWish.id);
      if (index !== -1) {
        this.wishes.splice(index, 1, updatedWish);
      } else {
        this.wishes.push(updatedWish);
      }
      this.closeCreateWishModal();
    }
  }
};
</script>
