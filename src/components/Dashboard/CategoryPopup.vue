<template>
    <transition name="fade">
      <div v-if="isVisible" class="fixed z-50 inset-0 overflow-y-auto p-4">
        <div class="flex items-center justify-center min-h-screen px-4 lg:text-center">
          <div class="fixed inset-0 bg-black opacity-50" @click="close"></div>
          <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-4xl w-full">
            <div class="flex lg:flex-row flex-col lg:justify-between lg:items-center bg-[#F8F9FA] h-[73px] px-4  lg:px-[32px]">
              <img
                  src="/assets/close.svg"
                  alt="Close"
                  class="h-6 w-6 lg:hidden mt-2 inline-block cursor-pointer"
                  @click="close"
                />
                <div class=" w-full flex lg:justify-center lgh-full items-center">
                    <h3 class="text-[16px] lg:text-2xl leading-6 font-bold text-gray-900 ">
                  What type of wishlist are you creating?
                </h3>
                </div>
                <img
                  src="/assets/close.svg"
                  alt="Close"
                  class="h-6 w-6 hidden lg:inline-block cursor-pointer"
                  @click="close"
                />
              </div>
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
         
              <div class="grid grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-8">
                <WishlistCategory
                  v-for="(category, index) in categories"
                  :key="index"
                  :title="category.title"
                  :image="category.image"
                />
              </div>
            </div>
            <div class=" px-4 justify-center text-center w-full  inline-block pt-4 pb-8 lg:py-10">
              <button
                type="button"
                class="  rounded-full border border-transparent shadow-sm lg:px-32 px-16 py-4 bg-primaryColor text-base font-medium text-white hover:shadow-lg transition-all sm:ml-3 sm:w-auto "
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
  