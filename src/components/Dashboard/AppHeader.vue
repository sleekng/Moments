<template>
<header class="flex justify-between items-center bg-white px-16 border-b border-gray-300 fixed w-full top-0 z-50">
    <!-- Logo Section -->
    <div class="flex items-center h-full">
        <!-- Logo Image -->
        <div>
            <img src="/assets/logo.svg" alt="Logo" class="h-10">
        </div>
        <!-- Navigation Links -->
        <nav class="flex ml-16 h-full space-x-8">
            <!-- My Wishlist Tab -->
            <RouterLink to="/dashboard" :class="[
            'flex pb-4 mt-4 items-center space-x-1 px-4 py-2',
            isActiveRoute('dashboard') ? 'bg-primaryMainBright border-b-2 border-primaryColor' : ''
          ]">
                <span :class="[isActiveRoute('dashboard') ? 'text-gray-900' : 'text-gray-600', 'text-lg font-medium']">
                    My Wishlist
                </span>
            </RouterLink>

            <!-- Explore Tab -->
            <RouterLink to="/explore" :class="[
            'flex pb-4 mt-4 items-center space-x-1 px-4 py-2',
            isActiveRoute('explore') ? 'bg-primaryMainBright border-b-2 border-primaryColor' : ''
          ]">
                <span :class="[isActiveRoute('explore') ? 'text-gray-900' : 'text-gray-600', 'text-lg font-medium']">
                    Explore
                </span>
            </RouterLink >
        </nav>
    </div>

    <!-- Search and Action Buttons Section -->
    <div class="flex items-center space-x-6 relative">
        <!-- Search Input with Icon -->
        <div class="relative">
            <input type="text" placeholder="Search" class="py-2 pl-10 px-4 border rounded-md w-[320px] bg-gray-100">
            <!-- Search Icon -->
            <img src="/assets/magnifying-glass.svg" class="absolute left-0 top-[14px] px-4 w-12" alt="">
        </div>

        <!-- Create Wishlist Button -->
        <button class="flex items-center bg-primaryColor text-white py-2 px-6 rounded-full">
            <img src="/assets/add-2.svg" alt="Add" class="h-4 w-4 mr-2">
            Create wishlist
        </button>

        <!-- Notification and Profile Section -->
        <div class="relative cursor-pointer">
            <!-- Notifications Icon -->
            <img @click="toggleNotifications" src="/assets/bell.svg" alt="Notifications" class="h-6 w-6">
            <img v-if="showNotifications"  src="/assets/notification-arrow.svg" alt="Notifications" class="h-6 w-6 absolute">

            <!-- Notifications Dropdown -->
            <div v-if="showNotifications" @mouseleave="toggleNotifications" class="absolute -right-20 top-10 w-[450px] bg-white border overflow-hidden rounded-lg shadow-lg z-10">
                <NotificationDropdown />
            </div>
        </div>

        <!-- Profile Picture -->
        <img src="/assets/profile.svg" alt="Profile" class="h-10 w-10 rounded-full">
        <!-- Dropdown Arrow Icon -->
        <img src="/assets/arrow-down.svg" alt="Dropdown" class="h-4 w-4">
    </div>
</header>
</template>

<script>
import NotificationDropdown from './NotificationDropdown.vue';

export default {
    name: 'AppHeader',
    components: {
        NotificationDropdown
    },
    data() {
        return {
            showNotifications: false
        };
    },
    methods: {
        toggleNotifications() {
            this.showNotifications = !this.showNotifications;
        },
        isActiveRoute(route) {
            // Check if the current route matches the given route name
            return this.$route.name === route;
        }
    }
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
