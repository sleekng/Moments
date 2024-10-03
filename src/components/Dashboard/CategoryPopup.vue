<template>
    <transition name="fade">
      <div v-if="isVisible" class="fixed z-50 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen px-4 text-center">
          <div class="fixed inset-0 bg-black opacity-50" @click="close"></div>
          <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-4xl w-full">
            <div class="flex justify-between items-center bg-[#F8F9FA] h-[73px]  px-[32px]">
                <div class=" w-full flex justify-center h-full items-center">
                    <h3 class="text-2xl leading-6 font-bold text-gray-900 ">
                  What type of wishlist are you creating?
                </h3>
                </div>
                <img
                  src="/assets/close.svg"
                  alt="Close"
                  class="h-6 w-6 cursor-pointer"
                  @click="close"
                />
              </div>
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
         
              <div class="grid grid-cols-5 gap-8">
                <WishlistCategory
                  v-for="(category, index) in categories"
                  :key="index"
                  :title="category.title"
                  :image="category.image"
                />
              </div>
            </div>
            <div class=" px-4 justify-center sm:px-6 sm:flex sm:flex-row-reverse py-10">
              <button
                type="button"
                class="inline-flex justify-center w-full rounded-full border border-transparent shadow-sm px-32 py-4 bg-primaryColor text-base font-medium text-white hover:shadow-lg transition-all sm:ml-3 sm:w-auto "
                @click="next"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  import WishlistCategory from './WishlistCategory.vue';
  
  export default {
    components: {
      WishlistCategory,
    },
    data() {
      return {
        isVisible: true,
        categories: [
          { title: 'Birthday', image: './assets/13-1.svg' },
          { title: 'Wedding', image: './assets/wedding.svg' },
          { title: 'Personal', image: './assets/personal.svg' },
          { title: 'Baby Shower', image: './assets/baby.svg' },
          { title: 'Fashion', image: './assets/others.svg' },
          { title: 'Graduation', image: './assets/graduation.svg' },
          { title: 'House warming', image: './assets/others-2.svg' },
          { title: 'Anniversary', image: './assets/others-3.svg' },
          { title: 'Gadgets', image: './assets/others-4.svg' },
          { title: 'Book', image: './assets/others-5.svg' },
          { title: 'Travel', image: './assets/others-6.svg' },
          { title: 'Holiday e.g Christmas', image: './assets/holiday.svg' },
          { title: 'Pet supplies', image: './assets/others-7.svg' },
          { title: 'Ramadan', image: './assets/others-8.svg' },
          { title: 'Others', image: './assets/others-9.svg' },
        ],
      };
    },
    methods: {
      next() {
        this.$emit('close');
        this.$emit('showCreateWishlistModal');
      },

      close() {
        this.isVisible = false;
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  