<template>
    <div
      class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-50 p-4"
      @click.self="closeModal"
    >
      <div class="bg-white rounded-xl shadow-lg max-w-md w-full overflow-hidden">
        <div class="bg-purple-100 flex justify-center items-center h-52">
          <img
            :src="imageSrc"
            :alt="imageAlt"
            class="w-auto h-full"
          />
        </div>
        <div class="px-6 py-4">
          <h2 class="text-center text-xl font-semibold text-gray-800 mb-1">
            {{ title }}
          </h2>
          <p class="text-center text-gray-600 text-sm">
            {{ description }}
          </p>
        </div>
        <div class="px-4 py-4 border-t">
          <div v-if="updateType == 'created'" class="flex justify-between">
            <button
              @click="viewWish"
              class="flex-1  text-gray-800 bg-[#F0F1F2] hover:shadow-lg transition-all font-medium py-3 px-4 rounded-full text-center focus:outline-none"
            >
            View Wishlist
            </button>
            <button
              @click="makeAWish"
              class="flex-1 ml-2 text-white bg-primaryColor hover:shadow-lg transition-all font-medium py-3 px-4 rounded-full text-center focus:outline-none"
            >
            Add New Wish
            </button>
            
          </div>

          <div  class="flex justify-between">
            <button
               @click="$emit('close')"
              class="flex-1  text-gray-800 bg-[#F0F1F2] hover:shadow-lg transition-all font-medium py-3 px-4 rounded-full text-center focus:outline-none"
            >
            Maybe Later
            </button>
            <button
              @click="$emit('requestAddress')"
              class="flex-1 ml-2 text-white bg-primaryColor hover:shadow-lg transition-all font-medium py-3 px-4 rounded-full text-center focus:outline-none"
            >
            Request address
            </button>
          </div>


        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'GiftReservedModal',
    props: {
      title: {
        type: String,
        default: 'Gift Reserved!',
      },
      description: {
        type: String,
        default: ' Awwwn..You’ve just made someone\'s day brighter! Don\'t forget to fulfill this wish!',
      },
      imageSrc: {
        type: String,
        default: '/assets/modal-illustration.svg',
      },
      updateType: {
        type: String,
      },
      imageAlt: {
        type: String,
        default: 'Wish Created',
      },

      currentWishlistId: {
        type: Number,
      },
      createdWishId: {
        type: Number,
      },
    },
    emits: ['close', 'requestAddress'],
  };
  </script>
  