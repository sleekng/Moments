<template>
    <div class="w-3/4 space-y-16">
      <!-- Account Information -->
      <div>
        <h1 class=" font-bold text-2xl mb-4 lg:hidden block">Your account</h1>
        <h2 class="text-lg font-medium text-gray-800 lg:mb-4">Account information</h2>
        <hr class="mb-6">
        <div class="space-y-8">
          <div>
            <label class="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              v-model="localUserData.username"
              class="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-md"
            />
            <div class="mt-2 flex items-center text-sm text-gray-600">
              <span>Your Moments Hub URL: https://momentshub.com/{{ localUserData.username }}</span>
              <img src="/assets/copy.svg" alt="Copy" class="w-4 h-4 ml-1 cursor-pointer">
            </div>
          </div>
          <div>
            <label class="block text-gray-700 font-medium">Birthday</label>
            <input
              type="date"
              v-model="localUserData.birthday"
              class="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label class="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              v-model="localUserData.email"
              class="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div class="justify-end flex">
          <button @click="saveChanges" class="mt-8 bg-primaryColor text-white px-10 py-3 rounded-full">
            Save Changes
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
  export default {
    name: "AccountSettings",
    props: ['userData'],
    data() {
      return {
        localUserData: { ...this.userData }
      };
    },
    watch: {
      userData: {
        handler(newValue) {
          this.localUserData = { ...newValue };
        },
        deep: true
      }
    },
    methods: {
      saveChanges() {
        this.$emit('update', this.localUserData);
      }
    }
  };
  </script>
  