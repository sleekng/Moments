<template>
  <div>
    <div @click="preview" class="bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden relative card group flex-shrink-0 md:w-auto   min-w-[286px]">
      <div class="relative">
        <img :src="wish.photo || '/assets/wishlist-category-placeholder.svg'" alt="Wish Item" class="w-full h-[200px] md:h-[360px] object-cover">
        <button @click.stop="toggleMenu" v-if="isWishOwner && wish.status === null && !wish.delivery_address" class="absolute z-30 top-3 right-2 p-1 bg-gray-200 rounded-full toggle-menu-button transition-opacity opacity-0 group-hover:opacity-100">
          <img src="/assets/frame-1618868216.svg" alt="Menu" class="h-6 w-6" />
        </button>


      

        <div v-if="!isWishOwner && wish.status === null && !wish.delivery_address" class="absolute z-30 top-3 right-2 w-full inline-flex justify-end toggle-menu-button transition-opacity opacity-0 group-hover:opacity-100">
              <button @click.stop="reserveWish" :disabled="isReserving" :class="['px-8 py-3 rounded-full', isReserving ? 'bg-primaryColor text-white hover:shadow-lg cursor-not-allowed' : 'bg-primaryColor text-white hover:shadow-lg']">
                <span v-if="isReserving">
                  <i class="fas fa-spinner fa-spin"></i>
                </span>
                
                <span v-else>Reserve Wish</span>
              </button>
          </div>

        <template v-if="isWishOwner && wish.status === null && !wish.delivery_address" >
          <div v-if="isDropdownOpen" class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">
            <div @click.stop="$emit('editWish', wish)" class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer">
              <img src="/assets/edit.svg" class="w-4 h-4" alt="Edit" />
              <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Edit wish</span>
            </div>
            <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
              <img src="/assets/close-circle.svg" class="w-4 h-4" alt="Delete" />
              <span @click.stop="$emit('deleteWish', wish.id)" class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Delete</span>
            </div>
          </div> 
        </template>

         <!-- Status is null -->
       
          
       


                    <!-- DropdownMenu Received-->
             <template v-if="wish.status == 'received'">
                <div v-if="isDropdownOpen" @mouseleave="closeMenu" class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">
                    <div class="flex items-center p-2  hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                        <img src="/assets/edit.svg" class="w-4 h-4" alt="Edit" />
                        <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Edit wish</span>
                    </div>
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                        <img src="/assets/close-circle.svg" class="w-4 h-4" alt="Delete" />
                        <span class="ml-2 text-gray-800  w-full hover:text-primaryColor font-medium">Delete</span>
                    </div>
                </div>
            </template>

            <!-- DropdownMenu Reserved-->
            <template v-if="wish.status == 'reserved'">
                <div v-if="isDropdownOpen" @mouseleave="closeMenu" class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">
                  
                    <div class="flex relative items-center p-2 group moment-text-effect-parent cursor-pointer">
                      <i class="fa-light fa-solid fa-circle-check moment-text-effect-child "></i>
                      <span class="ml-2 text-gray-800 moment-text-effect-child w-full font-medium">Mark as fulfilled</span>
                    </div>
                    <div class="flex items-center p-2 group moment-text-effect-parent cursor-pointer  border-gray-200">
                      <i class="fa-regular fa-gift moment-text-effect-child "></i>
                        <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Add to my wishlist</span>
                    </div>
                    <div class="flex items-center p-2 group moment-text-effect-parent cursor-pointer border-t border-gray-200">
                      <i class="fa-light fa-light fa-circle-xmark moment-text-effect-child"></i>
                        <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Cancel reservation</span>
                    </div>
                </div>
            </template>

            <!-- DropdownMenu FulFilled-->
            <template v-if="wish.status == 'fulfiled'">
                <div v-if="isDropdownOpen" @mouseleave="closeMenu" class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">

                    <div class="flex items-center p-2 group moment-text-effect-parent cursor-pointer  border-gray-200">
                      <i class="fa-regular fa-gift moment-text-effect-child "></i>
                        <span class="ml-2 text-gray-800 w-full moment-text-effect-child hover:text-primaryColor font-medium">Add to my wishlist</span>
                    </div>
                    <div class="flex items-center p-2 group moment-text-effect-parent cursor-pointer border-t border-gray-200">
                      <i class="fa-light fa-light fa-circle-xmark moment-text-effect-child"></i>
                        <span class="ml-2 text-gray-800 w-full moment-text-effect-child  font-medium">Remove from fulfilled</span>
                    </div>
                </div>
            </template>

            <!-- DropdownMenu myWishes -->
            <!-- <template v-if="wish.status == null">
                <div v-if="isDropdownOpen" @mouseleave="closeMenu" class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer">
                        <img src="/assets/share.svg" class="w-4 h-4" alt="Share" />
                        <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Share wishlist with friends</span>
                    </div>
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                        <img src="/assets/edit.svg" class="w-4 h-4" alt="Edit" />
                        <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Edit wishlist</span>
                    </div>
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                        <img src="/assets/close-circle.svg" class="w-4 h-4" alt="Delete" />
                        <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Delete</span>
                    </div>
                </div>
            </template> -->


      </div>

       

        

        <!-- Received Indicator -->
        <div v-if="wish.status == 'received'" class="absolute top-4 left-2 lg:left-4 bg-green-100 text-green-800 py-1 px-2 lg:px-4 rounded-full flex items-center">
          <i class="fa-light mr-2 fa-solid fa-circle-check"></i>
            <span class="font-medium text-sm">Received</span>
        </div>

        <!-- Reserved Indicator -->
        <div v-if="wish.status == 'reserved'" class="absolute top-4 left-2 lg:left-4 bg-[#FEF8EF] text-[#DE900B] py-1 px-2 lg:px-4 rounded-full flex items-center">
          <i class="fa-light mr-2 fa-solid fa-circle-check"></i>

            <span v-if="isDashboard" class="font-medium text-xs lg:text-sm">Reserved by you</span>
            <span v-else class="font-medium text-sm">Reserved</span>
        </div>

        <!-- FulFilled Indicator -->
        <div v-if="wish.status == 'fulfiled'" class="absolute top-4 left-2 lg:left-4 bg-[#EFF9F3] text-[#1FB356] py-1 px-2 lg:px-4 rounded-full flex items-center">
          <i class="fa-light mr-2 fa-solid fa-circle-check"></i>
            <span class="font-medium text-xs lg:text-sm">Fulfilled by you</span>
        </div>

        <!-- Saved Indicator -->
        <div v-if="status == 'saved'" class="absolute top-4 left-2 lg:left-4  bg-primaryMainBright text-primaryColor py-1 px-2 lg:px-4 rounded-full flex items-center">
            <span class="font-medium text-xs lg:text-sm">Birthday wishlist</span>
        </div>



      <div class="absolute bottom-0 left-0 p-2 lg:p-4 bg-gradient-to-t from-black to-transparent w-full text-white">
        <div class="w-auto">
             
          <!-- priority check Low -->

            <div v-if="wish.priority == 'low'" class="inline-flex items-center bg-[#FAFFFF] border border-[#37B1B5] text-[#37B1B5] text-sm font-medium py-1 px-2 rounded-full">
                {{wish.priority}} priority 
                <img src="/assets/gift.svg" alt="Fire" class="ml-2 w-4 h-4" />
            </div>

            <!-- priority check Medium -->

            <div v-if="wish.priority == 'medium'" class="inline-flex items-center bg-[#FCF8EE] border border-[#DAA520] text-[#DAA520] text-sm font-medium py-1 px-2 rounded-full">
                {{wish.priority}} priority
                <img src="/assets/star.svg" alt="Fire" class="ml-2 w-4 h-4" />
            </div>

            <!-- priority check High -->

            <div v-if="wish.priority == 'high'" class="inline-flex items-center bg-red-100 border border-red-600 text-red-600 text-sm font-medium py-1 px-2 rounded-full">
                {{wish.priority}} priority
                <img src="/assets/frame-1618868307.svg" alt="Fire" class="ml-2 w-4 h-4" />
            </div>
      </div>


        <h2 class="text-sm md:text-lg font-semibold">{{ wish.name }}</h2>
        <p class="text-sm md:text-lg">{{ wish.amount }} {{ wish.currency }}</p>
        <div class="flex justify-between items-center mt-2">
          <div class="flex items-center">
            <img src="/assets/heart.svg" alt="Likes" class="w-3 h-3 md:w-5 md:h-5 mr-2" />
            <span class="text-xs md:text-sm">{{ wish.likes_count }}</span>
          </div>
          <div class="flex space-x-2 md:space-x-4">
            <button class="border-white border p-1 md:p-2 rounded-full focus:outline-none shadow-sm">
              <img src="/assets/bookmark.svg" alt="Save" class="w-3 h-3 md:w-5 md:h-5" />
            </button>
            <button class="border-white border p-1 md:p-2 rounded-full focus:outline-none shadow-sm">
              <img src="/assets/share-2.svg" alt="Share" class="w-3 h-3 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

     <!-- Show this if url is dashboard -->
<!--      <div v-if="isDashboard" class="flex  lg:flex-row flex-col lg:items-center lg:space-x-2 mt-2 pb-2">
        <div class="flex  items-center space-x-1">
            <span class="text-gray-600 font-normal  text-[14px]">For</span>
            <img :src="wish.wishlist.user.avatar" alt="Avatar" class="w-4 h-4 rounded-full">
            <span class="text-primaryColor font-medium text-[14px]">@{{ wish.wishlist.user.username }}</span>
        </div>
        <div class="flex items-center lg:space-x-1">
            <img src="/assets/ellipse-20.svg" alt="Ellipse" class="w-1 h-1 hidden lg:inline-block">
            <span class="text-gray-600 font-normal  text-[14px]"></span>
            
            <span class="font-medium text-gray-800 text-[14px]">
              <DateFormat :date="wish.created_at" :classList="'text-[14px]'" />
            </span>
        </div>
    </div> -->
  </div>


 

</template>

<script>
import DateFormat from './DateFormat.vue';

export default {
  name: 'WishCard',
  components:{
    DateFormat,

  },
  props: {
    loggedInUser: {
      type: [String, Number], // Accept both string and number since ID might be either
      required: true,
    },
    wish: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
    },
    openDropdownId: {
      required: true,
    },
  },
  emits: ['preview', 'deleteWish', 'toggleDropdown', 'closeDropdown', 'editWish'], // Declare emits
  data() {
    return {
      
      isReserving: false, // New data property to track reservation state
    }
    },
  computed: {
    isWishOwner() {
      if(this.wish.wishlist.user?.username){
      return this.wish.wishlist.user?.username === this.loggedInUser;
      }
    },
    isDashboard() {
      return this.$route.path === '/dashboard';
    },
    isDropdownOpen() {
      return this.openDropdownId === this.wish.id;
    },
  },
  methods: {
    toggleMenu() {
      this.$emit('toggleDropdown', this.wish.id);
    },
    async reserveWish() {
      this.isReserving = true; // Start loading state
      try {
        await this.$axios.put(`${this.$baseURL}/wishes/${this.wish.id}`, { status: 'reserved' }, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });
        this.wish.status = 'reserved';
        this.$emit('reserved')
 
      } catch (error) {
        console.error('Error reserving wish:', error);
      }  finally {
        this.isReserving = false; // End loading state    
      }
    },
    preview() {
      this.$emit('preview', this.wish.id);
    },
    closeMenu() {
      this.$emit('closeDropdown', this.wish.id);
    },
  },
};
</script>

<style scoped>
.group:hover .toggle-menu-button {
  opacity: 1;
}

.loader {
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
  display: inline-block;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
