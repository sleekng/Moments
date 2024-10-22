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
          Welcome to Moments Hub.
        </h2>
      </div>
      <p class="text-gray-600 mb-8">
        Yay! Get ready to turn your dreams into reality and start curating
        your ultimate wishlist experience.
      </p>
  
      <!-- Email Input -->
      <div class="w-full mb-4">
        <label class="block text-gray-700 mb-2" for="register-email">Email</label>
        <input v-model="email" class="w-full p-3 bg-white border border-gray-300 rounded-md" type="email" id="register-email" placeholder="Janedoe@email.com" />
      </div>
  
      <!-- Password Input -->
      <div class="w-full mb-4 relative">
        <label class="block text-gray-700 mb-2" for="register-password">Password</label>
        <div class="relative">
          <input v-model="password" class="w-full p-3 bg-white border border-gray-300 rounded-md" :type="showPassword ? 'text' : 'password'" id="register-password" placeholder="***************" @input="checkPasswordStrength" />
          <i :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-regular fa-eye'" @click="togglePassword" class="absolute top-4 right-3 cursor-pointer"></i>
        </div>
      </div>
  
      <!-- Password Strength -->
      <div v-if="passwordStrength" class="w-full mb-4">
        <div class="flex flex-col items-start">
          <div class="h-2 rounded-md w-full mb-2" :class="passwordStrengthClass"></div>
          <span class="text-sm text-black font-bold">Password Strength: {{ passwordStrength }}
            <span class="text-[#616874] text-[12px]" v-if="passwordStrength === 'Good'">( You can make your password stronger by including a combination of uppercase, lower case, number, and special characters !$@%).</span> 
            <span class="text-[#616874] text-[12px]" v-if="passwordStrength === 'Weak'">( You can make your password stronger by including a combination of uppercase, lower case, number, and special characters !$@%).</span> 
          </span>
        </div>
      </div>
      <div v-else class="w-full mb-4">
        <div class="flex flex-col items-start">
          <div class="h-2 rounded-md w-full mb-2 bg-[#F3F4F5]"></div>
          <span class="text-sm password-check-text text-black font-bold"> Your password must be at least 8 characters and should include a combination of an uppercase and lower case.</span>
        </div>
      </div>
  
      <!-- Confirm Password Input -->
      <div class="w-full mb-4 relative">
        <div class="flex justify-between items-center">
          <label class="block text-gray-700 mb-2" for="password-confirm">Re-enter Password</label>
        </div>
        <div class="relative">
          <input v-model="confirmPassword" class="w-full p-3 bg-white border border-gray-300 rounded-md" :type="showConfirmPassword ? 'text' : 'password'" id="password-confirm" placeholder="***************" />
          <i :class="showConfirmPassword ? 'fa-solid fa-eye-slash' : 'fa-regular fa-eye'" @click="toggleConfirmPassword" class="absolute top-4 right-3 cursor-pointer"></i>
        </div>
      </div>
  
      <div class="text-gray-600 mb-8 text-sm">
        By clicking ‘Create Account’, you agree to Moments Hub's
        <a href="#" class="text-primaryColor font-medium">Terms and Conditions</a>.
      </div>
  
      <button @click="handleSubmit" class="max-w-fit px-24 py-3 bg-primaryColor text-white font-semibold text-lg rounded-full shadow-lg">
        Create Account
      </button>
  
      <div class="text-center text-sm text-gray-600 mt-8">
        Already have an account? <a href="#" class="text-primaryColor font-medium">Log in</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showPassword: false,
        showConfirmPassword: false,
        email: '',
        password: '',
        confirmPassword: '',
        passwordStrength: '',
        passwordStrengthClass: '',
      };
    },
    methods: {
      togglePassword() {
        this.showPassword = !this.showPassword;
      },
      toggleConfirmPassword() {
        this.showConfirmPassword = !this.showConfirmPassword;
      },
      checkPasswordStrength() {
        const length = this.password.length;
        if (length === 0) {
          this.passwordStrength = '';
          this.passwordStrengthClass = '';
        } else if (length < 6) {
          this.passwordStrength = 'Weak';
          this.passwordStrengthClass = 'bg-red-500';
        } else if (length >= 6 && length < 10) {
          this.passwordStrength = 'Good';
          this.passwordStrengthClass = 'bg-yellow-500';
        } else {
          this.passwordStrength = 'Strong';
          this.passwordStrengthClass = 'bg-green-500';
        }
      },
      handleSubmit() {
        if (this.password === this.confirmPassword) {
          this.$emit('submit', { email: this.email, password: this.password, passwordConfirmation: this.confirmPassword });
        } else {
          console.error('Passwords do not match.');
          // Handle password mismatch appropriately
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .progress-bar {
    height: 2px;
  }
  
  .password-check-text {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: left;
    color: #616874;
  }
  </style>
  