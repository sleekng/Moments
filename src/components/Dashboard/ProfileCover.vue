<template>
<div class="relative grid bg-[#EAEBED] overflow-x-auto lg:content-center rounded-xl px-4 py-8 lg:p-8 grid-col-1 lg:grid-cols-12 lg:justify-between lg:items-center my-6">
    <!-- Close Button -->
    <img src="/assets/frame.svg" alt="Close" class="absolute top-4 right-4 h-6 w-6 cursor-pointer" />
    <!-- Text Content -->
    <div class="col-span-1 hidden lg:block"></div>
    <div class="lg:col-span-6">
        <h1 class="text-2xl lg:text-4xl font-semibold mb-4">Every moment is a chance to spread joy and make wishes a reality!</h1>
        <p class="text-base lg:text-lg text-gray-700">Discover exciting wishes from others, and find the perfect present that will light up someone's special day.</p>
    </div>
    <!-- Animations -->
    <div class="  lg:space-x-4 lg:ml-6 lg:col-span-4  w-[311px] pt-4 lg:pt-0 lg:w-full">
       <img src="/assets/Animations.png" alt="" class=" w-full  h-full">
    </div>
    <div class="col-span-1 hidden lg:block"></div>
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
