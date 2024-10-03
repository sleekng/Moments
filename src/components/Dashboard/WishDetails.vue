<template>
<div class="flex justify-center w-full items-start p-12 bg-white mt-6 rounded-t-lg relative">
    <div class="flex flex-col items-center">
        <div class="relative">
            <img src="/assets/wishlist-category-placeholder.svg" alt="Wishlist Category" class="w-52 h-52 object-cover bg-gray-100 rounded-full">
        </div>

        <div class="mt-4 inline-flex flex-col space-y-4 text-center">
            <div>
                <div class="inline-flex items-center justify-center bg-primaryMainBright text-primaryColor py-2 px-4 rounded-full text-sm font-medium">
                <span>Birthday wishlist</span>
            </div>
            </div>

            <div class="space-y-1">
                <h2 class="text-3xl font-semibold text-gray-900">24th Birthday</h2>
                <p class="text-gray-600">Hello there! Here’s my birthday wishlist.</p>
            </div>

          <div>
              <div class="mt-4 inline-flex px-2 pr-4 items-center justify-center space-x-2 bg-gray-900 text-white py-2  rounded-full">
                <div class="bg-white text-gray-900 w-7 h-7 flex items-center justify-center rounded-full font-semibold">23</div>
                <span>May, 2024</span>
            </div>
          </div>

            <div class="mt-4 flex space-x-4 justify-center">
                <div class="flex items-center text-gray-600 space-x-1">
                    <img src="/assets/heart.svg" alt="Likes" class="w-4 h-4">
                    <span>200 Likes</span>
                </div>
                <div class="flex items-center text-gray-600 space-x-1">
                    <img src="/assets/eye.svg" alt="Views" class="w-4 h-4">
                    <span>200 Views</span>
                </div>
            </div>
        </div>
    </div>

    <div class="flex space-x-4 absolute right-10 ">
        <button class="bg-gray-200 py-2 px-6 rounded-full text-sm font-medium text-gray-900">
            Edit
        </button>
        <button class="bg-gray-200 py-2 px-6 rounded-full text-sm font-medium text-gray-900">
            Share wishlist
        </button>
    </div>
</div>
</template>

  
<script>
export default {
    name: 'WishDetails',
}
</script>

  
<style scoped>
/* Additional styles if needed */
</style>
