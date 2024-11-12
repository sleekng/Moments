<template>
   <div class="w-full lg:w-1/2 p-4 py-8 lg:p-8 flex overflow-y-auto flex-col justify-start items-center">
     <!-- Logo -->
     <OptinLogo />
     
 
      <h2 class="text-2xl font-bold mb-4 text-gray-800 self-start">
        Welcome Back to Moments Hub!
      </h2>
    <p class="text-gray-600 mb-8 w-full self-start">
      <span>Ready to discover and share your dream wishlists? Sign in and start wishing!</span>
    </p>

    <div class="w-full mb-4">
      <label class="block text-gray-700 mb-2" for="login-email">Email</label>
      <input v-model="email" class="w-full p-3 bg-white border border-gray-300 rounded-md" type="email" id="login-email" />
    </div>

    <div class="w-full mb-4 relative">
      <label class="block text-gray-700 mb-2" for="login-password">Password</label>
      <div class="relative">
        <input v-model="password" class="w-full p-3 bg-white border border-gray-300 rounded-md" :type="showPassword ? 'text' : 'password'" id="login-password" />
        <i :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-regular fa-eye'" @click="togglePassword" class="absolute top-4 right-3 cursor-pointer"></i>
      </div>
    </div>

    <div class="text-gray-600 mb-8 text-sm flex justify-start w-full">
      <a href="#" class="text-primaryColor font-medium">Forgot Password?</a>
    </div>

    <button 
      @click="handleSubmit" 
      :disabled="isSubmitting"
      :class="opacity"
      class="max-w-fit px-24 py-3 bg-primaryColor text-white font-semibold text-lg rounded-full shadow-lg"
    >
      Log into Account
    </button>

    <div class="text-center text-sm text-gray-600 mt-8">
      New to Moments Hub? 
      
      <router-link class="text-primaryColor font-medium" to="/register">
        Create Account
      </router-link>
    </div>
  </div>
</template>

<script>
import OptinLogo from '../Dashboard/OptinLogo.vue';

import { eventBus } from "@/eventBus.js";
export default {
  name: 'LoginForm',
  components:{
    OptinLogo
  },
  data() {
    return {
      opacity: 'opacity-100',
      showPassword: false,
      email: '',
      password: '',
      isSubmitting: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    async handleSubmit() {
      if (this.email && this.password) {
        this.isSubmitting = true;
        this.opacity = 'opacity-40'
        try {
          // Simulate an API call
          await this.$emit('submit', { email: this.email, password: this.password });
          // Handle success, reset form, navigate, etc.
        } catch (error) {
          // Handle error, show error message, etc.
          console.error('An error occurred', error);
        } finally {
          this.isSubmitting = false;
          this.opacity = 'opacity-100'
        }
      } else {
       const errorMsg ='Please fill in both email and password.'
        eventBus.onError(errorMsg); // Trigger the alert
        console.error('Please fill in both email and password.');
      }
    },
  },
};
</script>

<style scoped>
/* Add specific styles here if needed */
button[disabled] {
  background-color: #bfc0c0;
  cursor: not-allowed;
}
</style>
