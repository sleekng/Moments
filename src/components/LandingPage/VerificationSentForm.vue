<!-- LoginForm.vue -->
<template>
    <div class="w-full lg:w-1/2 p-4 py-8 lg:p-8 flex flex-col justify-center items-center">
    <!-- Logo -->
    <div class="hidden lg:block mb-8">
        <img src="/assets/Logo.svg" alt="Logo" class="w-full" />
    </div>

    <div class="flex justify-center w-full mt-20 lg:mt-0">
        <h2 class="text-2xl font-bold mb-4 text-gray-800 text-left">
            Verify your Email Address
        </h2>
    </div>
    <p class="text-gray-600 mb-8 text-center">
        Hooray! We’ve sent a verification link to your email!🚀 Check your inbox (and maybe your spam folder) to find the magic link. Click it to unlock your account and join the wishlist fun! Happy gifting! ✨
    </p>

    <div class="text-center text-sm text-gray-600 mt-4">
        Didn’t get a code?
        <span v-if=" countdown > 0" class="text-red-600 resend-count-down">Resend in {{ countdown }}s</span>
    </div>

    <button class="max-w-fit px-24 py-3 mt-8 bg-primaryColor text-white font-semibold text-lg rounded-full shadow-lg" :class="opacity" :disabled="countdown > 0" @click="resendCode">
        Resend Code
    </button>
</div>
</template>

  
<script>
export default {
    data() {
        return {
            countdown: 30, // Initial countdown in seconds
            opacity: 'opacity-40'
        };
    },
    mounted() {
        this.startCountdown();
    },
    methods: {
        startCountdown() {
            const interval = setInterval(() => {
                if (this.countdown == 0) {
                    this.opacity = 'opacity-100'
                }
                if (this.countdown > 0) {
                    this.opacity = 'opacity-40'
                    this.countdown -= 1;
                } else {
                    clearInterval(interval); // Stop countdown when it reaches zero
                }
            }, 1000); // Decrease every 1 second
        },
        resendCode() {
            // Logic for resending the verification code goes here.
            alert("Verification code resent!");
            this.countdown = 30; // Reset countdown
            this.startCountdown(); // Restart the countdown
        },
    },
};
</script>

  
<style scoped>
/* Add specific styles here if needed */
</style>
