<template>
  <div class="w-3/4 space-y-16">
    <!-- Account Information -->
    <div>
      <h1 class="font-bold text-2xl mb-4 lg:hidden block">Your account</h1>
      <h2 class="text-lg font-medium text-gray-800 lg:mb-4">Account information</h2>
      <hr class="mb-6">
      <div class="space-y-8">
        <div>
          <label class="block text-gray-700 font-medium">Username</label>
          <input type="text" v-model="userData.username" class="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-md" />
          <div class="mt-2 flex items-center text-sm text-gray-600">
            <span>Your Moments Hub URL: https://momentshub.org/{{ userData.username }}</span>
            <img src="/assets/copy.svg" alt="Copy" class="w-4 h-4 ml-1 cursor-pointer">
          </div>
        </div>
        <div>
          <label class="block text-gray-700 font-medium">Birthday</label>
          <div class="flex space-x-2 mt-2">
            <input type="number" v-model="birthdayMonth" min="1" max="12" placeholder="MM" class="w-20 p-3 bg-gray-50 border border-gray-300 rounded-md" style="width: 4em;" />
            <input type="number" v-model="birthdayDay" min="1" max="31" placeholder="DD" class="w-20 p-3 bg-gray-50 border border-gray-300 rounded-md" style="width: 4em;" />
          </div>
          <p class="text-sm text-gray-600 mt-1">Format: MM/DD</p>
        </div>
        <div>
          <label class="block text-gray-700 font-medium">Email</label>
          <input type="email" v-model="userData.email" class="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-md" />
        </div>
      </div>
      <div class="justify-end flex">
        <button @click="saveChanges" :disabled="isSaving" :class="{ 'opacity-40 cursor-not-allowed': isSaving }" class="duration-300 mt-8 bg-primaryColor transition-all hover:shadow text-white px-10 py-3 rounded-full">
          {{ isSaving ? 'Saving...' : 'Save Changes' }}
        </button>
      </div>
    </div>

    <!-- Deactivation and Deletion -->
    <div>
      <h2 class="text-lg font-medium text-gray-800 mb-4">Deactivation and deletion</h2>
      <hr class="mb-6">
      <div class="space-y-12">
        <div class="flex items-start gap-8">
          <div class="flex-grow">
            <h3 class="text-gray-900 font-medium mb-1">Deactivate your moments hub account</h3>
            <p class="text-gray-600">Temporarily hide your profile, wishlist and wishes. You can restore your account if it was accidentally or wrongfully deactivated for up to 30 days after deactivation.</p>
          </div>
          <button class="bg-gray-200 text-gray-800 px-6 py-2 rounded-full w-[168px] inline-block">Deactivate</button>
        </div>
        <div class="flex items-start gap-8">
          <div class="flex-grow">
            <h3 class="text-gray-900 font-medium mb-1">Delete your moments hub account</h3>
            <p class="text-gray-600">Permanently delete your data and everything associated with your account. Once you delete your account, your data will be gone forever.</p>
          </div>
          <button class="bg-gray-200 text-gray-800 px-6 py-2 rounded-full w-[168px] inline-block">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/eventBus.js';
export default {
  
  name: "AccountSettings",
  data() {
    return {
      userData: {
        username: '',
        dob: '',  // Keep birthday in the MM/DD format for storage
        email: '',
      },
      birthdayMonth: '',
      birthdayDay: '',
      isSaving: false,
    };
  },
  mounted() {
    this.fetchProfileData();
  },
  methods: {
    async fetchProfileData() {
      const profile = JSON.parse(localStorage.getItem('user') || '{}');
      this.userData.username = profile.username || '';
      this.userData.dob = profile.dob || '';  // Assumes dob in MM/DD format
      this.userData.email = profile.email || '';
      
      // Split the MM/DD to respective fields
      if (this.userData.dob) {
        const [month, day] = this.userData.dob.split('/');
        this.birthdayMonth = month ? parseInt(month, 10) : '';
        this.birthdayDay = day ? parseInt(day, 10) : '';
      }
    },
    async saveChanges() {
      this.isSaving = true;
      try {
        eventBus.setLoading(true);
        // Formulate birthday as MM/DD
        this.userData.dob = `${String(this.birthdayMonth).padStart(2, '0')}/${String(this.birthdayDay).padStart(2, '0')}`;

        const response = await fetch(`${this.$baseURL}/profile`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${this.getAuthToken()}`
          },
          body: JSON.stringify(this.userData)
        });

        if (!response.ok) {
          throw new Error('Failed to update profile');
        }
        const result = await response.json();
        const user = result.data;
        localStorage.setItem('user', JSON.stringify(user));
        console.log('Profile updated:', user);
      } catch (error) {
        const errorMsg = error.response ?.data ?.message || 'An error occurred. Please try again.';
        eventBus.onError(errorMsg); // Trigger the alert
        
        console.error('Error updating profile:', error);
      } finally {
        this.isSaving = false;
        eventBus.setLoading(false);
      }
   
    },
    getAuthToken() {
      return localStorage.getItem('authToken') || '';
    }
  }
};
</script>
