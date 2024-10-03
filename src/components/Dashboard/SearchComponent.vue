<template>
    <div class="flex flex-col items-center gap-6">
      <p class="text-center font-semibold text-2xl md:text-3xl leading-[150%]" style="color: #121212; font-family: Mukta">
        Want to <span class="text-purple-500">find</span> a Friend or Wishlist?
      </p>
      <div class="bg-white h-[60px] w-[950px] max-w-4xl rounded-full shadow-sm flex items-center relative">
        <div class="relative h-full" @mouseleave="closeDropdown">
          <button
            @click="toggleDropdown"
            class="flex justify-between items-center space-x-3 w-[170px] pl-4 pr-3 border-r border-gray-300 bg-gray-100 h-full rounded-l-full"
          >
            <div class="flex items-center space-x-3">
              <img src="/assets/people.svg" alt="People" class="w-4 h-4" />
              <span class="text-gray-800 text-base" style="font-family: Mukta">{{ selectedOption }}</span>
            </div>
            <img src="/assets/dropdown.svg" alt="Dropdown" class="w-4 h-4" />
          </button>
          <div
            v-if="dropdownOpen"
            class="absolute top-full mt-1 w-40 transform translate-x-4 bg-white rounded-lg shadow-lg border border-gray-300"
          >
            <!-- Dropdown items -->
            <div class="flex flex-col p-1">
              <div class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer" @click="selectOption('Friends')">
                <div class="flex items-center space-x-3">
                  <img src="/assets/people.svg" alt="People" class="w-4 h-4" />
                  <span class="text-purple-500 text-base" style="font-family: Mukta">Friends</span>
                </div>
                <img v-if="selectedOption === 'Friends'" src="/assets/check.svg" alt="Check" class="w-4 h-4" />
              </div>
              <div class="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer" @click="selectOption('Wishlist')">
                <img src="/assets/box-gift.svg" alt="Wishlist" class="w-4 h-4" />
                <span class="ml-3 text-gray-800 text-base" style="font-family: Mukta">Wishlist</span>
                <img v-if="selectedOption === 'Wishlist'" src="/assets/check.svg" alt="Check" class="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex-grow flex items-center h-full pl-4 bg-gray-100 rounded-r-full">
          <img src="/assets/search.svg" alt="Search" class="w-4 h-4" />
          <input
            type="text"
            placeholder="Search name, username"
            class="ml-3 px-4 border-none focus:outline-none w-full focus:ring-0 bg-transparent text-gray-500 text-base"
            style="font-family: Mukta"
            @input="onInput"
          />
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
      }
    },
    data() {
      return {
        dropdownOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      closeDropdown() {
        this.dropdownOpen = false;
      },
      selectOption(option) {
        this.$emit('selectOption', option);
        this.dropdownOpen = false; // Close the dropdown after selection
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
  