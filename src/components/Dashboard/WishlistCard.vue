<template>
<div class="card group hover:border-primaryColor h-full cursor-pointer " :class="['bg-white rounded-lg shadow-md p-4  border', isDropdownOpen ? 'border-primaryColor' : 'border-gray-100']">
    <div v-if="isExplore" class="flex items-center space-x-2 mt-2 pb-2">
        <div class="flex items-center space-x-2">
            <img src="/assets/avatar.svg" alt="Avatar" class="w-6 h-6 rounded-full">
            <span class="font-bold whitespace-nowrap text-sm">Shotayo Ayomide</span>
            <span class="text-gray-600 font-normal text-xs">@ayomide_sm</span>
        </div>
    </div>
    <!-- Image and Menu-option -->
    <div class="relative mb-4">
        <img class="w-full h-56 object-cover rounded-md" src="/assets/13-1.svg" alt="Wishlist Image" />
        <button @click="toggleMenu" class="absolute z-40 top-2 right-2 p-1 bg-gray-200 rounded-full toggle-menu-button transition-opacity opacity-0 group-hover:opacity-100">
            <img src="/assets/frame-1618868216.svg" alt="Menu" class="h-6 w-6" />
        </button>

        <!-- DropdownMenu -->
        <div v-if="isDropdownOpen" @mouseleave="closeMenu" class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-50 -right-20">
            <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer">
                <img src="/assets/share.svg" class="w-4 h-4" alt="Share" />
                <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Share wishlist with friends</span>
            </div>
            <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                <img src="/assets/edit.svg" class="w-4 h-4" alt="Edit" />
                <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Edit wishlist</span>
            </div>
            <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200" @click="$emit('deleteWishlist', wishlist.id)">
                <img src="/assets/close-circle.svg" class="w-4 h-4" alt="Delete" />
                <span class="ml-2 text-gray-800 hover:text-primaryColor w-full font-medium">Delete</span>
            </div>
        </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col space-y-2">
        <!-- Tag -->
        <div class="bg-[#FEF7FF] text-primaryColor px-3 py-1 whitespace-nowrap rounded-full w-min text-xs">{{ wishlist.category }}</div>
        <!-- Title -->
        <h3 class="text-xl font-semibold">{{ wishlist.title }}</h3>
        <!-- Wishes -->
        <div class="flex items-center text-gray-600">
            <img src="/assets/box-gift.svg" alt="Gift" class="h-4 w-4 mr-1" />
            <span class="font-bold mr-1">{{ wishlist.wishes }}</span> Wishes
        </div>
    </div>

    <!-- Stats -->
    <div class="flex justify-end space-x-4 items-center mt-4 text-gray-600">
        <div class="flex items-center">
            <img src="/assets/heart.svg" alt="Likes" class="h-5 w-5 mr-1" />
            <span>200</span>
        </div>
        <div class="flex items-center">
            <img src="/assets/eye.svg" alt="Views" class="h-5 w-5 mr-1" />
            <span>200</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'WishlistCard',
    props: {
        wishlist: {
            type: Object,
            required: true,
        },
        openDropdownId: {
            type: Number,
            required: true,
        },
    },
    computed: {
        isExplore() {
            return this.$route.path === '/explore';
        },
        isDropdownOpen() {
            // Check if this card's dropdown should be open
            return this.openDropdownId === this.wishlist.id;
        },
    },
    methods: {
        toggleMenu() {
            // Emit the event to the parent to toggle this dropdown

            this.$emit('toggleDropdown', this.wishlist.id);
        },
        closeMenu() {
            // Emit the event to the parent to toggle this dropdown
            this.$emit('closeDropdown', this.wishlist.id);
        },
    },
};
</script>

<style scoped>
/* Additional styles if required can be added here */
</style>
