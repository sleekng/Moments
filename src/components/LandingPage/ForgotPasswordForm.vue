<!-- LoginForm.vue -->
<template>
    <div class="w-full lg:w-1/2 p-4 py-8 lg:p-8 flex flex-col  items-center">
      <!-- Logo -->
      <div class="lg:flex justify-start w-full hidden">
        <div class="w-16 h-16 mb-8">
            <img src="/assets/Logo-single.svg" alt="Logo" />
        </div>
    </div>

    <div class="flex justify-start w-full">
        <h2 class="text-2xl font-bold mb-4 text-gray-800 text-left">
            Oops! Forgot Your Password?
        </h2>
    </div>
    <p class="text-gray-600 mb-8">
        Don't worry, it happens to the best of us. Enter your email address below, and we'll send you a link to reset your password.
    </p>

    <!-- Email Input -->
    <div class="w-full mb-4">
        <label class="block text-gray-700 mb-2" for="email">Email</label>
        <input class="w-full p-3 bg-white border border-gray-300 rounded-md" type="email" id="email" />
    </div>

    <button class="max-w-fit px-24 py-3 mt-8 bg-primaryColor text-white font-semibold text-lg rounded-full shadow-lg">
        Verify Email
    </button>

    <a href="#" class="text-center text-sm text-gray-600 mt-4">
        Back to sign in
    </a>
</div>
</template>

  
<script>
export default {
    name: 'ForgotPasswordForm',

};
</script>

  
<style scoped>
/* Add specific styles here if needed */
</style>
