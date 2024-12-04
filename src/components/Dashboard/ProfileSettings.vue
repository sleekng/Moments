<template>
  <h1 class="font-bold text-2xl mb-4 lg:hidden block">Your profile</h1>
  <div class="lg:w-3/4 space-y-8 pb-8">
    <!-- Profile Image Section -->
    <div class="flex lg:flex-row flex-col items-center gap-4">
      <img :src="avatarSrc" alt="Avatar" class="lg:w-20 lg:h-20 w-24 h-24 rounded-full border  border-gray-200" />
      <input type="file" ref="fileInput" @change="handleImageUpload" style="display: none;" />
      <button @click="triggerFileInput" class="bg-gray-200 px-4 py-2 rounded-full text-gray-800">
        Change photo
      </button>
      <div v-if="uploadProgress > 0 && uploadProgress < 100" class="text-gray-700 font-medium">{{ uploadProgress }}%</div>
      <div v-if="isUploading" class="loader"></div>
    </div>

    <!-- Input Fields -->
    <div class="space-y-4">
      <div>
        <label class="block text-gray-700 font-medium mb-1">First Name</label>
        <input type="text" v-model="formData.firstName" class="w-full p-3 bg-gray-200 border border-gray-300 rounded-md" disabled />
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">Last Name</label>
        <input type="text" v-model="formData.lastName" class="w-full p-3 bg-gray-200 border border-gray-300 rounded-md" disabled />
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">Gender</label>
        <select v-model="formData.gender" class="w-full p-3 bg-gray-50 border border-gray-300 rounded-md">
          <option v-for="option in genders" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>

      <div>
    <label class="block text-gray-700 font-medium mb-1">Country</label>
    <div class="relative">
      <select 
        v-model="formData.country" 
        @change="updateStates"
        class="w-full p-3 bg-gray-50 border border-gray-300 rounded-md appearance-none pr-10"
      >
        <option v-for="country in countries" :key="country.name" :value="country.name">
          {{ country.emoji }} {{ country.name }}
        </option>
      </select>
      <img src="/assets/dropdown-3.svg" class="absolute top-4 right-4 w-4 h-4" alt="Dropdown" />
    </div>
  </div>

  <div>{{ state }}
    <label class="block text-gray-700 font-medium mb-1">State</label>
    <div class="relative">
      <select 
        v-model="formData.state"
        class="w-full p-3 bg-gray-50 border border-gray-300 rounded-md appearance-none pr-10"
      >
        <option v-for="state in states" :key="state.id" :value="state.name">
          {{ state.name }}
        </option>
      </select>
      <img src="/assets/dropdown-2.svg" class="absolute top-4 right-4 w-4 h-4" alt="Dropdown" />
    </div>
  </div>
    </div>

    <!-- Save Button -->
    <div class="text-right">
      <button 
        @click="saveChanges" 
        :disabled="isSaving"
        :class="{ 'opacity-40 cursor-not-allowed': isSaving }"
        class="bg-primaryColor text-white px-6 py-3 rounded-full transition-all hover:shadow duration-300"
      >
        {{ isSaving ? 'Saving...' : 'Save Changes' }}
      </button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/eventBus.js';
import countriesStatesData from '@/assets/countriesStates.json';
export default {
  name: "ProfileSettings",
  emits: ['avatarUpdated'],  // Declare emitted events
  data() {
    return {
      avatarSrc: '/assets/avatar.svg',
      formData: {
        firstName: '',
        lastName: '',
        gender: '',
        state: '',
        country: ''
      },
      genders: ['male', 'female', 'non-binary', 'other'],
      states: [],
      countries: [],
      countryStateMap: [],
      isSaving: false,
      uploadProgress: 0,
      isUploading: false,
    };
  },
  mounted() {
    this.fetchProfileData();
  },
  async created() {
    try {
      this.countryStateMap = countriesStatesData;
      this.countries = this.countryStateMap;
    } catch (error) {
      console.error('Error loading countries and states:', error);
      this.countries = [];
    }
  },

  methods: {
    updateStates() {
    const selectedCountryObj = this.countries.find(country => country.name === this.formData.country);
    if (selectedCountryObj) {
      this.states = selectedCountryObj.states;
    } else {
      this.states = [];
      this.formData.state = '';
    }
  },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    async handleImageUpload(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        try {
          eventBus.setLoading(true);
          this.isUploading = true;
          this.uploadProgress = 0;
          
          const formData = new FormData();
          formData.append('avatar', file);

          const response = await fetch(`${this.$baseURL}/profile`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${this.getAuthToken()}`
            },
            body: formData,
            onUploadProgress: (progressEvent) => {
              this.uploadProgress = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
            }
          });

          if (response.ok) {
            const result = await response.json();
            this.avatarSrc = result.data.avatar;
     
                        // Emit the updated avatar URL
                        console.log('Emitting avatarUpdated event:', this.avatarSrc);
            this.$emit('avatarUpdated', this.avatarSrc);

            const user = JSON.parse(localStorage.getItem('user'));
            user.avatar = this.avatarSrc;
            localStorage.setItem('user', JSON.stringify(user));
          } else {
            throw new Error('Failed to update avatar');
          }
        } catch (error) {
          const errorMsg = error.response ?.data ?.message || 'An error occurred. Please try again.';
          eventBus.onError(errorMsg); // Trigger the alert
          console.error('Error updating avatar:', error);
        } finally {
          this.isUploading = false;
          this.uploadProgress = 0;
          eventBus.setLoading(false);
        }

 
      } else {
        alert('Please select a valid image file.');
      }
    },

    async fetchProfileData() {
    const profile = JSON.parse(localStorage.getItem('user'));
    
    // Set country first
    this.formData.country = profile.country || '';
    
    // Update states based on selected country
    if (this.formData.country) {
      this.updateStates();
      // Set state after states array is populated
      this.formData.state = profile.state || '';
    }

    // Set other form data
    this.formData.firstName = profile.first_name || '';
    this.formData.lastName = profile.last_name || '';
    this.formData.gender = profile.gender || '';
    this.avatarSrc = profile.avatar || this.avatarSrc;
  },
    async saveChanges() {
      this.isSaving = true;
      try {
        eventBus.setLoading(true);
        const response = await fetch(`${this.$baseURL}/profile`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${this.getAuthToken()}`
          },
          body: JSON.stringify(this.formData)
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

<style scoped>
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
