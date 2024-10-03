<!-- LoginForm.vue -->
<template>
<div class="w-full lg:w-1/2 p-4 py-8 lg:p-8 flex flex-col justify-center items-center">
    <!-- Logo -->
    <div class="lg:flex justify-start w-full hidden">
        <div class="w-16 h-16 mb-8  ">
            <img src="/assets/Logo-single.svg" alt="Logo" />
        </div>
    </div>

    <h2 class="text-2xl font-bold mb-4 text-gray-800">Create your Account on Moments Hub today!</h2>
    <p class="text-gray-600 mb-8">
        Create, share, and explore wishlists with friends and family. Turn every occasion into a celebration with your wishlist. Sign up now and start exploring.
    </p>

    <!-- Sign Up Buttons -->
    <div class="w-full space-y-4">
        <button class="w-full flex items-center justify-center p-3 bg-gray-200 rounded-full shadow-sm">
            <img src="/assets/mail.svg" class="w-4 h-4 mr-2" alt="Email Icon" />
            <span class="text-gray-800 font-medium">Sign up with email</span>
        </button>

        <button class="w-full flex items-center justify-center p-3 bg-gray-200 rounded-full shadow-sm">
            <img src="/assets/apple.svg" class="w-4 h-4 mr-2" alt="Apple Icon" />
            <span class="text-gray-800 font-medium">Sign up with Apple</span>
        </button>

        <button class="w-full flex items-center justify-center p-3 bg-gray-200 rounded-full shadow-sm">
            <img src="/assets/facebook.svg" class="w-4 h-4 mr-2" alt="Facebook Icon" />
            <span class="text-gray-800 font-medium">Sign up with Facebook</span>
        </button>

        <button class="w-full flex items-center justify-center p-3 bg-gray-200 rounded-full shadow-sm">
            <img src="/assets/google.svg" class="w-4 h-4 mr-2" alt="Google Icon" />
            <span class="text-gray-800 font-medium">Sign up with Google</span>
        </button>
    </div>

    <div class="flex items-center my-8">
        <span class="mx-2 text-gray-600">Or</span>
    </div>

    <div class="text-gray-600">
        Already have an account? <a href="#" class="text-primaryColor font-medium">Log in</a>
    </div>
</div>
</template>

<script>
export default {
    name: 'SignUp',

};
</script>

<style scoped>
/* Add specific styles here if needed */
</style>
