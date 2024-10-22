<template>
  <div class="w-3/4 space-y-16">
    <!-- Password Change -->
    <div>
      <h1 class=" font-bold text-2xl mb-4 lg:hidden block">Password</h1>
      <h2 class="text-lg font-medium text-gray-800 mb-4 hidden lg:block">Change Password</h2>
      <hr class="mb-6 hidden lg:block">
      <div class="space-y-8">
        <div>
          <label class="block text-gray-700 font-medium">Current Password</label>
          <div class="relative">
            <input
              :type="showCurrentPassword ? 'text' : 'password'"
              v-model="passwordData.currentPassword"
              class="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-md"
            />
            <i 
               :class="showCurrentPassword ? 'fa-eye-slash' : 'fa-eye'"
               @click="toggleCurrentPassword"
               class="fas absolute inset-y-0 right-3 top-6 cursor-pointer text-gray-500">
            </i>
          </div>
          <button class="text-pink-500 mt-2">Forgot Password?</button>
        </div>
        <div>
          <label class="block text-gray-700 font-medium">New Password</label>
          <div class="relative">
            <input
              :type="showNewPassword ? 'text' : 'password'"
              v-model="passwordData.newPassword"
              class="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-md"
            />
            <i 
               :class="showNewPassword ? 'fa-eye-slash' : 'fa-eye'"
               @click="toggleNewPassword"
               class=" fas absolute inset-y-0 right-3 top-6 cursor-pointer text-gray-500">
            </i>
          </div>
          <p class="text-sm text-gray-600 mt-2">
            Your password must be at least 8 characters, including uppercase and lowercase.
          </p>
        </div>
        <div>
          <label class="block text-gray-700 font-medium">Re-enter Password</label>
          <div class="relative">
            <input
              :type="showReEnterPassword ? 'text' : 'password'"
              v-model="passwordData.reEnterPassword"
              class="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-md"
            />
            <i  
               :class="showReEnterPassword ? 'fa-eye-slash' : 'fa-eye'"
               @click="toggleReEnterPassword"
               class="absolute fas inset-y-0 right-3 top-6 cursor-pointer text-gray-500">
            </i>
          </div>
        </div>
      </div>
      <div class="justify-end flex">
        <button @click="updatePassword" class="mt-8 bg-primaryColor text-white px-10 py-3 rounded-full">
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordSettings",
  data() {
    return {
      passwordData: {
        currentPassword: '',
        newPassword: '',
        reEnterPassword: ''
      },
      showCurrentPassword: false,
      showNewPassword: false,
      showReEnterPassword: false,
    };
  },
  methods: {
    updatePassword() {
      // Add logic to handle password update
      console.log('Password data submitted:', this.passwordData);
    },
    toggleCurrentPassword() {
      this.showCurrentPassword = !this.showCurrentPassword;
    },
    toggleNewPassword() {
      this.showNewPassword = !this.showNewPassword;
    },
    toggleReEnterPassword() {
      this.showReEnterPassword = !this.showReEnterPassword;
    },
  }
};
</script>

<style>
  /* Ensure you've included FontAwesome in your project */
</style>
