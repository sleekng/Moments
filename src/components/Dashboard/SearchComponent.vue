<template>
    <div class="lg:flex flex-col items-center gap-6 hidden">
      <p class="text-center font-semibold text-2xl md:text-3xl leading-[150%]" style="color: #121212; font-family: Mukta">
        Want to <span class="text-primaryColor">find</span> a Friend or Wishlist?
      </p>
      <div class="bg-white h-[60px] hidden w-[950px] max-w-4xl rounded-full shadow-sm lg:flex items-center relative">
        <div class="relative h-full" @mouseleave="closeDropdown">
          <button @click="toggleDropdown" class="flex justify-between items-center space-x-3 w-[170px] pl-4 pr-3 border-r border-gray-300 bg-gray-100 h-full rounded-l-full">
            <div class="flex items-center space-x-3">
              <i class="fas fa-users text-gray-600 w-4 h-4"></i>
              <span class="text-gray-800 text-base" style="font-family: Mukta">{{ selectedOption }}</span>
            </div>
            <img src="/assets/dropdown.svg" alt="Dropdown" class="w-4 h-4" />
          </button>
          <div v-if="dropdownOpen" class="absolute top-12  w-40 transform translate-x-4 bg-white rounded-lg shadow-lg border border-gray-300">
            <!-- Dropdown items -->
            <div class="flex flex-col p-1">
              <div class="flex moment-text-effect-parent justify-between items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer" @click="selectOption('Friends')">
                <div class="flex items-center space-x-3 " :class="selectedOption === 'Friends' ? 'text-primaryColor' : ''">
                  <i class="fas fa-users moment-text-effect-child  w-4 h-4"></i>
                  <span class=" moment-text-effect-child text-base" style="font-family: Mukta">Friends</span>
                </div>
                <i v-if="selectedOption === 'Friends'" class="fas fa-check text-primaryColor moment-text-effect-child w-4 h-4"></i>
              </div>
              <div  class="flex items-center justify-between moment-text-effect-parent p-2 rounded-lg hover:bg-gray-200 cursor-pointer" @click="selectOption('Wishlist')">
                <div class="flex items-center space-x-3 " :class="selectedOption === 'Wishlist' ? 'text-primaryColor' : ''">
                  <i class="fas fa-gift  moment-text-effect-child w-4 h-4"></i>
                <span class="ml-3  text-base moment-text-effect-child" style="font-family: Mukta">Wishlist</span>
                </div>
                <i v-if="selectedOption === 'Wishlist'" class="fas fa-check text-primaryColor moment-text-effect-child w-4 h-4"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-grow flex items-center h-full pl-4 bg-gray-100 rounded-r-full">
        <i v-if="!loading" class="fas fa-search text-gray-600 w-4 h-4"></i>
        <i v-if="loading" class="fas fa-spinner fa-spin text-gray-600 w-4 h-4"></i>
        <input 
          type="text" 
          :placeholder="searchPlaceholder"
          class="ml-3 px-4 border-none focus:outline-none w-full focus:ring-0 bg-transparent text-gray-500 text-base" 
          style="font-family: Mukta" 
          @input="debounceInput"
          v-model="searchQuery"
        />
      </div>
      </div>
    </div>
  
    <div class=" bg-black h-[180px] lg:hidden block relative">
      <img v-for="i in (0, 3)" :key="i" :src="`/assets/star-${i}.svg`" alt="Star" class="absolute" :style="{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }" />
  
      <div class="flex flex-col items-center gap-6 px-4">
        <p class="text-center font-bold text-lg leading-tight text-white" style="font-family: Mukta;">
          Want to find a Friend or Wishlist?
        </p>
        <div class="bg-white h-11 w-full max-w-md rounded-full shadow-sm flex items-center relative">
          <div class="relative h-full" @mouseleave="closeDropdown">
            <button @click="toggleDropdown" class="flex justify-between items-center space-x-2  md:w-32 pl-3 pr-2 border-r border-gray-300 bg-gray-100 h-full rounded-l-full">
              <div class="flex items-center space-x-2">
                <i v-if="selectedOption === 'Friends'" class="fas fa-users text-gray-600 w-4 h-4"></i>
              <i v-if="selectedOption === 'Wishlist'" class="fas fa-gift text-gray-600 w-4 h-4"></i>
              </div>
              <img src="/assets/dropdown.svg" alt="Dropdown" class="w-4 h-4" />
            </button>
            <div v-if="dropdownOpen" class="absolute top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-300">
              <div class="flex flex-col p-2">
                <div class="flex justify-between moment-text-effect-parent items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer" @click="selectOption('Friends')">
                 <div class=" flex items-center space-x-2">
                  <i class="fas fa-users  w-4 h-4 moment-text-effect-child "></i>
                  <span class="ml-2  text-sm moment-text-effect-child " style="font-family: Mukta;">Friends</span>
                 </div>
                  <i v-if="selectedOption === 'Friends'" class="fas fa-check text-primaryColor w-4 h-4"></i>
                </div>
                <div class="flex justify-between moment-text-effect-parent items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer" @click="selectOption('Wishlist')">
                  <div class=" flex items-center space-x-2" >
                    <i class="fas fa-gift text-gray-600 w-4 h-4 moment-text-effect-child "></i>
                  <span class="ml-2 text-gray-800 text-sm moment-text-effect-child " style="font-family: Mukta;">Wishlist</span>
                  </div>
                  <i v-if="selectedOption === 'Wishlist'" class="fas fa-check text-primaryColor w-4 h-4"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-grow flex items-center h-full pl-4 bg-white rounded-r-full">
            <i class="fas fa-search text-gray-600 w-4 h-4"></i>
            <input 
              type="text" 
              placeholder="Search name, username" 
              class="ml-2 px-4 border-none focus:outline-none w-full focus:ring-0 bg-transparent text-gray-500 text-sm" 
              style="font-family: Mukta;" 
              @input="onInput" 
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchComponent',
    props: {
      selectedOption: {
        type: String,
        required: true
      },
      loading: {
      type: Boolean,
      default: false
    }
    },
    data() {
      return {
        dropdownOpen: false,
        searchQuery: '',
        timeout: null
      };
    },
    computed: {
      searchPlaceholder() {
        return this.selectedOption === 'Friends' 
          ? 'Search by name or username...' 
          : 'Search wishlists...';
      }
    },
    methods: {
      debounceInput(event) {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.$emit('startSearch', event.target.value);
        }, 300);
      },
      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      closeDropdown() {
        this.dropdownOpen = false;
      },
      selectOption(option) {
        this.searchQuery = ''
        this.$emit('selectOption', option);
        this.dropdownOpen = false;
      },
      onInput(event) {
        this.$emit('startSearch', event.target.value);
      }
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles if needed */
  </style>
  