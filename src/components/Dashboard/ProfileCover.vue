<template>
<div class="relative grid bg-[#EAEBED] content-center rounded-xl p-8 grid-cols-12 justify-between items-center my-6">
    <!-- Close Button -->
    <img src="/assets/frame.svg" alt="Close" class="absolute top-4 right-4 h-6 w-6 cursor-pointer" />
    <!-- Text Content -->
     <div class="col-span-1"></div>
    <div class="col-span-6">
        <h1 class="text-2xl lg:text-4xl font-semibold mb-4">Every moment is a chance to spread joy and make wishes a reality!</h1>
        <p class="text-base lg:text-lg text-gray-700">Discover exciting wishes from others, and find the perfect present that will light up someone's special day.</p>
    </div>
    <!-- Animations -->
    <div class="   space-x-4 ml-6 col-span-4">
       <img src="/assets/Animations.png" alt="" class=" w-full">
    </div>
    <div class="col-span-1"></div>
</div>
</template>

  
<script>
export default {
    name: 'CoverImage',
};
</script>

  
<style scoped>
/* Custom styles if necessary */
</style>
