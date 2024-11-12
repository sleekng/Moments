<template>
  <div class="fixed overflow-y-auto inset-0 flex items-center justify-center bg-gray-800 p-4 bg-opacity-50 z-50"
    @click.self="closeModal">
    <div class="bg-white rela rounded-2xl max-w-4xl w-full h-[98vh] lg:h-auto shadow-lg p-6 mx-auto relative">
      <button @click="closeModal" class="bg-gray-100 rounded-full p-2 hover:bg-gray-200 absolute top-4 z-50 left-4">
        <img src="/assets/close.svg" alt="Close" class="w-6 h-6" />
      </button>
      <div class="flex flex-col lg:flex-row gap-8 relative  h-full lg:h-auto lg:pb-0 pb-4">

        <!-- Image with Priority Tag -->
        <div class="relative rounded-lg overflow-hidden">
          <img :src="wish.photo || '/assets/wishlist-category-placeholder.svg'" alt="Wish Item"
            class="w-[364px] lg:h-[503px] object-cover">
          <img src="/assets/gradient.svg" alt="Gradient Overlay" class="absolute bottom-0 w-full object-cover">

          <div class="absolute bottom-4 left-4 text-white">
            <div class="w-auto">
              <div
                class="inline-flex items-center bg-red-100 border border-red-600 text-red-600 text-sm font-medium py-1 px-2 rounded-full">
                High priority
                <img src="/assets/frame-1618868307.svg" alt="Fire" class="ml-2 w-4 h-4" />
              </div>
            </div>

            <div class="mb-1 mt-8 text-2xl font-bold">{{ wish.name }}</div>
            <div class="flex items-center space-x-2">
              <span class="text-xl font-semibold">{{ wish.amount }}</span>
              <img src="/assets/ellipse-18.svg" alt="Separator" class="w-1 h-1">
              <span class="text-base">Qty: {{ wish.quantity }}</span>
            </div>
          </div>
        </div>

        <!-- Details Section -->
        <div class="flex-1 lg:space-y-4 space-y-2 relative">
          <div class="flex justify-between items-center relative">
            <div class="space-y-1">
              <div class="flex items-center space-x-2 text-sm text-gray-600">
                <img src="/assets/calendar.svg" alt="Event Date" class="w-4 h-4" />
                <span>Event date: </span>
                <span class="font-medium text-gray-800">
                  <DateFormat :date="wish.created_at" :classList="'text-[14px]'" />
                </span>
              </div>
            </div>
            <div class="relative ">

              <!-- Toggle Menu Button, shown only on hover -->
              <button @click="toggleMenu"
                class=" z-40 p-1 bg-[#F8F9FA] rounded-full toggle-menu-button transition-opacity  group-hover:opacity-100">
                <img src="/assets/frame-1618868216.svg" alt="Menu" class="h-6 w-6" />
              </button>


              <!-- Share with Friends Dropdown -->
              <div v-if="isShareMenuOpen" class="absolute top-8 right-0 w-[500px] bg-white shadow-lg rounded-lg p-4 z-50">
                <div class="flex  space-x-4 items-center pb-2 ">
                  <button @click="toggleShareMenu" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times"></i>
                  </button>
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

              <!-- DropdownMenu Received-->
              <template v-if="wish.status == 'saved'">
                <div v-if="isDropdownOpen" @mouseleave="closeMenu"
                  class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">

                  <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                    <img src="/assets/share.svg" class="w-4 h-4" alt="Edit" />
                    <span @click="toggleShareMenu" class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Share wish with
                      friends
                    </span>
                  </div>
                  <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                    <img src="/assets/gift-icon.svg" class="w-4 h-4" alt="Edit" />
                    <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Add to my
                      wishlist</span>
                  </div>
                  <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                    <img src="/assets/World.svg" class="w-4 h-4" alt="Edit" />
                    <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Go to website</span>
                  </div>
                  <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                    <img src="/assets/close-circle.svg" class="w-4 h-4" alt="Delete" />
                    <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Remove from Saved</span>
                  </div>
                </div>
              </template>

              <!-- DropdownMenu Received-->
              <template v-if="wish.status == 'received'">
             
                <div v-if="isDropdownOpen" @mouseleave="closeMenu"
                  class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">
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
             

                <div v-if="isDashboard">

                  <div v-if="isDropdownOpen" @mouseleave="closeMenu"
                    class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">

                    <div class="flex items-center p-2 group moment-text-effect-parent cursor-pointer  border-gray-200">
                      <i class="fa-solid fa-gift moment-text-effect-child"></i>
                      <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Add to my
                        wishlist</span>
                    </div>
                    <div class="flex items-center p-2 group moment-text-effect-parent cursor-pointer  border-gray-200">
                      <i class="fa-regular fa-bookmark moment-text-effect-child"></i>
                      <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Save wish</span>
                    </div>
                    <div class="flex items-center p-2 group moment-text-effect-parent cursor-pointer  border-gray-200">
                      <i class="fa-regular fa-globe moment-text-effect-child"></i>
                      <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Go to website</span>
                    </div>
                    <div
                      class="flex items-center p-2 group moment-text-effect-parent cursor-pointer border-t border-gray-200">
                      <i class=" fa-regular fa-circle-xmark moment-text-effect-child"></i>
                      <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Remove from
                        Fulfilled</span>
                    </div>
                  </div>
                </div>
                <div v-else>

                  <div v-if="isDropdownOpen" @mouseleave="closeMenu"
                    class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">

                      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11 2.0625C6.072 2.0625 2.0625 6.072 2.0625 11C2.0625 15.928 6.072 19.9375 11 19.9375C15.928 19.9375 19.9375 15.928 19.9375 11C19.9375 6.072 15.928 2.0625 11 2.0625ZM15.6512 8.00433L9.87617 14.8793C9.81298 14.9549 9.73426 15.0159 9.64536 15.0583C9.55646 15.1007 9.45948 15.1235 9.361 15.125H9.34908C9.2528 15.125 9.1576 15.1047 9.06965 15.0656C8.98169 15.0264 8.90294 14.9692 8.8385 14.8977L6.3635 12.1477C6.254 12.0299 6.18918 11.8775 6.18028 11.717C6.17138 11.5564 6.21897 11.3978 6.31479 11.2687C6.41061 11.1395 6.54861 11.048 6.70485 11.01C6.8611 10.972 7.02572 10.9898 7.17017 11.0605C7.25267 11.1018 7.326 11.1586 7.38467 11.2273L9.33075 13.3907L14.5988 7.12067C14.7181 6.98837 14.8841 6.90755 15.0618 6.89522C15.2395 6.88289 15.4151 6.94002 15.5515 7.05458C15.6879 7.16913 15.7746 7.33217 15.7932 7.50933C15.8117 7.68649 15.7608 7.86396 15.6512 8.00433Z"
                          fill="#000000" />
                      </svg>

                      <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Mark as
                        fulfilled</span>
                    </div>
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                      <img src="/assets/gift-icon.svg" class="w-4 h-4" alt="Edit" />
                      <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Add to my
                        wishlist</span>
                    </div>
                    <div
                      class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                      <img src="/assets/close-circle.svg" class="w-4 h-4" alt="Delete" />
                      <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Cancel
                        reservation</span>
                    </div>
                  </div>
                </div>
              </template>

              <!-- DropdownMenu FulFilled-->
              <template v-if="wish.status == 'fulfiled'">
               
                <div v-if="isDashboard"> 

                  <div v-if="isDropdownOpen" @mouseleave="closeMenu"
                    class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">

                    <div class="flex items-center p-2 group moment-text-effect-parent cursor-pointer  border-gray-200">
                      <i class="fa-solid fa-gift moment-text-effect-child"></i>
                      <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Add to my
                        wishlist</span>
                    </div>
                    <div class="flex items-center p-2 group moment-text-effect-parent cursor-pointer  border-gray-200">
                      <i class="fa-regular fa-bookmark moment-text-effect-child"></i>
                      <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Save wish</span>
                    </div>
                    <div class="flex items-center p-2 group moment-text-effect-parent cursor-pointer  border-gray-200">
                      <i class="fa-regular fa-globe moment-text-effect-child"></i>
                      <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Go to website</span>
                    </div>
                    <div
                      class="flex items-center p-2 group moment-text-effect-parent cursor-pointer border-t border-gray-200">
                      <i class=" fa-regular fa-circle-xmark moment-text-effect-child"></i>
                      <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Remove from
                        Fulfilled</span>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div v-if="isDropdownOpen" @mouseleave="closeMenu"
                    class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">

                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                      <img src="/assets/gift-icon.svg" class="w-4 h-4" alt="Edit" />
                      <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Add to my
                        wishlist</span>
                    </div>
                    <div
                      class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                      <img src="/assets/close-circle.svg" class="w-4 h-4" alt="Delete" />
                      <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Remove from
                        fulfilled</span>
                    </div>
                  </div>
                </div>
              </template>

                <!-- DropdownMenu Status is null & belong to user -->
              <template v-if="isWishOwner && !wish.status">
                
                <div v-if="isDropdownOpen" @mouseleave="closeMenu"
                  class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">
                  <div @click="toggleShareMenu" class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer">
                    <img src="/assets/share.svg" class="w-4 h-4" alt="Share" />
                    <span  class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Share wish with friends</span>
                  </div>
                  <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                    <img src="/assets/close-circle.svg" class="w-4 h-4" alt="Delete" />
                    <span  @click.stop="$emit('deleteWish', wish.id)" class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Delete</span>
                  </div>
                </div>
              </template>


              <!-- DropdownMenu Status is null & does not belong to user -->
              <template v-if="!isWishOwner && !wish.status"> 
                <div v-if="isDropdownOpen" @mouseleave="closeMenu"
                  class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">
                  <div class="flex items-center p-2 group moment-text-effect-parent cursor-pointer  border-gray-200">
                      <i class="fa-solid fa-gift moment-text-effect-child"></i>
                      <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Add to my
                        wishlist</span>
                    </div>
                    <div class="flex items-center p-2 group moment-text-effect-parent cursor-pointer  border-gray-200">
                      <i class="fa-regular fa-bookmark moment-text-effect-child"></i>
                      <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Save wish</span>
                    </div>
                    <div class="flex items-center p-2 group moment-text-effect-parent cursor-pointer  border-gray-200">
                      <i class="fa-regular fa-globe moment-text-effect-child"></i>
                      <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Go to website</span>
                    </div>
                </div>
              </template>

            </div>

          </div>




          <!-- Comment -->
          <div v-if="wish.comment" class="bg-gray-100 p-4 rounded-lg">
            <div class="text-sm text-gray-600">Comment:</div>
            <p class="text-gray-800 mt-1">{{ wish.comment }}</p>
          </div>
          <!-- Link -->
          <div v-if="wish.link" class="text-sm flex items-center space-x-2">
            <span class="text-gray-600">Buy it here: </span>
            <a :href="wish.link" class="text-blue-600" target="_blank">{{ wish.link }}</a>
          </div>

          <!-- Received Indicator -->
          <div v-if="wish.status == 'received'"
            class="inline-flex items-center  space-x-2 rounded-full px-4 py-2 bg-[#F4F9F6]">
            <i class="fa-light fa-solid fa-circle-check text-green-600 "></i>
            <span class="text-green-600 font-medium">Received by </span>
            <img src="/assets/avatar.svg" alt="Avatar" class="w-5 h-5 rounded-full" />
            <span class="text-primaryColor">@ayomide_sm</span>
          </div>

          <!-- Reserved Indicator -->
          <div v-if="!isWishOwner && wish.status == 'reserved'"
            class="inline-flex items-center space-x-2 rounded-full px-4 py-2   bg-[#FEF8EF]">
            <i class="fa-light fa-solid fa-circle-check text-[#DE900B]"></i>
            <span class="text-[#DE900B] font-medium">Reserved by </span>
            <img src="/assets/avatar.svg" alt="Avatar" class="w-5 h-5 rounded-full" />
            <span class="text-primaryColor">@ayomide_sm</span>
          </div>
          
          <!-- Reserved Indicator -->
          <div v-if="!isWishOwner && wish.status == 'reserved'"
            class="inline-flex items-center space-x-2 rounded-full px-4 py-2   bg-[#FEF8EF]">
            <i class="fa-light fa-solid fa-circle-check text-[#DE900B]"></i>
            <span class="text-[#DE900B] font-medium">Reserved by </span>
            <img src="/assets/avatar.svg" alt="Avatar" class="w-5 h-5 rounded-full" />
            <span class="text-primaryColor">@ayomide_sm</span>
          </div>




          <!-- FulFilled Indicator -->
          <div v-if="wish.status == 'fulfiled'"
            class="inline-flex items-center space-x-2 rounded-full px-4 py-2 bg-[#F4F9F6]">
            <i class="fa-light fa-solid fa-circle-check text-green-600"></i>
            <span class="text-green-600 font-medium">Fulfilled by </span>
            <img src="/assets/avatar.svg" alt="Avatar" class="w-5 h-5 rounded-full" />
            <span class="text-primaryColor">@ayomide_sm</span>
          </div>

          <div v-if="wish.status != 'saved'" class="text-sm text-gray-500">2 minutes ago</div>
          <div class="flex items-center space-x-2 text-gray-600">
            <img src="/assets/heart-outline.svg" alt="Likes" class="w-5 h-5" />
            <span>{{ wish.likes_count }} Likes</span>
          </div>

          <div class="bg-[#f8f9f9] rounded-md border border-[#9ca1aa] p-2.5 w-full" style="width: 407.04px;">
    <div class="flex items-center gap-1.5 px-3">
      <img src="/assets/location.svg" alt="Location" class="w-3.5 h-3.5" />
      <span class="text-[#2d3036] font-medium text-sm leading-tight">Delivery location</span>
    </div>
    <div class="px-3 mt-3">
      <p class="text-[#3b3f46] text-sm leading-tight">
        12, street address, Ifako, Apartment, Lagos, Nigeria, 100245
      </p>
      <div class="flex items-center gap-1 mt-1">
        <span class="text-[#616874] text-sm leading-tight">Phone number:</span>
        <span class="text-[#3b3f46] text-sm leading-tight">+23478362739</span>
      </div>
    </div>
  </div>

{{ isWishOwner }} check
{{ wish.wishlist.user?.username }}
{{ wish }}

  <!-- Conditional Action Buttons -->
  <div class="absolute bottom-0 left-0 right-0 ">
    
            <div v-if="isWishOwner && wish.status === null && !wish.received" class=" flex justify-end">
              <button @click.stop="$emit('editWish', wish)" class="px-8 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                Edit
              </button>
             
            </div>
            <div v-if="isWishOwner && wish.status === 'reserved' && wish.received" class="flex w-full space-x-4">
              <button @click.stop="$emit('editWish', wish)" class="px-8 py-3 flex-1 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                Edit
              </button>
              <button @click="markAsReceived" class="px-8 flex-1 py-3 bg-primaryColor text-white rounded-full hover:shadow-lg">
                Mark as Received
              </button>
            </div>
            <div v-if="isWishOwner && wish.status === 'fulfilled' && wish.received">
              <button @click="markAsUnreceived" class="px-8 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                Mark as Unreceived
              </button>
            </div>
            <div v-if="isWishOwner && wish.status === 'fulfilled' && !wish.received">
              <button @click.stop="$emit('editWish', wish)" class="px-8 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                Edit
              </button>
              <button @click="markAsReceived" class="px-8 py-3 bg-primaryColor text-white rounded-full hover:shadow-lg">
                Mark as Received
              </button>
            </div>
            <div v-if="!isWishOwner && wish.status === 'reserved' && !wish.delivery_address">
              <button @click="requestAddress" class="px-8 py-3 bg-primaryColor text-white rounded-full hover:shadow-lg">
                Request Address
              </button>
            </div>
            <div v-if="!isWishOwner && wish.status === 'reserved' && wish.delivery_address">
              <button @click="markAsFulfilled" class="px-8 py-3 bg-primaryColor text-white rounded-full hover:shadow-lg">
                Mark as Fulfilled
              </button>
            </div>
            <div v-if="!isWishOwner && wish.status === null && !wish.delivery_address" class=" inline-flex justify-end">
              <button @click="reserveWish" class="px-8 py-3 bg-primaryColor text-white rounded-full hover:shadow-lg">
                Reserve Wish
              </button>
            </div>
            <div v-if="wish.status === 'reserved' && !isWishOwner && !wish.delivery_address && wish.gifter === loggedInUser">
              <button @click="cancelReservation" class="px-8 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                Cancel Reservation
              </button>
              <button @click="markAsFulfilled" class="px-8 py-3 bg-primaryColor text-white rounded-full hover:shadow-lg">
                Mark as Fulfilled
              </button>
            </div>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>
<script>
import DateFormat from '@/components/Dashboard/DateFormat.vue';
import { wishOwnerMixin } from '@/mixins/wishOwnerMixin.js';
import { eventBus } from '@/eventBus.js';

export default {
  name: 'WishDetailView',
  components: {
    DateFormat,
  },
  props: {
    wish: {
      type: Object,
      required: true,
    },
    loggedInUser: {
      type: [String, Number], // Accept both string and number since ID might be either
      required: true,
    },
  },
  mixins: [wishOwnerMixin],
  data() {
    return {
      isShareMenuOpen: false,
      isDropdownOpen: false,
    };
  },
  computed: {
    isWishOwner() {
      return this.wish.wishlist.user?.username === this.loggedInUser;
    },
  },
  methods: {
    

    closeModal() {
      this.$emit('close');
    },
    toggleMenu() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeMenu() {
      this.isDropdownOpen = false;
    },

    toggleShareMenu() {
      this.isShareMenuOpen = !this.isShareMenuOpen;
    },
    closeModal() {
      this.$emit('close');
    },
    copyLink() {
      navigator.clipboard.writeText(`${window.location.href}/wish/${this.wish.id}`).then(() => {
        alert('Link copied to clipboard!');
      });
    },
    shareToEmail() {
      const subject = encodeURIComponent(`Check out this wish: ${this.wish.name}`);
      const body = encodeURIComponent(`${window.location.href}/wish/${this.wish.id}`);
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    },
    shareToWhatsApp() {
      const text = encodeURIComponent(`Check out this wish: ${window.location.href}/wish/${this.wish.id}`);
      window.open(`https://wa.me/?text=${text}`, '_blank');
    },
    shareToTwitter() {
      const text = encodeURIComponent(`Check out this wish: ${window.location.href}/wish/${this.wish.id}`);
      window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
    },
    shareToFacebook() {
      const url = encodeURIComponent(`${window.location.href}/wish/${this.wish.id}`);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    },
    shareToInstagram() {
      alert('Instagram sharing is not supported directly from the web.');
    },
    async markAsReceived() {
      try {
        await this.$axios.put(`${this.$baseURL}/wishes/40`, { received: true }, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` },
        });
        this.wish.received = true;
      } catch (error) {
        console.error('Error marking as received:', error);
      }
    },
    async markAsUnreceived() {
      try {
        await this.$axios.put(`${this.$baseURL}/wishes/40`, { received: false }, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` },
        });
        this.wish.received = false;
      } catch (error) {
        console.error('Error marking as unreceived:', error);
      }
    },
    async markAsFulfilled() {
      try {
        await this.$axios.put(`${this.$baseURL}/wishes/40`, { status: 'fulfilled' }, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` },
        });
        this.wish.status = 'fulfilled';
      } catch (error) {
        console.error('Error marking as fulfilled:', error);
      }
    },
    async reserveWish() {
      try {
        await this.$axios.put(`${this.$baseURL}/wishes/40`, { status: 'reserved' }, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` },
        });
        this.wish.status = 'reserved';

         // Show success message to user
         eventBus.onSuccess('Wish has been reserved');
      } catch (error) {
        console.error('Error reserving wish:', error);
      }
    },
    async cancelReservation() {
      try {
        await this.$axios.put(`${this.$baseURL}/wishes/40`, { status: null }, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` },
        });
        this.wish.status = null;
      } catch (error) {
        console.error('Error canceling reservation:', error);
      }
    },
    async requestAddress() {
      try {
        const response = await this.$axios.post(`${this.$baseURL}/wishes/${this.wish.id}/address`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` },
        });
        if (response.data.success) {
          alert('Address request sent.');
        }
      } catch (error) {
        console.error('Error requesting address:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add necessary styles if needed */
</style>