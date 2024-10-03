<template>
    <div class="flex flex-col items-center">
      <div
        class="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-2"
      >
        <img :src="image" :alt="title" class=" object-cover" />
      </div>
      <p class="text-gray-800 text-sm font-medium">{{ title }}</p>
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
  