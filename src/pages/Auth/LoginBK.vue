<template>
    <div class="flex flex-col lg:justify-center lg:flex-row lg:items-center items-start min-h-screen lg:bg-gray-100 bg-white lg:p-8">
      <!-- Header -->
      <Header />
  
      <div class="w-full lg:max-w-6xl lg:min-h-[80vh] flex bg-white rounded-2xl lg:shadow-lg overflow-hidden">
        <!-- Left Side: Login Form -->
        <LoginForm @submit="handleLogin" />
  
        <!-- Right Side: Image -->
        <RightSideImage1 />
      </div>
    </div>
  </template>
  
  <script>
  import Header from '@/components/LandingPage/Header.vue';
  import LoginForm from '@/components/LandingPage/LoginForm.vue';
  import RightSideImage1 from '@/components/LandingPage/RightSideImage1.vue';
  
  export default {
    components: {
      Header,
      LoginForm,
      RightSideImage1,
    },
    methods: {
      async handleLogin(credentials) {
        try {
          // Authenticate CSRF token (if needed with Laravel Sanctum)
          await this.$axios.get('http://momenthub.test/api/sanctum/csrf-cookie');
          // Making the login request
          const response = await this.$axios.post('http://momenthub.test/api/login', credentials);
          console.log('Login successful:', response.data);
          // Redirect or perform other actions upon successful login
        } catch (error) {
          if (error.response && error.response.data) {
            console.error('Login failed:', error.response.data.message);
            // Additional error handling logic, if necessary
          } else {
            console.error('An error occurred during login:', error);
          }
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
  