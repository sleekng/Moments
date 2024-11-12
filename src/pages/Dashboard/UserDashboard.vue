<template>
  <div class="bg-white lg:bg-gray-100 py-10">
    <AppHeader @showCategoryModal="$emit('showCategoryModal')" />
    <div v-if="!loading" class="px-4 lg:px-16 pt-10 lg:pt-20">
      <ProfileCover />
      <ProfileDetails @showAnalyticsModal="ToggleAnalyticsModal" :myWishlistCount="wishlists.length" />
      <TabNavigationsWishlist :myWishlistCount="wishlists.length" :savedwishesCount="savedwishes.length" :reservedWishesCount="reservedWishes.length" :activeTab="activeTab" @switchTab="setActiveTab" />


        <div v-if="activeTab === 'myWishes'">
          <div v-if="wishlists.length > 0" class="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:px-12 py-8 rounded-b-lg bg-white">
            <div class="flex flex-col items-center justify-center bg-gray-100 h-full rounded-lg p-4 py-8 cursor-pointer" @click="$emit('showCategoryModal')">
              <div class="flex items-center justify-center w-12 h-12 bg-black rounded-full mb-4">
                <img src="/assets/add.svg" alt="Add" class="h-5 w-5" />
              </div>
              <div class="text-lg font-medium text-center text-gray-800 leading-relaxed">Make a New wishlist</div>
            </div>
            <WishlistCard
              v-for="wishlist in wishlists"
              :key="wishlist.id"
              :wishlist="wishlist"
              :openDropdownId="openDropdownId"
              @toggleDropdown="handleToggleDropdown"
              @closeDropdown="handleCloseDropdown"
              @deleteWishlist="handleDeleteWishlist"
              @editWishlist="handleEditWishlist"
              @viewWishlist="navigateToAllWishes"
            />
          </div>
          <div  v-else>
  
            <EmptyState 
              
              title="Your wishlist is empty" 
              message="Go ahead and create your first wishlist" 
              @button-click="$emit('showCategoryModal')" 
              :showButton="true"
              buttonText="Create Wishlist"
            />
          </div>
        </div>
  
        <div v-if="activeTab === 'reserved'">
          
          <ReservedWishes v-if="reservedWishes.length > 0" @editWish="openEditWishModal" @deleteWish="handleDeleteWish" :wishes="reservedWishes" @preview="prevWish" />
          <EmptyState 
            v-else 
            title="No wishes reserved by you" 
            message="Reserve a wish for your friends to surprise them." 
            :showButton="false"
          />
        </div>
  
        <div v-if="activeTab === 'saved'">
          <SavedWishes v-if="savedwishes.length > 0" :wishes="savedwishes" @editWish="openEditWishModal" @deleteWish="handleDeleteWish" @preview="savedPrevWish" />
          <EmptyState 
            v-else 
            title="No saved wishes" 
            message="Save your favorite wishes here to easily find them later." 
            :showButton="false"
          />
        </div>

     


      <!-- Modals -->
      <Congratulations v-if="showInitialModal" @close="closeInitialModal" />
      <WishDetailView @editWish="openEditWishModal" v-if="showWishDetailsModal" @close="closeWishDetailsModal" :wish="showPrevWish ? showPrevWish : showSavedPrevWish" />
      <AnalyticsModal
        v-if="showAnalyticsModal"
        :analyticsData="analyticsData"
        @close="closeAnalyticsModal"
      />
      <CreateWishModal v-if="showCreateWishModal" :wish="editingWish" @addWish="AddWish" @close="closeCreateWishModal" />
      <DeleteConfirmationModal v-if="showDeleteModal" :title="'WishList'" :description="'Are you sure you want to delete this wishlist? This action cannot be undone.'"   @confirm="confirmDelete" @cancel="cancelDelete" />
      <DeleteConfirmationModal v-if="showDeleteWishModal" :title="'Wish'" :description="'Are you sure you want to delete this wish? This action cannot be undone.'"   @confirm="confirmDelete" @cancel="cancelDelete" />
    </div>
  </div>
  <Loader :show="loading" />
</template>

<script>
import EmptyState from '@/components/Dashboard/EmptyState.vue';
import Loader from '@/components/Loader.vue';
import { eventBus } from '@/eventBus.js';
import CreateWishModal from '@/components/Dashboard/CreateWishModal.vue';
import AppHeader from '@/components/Dashboard/AppHeader.vue';
import ProfileCover from '@/components/Dashboard/ProfileCover.vue';
import ProfileDetails from '@/components/Dashboard/ProfileDetails.vue';
import TabNavigationsWishlist from '@/components/Dashboard/TabNavigationsWishlist.vue';
import WishlistCard from '@/components/Dashboard/WishlistCard.vue';
import Congratulations from '@/components/Dashboard/Popup.vue';
import ReservedWishes from '@/components/Dashboard/ReservedWishes.vue';
import SavedWishes from '@/components/Dashboard/SavedWishes.vue';
import WishDetailView from '@/components/Dashboard/WishDetailView.vue';
import AnalyticsModal from '@/components/Dashboard/AnalyticsModal.vue';
import DeleteConfirmationModal from '@/components/Dashboard/DeleteConfirmationModal.vue';

export default {
  components: {
    Loader,
    EmptyState,
    CreateWishModal,
    AppHeader,
    DeleteConfirmationModal,
    ProfileCover,
    ProfileDetails,
    TabNavigationsWishlist,
    WishlistCard,
    Congratulations,
    ReservedWishes,
    SavedWishes,
    WishDetailView,
    AnalyticsModal,
  },
  
  data() {
    return {
     user: null,
      showCreateWishModal: false,
      analyticsData: null,
      showAnalyticsModal: false,
      showPrevWish: null,
      showSavedPrevWish: null,
      showWishDetailsModal: false,
      wishToDelete: null,
      showInitialModal: false,
      openDropdownId: null,
      activeTab: 'myWishes',
      showDeleteModal: false,
      showDeleteWishModal: false,
      wishlistToDelete: null,
      wishlists: [],
      wishes: [],
      savedwishes: [],
      reservedWishes: [],
      loading: false,  // Add loading state
    };
  },
  computed: {
    filteredWishlist() {
      return this.wishlists.filter(wishlist => wishlist.status === this.activeTab);
    },
    filteredSavedWish() {
      return this.wishes.filter(wish => wish.status === this.activeTab);
    }
  },
  mounted() {
    this.loadUserData();

    if (this.user.username === null) {
      this.$router.push('/basic-info');
    }

    if (this.$route.query.showCongratulations === 'true') {
      this.showInitialModal = true;
    }
    this.fetchAnalyticsData();

    this.loadData();
    
  },



  methods: {

    async loadData() {
      this.loading = true;  // Start loading
      try {
        await Promise.all([
          this.fetchWishlists(),
          this.fetchReservedAndFulfilledWishes(),
          this.fetchSavedWishes(),
        ]);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        this.loading = false;  // Stop loading
      }
    },



    navigateToAllWishes(wishlistId) {
    this.$router.push({ name: 'Wishlist', params: { id: wishlistId } });
  },

    async fetchSavedWishes() {
      try {
        const response = await this.$axios.get(`${this.$baseURL}/saved-wishes`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });
        this.savedwishes = response.data.data || [];
      } catch (error) {
        console.error('Error fetching saved wishes:', error);
        this.savedwishes = []; // Ensure it remains an array if the API call fails
      }
    },

    async handleDeleteWish(wishId) {
      this.wishToDelete = wishId;
      this.showDeleteWishModal = true;
    },



    AddWish(updatedWish) {
    const index = this.reservedWishes.findIndex(wish => wish.id === updatedWish.id);
    if (index !== -1) {
      this.reservedWishes.splice(index, 1, updatedWish);
    } else {
      this.wishes.push(updatedWish);
    }
    this.closeCreateWishModal();
  },


  async confirmDelete() {
      eventBus.setLoading(true);
      try {
        await this.$axios.delete(`${this.$baseURL}/wishes/${this.wishToDelete}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });
        this.loadData()

       
        eventBus.onSuccess('Wish deleted successfully.');
      } catch (error) {
        console.error('Error deleting wish:', error.response?.data?.message || error.message);
      } finally {
        eventBus.setLoading(false);
        this.showDeleteWishModal = false;
      }
    },
    cancelDelete() {
      this.showDeleteModal = false;
      this.showDeleteWishModal = false
    },



    closeCreateWishModal() {
      this.showCreateWishModal = false;
      this.editingWish = null;
    },

    openEditWishModal(wish) {
    this.editingWish = { ...wish }; // Ensure you pass a copy of the wish to avoid direct mutation
    this.showWishDetailsModal = false
    this.showCreateWishModal = true;
  },

    handleEditWishlist(wishlist) {
      this.$emit('showCreateWishlistModal', wishlist.category, wishlist);
    },

    loadUserData() {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData) {
        this.user = userData;
      }
    },

    async fetchWishlists() {
      try {
        const response = await this.$axios.get(`${this.$baseURL}/wishlists`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });
        this.wishlists = response.data.data;
      } catch (error) {
        console.error('Error fetching wishlists:', error.response?.data?.message || error.message);
      }
    },

    async fetchReservedAndFulfilledWishes() {
      try {
        const response = await this.$axios.get(`${this.$baseURL}/gifted-wishes`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });
        this.reservedWishes = [...response.data.data.reserved, ...response.data.data.fulfiled];
      } catch (error) {
        console.error('Error fetching reserved and fulfilled wishes:', error.response?.data?.message || error.message);
      }
    },

    navigateToAllWishes(wishlistId) {
      this.$router.push({ name: 'Wishlist', params: { id: wishlistId } });
    },
    async handleDeleteWishlist(wishlistId) {
      this.wishlistToDelete = wishlistId;
      this.showDeleteModal = true;
    },
    async confirmDelete() {
      eventBus.setLoading(true);
      try {
        await this.$axios.delete(`${this.$baseURL}/wishlists/${this.wishlistToDelete}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });
        this.loadData();
        eventBus.onSuccess('Wishlist deleted successfully.');
      } catch (error) {
        console.error('Error deleting wishlist:', error.response?.data?.message || error.message);
      } finally {
        eventBus.setLoading(false);
        this.showDeleteModal = false;
      }
    },
  
    closeAnalyticsModal() {
      this.showAnalyticsModal = false;
    },

    async fetchAnalyticsData() {
      try {
        const response = await this.$axios.get(`${this.$baseURL}/analytics`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });
        this.analyticsData = response.data.data;
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      }
    },
    ToggleAnalyticsModal() {
      this.showAnalyticsModal = true;
    },
    prevWish(wishId) {
      this.showWishDetailsModal = true;
      this.showPrevWish = this.reservedWishes.find(w => w.id === wishId);
    },
    savedPrevWish(wishId) {
      this.showWishDetailsModal = true;
      this.showSavedPrevWish = this.savedwishes.find(w => w.id === wishId);
    },
    closeWishDetailsModal() {
      this.showWishDetailsModal = false;
      this.showPrevWish = null;
    },
    closeInitialModal() {
      this.showInitialModal = false;
    },
    handleToggleDropdown(wishlistId) {
      this.openDropdownId = this.openDropdownId === wishlistId ? null : wishlistId;
    },
    handleCloseDropdown() {
      this.openDropdownId = null;
    },
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>
