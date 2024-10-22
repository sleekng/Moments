<template>
<header class="flex justify-between items-center bg-white px-4 lg:px-16 border-b border-gray-300 fixed w-full top-0 z-50 lg:h-20 h-14">
    <!-- Logo and Navigation Toggle for Mobile -->
    <div class="flex items-center lg:hidden">
        <img @click="toggleMobileMenu" src="/assets/mobile-nav.svg" alt="Menu" class="h-5 w-5 mr-4 cursor-pointer" />
        <img src="/assets/logo.svg" alt="Moments Hub Logo" class="h-8" />
    </div>

    <!-- Logo and Navigation for Desktop -->
    <div class="hidden lg:flex items-center h-full">
        <img src="/assets/logo.svg" alt="Logo" class="h-10" />
        <nav class="flex ml-16 h-full space-x-8">
            <RouterLink to="/dashboard" :class="[isActiveRoute('dashboard') ? 'bg-primaryMainBright border-b-2 border-primaryColor' : '']" class="flex pb-4 mt-4 items-center space-x-1 px-4 py-2">
                <span :class="isActiveRoute('dashboard') ? 'text-gray-900' : 'text-gray-600'" class="text-lg font-medium">
                    My Wishlist
                </span>
            </RouterLink>
            <RouterLink to="/explore" :class="[isActiveRoute('explore') ? 'bg-primaryMainBright border-b-2 border-primaryColor' : '']" class="flex pb-4 mt-4 items-center space-x-1 px-4 py-2">
                <span :class="isActiveRoute('explore') ? 'text-gray-900' : 'text-gray-600'" class="text-lg font-medium">
                    Explore
                </span>
            </RouterLink>
        </nav>
    </div>

    <!-- Icons (Bell and Search) for Mobile -->
    <div class="flex items-center space-x-6 lg:hidden">
        <img @click="toggleNotifications" src="/assets/bell.svg" alt="Notifications" class="h-4.5 w-4.5" />
        <RouterLink to="/explore"><img src="/assets/search.svg" alt="Search" class="h-4.5 w-4.5" /></RouterLink>
        
    </div>

    <!-- Search and Action Buttons for Desktop -->
    <div class="hidden lg:flex items-center space-x-6 relative">
        <!-- Search Input -->
        <div class="relative">
            <input type="text" placeholder="Search" v-model="searchQuery" @keydown="toggleSearchDropdown" @input="filterResults" class="py-2 pl-10 px-4 border rounded-md w-[320px] bg-gray-100" />
            <img src="/assets/magnifying-glass.svg" class="absolute left-0 top-[14px] px-4 w-12" alt="Search Icon" />

            <!-- Search Dropdown -->
            <div v-if="showSearchDropdown" @mouseleave="showSearchDropdown = false" class="absolute left-0 top-12 mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
                <div class="p-4">
                    <div class="flex justify-between items-center mb-4">
                        <span class="font-medium text-lg text-gray-900">Recent search</span>
                        <button class="text-pink-500 text-sm" @click="clearSearch">Clear all</button>
                    </div>
                    <RecentSearchList :people="filteredPeople" :wishlists="filteredWishlists" />
                </div>
            </div>
        </div>

        <!-- Create Wishlist Button -->
        <button @click="Createa" class="flex items-center bg-primaryColor text-white py-2 px-6 rounded-full">
            <img src="/assets/add-2.svg" alt="Add" class="h-4 w-4 mr-2" />
            Create wishlist
        </button>

        <!-- Notification and Profile Section -->
        <div class="relative cursor-pointer">
            <img @click="toggleNotifications" src="/assets/bell.svg" alt="Notifications" class="h-6 w-6" />
            <img v-if="showNotifications" src="/assets/notification-arrow.svg" alt="Notifications" class="h-6 w-6 absolute" />

            <!-- Notifications Dropdown -->
            <div v-if="showNotifications" @mouseleave="toggleNotifications" class="absolute -right-20 top-10 w-[450px] bg-white border overflow-hidden rounded-lg shadow-lg z-50">
                <NotificationDropdown />
            </div>
        </div>

        <!-- Profile Section -->
        <div class="relative">
            <div @click="toggleProfileDropdown" class="flex items-center cursor-pointer space-x-2">
                <img src="/assets/profile.svg" alt="Profile" class="h-10 w-10 rounded-full" />
                <img src="/assets/arrow-down.svg" alt="Dropdown" class="h-4 w-4" />
            </div>

            <!-- Profile Dropdown -->
            <div v-if="showProfileDropdown" @mouseleave="showProfileDropdown = false" class="absolute right-0 mt-2 w-72 bg-white border rounded-lg shadow-lg z-50">
                <div class="p-4 flex items-center gap-4">
                    <img src="/assets/profile.svg" alt="Profile" class="w-12 h-12 rounded-full" />
                    <div>
                        <p class="text-lg font-semibold text-gray-900">Ayomide Shotayo</p>
                        <p class="text-sm text-gray-500">@ayomide_sm</p>
                    </div>
                </div>
                <hr />
                <div class="py-2">
                    <RouterLink to="/archived" class="px-4 py-2 cursor-pointer block hover:bg-gray-100">Archived wishes</RouterLink>
                    <RouterLink to="/account" class="px-4 block py-2 cursor-pointer hover:bg-gray-100">Account settings</RouterLink>
                </div>
                <hr />
                <div class="py-2">
                    <div class="px-4 py-2 cursor-pointer flex items-center justify-between hover:bg-gray-100">
                        <span>How it works</span>
                        <img src="/assets/Gotoweb.svg" alt="External Link" class="w-4 h-4" />
                    </div>
                    <div class="px-4 py-2 cursor-pointer hover:bg-gray-100">Sign out</div>
                </div>
            </div>
        </div>

    </div>
</header>

<!--Mobile Notification and Profile Section -->
<div v-if="showNotifications" @mouseleave="toggleNotifications" class="fixed left-0 lg:hidden top-12 w-full h-screen bg-white border overflow-hidden rounded-lg shadow-lg z-40">
    <NotificationDropdown />
</div>

<!-- Mobile Menu -->
<div v-if="showMobileMenu" @click="toggleMobileMenu" class="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex flex-col lg:hidden">
    <div class="bg-white w-72  h-screen space-y-2 shadow-lg">
        <div class="flex items-center p-6 justify-between">
            <div class="flex items-center">
                <img src="/assets/profile.svg" alt="Profile" class="w-12 h-12 rounded-full mr-4" />
                <div>
                    <p class="text-lg font-semibold text-gray-900">Ayomide Shotayo</p>
                    <p class="text-sm text-gray-500">@ayomide_sm</p>
                </div>
            </div>
            <img @click="toggleMobileMenu" src="/assets/close.svg" alt="Close" class="h-5 w-5 cursor-pointer self-start" />
        </div>
        <hr class="my-4" />
        <div class=" px-6">

            <RouterLink to="/dashboard" class="block py-2 text-lg font-medium">My Wishlist</RouterLink>
            <RouterLink to="/explore" class="block py-2 text-lg font-medium">Explore</RouterLink>
            <RouterLink to="/archived" class="block py-2 text-lg font-medium">Archived wishes</RouterLink>
            <RouterLink to="/account" class="block py-2 text-lg font-medium">Account settings</RouterLink>
        </div>
        <hr class="my-4" />
        <div class=" px-6">
            <div class="flex justify-between items-center py-2">
                <span class="text-lg font-medium">How it works</span>
                <img src="/assets/Gotoweb.svg" alt="External Link" class="w-4 h-4" />
            </div>
            <button @click="signOut" class="block py-2 font-medium text-lg">Sign Out</button>
        </div>
    </div>
</div>
</template>

<script>
import NotificationDropdown from './NotificationDropdown.vue';
import RecentSearchList from './RecentSearchList.vue';

export default {
    components: {
        NotificationDropdown,
        RecentSearchList,
    },
    data() {
        return {
            searchQuery: '',
            showNotifications: false,
            showProfileDropdown: false,
            showSearchDropdown: false,
            showMobileMenu: false,
            people: [{
                    name: "Ayomide Shotayo",
                    username: "@ayomide_sm",
                    wishlists: 10
                },
                {
                    name: "John Doe",
                    username: "@john_doe",
                    wishlists: 5
                },
            ],
            wishlists: [{
                    name: "My Birthday Wishlist",
                    username: "@ayomide_sm",
                    wishes: 10
                },
                {
                    name: "Christmas Gifts",
                    username: "@john_doe",
                    wishes: 7
                },
            ],
            filteredPeople: [],
            filteredWishlists: [],
        };
    },
    methods: {
        Createa() {
            this.$emit('showCategoryModal');
        },
        toggleNotifications() {
            this.showNotifications = !this.showNotifications;
        },
        toggleProfileDropdown() {
            this.showProfileDropdown = !this.showProfileDropdown;
        },
        toggleSearchDropdown() {
            this.showSearchDropdown = true;
        },
        toggleMobileMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
        filterResults() {
            const query = this.searchQuery.toLowerCase();
            this.filteredPeople = this.people.filter((person) =>
                person.name.toLowerCase().includes(query)
            );
            this.filteredWishlists = this.wishlists.filter((wishlist) =>
                wishlist.name.toLowerCase().includes(query)
            );
        },
        clearSearch() {
            this.searchQuery = '';
            this.filteredPeople = [];
            this.filteredWishlists = [];
        },
        isActiveRoute(route) {
            return this.$route.name === route;
        },
        signOut() {
            // Add sign-out logic here
        },
    },
};
</script>

<style scoped>
/* Styles for mobile and desktop */
@media (min-width: 1024px) {
    header {
        height: 80px;
        padding: 0 64px;
    }
}
</style>
