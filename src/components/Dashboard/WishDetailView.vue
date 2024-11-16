<template>
<div class="fixed overflow-y-auto inset-0 flex items-start justify-center bg-gray-800 p-4 bg-opacity-50 z-50" @click.self="closeModal">
    <div class="bg-white rounded-2xl max-w-[850px] h-[98vh] lg:h-auto shadow-lg p-6 mx-auto relative">
        <button @click="closeModal" class="bg-gray-100 rounded-full p-2 hover:bg-gray-200 absolute top-4 z-50 left-4">
            <img src="/assets/close.svg" alt="Close" class="w-6 h-6" />
        </button>
        <div class="inline-flex flex-col lg:flex-row gap-8 relative h-full lg:h-auto lg:pb-0 pb-4">
            <!-- Image with Priority Tag -->
            <div class="sticky top-0 lg:h-[503px] w-[364px] rounded-lg overflow-hidden">
                <img :src="wish.photo || '/assets/wishlist-category-placeholder.svg'" alt="Wish Item" class="w-full lg:h-[503px] object-cover" />
                <img src="/assets/gradient.svg" alt="Gradient Overlay" class="absolute bottom-0 w-full object-cover" />

                <div class="absolute bottom-4 left-4 text-white">
                    <div class="w-auto">
                        <!-- priority check Low -->

                        <div v-if="wish.priority == 'low'" class="inline-flex items-center bg-[#FAFFFF] border border-[#37B1B5] text-[#37B1B5] text-sm font-medium py-1 px-2 rounded-full">
                            {{ wish.priority }} priority
                            <img src="/assets/gift.svg" alt="Fire" class="ml-2 w-4 h-4" />
                        </div>

                        <!-- priority check Medium -->

                        <div v-if="wish.priority == 'medium'" class="inline-flex items-center bg-[#FCF8EE] border border-[#DAA520] text-[#DAA520] text-sm font-medium py-1 px-2 rounded-full">
                            {{ wish.priority }} priority
                            <img src="/assets/star.svg" alt="Fire" class="ml-2 w-4 h-4" />
                        </div>

                        <!-- priority check High -->

                        <div v-if="wish.priority == 'high'" class="inline-flex items-center bg-red-100 border border-red-600 text-red-600 text-sm font-medium py-1 px-2 rounded-full">
                            {{ wish.priority }} priority
                            <img src="/assets/frame-1618868307.svg" alt="Fire" class="ml-2 w-4 h-4" />
                        </div>
                    </div>

                    <div class="mb-1 mt-4 text-2xl font-bold">{{ wish.name }}</div>
                    <div class="flex items-center space-x-2">
                        <span class="text-xl font-semibold">{{ wish.currency }} {{ wish.amount }}</span>
                        <img src="/assets/ellipse-18.svg" alt="Separator" class="w-1 h-1" />
                        <span class="text-base">Qty: {{ wish.quantity }}</span>
                    </div>
                </div>
            </div>

            <!-- Details Section -->
            <div class="w-[400px] max-w-full lg:space-y-4 space-y-2 relative">
                <div class="flex justify-between items-center relative">
                    <div class="space-y-1">
                        <div class="flex items-center space-x-2 text-sm text-gray-600">
                            <img src="/assets/calendar.svg" alt="Event Date" class="w-4 h-4" />
                            <span>Event date: </span>
                            <span class="font-bold text-black">
                                <DateFormat :date="wish.created_at" :classList="'text-[16px] font-bold text-black'" />
                            </span>
                        </div>
                    </div>
                    <div class="relative">
                        <!-- Toggle Menu Button, shown only on hover -->
                        <button @click="toggleMenu" class="z-40 p-1 bg-[#F8F9FA] rounded-full toggle-menu-button transition-opacity group-hover:opacity-100">
                            <img src="/assets/frame-1618868216.svg" alt="Menu" class="h-6 w-6" />
                        </button>

                        <!-- Share with Friends Dropdown -->
                        <div v-if="isShareMenuOpen" @mouseleave="toggleShareMenu" class="absolute top-8 right-0 w-[500px] bg-white shadow-lg rounded-lg p-4 z-50">
                            <div class="flex space-x-4 items-center pb-2">
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

                        <!-- DropdownMenu for Status = null or reserved & owned by user -->
                        <template v-if="
                  isWishOwner &&
                  (wish.status == null || wish.status == 'reserved')
                ">
                            <div v-if="isDropdownOpen" @mouseleave="closeMenu" class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">
                                <div @click="toggleShareMenu" class="flex items-center moment-text-effect-parent p-2 cursor-pointer">
                                    <i class="fa-regular fa-share-alt w-4 h-4 moment-text-effect-child"></i>
                                    <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Share wish with friends</span>
                                </div>
                                <div class="flex items-center p-2 moment-text-effect-parent cursor-pointer border-t border-gray-200">
                                    <i class="fa-regular fa-trash-alt w-4 h-4 moment-text-effect-child"></i>
                                    <span @click.stop="$emit('deleteWish', wish.id)" class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Delete</span>
                                </div>
                            </div>
                        </template>

                        <!-- DropdownMenu for Status = null or reserved & not owned by user -->
                        <template v-if="
                  !isWishOwner &&
                  (wish.status == null || wish.status == 'reserved' || wish.status == 'fulfiled' )
                ">
                            <div>
                                <div v-if="isDropdownOpen" @mouseleave="closeMenu" class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">
                                    <div class="flex items-center p-2 group moment-text-effect-parent cursor-pointer border-gray-200">
                                        <i class="fa-solid fa-gift moment-text-effect-child"></i>
                                        <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Add to my wishlist</span>
                                    </div>
                                    <div @click="saveWish" v-if="wish.status == null" class="flex items-center p-2 group moment-text-effect-parent cursor-pointer border-gray-200">
                                        <i class="fa-regular fa-bookmark moment-text-effect-child"></i>
                                        <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Save wish</span>
                                    </div>
                                    <div class="flex items-center p-2 group moment-text-effect-parent cursor-pointer border-gray-200">
                                        <i class="fa-regular fa-globe moment-text-effect-child"></i>

                                        <a :href="wish.link" target="_blank" class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Go to website</a>
                                    </div>

                                    <div v-if="wish.status == 'fulfiled' && wish.gifter?.username == loggedInUser" @click="removeFromFulfiled" class="flex items-center p-2 group moment-text-effect-parent cursor-pointer border-t border-gray-200">
                                        <i class="fa-regular fa-circle-xmark moment-text-effect-child"></i>
                                        <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Remove from Fulfilled</span>
                                    </div>

                                    <div v-if="wish.status == 'reserved' && wish.gifter?.username == loggedInUser" @click="cancelReservation" class="flex items-center p-2 group moment-text-effect-parent cursor-pointer border-t border-gray-200">
                                        <i class="fa-regular fa-circle-xmark moment-text-effect-child"></i>
                                        <span class="ml-2 text-gray-800 w-full moment-text-effect-child font-medium">Cancel reservation</span>
                                    </div>
                                </div>
                            </div>
                        </template>

                    </div>
                </div>

                <!-- Comment -->
                <div v-if="wish.comment" class="bg-gray-100 p-4 rounded-lg max-w-full overflow-hidden">
                    <div class="text-sm w-auto text-gray-600">Comment:</div>
                    <p class="text-gray-800 mt-1 break-words overflow-wrap-anywhere overflow-y-auto max-h-[100px]">
                        {{ wish.comment }}
                    </p>
                </div>
                <!-- Link -->
                <div v-if="wish.link" class="text-sm rounded-lg max-w-full overflow-hidden">
                    <div class="text-gray-600 whitespace-nowrap">Buy it here:</div>
                    <div class="max-h-[100px] overflow-wrap-anywhere overflow-y-auto">
                        <a :href="wish.link" class="text-blue-600 break-words" target="_blank">{{ wish.link }}</a>
                    </div>
                </div>

                <!-- Received Indicator -->
           <!--      {{ loggedInUser }}
                {{ wish.status }}
                {{ wish.wishlist.user?.username }} -->

                

                <!-- Show this on a users Wishlist -->
          <div v-if="!isDashboard">

             <!-- Reserved Indicator Wish does not belong to user-->
            <div v-if="!isWishOwner && wish.status == 'reserved' && wish.gifter?.username != loggedInUser"  class="">
                <div class="flex items-center">
                    <div class="inline-flex items-center space-x-2 rounded-full px-4 py-2 bg-[#FEF8EF] mr-2">
                        <i class="fa-light fa-solid fa-circle-check text-[#DE900B]"></i>
                        <span class="text-[#DE900B] font-medium">Reserved by</span>
                        <div class="flex items-center space-x-2">
                          <img :src="wish.gifter?.avatar || '/assets/avatar.svg'" alt="Avatar" class="w-5 h-5 rounded-full" />
                        <span class="text-primaryColor">@{{ wish.gifter?.username }}</span>
                        </div>
                    </div>
                    <div class="flex space-x-2 items-center">
                        <span>for</span>
                        <img :src="wish.gifter?.avatar || '/assets/avatar.svg'" alt="Avatar" class="w-5 h-5 rounded-full" />
                        <span class="text-primaryColor">@{{ wish.wishlist.user?.username }}</span>
                    </div>
                </div>
                <div v-if="wish.status != 'saved'" class="text-sm text-gray-500 mt-2">
                    {{ timeAgo }} ago
                </div>
            </div>

           

            <!-- Reserved Indicator Wish does not belong to user-->
            <div v-if="isWishOwner && wish.status == 'reserved' && wish.gifter?.username != loggedInUser" class="inline-flex items-center space-x-2 rounded-full px-4 py-2 bg-[#FEF8EF]">
                <i class="fa-light fa-solid fa-circle-check text-[#DE900B]"></i>
                <span class="text-[#DE900B] font-medium">Reserved by </span>
                <img :src="wish.gifter?.avatar || '/assets/avatar.svg'" alt="Avatar" class="w-5 h-5 rounded-full" />
                <span class="text-primaryColor">@{{ wish.gifter?.username }}</span>
                <div v-if="wish.status != 'saved'" class="text-sm text-gray-500">
                    {{ timeAgo }} ago
                </div>
            </div>

            <!-- Reserved Indicator Wish belongs to user -->
            <div v-if="!isWishOwner && wish.status == 'reserved' && wish.gifter?.username == loggedInUser" class="">
                <div class="flex items-center">
                    <div class="inline-flex items-center space-x-2 rounded-full px-4 py-2 bg-[#FEF8EF] mr-2">
                        <i class="fa-light fa-solid fa-circle-check text-[#DE900B]"></i>
                        <span class="text-[#DE900B] font-medium">Reserved by you</span>
                    </div>
                    <div class="flex space-x-2 items-center">
                        <span>for</span>
                        <img :src="wish.wishlist.user?.avatar || '/assets/avatar.svg'" alt="Avatar" class="w-5 h-5 rounded-full" />
                        <span class="text-primaryColor">@{{ wish.wishlist.user?.username }}</span>
                    </div>
                </div>
                <div v-if="wish.status != 'saved'" class="text-sm text-gray-500 mt-2">
                    {{ timeAgo }} ago
                </div>
            </div>

            <!-- FulFilled Indicator Wish does not belong to user-->
            <div v-if="isWishOwner && wish.status == 'fulfiled' && wish.gifter?.username != loggedInUser" class="inline-flex items-center space-x-2 rounded-full px-4 py-2 bg-[#F4F9F6]">
                <i class="fa-light fa-solid fa-circle-check text-green-600"></i>
                <span class="text-green-600 font-medium">Fulfilled by </span>
                <img :src="wish.gifter?.avatar || '/assets/avatar.svg'" alt="Avatar" class="w-5 h-5 rounded-full" />
                <span class="text-primaryColor">@{{ wish.gifter?.username }}</span>
                <div v-if="wish.status != 'saved'" class="text-sm text-gray-500">
                    {{ timeAgo }} ago
                </div>
            </div>

            <!-- FulFilled Indicator Wish belongs to user -->
            <div v-if="!isWishOwner && wish.status == 'fulfiled' && wish.gifter?.username == loggedInUser" class="">
                <div class="flex items-center">
                    <div class="inline-flex items-center space-x-2 rounded-full px-4 py-2 bg-[#F4F9F6] mr-2">
                        <i class="fa-light fa-solid fa-circle-check text-green-600"></i>
                        <span class="text-green-600 font-medium">Fulfilled by you</span>
                    </div>
                    <div class="flex space-x-2 items-center">
                        <span>for</span>
                        <img :src="wish.gifter?.avatar || '/assets/avatar.svg'" alt="Avatar" class="w-5 h-5 rounded-full" />
                        <span class="text-primaryColor">@{{ wish.wishlist.user?.username }}</span>
                    </div>
                </div>
                <div v-if="wish.status != 'saved'" class="text-sm text-gray-500 mt-2">
                    {{ timeAgo }} ago
                </div>
            </div>
          </div>

    
          <!-- Show this on a users Dashboard -->
          <div v-if="isDashboard">
            <!-- Reserved Indicator Wish belongs to user -->
            <div v-if="!isWishOwner && wish.status == 'reserved'" class="">
                <div class="flex items-center">
                    <div class="inline-flex items-center space-x-2 rounded-full px-4 py-2 bg-[#FEF8EF] mr-2">
                        <i class="fa-light fa-solid fa-circle-check text-[#DE900B]"></i>
                        <span class="text-[#DE900B] font-medium">Reserved by you</span>
                    </div>
                    <div class="flex space-x-2 items-center">
                        <span>for</span>
                        <img :src="wish.wishlist.user.avatar || '/assets/avatar.svg'" alt="Avatar" class="w-5 h-5 rounded-full" />
                        <span class="text-primaryColor">@{{ wish.wishlist.user?.username }}</span>
                    </div>
                </div>
                <div v-if="wish.status != 'saved'" class="text-sm text-gray-500 mt-2">
                    {{ timeAgo }} ago
                </div>
            </div>

            <!-- FulFilled Indicator Wish belongs to user -->
            <div v-if="!isWishOwner && wish.status == 'fulfiled'" class="">
                <div class="flex items-center">
                    <div class="inline-flex items-center space-x-2 rounded-full px-4 py-2 bg-[#F4F9F6] mr-2">
                        <i class="fa-light fa-solid fa-circle-check text-green-600"></i>
                        <span class="text-green-600 font-medium">Fulfilled by you</span>
                    </div>
                    <div class="flex space-x-2 items-center">
                        <span>for</span>
                        <img :src="wish.wishlist.user.avatar || '/assets/avatar.svg'" alt="Avatar" class="w-5 h-5 rounded-full" />
                        <span class="text-primaryColor">@{{ wish.wishlist.user?.username }}</span>
                    </div>
                </div>
                <div v-if="wish.status != 'saved'" class="text-sm text-gray-500 mt-2">
                    {{ timeAgo }} ago
                </div>
            </div>
         </div>

         <div class="flex items-center" @click.stop="toggleLike">
        <i :class="wish.liked_by_me ? 'fa-solid fa-heart text-red-500' : 'fa-light fa-heart'" class="mr-1 text-[14px] cursor-pointer"></i>
        <span>{{ wish.likes_count }} Likes</span>
      </div>

                <div v-if="wish.delivery_address" class="bg-[#f8f9f9] rounded-md border border-[#9ca1aa] p-2.5 w-full" style="width: 407.04px">
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

                <div class="mb-16 py-10"></div>

                <!-- Conditional Action Buttons -->
                <div v-if="isWishOwner || wish.gifter?.username == loggedInUser " class="absolute bottom-0 left-0 right-0">

                    <!--  Completed and Verified Actions -->
                    <div v-if="isWishOwner && wish.status === null && !wish.received" class="flex justify-end">
                    <button @click.stop="$emit('editWish', wish)" class="px-8 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                            Edit
                    </button>
                    </div>

                    <div v-if="isWishOwner && wish.status === 'reserved' && !wish.received" class="flex w-full space-x-4">
                        <button @click.stop="$emit('editWish', wish)" class="px-8 py-3 flex-1 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                            Edit
                        </button>

                        <button @click="markAsReceived" :disabled="isReceiving" :class="[
                  'px-8 py-3 rounded-full relative',
                  isReceiving
                    ? 'bg-primaryColor text-white hover:shadow-lg cursor-not-allowed'
                    : 'bg-primaryColor text-white hover:shadow-lg',
                ]">
                            <span class="w-full flex justify-center">
                                <span v-if="isReceiving" class="  absolute ">
                                    <i class="fas fa-spinner fa-spin "></i>
                                </span>
                                Mark as Received
                            </span>
                        </button>
                    </div>

                    <div v-if="
                !isWishOwner &&
                wish.status === 'reserved' &&
                !wish.delivery_address
              " class="inline-flex justify-end w-full space-x-4">

                        <button @click="requestAddress" :disabled="isRequestingAddress" :class="[
                  'px-8 py-3 rounded-full relative',
                  isRequestingAddress
                    ? 'bg-primaryColor text-white hover:shadow-lg cursor-not-allowed'
                    : 'bg-primaryColor text-white hover:shadow-lg',
                ]">
                            <span class="w-full flex justify-center">
                                <span v-if="isRequestingAddress" class="  absolute ">
                                    <i class="fas fa-spinner fa-spin "></i>
                                </span>
                                Request Address
                            </span>
                        </button>

                    </div>

                    <div v-if="
                !isWishOwner &&
                wish.status === 'reserved' &&
                wish.delivery_address
              " class="inline-flex justify-end w-full space-x-4">

                        <button @click="markAsFulfilled" :disabled="isFulfilling" :class="[
                  'px-8 py-3 rounded-full relative',
                  isFulfilling
                    ? 'bg-primaryColor text-white hover:shadow-lg cursor-not-allowed'
                    : 'bg-primaryColor text-white hover:shadow-lg',
                ]">
                            <span class="w-full flex justify-center">
                                <span v-if="isFulfilling" class="  absolute ">
                                    <i class="fas fa-spinner fa-spin "></i>
                                </span>
                                Mark as Fulfilled
                            </span>
                        </button>

                    </div>

                   

                    <div v-if="isWishOwner && wish.status === 'fulfiled' && !wish.received" class="flex w-full space-x-4">
                        <button @click.stop="$emit('editWish', wish)" class="px-8 py-3 w-full bg-gray-200 text-gray-800 rounded-full hover:shadow-lg">
                            Edit
                        </button>

                        <button @click="markAsReceived" :disabled="isReceiving" :class="[
                  'px-8 py-3 rounded-full relative w-full',
                  isReceiving
                    ? 'bg-primaryColor text-white hover:shadow-lg cursor-not-allowed'
                    : 'bg-primaryColor text-white hover:shadow-lg',
                ]">
                            <span class="w-full flex justify-center">
                                <span v-if="isReceiving" class="  absolute ">
                                    <i class="fas fa-spinner fa-spin "></i>
                                </span>
                                Mark as Received
                            </span>
                        </button>

                    </div>

                    <div v-if="isWishOwner && wish.status === 'fulfiled' && wish.received">
                        <button @click="markAsUnreceived" :disabled="isUnReceiving" class="px-8 w-full py-3 bg-gray-200 text-gray-800 rounded-full hover:shadow-lg">
                          <span class="w-full flex justify-center">
                                <span v-if="isUnReceiving" class="  absolute ">
                                    <i class="fas fa-spinner fa-spin "></i>
                                </span>
                                Mark as Unreceived
                            </span>
                        </button>
                    </div>
                  

                    <div v-if="
                !isWishOwner && wish.status === null && !wish.delivery_address
              " class="w-full inline-flex justify-end">
                        <button @click="reserveWish" :disabled="isReserving" :class="[
                  'px-8 py-3 rounded-full relative',
                  isReserving
                    ? 'bg-primaryColor text-white hover:shadow-lg cursor-not-allowed'
                    : 'bg-primaryColor text-white hover:shadow-lg',
                ]">
                            <span class="w-full flex justify-center">
                                <span v-if="isReserving" class="  absolute ">
                                    <i class="fas fa-spinner fa-spin "></i>
                                </span>
                                Reserve Wish
                            </span>
                        </button>
                    </div>

                </div>



                  <div v-else class="absolute bottom-0 left-0 right-0">
                      <div v-if="
                !isWishOwner && wish.status === null && !wish.delivery_address
              " class="w-full inline-flex justify-end">
                        <button @click="reserveWish" :disabled="isReserving" :class="[
                  'px-8 py-3 rounded-full relative',
                  isReserving
                    ? 'bg-primaryColor text-white hover:shadow-lg cursor-not-allowed'
                    : 'bg-primaryColor text-white hover:shadow-lg',
                ]">
                            <span class="w-full flex justify-center">
                                <span v-if="isReserving" class="  absolute ">
                                    <i class="fas fa-spinner fa-spin "></i>
                                </span>
                                Reserve Wish
                            </span>
                        </button>
                    </div>
                    </div>

            </div>






        </div>
    </div>
</div>
</template>

<script>
import DateFormat from "@/components/Dashboard/DateFormat.vue";
import {
    wishOwnerMixin
} from "@/mixins/wishOwnerMixin.js";
import {
    eventBus
} from "@/eventBus.js";

export default {
    name: "WishDetailView",
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
        isRequestingAddress:{
          type:Boolean,
        }
    },
    mixins: [wishOwnerMixin],
    data() {
        return {
            isShareMenuOpen: false,
            isDropdownOpen: false,
            isReserving: false, // New data property to track reservation state
            isFulfilling: false, // New data property to track Fulfilling state
            isReceiving: false, // New data property to track Fulfilling state
            isUnReceiving: false, // New data property to track Fulfilling state
        };
    },
    computed: {
          isDashboard() {
      return this.$route.path === '/dashboard';
    },
        isWishOwner() {
            return this.wish.wishlist.user?.username === this.loggedInUser;
        },
        timeAgo() {
            const now = new Date();
            const updatedAt = new Date(this.wish.status_update_at);
            const diffMs = now - updatedAt; // Difference in milliseconds
            const diffMins = Math.floor(diffMs / (1000 * 60)); // Convert to minutes
            const diffHours = Math.floor(diffMins / 60);
            const diffDays = Math.floor(diffHours / 24);

            if (diffDays >= 1) {
                return `${diffDays} day${diffDays > 1 ? "s" : ""}`;
            } else if (diffHours >= 1) {
                return `${diffHours} hour${diffHours > 1 ? "s" : ""}`;
            } else {
                return `${diffMins} minute${diffMins > 1 ? "s" : ""}`;
            }
        },
    },
    methods: {
        async toggleLike() {
      try {
        const likeStatus = !this.wish.liked_by_me;
        const response = await this.$axios.put(`${this.$baseURL}/wishes/${this.wish.id}`, {
          like: likeStatus
        }, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });
        if (response.data.success) {
          this.wish.liked_by_me = response.data.data.liked_by_me;
          this.wish.likes_count = response.data.data.likes_count;
        }
      } catch (error) {
        console.error('Error toggling like status:', error);
        eventBus.onError('Failed to update like status.');
      }
    },
        closeModal() {
            this.$emit("close");
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
            this.$emit("close");
        },
        copyLink() {
            navigator.clipboard
                .writeText(`${window.location.href}`)
                .then(() => {
                    eventBus.onSuccess('Link copied to clipboard!');
                });
        },
        shareToEmail() {
            const subject = encodeURIComponent(
                `Check out this wish: ${this.wish.name}`
            );
            const body = encodeURIComponent(
                `${window.location.href}`
            );
            window.location.href = `mailto:?subject=${subject}&body=${body}`;
        },
        shareToWhatsApp() {
            const text = encodeURIComponent(
                `Check out this wish: ${window.location.href}`
            );
            window.open(`https://wa.me/?text=${text}`, "_blank");
        },
        shareToTwitter() {
            const text = encodeURIComponent(
                `Check out this wish: ${window.location.href}`
            );
            window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
        },
        shareToFacebook() {
            const url = encodeURIComponent(
                `${window.location.href}`
            );
            window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${url}`,
                "_blank"
            );
        },
        shareToInstagram() {
            eventBus.onSuccess('Instagram sharing is not supported directly from the web.');
        },
        async markAsReceived() {
          this.isReceiving = true
            try {
                await this.$axios.put(
                    `${this.$baseURL}/wishes/${this.wish.id}`, {
                        received: true
                    }, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                        },
                    }
                );
                this.wish.received = true;
                eventBus.onSuccess('Wish marked as received.');
                
            } catch (error) {
                console.error("Error marking as received:", error);
                const errorMsg = error.response?.data?.message || 'Error marking as received. Please try again.';
                eventBus.onError(errorMsg);
            }finally {
                this.isReceiving = false; // End loading state
            }
        },
        async markAsUnreceived() {
          this.isUnReceiving = true
            try {
                await this.$axios.put(
                    `${this.$baseURL}/wishes/${this.wish.id}`, {
                        received: false
                    }, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                        },
                    }
                );
                this.wish.received = false;
                eventBus.onSuccess('Wish marked as unreceived.');
            } catch (error) {
                console.error("Error marking as unreceived:", error);
                const errorMsg = error.response?.data?.message || 'Error marking as unreceived. Please try again.';
                eventBus.onError(errorMsg);
            } finally{
              this.isUnReceiving = false
            }
        },
        async markAsFulfilled() {
          this.isFulfilling = true
            try {
                await this.$axios.put(
                    `${this.$baseURL}/wishes/${this.wish.id}`, {
                        status: "fulfiled"
                    }, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                        },
                    }
                );
                this.wish.status = "fulfiled";
                eventBus.onSuccess('Wish marked as fulfilled.');
            } catch (error) {
                console.error("Error marking as fulfiled:", error);
                const errorMsg = error.response?.data?.message || 'Error marking as fulfiled. Please try again.';
                eventBus.onError(errorMsg);
            } finally{
              this.isFulfilling = false
            }
        },
        async reserveWish() {
            this.isReserving = true; // Start loading state

            try {
                await this.$axios.put(
                    `${this.$baseURL}/wishes/${this.wish.id}`, {
                        status: "reserved"
                    }, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                        },
                    }
                );
                this.wish.status = "reserved";
                this.$emit("reserved");
                this.closeModal();
            } catch (error) {
                console.error("Error reserving wish:", error);
                const errorMsg = error.response?.data?.message || 'Error reserving wish. Please try again.';
                eventBus.onError(errorMsg);
            } finally {
                this.isReserving = false; // End loading state
            }
        },
        async cancelReservation() {
    eventBus.setLoading(true);
    try {
        await this.$axios.put(
            `${this.$baseURL}/wishes/${this.wish.id}`,
            { status: null },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            }
        );

        this.wish.status = null;
        eventBus.onSuccess('Wish reservation Cancelled.');
        window.location.reload()

    } catch (error) {
        console.error("Error canceling reservation:", error);
        const errorMsg = error.response?.data?.message || 'Error canceling reservation. Please try again.';
        eventBus.onError(errorMsg);
    } finally {
        eventBus.setLoading(false);
    }
},

        async removeFromFulfiled() {
            eventBus.setLoading(true);
            try {
                await this.$axios.put(
                    `${this.$baseURL}/wishes/${this.wish.id}`, {
                        status: null
                    }, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                        },
                    }
                );

                this.wish.status = null;
                eventBus.onSuccess('Wish has been remove from Fulfilled.');
            } catch (error) {
                console.error("Error removing Fulfilled:", error);
                const errorMsg = error.response?.data?.message || 'Error removing from Fulfilled. Please try again.';
                eventBus.onError(errorMsg);
            } finally {
                eventBus.setLoading(false);
            }
        },

        async saveWish() {
            eventBus.setLoading(true);
            try {
                await this.$axios.post(
                    `${this.$baseURL}/saved-wishes`, {
                        wish_id: this.wish.id
                    }, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                        },
                    }
                );

                eventBus.onSuccess('Wish Saved.');
                this.wish.status = null;
            } catch (error) {
                console.error("Error Saving Wish:", error);
                const errorMsg = error.response?.data?.message || 'Error Saving Wish. Please try again.';
                eventBus.onError(errorMsg);
            } finally {
                eventBus.setLoading(false);
            }
        },

        requestAddress() {
          this.$emit('requestAddress',this.wish.id)
        },

    },
};
</script>

<style scoped>
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
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
