<template>
  <div class="w-full lg:w-1/2 p-4 py-8 lg:p-8 flex flex-col justify-center items-center">
    <!-- Logo -->
    <div class="lg:flex justify-start w-full hidden">
      <div class="w-16 h-16 mb-8">
        <img src="/assets/Logo-single.svg" alt="Logo" />
      </div>
    </div>

    <div class="flex justify-start w-full">
      <h2 class="text-2xl font-bold mb-4 text-gray-800 text-left">
        Welcome Back to Moments Hub!
      </h2>
    </div>
    <p class="text-gray-600 mb-8 flex justify-start w-full">
      <span> Ready to discover and share your dream wishlists? Sign in and start wishing!</span>
    </p>

    <!-- Email Input -->
    <div class="w-full mb-4">
      <label class="block text-gray-700 mb-2" for="login-email">Email</label>
      <input v-model="email" class="w-full p-3 bg-white border border-gray-300 rounded-md" type="email" id="login-email" />
    </div>

    <!-- Password Input -->
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

    <button @click="handleSubmit" class="max-w-fit px-24 py-3 bg-primaryColor text-white font-semibold text-lg rounded-full shadow-lg">
      Log into Account
    </button>

    <div class="text-center text-sm text-gray-600 mt-8">
      New to Moments Hub? <a href="#" class="text-primaryColor font-medium">Create Account</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      showPassword: false,
      email: '',
      password: ''
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    handleSubmit() {
      if (this.email && this.password) {
        this.$emit('submit', { email: this.email, password: this.password });
      } else {
        console.error('Please fill in both email and password.');
      }
    },
  },
};
</script>

<style scoped>
/* Add specific styles here if needed */
</style>
