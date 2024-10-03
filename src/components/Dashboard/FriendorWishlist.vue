<template>
<div class="px-12 py-8 bg-white" @mouseleave="handleCloseDropdown">

    <!-- Trending Wishlist Everyone's Talking About! -->
    <div v-if="activeTab === 'Wishes'" class="mb-8">
        <div class="text-2xl font-bold">Trending Wishlist Everyone's Talking About!</div>
        <div class="flex w-full overflow-x-auto space-x-6">
            <WishlistCard class="w-[286px] flex-shrink-0" v-for="wishlist in filteredWishlist('trending')" :key="wishlist.id" :wishlist="wishlist" :openDropdownId="openDropdownId" @toggleDropdown="handleToggleDropdown" @closeDropdown="handleCloseDropdown" />
        </div>
    </div>

    <!-- Recently Added Wishlist You Can't Miss -->
    <div v-if="activeTab === 'Wishes' || activeTab === 'Friends'" class="mb-8">
        <div class="text-2xl font-bold">Recently Added Wishlist You Can't Miss</div>
        <div class="flex w-full overflow-x-auto space-x-6">
            <WishlistCard class="w-[286px] flex-shrink-0" v-for="wishlist in filteredWishlist('recently-added')" :key="wishlist.id" :wishlist="wishlist" :openDropdownId="openDropdownId" @toggleDropdown="handleToggleDropdown" @closeDropdown="handleCloseDropdown" />
        </div>
    </div>

    <!-- Its Raining Birthdays -->
    <div v-if="activeTab === 'Wishes' || activeTab === 'Friends'" class="mb-8">
        <div class="text-2xl font-bold">Its Raining Birthdays</div>
        <div class="flex w-full overflow-x-auto space-x-6">
            <WishlistCard class="w-[286px] flex-shrink-0" v-for="wishlist in filteredWishlist('raining')" :key="wishlist.id" :wishlist="wishlist" :openDropdownId="openDropdownId" @toggleDropdown="handleToggleDropdown" @closeDropdown="handleCloseDropdown" />
        </div>
    </div>

    <!-- Wishes You Reserved For Your Friends -->
    <div v-if="activeTab === 'Friends'" class="mb-8">
        <div class="text-2xl font-bold">Wishes You Reserved For Your Friends</div>
        <div class="flex w-full overflow-x-auto space-x-6">
            <WishlistCard class="w-[286px] flex-shrink-0" v-for="wishlist in filteredWishlist('reserved-for-friends')" :key="wishlist.id" :wishlist="wishlist" :openDropdownId="openDropdownId" @toggleDropdown="handleToggleDropdown" @closeDropdown="handleCloseDropdown" />
        </div>
    </div>

</div>
</template>

  
<script>
import WishlistCard from '@/components/Dashboard/WishlistCard.vue';

export default {
    components: {
        WishlistCard,
    },

    props: {
        wishlists: {
            type: Array,
            required: true,
        },
        activeTab: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            openDropdownId: null, // Track which dropdown is open by its ID
        };
    },

    methods: {
        preview(wishId) {
            this.$emit('preview', wishId);
        },

        handleToggleDropdown(wishId) {
            this.openDropdownId = this.openDropdownId === wishId ? null : wishId;
        },

        handleCloseDropdown() {
            this.openDropdownId = null;
        },

        filteredWishlist(status) {
            return this.wishlists.filter(wishlist => wishlist.status === status);
        },
    },
};
</script>

  
<style scoped>
/* Optional: Add some styles for the scrollable area */
.flex {
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
}

.flex::-webkit-scrollbar {
    height: 6px;
}

.flex::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
}

.flex::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}
</style>
