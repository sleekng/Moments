<template>
    <div class="lg:w-4/6 relative overflow-y-auto p-4 py-8 lg:p-8 flex flex-col lg:justify-center lg:items-center">
      <div class="w-full lg:top-0 lg:p-8 flex flex-col justify-center items-center bg-white lg:absolute">
        <!-- Logo -->
        <OptinLogo />
  
        <div class="w-full">
          <h2 class="text-xl font-bold mb-4 text-gray-800">STEP 2 OF 2</h2>
        </div>
        <div class="w-full h-2 bg-gray-300 rounded-full mb-8">
          <div class="h-2 bg-primaryColor rounded-full" style="width: 100%;"></div>
        </div>
  
        <h2 class="text-2xl font-bold mb-8 text-gray-800 self-start">Let's create your first wishlist and help you get set up</h2>
      </div>
  
      <div class="mb-10 relative left-hand lg:top-[480px] 2xl:top-[400px] w-full">
        <!-- Form Inputs -->
        <div class="w-full space-y-4">
          <!-- Category dropdown -->
          <div class="relative">
            <label class="block text-gray-700 mb-2" for="category">Category</label>
            <div class="relative">
              <select v-model="selectedCategory" class="w-full p-3 bg-white border border-gray-300 rounded-md appearance-none pr-10" id="category">
                <option disabled value="">Select category</option>
                <option v-for="(category, index) in categories" :key="index" :value="index + 1">{{ category }}</option>
              </select>
              <img src="/assets/dropdown.svg" class="absolute top-4 right-4 w-4 h-4" alt="Dropdown" />
            </div>
          </div>
          <!-- Title -->
          <div>
            <label class="block text-gray-700 mb-2" for="title">Title</label>
            <input v-model="title" class="w-full p-3 bg-white border border-gray-300 rounded-md" type="text" id="title" placeholder="25th Birthday" />
          </div>
  
          <!-- Event Date -->
          <div class="relative">
            <label class="text-gray-700 mb-2 flex items-center gap-1" for="event-date">
              Event date
              <img src="/assets/help-circle.svg" class="w-4 h-4" alt="Help" />
            </label>
            <input v-model="date" class="w-full p-3 bg-white border border-gray-300 rounded-md" type="date" id="event-date" placeholder="DD/MM/YYYY" />
          </div>
  
          <!-- Description -->
          <div>
            <label class="block text-gray-700 mb-2" for="description">Description (Optional)</label>
            <textarea v-model="description" class="w-full p-3 bg-white border border-gray-300 rounded-md" id="description" placeholder="Describe the event" rows="3"></textarea>
          </div>
  
          <!-- Tag People -->
          <div>
            <label class="text-gray-700 mb-2 flex items-center gap-1" for="tag-people">
              Tag friends
              <img src="/assets/help-circle.svg" class="w-4 h-4" alt="Help" />
            </label>
            <input v-model="friendSearch" @input="fetchFriends" class="w-full p-3 mb-2 bg-white border border-gray-300 rounded-md" type="text" placeholder="Search friends..." />
            <div v-if="filteredFriends.length" class="w-full p-3 bg-white border border-gray-300 rounded-md flex space-x-2 overflow-x-auto">
              <div v-for="friend in filteredFriends" :key="friend.username" class="bg-gray-200 p-1 rounded-full flex items-center mb-2" @click="addFriend(friend)">
                <img :src="friend.avatar || '/assets/avatar.svg'" class="w-4 h-4 mr-1" alt="Avatar" />
                <span class="text-sm mr-1">@{{ friend.username || 'unknown' }}</span>
                <img src="/assets/add-2.svg" class="w-3 h-3 cursor-pointer" alt="add" />
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2 mt-2">
              <div v-for="friend in taggedFriends" :key="friend.username" class="bg-gray-200 p-1 rounded-full flex whitespace-nowrap items-center justify-between" @click="removeTaggedFriend(friend)">
                <div class="flex items-center">
                  <img :src="friend.avatar || '/assets/avatar.svg'" class="w-4 h-4 mr-1" alt="Avatar" />
                  <span class="text-sm mr-1">@{{ friend.username || 'unknown' }}</span>
                </div>
                <img src="/assets/close.svg" class="w-3 h-3 cursor-pointer" alt="remove" />
              </div>
            </div>
          </div>
  
          <!-- Who can see -->
          <div>
            <label class="block text-gray-700 mb-2">Who can see your wishlist?</label>
            <div class="space-y-4">
              <div class="flex items-center gap-4" @click="visibility = 'public'">
                <div class="bg-gray-100 p-2 rounded-full">
                  <img src="/assets/world.svg" class="w-5 h-5" alt="World" />
                </div>
                <div>
                  <div class="font-medium text-gray-700">Anyone</div>
                  <div class="text-sm text-[#6B7280]">Anyone on and off Moments Hub can see this list.</div>
                </div>
                <img :src="visibility === 'public' ? '/assets/web-radio-btn.svg' : '/assets/web-radio-btn-2.svg'" class="ml-auto w-5 h-5 cursor-pointer" alt="Radio button" />
              </div>
  
              <div class="flex items-center gap-4" @click="visibility = 'friends'">
                <div class="bg-gray-100 p-2 rounded-full">
                  <img src="/assets/people-2.svg" class="w-5 h-5" alt="People" />
                </div>
                <div>
                  <div class="font-medium text-gray-700">Friends</div>
                  <div class="text-sm text-[#6B7280]">Only the people you follow can see this list.</div>
                </div>
                <img :src="visibility === 'friends' ? '/assets/web-radio-btn.svg' : '/assets/web-radio-btn-2.svg'" class="ml-auto w-5 h-5 cursor-pointer" alt="Radio button" />
              </div>
  
              <div class="flex items-center gap-4" @click="visibility = 'tagged'">
                <div class="bg-gray-100 p-2 rounded-full">
                  <img src="/assets/people-2.svg" class="w-5 h-5" alt="People" />
                </div>
                <div>
                  <div class="font-medium text-gray-700">People you tagged</div>
                  <div class="text-sm text-[#6B7280]">Only the people you tagged can see this list.</div>
                </div>
                <img :src="visibility === 'tagged' ? '/assets/web-radio-btn.svg' : '/assets/web-radio-btn-2.svg'" class="ml-auto w-5 h-5 cursor-pointer" alt="Radio button" />
              </div>
  
              <div class="flex items-center gap-4" @click="visibility = 'private'">
                <div class="bg-gray-100 p-2 rounded-full">
                  <img src="/assets/lock.svg" class="w-5 h-5" alt="Lock" />
                </div>
                <div>
                  <div class="font-medium text-gray-700">Private</div>
                  <div class="text-sm text-[#6B7280]">Only you can see this list.</div>
                </div>
                <img :src="visibility === 'private' ? '/assets/web-radio-btn.svg' : '/assets/web-radio-btn-2.svg'" class="ml-auto w-5 h-5 cursor-pointer" alt="Radio button" />
              </div>
            </div>
          </div>
        </div>
  
        <div class="w-full flex space-x-2 items-center mt-8">
          <button @click="createWishlist" class="w-2/5 py-3 bg-primaryColor text-white font-semibold text-lg rounded-full shadow-lg">
            Create wishlist
          </button>
          <button @click="skipForLater" class="px-4 py-3 bg-transparent text-gray-700 font-semibold text-lg rounded-full">
            Skip for later
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { eventBus } from '@/eventBus.js';
  import axios from 'axios';
  import OptinLogo from '../Dashboard/OptinLogo.vue';
  
  export default {
    components: {
      OptinLogo
    },
    name: 'CreateWishlist',
    data() {
      return {
        selectedCategory: '',
        categories: [
          'Birthday',
          'Wedding',
          'Personal',
          'Baby Shower',
          'Fashion',
          'Graduation',
          'House warming',
          'Anniversary',
          'Gadgets',
          'Book',
          'Travel',
          'Holiday e.g Christmas',
          'Pet supplies',
          'Ramadan',
          'Others'
        ],
        title: '',
        description: '',
        date: '',
        taggedFriends: [],
        friendSearch: '',
        friends: [],
        visibility: 'public',
      };
    },
    computed: {
      filteredFriends() {
        return this.friends.filter(friend => !this.taggedFriends.some(selected => selected.username === friend.username));
      }
    },
    methods: {
      async createWishlist() {
        try {
          eventBus.setLoading(true);
          const response = await this.$axios.post(`${this.$baseURL}/wishlists`, {
            title: this.title,
            category_id: this.selectedCategory,
            description: this.description,
            date: this.date,
            tagged_friends: this.taggedFriends.map(f => f.username),
            visibility: this.visibility
          }, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
          });
  
          if (response.data.success) {
            this.$router.push({ path: '/dashboard', query: { showCongratulations: true } });
          } else {
            console.error('Failed to create wishlist:', response.data.message);
          }
        } catch (error) {
          const errorMsg = error.response?.data?.message || 'An error occurred. Please try again.';
          eventBus.onError(errorMsg);
          console.error('Error creating wishlist:', error);
        } finally {
          eventBus.setLoading(false);
        }
      },
      skipForLater() {
        this.$router.push({ path: '/dashboard', query: { showCongratulations: true } });
      },
      async fetchFriends() {
        if (this.friendSearch.length < 2) {
          this.friends = [];
          return;
        }
  
        try {
          const response = await this.$axios.get(`${this.$baseURL}/explore/search`, {
            params: {
              type: 'friends',
              value: this.friendSearch
            },
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
          });
          this.friends = response.data.data || [];
        } catch (error) {
          console.error('Error fetching friends:', error.message);
        }
      },
      addFriend(friend) {
        if (!this.taggedFriends.some(selected => selected.username === friend.username)) {
          this.taggedFriends.push(friend);
        }
      },
      removeTaggedFriend(friend) {
        this.taggedFriends = this.taggedFriends.filter(f => f.username !== friend.username);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  