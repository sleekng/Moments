<template>
<div class="p-4 border-b border-gray-200 flex items-start space-x-3">
    <img :src="notification.notifier.avatar ? notification.notifier.avatar : '/assets/avatar.svg' " alt="Profile" class="w-10 h-10 rounded-full">
    <div class="w-full">
        <p class="text-sm text-gray-700">
            <strong>{{ notification.notifier.username }}</strong> {{ notification.data.message }}
        </p>
        <div v-if="notification.type === 'wishlist' || notification.type === 'birthdays'" class="mt-2 flex w-full items-center space-x-3 p-2 border border-gray-300 rounded-lg">
            <img :src="notification.action.photo" alt="Product" class="w-16 h-16 object-cover rounded-md">
            <div>
                <p class="text-sm font-medium text-gray-800">{{ notification.action.name }}</p>

                <!-- priority check Low -->

                <div v-if="notification.action.priority == 'low'" class="inline-flex items-center bg-[#FAFFFF] border border-[#37B1B5] text-[#37B1B5] text-sm font-medium py-1 px-2 rounded-full">
                    {{ notification.action.priority }} priority
                    <img src="/assets/gift.svg" alt="Fire" class="ml-2 w-4 h-4" />
                </div>

                <!-- priority check Medium -->

                <div v-if="notification.action.priority == 'medium'" class="inline-flex items-center bg-[#FCF8EE] border border-[#DAA520] text-[#DAA520] text-sm font-medium py-1 px-2 rounded-full">
                    {{ notification.action.priority }} priority
                    <img src="/assets/star.svg" alt="Fire" class="ml-2 w-4 h-4" />
                </div>

                <!-- priority check High -->

                <div v-if="notification.action.priority == 'high'" class="inline-flex items-center bg-red-100 border border-red-600 text-red-600 text-sm font-medium py-1 px-2 rounded-full">
                    {{ notification.action.priority }} priority
                    <img src="/assets/frame-1618868307.svg" alt="Fire" class="ml-2 w-4 h-4" />
                </div>

            </div>
        </div>
        <p class="text-xs text-gray-500 mt-1">{{ formatDate(notification.created_at) }}</p>
        <div v-if="notification.actions" class="flex mt-2 space-x-2">
            <button class="px-4 py-2 whitespace-nowrap" v-for="action in notification.actions" :key="action.text" :class="[action.primary ? 'bg-primaryColor text-white' : 'bg-gray-200 text-gray-700', 'py-1 px-3 rounded-full']">
                {{ action.text }}
            </button>
        </div>
    </div>
</div>
</template>

  
<script>
export default {
    name: 'NotificationItem',
    props: {
        notification: {
            type: Object,
            required: true
        }
    },
    methods: {
        formatDate(date) {
            const dateObj = new Date(date);
            return dateObj.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            });
        }
    }
};
</script>
