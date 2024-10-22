<template>
    <div class="flex flex-col items-center">
      <div
        class=" h-20 w-20 lg:w-32 lg:h-32 bg-gray-100 rounded-lg flex items-center overflow-hidden justify-center mb-2"
      >
        <img :src="image" :alt="title" class=" object-cover h-full" />
      </div>
      <p class="text-gray-800 text-xs lg:text-sm font-medium">{{ title }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      image: String,
    },
  };
  </script>
  
  <style scoped>
  .w-32 {
    width: 8rem;
  }
  .h-32 {
    height: 8rem;
  }
  </style>
  