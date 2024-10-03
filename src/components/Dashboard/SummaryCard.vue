<template>
<div class="p-6 bg-white flex space-x-4  rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border" :class="paddingClass">
    <div :class="iconBgClass + ' w-12 h-12 flex items-center justify-center rounded-full '">
        <img :src="icon" :alt="title" class="h-6 w-6" />
    </div>
    <div>
        <h2 class="text-gray-600">{{ title }}</h2>
        <p class="text-2xl font-bold text-gray-900">{{ value }}</p>
    </div>
</div>
</template>

  
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        iconBgClass: {
            type: String,
            required: true,
        },
        paddingClass: {
            type: String,
            required: false,
            default: ''
        }
    },
};
</script>
