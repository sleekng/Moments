<template>
    <div class="bg-fef9f2">
      <!-- Header with Login and Signup buttons -->
      <header class="flex justify-between items-center p-4">
        <img src="./assets/logo-2.svg" alt="Logo" class="w-28 h-10">
        <div class="flex space-x-4">
          <button class="bg-gray-900 text-white py-2 px-8 rounded-full">Log in</button>
          <button class="bg-pink-500 text-white py-2 px-8 rounded-full">Sign up</button>
        </div>
      </header>
  
      <!-- Hero Section -->
      <section class="flex flex-col justify-center items-center text-center py-32">
        <h1 class="text-5xl font-bold leading-snug text-black">Make Every Moment Memorable.</h1>
        <p class="text-lg mt-6 text-gray-700">Connect with loved ones through heartfelt wishes and gifts. Create, share, and discover wishlists to make your dreams come true.</p>
        <button class="mt-10 bg-pink-500 text-white py-4 px-12 rounded-full">Start wishing now</button>
      </section>
  
      <!-- Features Section -->
      <section class="bg-purple-100 py-20">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12">Gift giving made easy</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-2xl font-semibold mb-4">Create Your Profile</h3>
              <p>Start your journey by setting up your personalized profile. Showcase your unique style and interests! Create a fun profile and let your friends know what makes you tick. Don’t forget to upload a fun profile picture—let your personality shine!</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-2xl font-semibold mb-4">Curate Your Wishlists</h3>
              <p>Dream big! Build wishlists for every occasion—birthdays, holidays, or just because. Add items from anywhere on the web or upload your own pics! Make it colorful, add descriptions, and let your wishes be known!</p>
            </div>
            <!-- Add other feature cards similarly -->
          </div>
        </div>
      </section>
  
      <!-- How it works section, repeating similar cards like the features above -->

      <section class="relative bg-[#eef5cc] p-10 rounded-2xl overflow-hidden">
    <div class="flex items-center space-x-8">
      <!-- Left Column: Text and Number -->
      <div class="relative flex flex-col justify-center space-y-4 w-1/2">
        <!-- Number -->
        <div class="flex items-center space-x-2">
          <div class="relative w-16 h-16">
            <img src="./assets/star-4-5.svg" alt="Star" class="w-full h-full">
            <span class="absolute inset-0 flex items-center justify-center text-5xl font-semibold text-white">2</span>
          </div>
        </div>
        <!-- Heading and Description -->
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Curate Your Wishlists</h2>
          <p class="text-gray-700">Dream big! Build wishlists for every occasion—birthdays, holidays, or just because. Add items from anywhere on the web or upload your own pics! Make it colorful, add descriptions, and let your wishes be known!</p>
        </div>
      </div>

      <!-- Right Column: Image -->
      <div class="relative flex justify-center w-1/2">
        <img src="./assets/group-856.svg" alt="Wishlist Image" class="w-3/4 h-3/4">
        <!-- Overlay Image: Mobile Wishlist card -->
        <div class="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-1/3 rounded-lg shadow-lg bg-white p-2">
          <img src="./assets/img-2.svg" alt="Wishlist" class="rounded-md mb-2">
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <img src="./assets/box-gift.svg" alt="Gift" class="w-3 h-3">
              <span class="text-sm text-gray-700">10 Wishes</span>
            </div>
            <h3 class="text-sm font-semibold text-gray-900">My personal wishlist</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  
      <!-- Footer Section -->
      <footer class="bg-gray-900 text-white py-16">
        <div class="container mx-auto text-center">
          <img src="./assets/logo.svg" alt="Logo" class="mx-auto mb-4 w-32 h-10">
          <p class="text-xl">Where wishlists come alive!</p>
          <div class="flex justify-center space-x-8 mt-8">
            <a href="#" class="bg-blue-500 py-2 px-6 rounded-full">Facebook</a>
            <a href="#" class="bg-pink-500 py-2 px-6 rounded-full">Instagram</a>
            <a href="#" class="bg-blue-400 py-2 px-6 rounded-full">Twitter</a>
            <a href="#" class="bg-red-500 py-2 px-6 rounded-full">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS will be used */
  </style>
  