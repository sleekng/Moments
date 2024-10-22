<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 px-4">
      <div class="bg-white rounded-2xl shadow-2xl h-[90vh] overflow-y-auto p-4 lg:p-6">
        <ProfileAnalytics :wishlists="wishlists" @close="closeModal" />
      </div>
    </div>
  </template>
  
  <script>
  import ProfileAnalytics from './ProfileAnalytics.vue';
  
  export default {
    components: {
      ProfileAnalytics
    },
    props: {
      wishlists: {
        type: Array,
        required: true
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
  .fixed {
    position: fixed;
  }
  </style>
  