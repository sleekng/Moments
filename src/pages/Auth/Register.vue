<template>
    <div class="flex flex-col lg:justify-center lg:flex-row lg:items-center items-start min-h-screen lg:bg-gray-100 bg-white lg:p-8">
      <!-- Header -->
      <Header />
  
      <div class="w-full lg:max-w-6xl lg:min-h-[80vh] flex bg-white rounded-2xl lg:shadow-lg overflow-hidden">
        <!-- Left Side: Registration Form -->
        <RegistrationForm @submit="handleRegister" />
  
        <!-- Right Side: Image -->
        <RightSideImage2 />
      </div>
    </div>
  </template>
  
  <script>
  import Axios from 'axios';
  import Header from '@/components/LandingPage/Header.vue';
  import RegistrationForm from '@/components/LandingPage/RegistrationForm.vue';
  import RightSideImage2 from '@/components/LandingPage/RightSideImage2.vue';
  
  export default {
    components: {
      Header,
      RegistrationForm,
      RightSideImage2,
    },
    data() {
      return {
        email: '',
        password: '',
        passwordConfirmation: '',
        showPassword: false,
      };
    },
    methods: {
      togglePassword() {
        this.showPassword = !this.showPassword;
      },
      async handleRegister(credentials) {
        try {
          await Axios.get('http://momenthub.test/api/sanctum/csrf-cookie');
          const response = await Axios.post('http://momenthub.test/api/register', credentials);
          console.log('Registration successful:', response.data);
          // Redirect or perform other actions
        } catch (error) {
           
          console.error('Registration failed:', error.response.data);
          // Handle error appropriately
        }
      },
    },
  };
  </script>
  
  <style scoped>
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Mukta', sans-serif;
  }
  
  .bg-image {
    background: radial-gradient(circle, rgba(239, 151, 252, 1) 36.9%, rgba(78, 249, 255, 1) 16.7%, rgba(161, 197, 255, 1) 8.24%, rgba(241, 146, 255, 1) 105.84%);
    position: relative;
  }
  
  .fade {
    background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.28) 59%, rgba(255, 255, 255, 0));
  }
  </style>
  