<template>
  <div
    class="flex flex-col lg:justify-center lg:flex-row lg:items-center items-center h-screen bg-white lg:p-8"
  >
    <!-- Header -->
    <Header />

    <div
      class="w-full h-[95vh] flex space-x-10 bg-white rounded-2xl overflow-hidden"
    >
      <!-- Left Side: Registration Form -->
      <LoginForm @submit="handleLogin" />

      <!-- Right Side: Image -->
      <RightSideImage1 />
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/eventBus.js";
import Axios from "axios";
import Header from "@/components/LandingPage/Header.vue";
import LoginForm from "@/components/LandingPage/LoginForm.vue";
import RightSideImage1 from "@/components/LandingPage/RightSideImage1.vue";

export default {
  components: {
    Header,
    LoginForm,
    RightSideImage1,
  },

  methods: {
    async handleLogin(credentials) {
      try {
        eventBus.setLoading(true);
        const response = await this.$axios.post(
          `${this.$baseURL}/login`,
          credentials,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.data.verified === false) {
          const token = response.data.data.token;

          // Store token for verification email sending
          localStorage.setItem("authToken", token);

          // Send verification email signal
          console.log('Sending verification...');
          await this.$axios.post(`${this.$baseURL}/verify-email`, {}, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
          });

          // Redirect to /verification-sent
          this.$router.push('/verification-sent');
        } else if (response.data.data.verified === true) {
          const token = response.data.data.token;
          const user = response.data.data; 

         // Store token and user info
         const expirationTime = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
          localStorage.setItem("authToken", token);
          localStorage.setItem("tokenExpiration", expirationTime);
          localStorage.setItem("user", JSON.stringify(user));

          // Redirect to dashboard
          this.$router.push({
            path: "/dashboard",
          });
        } else {
          this.errorMessage = 'Invalid login credentials.';

          eventBus.onError(this.errorMessage);
        }
      } catch (error) {
        let errorMsg = "An error occurred. Please try again.";

        if (error.response) {
          switch (error.response.status) {
            case 400:
              errorMsg = "Invalid input. Please check your information and try again.";
              break;
            case 401:
              errorMsg = "Unauthorized. Please check your credentials.";
              break;
            case 422:
              if (error.response.data.errors) {
                errorMsg = Object.values(error.response.data.errors).flat().join(" ");
              } else {
                errorMsg = "Validation failed. Please check your input.";
              }
              break;
            case 409:
              errorMsg = "This email is already registered. Please use a different email.";
              break;
            case 500:
              errorMsg = "Server error. Please try again later.";
              break;
            default:
              errorMsg = error.response.data.message || "An unexpected error occurred. Please try again.";
          }
        }

        eventBus.onError(errorMsg);
        console.error("Login failed:", error);
      } finally {
        eventBus.setLoading(false);
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
  font-family: "Mukta", sans-serif;
}

.bg-image {
  background: radial-gradient(
    circle,
    rgba(239, 151, 252, 1) 36.9%,
    rgba(78, 249, 255, 1) 16.7%,
    rgba(161, 197, 255, 1) 8.24%,
    rgba(241, 146, 255, 1) 105.84%
  );
  position: relative;
}

.fade {
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.28) 59%,
    rgba(255, 255, 255, 0)
  );
}
</style>
