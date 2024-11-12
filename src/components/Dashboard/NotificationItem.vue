<template>
  <div class="p-4 border-b border-gray-200 flex items-start space-x-3 ">
      <img :src="notification.imgSrc" alt="Profile" class="w-10 h-10 rounded-full">
      <div class=" w-full">
          <p class="text-sm text-gray-700">{{ notification.text }}</p>
          <div v-if="notification.type === 'wishlist' || notification.type === 'birthdays'" class="mt-2 flex w-full items-center space-x-3 p-2 border border-gray-300 rounded-lg">
              <img src="/assets/img.svg" alt="Product" class="w-16 h-16 object-cover rounded-md">
              <div cla>
                  <p class="text-base font-medium text-gray-800" style="font-family: Mukta">Hermes Birkin Bag</p>
                  <div class="flex items-center mt-1 text-xs text-red-500 bg-red-100 border border-red-300 px-2 py-0.5 rounded-full space-x-1">
                      <span>High priority</span>
                      <img src="/assets/frame-1618868307.svg" alt="Fire" class="w-3 h-3">
                  </div>
              </div>
          </div>
          <p class="text-xs text-gray-500 mt-1">{{ notification.time }}</p>
          <div v-if="notification.actions" class="flex mt-2 space-x-2">
              <button class=" px-4 py-2 whitespace-nowrap" v-for="action in notification.actions" :key="action.text" :class="[action.primary ? 'bg-primaryColor text-white' : 'bg-gray-200 text-gray-700', 'py-1 px-3 rounded-full']">
                  {{ action.text }}
              </button>
          </div>
      </div>
  </div>
  </template>
  
    
  <script>
  export default {
      name: 'NotificationItem',
      props: {
          notification: {
              type: Object,
              required: true
          }
      }
  };
  </script>
  
    
  <style scoped>
  /* Custom styles if needed */
  </style>
  