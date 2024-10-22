<template>
  <div class="lg:bg-gray-100 h-screen overflow-y-auto">
    <AppHeader @showCategoryModal="$emit('showCategoryModal')" />
    <div class="container mx-auto py-20 hidden lg:block">
      <div class="max-w-screen-lg mx-auto rounded-lg bg-white shadow-lg p-10 mt-12">
        <div class="flex gap-8 items-start mb-10">
          <img src="/assets/profile.svg" alt="Profile" class="w-20 h-20">
          <div>
            <h1 class="text-2xl font-medium text-gray-900">Your Account</h1>
            <p class="text-gray-600 mt-1">Update your username and manage your account</p>
          </div>
        </div>

        <div class="flex gap-28">
          <Sidebar @pageSelected="setCurrentPage" :currentPage="currentPage" class="" />
          <component :is="currentPageComponent" :userData="userData" @update="updateUserData" />
        </div>
      </div>
    </div>
    <div class=" lg:hidden block w-full mt-20 px-4">
      <div class=" mb-4 ">
        <span v-if="currentPage != 'home'" @click="setCurrentPage('home')"> <i class="fa-regular fa-light fa-arrow-left mr-2"></i>Back to settings</span>
      </div>
      <MobileSidebar v-if="currentPage == 'home'" @pageSelected="setCurrentPage" :currentPage="currentPage" class="" />
      
      <component v-else :is="currentPageComponent" :userData="userData" @update="updateUserData" class=" w-full" />
    </div>
  </div>
</template>

<script>

import AppHeader from '@/components/Dashboard/AppHeader.vue';
import Sidebar from '@/components/Dashboard/Sidebar.vue';
import AccountSettings from '@/components/Dashboard/AccountSettings.vue';
import PasswordSettings from '@/components/Dashboard/PasswordSettings.vue';
import NotificationSettings from '@/components/Dashboard/NotificationSettings.vue';
import PrivacySettings from '@/components/Dashboard/PrivacySettings.vue';
import AddressSettings from '@/components/Dashboard/AddressSettings.vue';
import ProfileSettings from '@/components/Dashboard/ProfileSettings.vue';
import MobileSidebar from '@/components/Dashboard/MobileSidebar.vue';

export default {
  name: "Account",
  components: {
    AppHeader,
    Sidebar,
    AccountSettings,
    PasswordSettings,
    NotificationSettings,
    PrivacySettings,
    AddressSettings,
    ProfileSettings,
    MobileSidebar
  },
  data() {
    return {
      userData: {
        username: 'Ayomide_sm',
        birthday: '16/04',
        email: 'email@email.com',
      },
      currentPage: localStorage.getItem('currentPage') || 'account'
    };
  },
  computed: {
    currentPageComponent() {
      switch (this.currentPage) {
        case 'profile':
          return 'ProfileSettings';
        case 'password':
          return 'PasswordSettings';
        case 'notification':
          return 'NotificationSettings';
        case 'privacy':
          return 'PrivacySettings';
        case 'delivery':
          return 'AddressSettings';
        default:
          return 'AccountSettings';
      }
    }
  },
  methods: {
    setCurrentPage(page) {
      this.currentPage = page;
      localStorage.setItem('currentPage', page);
    },
    updateUserData(updatedData) {
      this.userData = { ...this.userData, ...updatedData };
      console.log('User data updated:', this.userData);
    }
  }
};
</script>
