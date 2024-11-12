import './assets/styles/styles.css';
import './assets/styles/tailwind.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Ensure correct router import
import axios from 'axios';
import './assets/css/all.css';  // FontAwesome CSS

import UserAccess from './directives/v-user-access'; // Import your directive


const app = createApp(App);

// Register the directive
app.directive('user-access', UserAccess);

// Set the global base URL
app.config.globalProperties.$baseURL = 'https://be.momentshub.org/api';

// Create a new Axios instance for the app
const axiosInstance = axios.create({
  baseURL: app.config.globalProperties.$baseURL,
});

// Function to clear auth data
function clearAuthData() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('tokenExpiration');
  localStorage.removeItem('user');
}

// Setup the interceptor globally
axiosInstance.interceptors.response.use(
  response => response, // Forward successful responses
  error => {
    if (error.response && error.response.status === 401) {
      // Check for a 401 unauthenticated response
      clearAuthData(); // Clear stored authentication data
      // Use router instance to navigate to login page
      router.push({ name: 'Login', query: { redirect: router.currentRoute.value.fullPath } });
      console.error('Session has expired. Please log in again.');
    }
    return Promise.reject(error);
  }
);

// Inject the Axios instance globally
app.config.globalProperties.$axios = axiosInstance;

// Use the router
app.use(router);

// Mount the app to the DOM
app.mount('#app');
