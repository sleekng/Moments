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
        <div class="flex-1 lg:space-y-6 space-y-2 relative">
          <div class="flex justify-between items-center relative">
            <div class="space-y-1">
              <div class="flex items-center space-x-2 text-sm text-gray-600">
                <img src="/assets/calendar.svg" alt="Event Date" class="w-4 h-4" />
                <span>Event date: </span>
                <span class="font-medium text-gray-800">{{ new Date(wish.created_at).toLocaleDateString() }}</span>
              </div>
            </div>
            <div class="relative ">

              <!-- DropdownMenu Received-->
              <template v-if="wish.status == 'saved'">
                <!-- Toggle Menu Button, shown only on hover -->
                <button @click="toggleMenu"
                  class=" z-40 p-1 bg-[#F8F9FA] rounded-full toggle-menu-button transition-opacity  group-hover:opacity-100">
                  <img src="/assets/frame-1618868216.svg" alt="Menu" class="h-6 w-6" />
                </button>
                <div v-if="isDropdownOpen" @mouseleave="closeMenu"
                  class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">

                  <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                    <img src="/assets/share.svg" class="w-4 h-4" alt="Edit" />
                    <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Share wish with
                      friends</span>
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
                <!-- Toggle Menu Button, shown only on hover -->
                <button @click="toggleMenu"
                  class=" z-40 p-1 bg-[#F8F9FA] rounded-full toggle-menu-button transition-opacity  group-hover:opacity-100">
                  <img src="/assets/frame-1618868216.svg" alt="Menu" class="h-6 w-6" />
                </button>
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
                <!-- Toggle Menu Button, shown only on hover -->
                <button @click="toggleMenu"
                  class=" z-40 p-1 bg-[#F8F9FA] rounded-full toggle-menu-button transition-opacity  group-hover:opacity-100">
                  <img src="/assets/frame-1618868216.svg" alt="Menu" class="h-6 w-6" />
                </button>

                <div v-if="isDashboard">

                  <div v-if="isDropdownOpen" @mouseleave="closeMenu"
                    class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">

                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                      <img src="/assets/gift-icon.svg" class="w-4 h-4" alt="Edit" />
                      <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Add to my
                        wishlist</span>
                    </div>
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                      <img src="/assets/bookmark.svg" class="w-4 h-4" alt="Edit" />
                      <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Save wish</span>
                    </div>
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                      <img src="/assets/World.svg" class="w-4 h-4" alt="Edit" />
                      <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Go to website</span>
                    </div>
                    <div
                      class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                      <img src="/assets/close-circle.svg" class="w-4 h-4" alt="Delete" />
                      <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Cancel
                        reservation</span>
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
                <!-- Toggle Menu Button, shown only on hover -->
                <button @click="toggleMenu"
                  class=" z-40 p-1 bg-[#F8F9FA] rounded-full toggle-menu-button transition-opacity  group-hover:opacity-100">
                  <img src="/assets/frame-1618868216.svg" alt="Menu" class="h-6 w-6" />
                </button>
                <div v-if="isDashboard">

                  <div v-if="isDropdownOpen" @mouseleave="closeMenu"
                    class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">

                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                      <img src="/assets/gift-icon.svg" class="w-4 h-4" alt="Edit" />
                      <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Add to my
                        wishlist</span>
                    </div>
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                      <img src="/assets/bookmark.svg" class="w-4 h-4" alt="Edit" />
                      <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Save wish</span>
                    </div>
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                      <img src="/assets/World.svg" class="w-4 h-4" alt="Edit" />
                      <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Go to website</span>
                    </div>
                    <div
                      class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                      <img src="/assets/close-circle.svg" class="w-4 h-4" alt="Delete" />
                      <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Remove from
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

              <!-- DropdownMenu myWishes -->
              <template v-if="wish.status == null">
                <!-- Toggle Menu Button, shown only on hover -->
                <button @click="toggleMenu"
                  class=" z-40 p-1 bg-[#F8F9FA] rounded-full toggle-menu-button transition-opacity  group-hover:opacity-100">
                  <img src="/assets/frame-1618868216.svg" alt="Menu" class="h-6 w-6" />
                </button>
                <div v-if="isDropdownOpen" @mouseleave="closeMenu"
                  class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">
                  <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer">
                    <img src="/assets/share.svg" class="w-4 h-4" alt="Share" />
                    <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Share wishlist with
                      friends</span>
                  </div>
                  <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                    <img src="/assets/close-circle.svg" class="w-4 h-4" alt="Delete" />
                    <span  @click.stop="$emit('deleteWish', wish.id)" class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Delete</span>
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
            class="inline-flex items-center space-x-2 rounded-full px-4 py-2 bg-[#F4F9F6]">
            <img src="/assets/checkmark.svg" alt="Received" class="w-5 h-5" />
            <span class="text-green-600 font-medium">Received by </span>
            <img src="/assets/avatar.svg" alt="Avatar" class="w-5 h-5 rounded-full" />
            <span class="text-primaryColor">@ayomide_sm</span>
          </div>

          <!-- Reserved Indicator -->
          <div v-if="wish.status == 'reserved'"
            class="inline-flex items-center space-x-2 rounded-full px-4 py-2   bg-[#FEF8EF]">
            <svg style=" margin-right: 8px;" width="20" height="20" viewBox="0 0 22 22" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 2.0625C6.072 2.0625 2.0625 6.072 2.0625 11C2.0625 15.928 6.072 19.9375 11 19.9375C15.928 19.9375 19.9375 15.928 19.9375 11C19.9375 6.072 15.928 2.0625 11 2.0625ZM15.6512 8.00433L9.87617 14.8793C9.81298 14.9549 9.73426 15.0159 9.64536 15.0583C9.55646 15.1007 9.45948 15.1235 9.361 15.125H9.34908C9.2528 15.125 9.1576 15.1047 9.06965 15.0656C8.98169 15.0264 8.90294 14.9692 8.8385 14.8977L6.3635 12.1477C6.254 12.0299 6.18918 11.8775 6.18028 11.717C6.17138 11.5564 6.21897 11.3978 6.31479 11.2687C6.41061 11.1395 6.54861 11.048 6.70485 11.01C6.8611 10.972 7.02572 10.9898 7.17017 11.0605C7.25267 11.1018 7.326 11.1586 7.38467 11.2273L9.33075 13.3907L14.5988 7.12067C14.7181 6.98837 14.8841 6.90755 15.0618 6.89522C15.2395 6.88289 15.4151 6.94002 15.5515 7.05458C15.6879 7.16913 15.7746 7.33217 15.7932 7.50933C15.8117 7.68649 15.7608 7.86396 15.6512 8.00433Z"
                fill="#DE900B" />
            </svg>
            <span class="text-[#DE900B] font-medium">Reserved by </span>
            <img src="/assets/avatar.svg" alt="Avatar" class="w-5 h-5 rounded-full" />
            <span class="text-primaryColor">@ayomide_sm</span>
          </div>

          <!-- FulFilled Indicator -->
          <div v-if="wish.status == 'fulfiled'"
            class="inline-flex items-center space-x-2 rounded-full px-4 py-2 bg-[#F4F9F6]">
            <img src="/assets/checkmark.svg" alt="Fulfilled" class="w-5 h-5" />
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



          <!-- Actions saved -->
          <div v-if="wish.status == 'saved'" class=" absolute bottom-0 right-0 ">
            <div v-if="isDashboard" class="pt-8 h-full items-end flex justify-between w-full space-x-4 absolute bottom-0">
              <div class="flex-1"></div>
              <button
                class="flex-1  py-3 bg-primaryColor px-16 whitespace-nowrap text-white rounded-full hover:shadow-lg">
                Reserve Wish
              </button>
            </div>
          </div>
          <!-- Actions reserved -->
          <div v-if="wish.status == 'reserved'">
            <div v-if="isDashboard"  class="pt-8 absolute bottom-0 flex justify-between w-full space-x-4 ">
              <button @click.stop="$emit('editWish', wish)" class="flex-1 px-8 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                Edit
              </button>
              <button class="flex-1 px-8 py-3 bg-primaryColor text-white rounded-full hover:shadow-lg">
                Mark as received
              </button>
            </div>
            <div v-if="isDashboard"  class="pt-8 absolute bottom-0 flex justify-between w-full space-x-4 ">
              <button @click.stop="$emit('editWish', wish)" class="flex-1 px-8 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                Reservation
              </button>
              <button class="flex-1 px-8 py-3 bg-primaryColor text-white rounded-full hover:shadow-lg">
                Mark as Fulfilled
              </button>
            </div>

            <!-- Show if user is not the one that created the wish -->
            <div  class="pt-8 flex justify-between w-full space-x-4 absolute bottom-0">
              <div class="flex-1"></div>
              <button class="flex-1 px-8 py-3 bg-primaryColor text-white rounded-full hover:shadow-lg">
                Request address
              </button>
            </div>

            
            <div  class="pt-8 flex justify-between w-full space-x-4 absolute bottom-0">
              <div class="flex-1"></div>
              <button class="flex-1 px-8 py-3 bg-primaryColor text-white rounded-full hover:shadow-lg">
                Mark as Fulfilled
              </button>
            </div>
            
          </div>
          <!-- Actions Fulfiled -->
          <div v-if="wish.status == 'fulfiled'">
            <div v-if="wish.received"  class="pt-8 absolute bottom-0 flex justify-between w-full space-x-4 ">
              <button class="flex-1 px-8 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                Mark as Unreceived
              </button>
              <button class="flex-1 px-8 py-3 bg-primaryColor text-white rounded-full hover:shadow-lg">
                Move to Archive
              </button>
            </div>
            <div v-else class="pt-8 absolute bottom-0 flex justify-between w-full space-x-4 ">
              <button @click.stop="$emit('editWish', wish)" class="flex-1 px-8 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
                Edit
              </button>
              <button class="flex-1 px-8 py-3 bg-primaryColor text-white rounded-full hover:shadow-lg">
                Mark as Received
              </button>
            </div>
            
          </div>
          <!-- Actions Null -->
          <div v-if="wish.status == null">
           
            <div  class="pt-8 justify-end inline-flex w-full space-x-4 absolute bottom-0">
              <button @click.stop="$emit('editWish', wish)" class=" px-16 py-3 bg-gray-200 hover:shadow-sm transition-all text-gray-800 rounded-full hover:bg-gray-300">
                Edit
              </button>
            </div>
          </div>

          <!-- Actions received -->
          <div v-if="wish.status == 'received'" class="pt-8 flex justify-between w-full space-x-4 absolute bottom-0">
            <button class="flex-1 px-8 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
              <span class="lg:inline hidden">Mark as</span> Unreceived
            </button>
            <button class="flex-1 px-8 py-3 bg-primaryColor text-white rounded-full hover:shadow-lg">
              <span class="lg:inline hidden">Move to</span>
              Archive
            </button>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    wish: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  computed: {
    isDashboard() {
      return this.$route.path === '/dashboard';
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
    async markAsReceived() {
      try {
        await this.$axios.put(`${this.$baseURL}/wishes/${this.wish.id}`, { received: true }, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });
        this.wish.received = true;
        console.log('Wish marked as received');
      } catch (error) {
        console.error('Error marking as received:', error);
      }
    },
    async archiveWish(archiveStatus = false) {
      try {
        await this.$axios.put(`${this.$baseURL}/wishes/${this.wish.id}`, { archive: archiveStatus }, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });
        this.wish.archived = archiveStatus;
        console.log(`Wish ${archiveStatus ? 'archived' : 'unarchived'}`);
      } catch (error) {
        console.error('Error updating archive status:', error);
      }
    },
    async updateWishStatus(status) {
      try {
        await this.$axios.put(`${this.$baseURL}/wishes/${this.wish.id}`, { status }, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });
        this.wish.status = status;
        console.log(`Wish status updated to ${status}`);
      } catch (error) {
        console.error('Error updating wish status:', error);
      }
    }
  }
};
</script>
