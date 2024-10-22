<template>
<div class=" lg:px-12 py-8 bg-white rounded-b-lg" @mouseleave="handleCloseDropdown">

    <!-- Reserved Wishes -->
    <div class="mb-8">
        <div class=" text-[18px] lg:text-2xl font-bold mb-4">Wishes You Reserved for Your Friends</div>
        <div class="flex w-full overflow-x-auto space-x-3 lg:space-x-6">
            <WishCard v-for="(wish, index) in filteredWishes('reserved')" :key="index" :wish="wish"  @preview = "preview" :openDropdownId="openDropdownId" @toggleDropdown="handleToggleDropdown" @closeDropdown="handleCloseDropdown" class="md:w-[286px] w-40  flex-shrink-0"  />
        </div>
    </div>

    <!-- Fulfilled Wishes -->
    <div class="mb-8">
        <div class="text-[18px] lg:text-2xl font-bold mb-4">Wishes You've Fulfilled for Your Friends <span class=" hidden lg:inline">...awww</span></div>
        <div class="flex w-full overflow-x-auto space-x-3 lg:space-x-6">
            <WishCard v-for="(wish, index) in filteredWishes('fulfilled')" :key="index" :wish="wish" @preview = "preview" :openDropdownId="openDropdownId" @toggleDropdown="handleToggleDropdown" @closeDropdown="handleCloseDropdown" class="md:w-[286px] w-40  flex-shrink-0" />
        </div>
    </div>

    <!-- Received Wishes -->
    <div class="mb-8">
        <div class="text-[18px] lg:text-2xl font-bold mb-4">Wishes You've Received</div>
        <div class="flex w-full overflow-x-auto space-x-3 lg:space-x-6">
            <WishCard v-for="(wish, index) in filteredWishes('received')" :key="index" :wish="wish" @preview = "preview" :openDropdownId="openDropdownId" @toggleDropdown="handleToggleDropdown" @closeDropdown="handleCloseDropdown" class="md:w-[286px] w-40  flex-shrink-0" />
        </div>
    </div>

    <!-- My Wishes -->
    <div class="mb-8">
        <div class="text-[18px] lg:text-2xl font-bold mb-4">My Wishlist</div>
        <div class="flex w-full overflow-x-auto space-x-3 lg:space-x-6">
            <WishCard v-for="(wish, index) in filteredWishes('myWishes')" :key="index" :wish="wish" @preview = "preview" :openDropdownId="openDropdownId" @toggleDropdown="handleToggleDropdown" @closeDropdown="handleCloseDropdown" class="md:w-[286px] w-40  flex-shrink-0" />
        </div>
    </div>

</div>
</template>

<script>
import WishCard from '@/components/Dashboard/WishCard.vue';

export default {
    components: {
        WishCard,
    },

    props: {

        wishes: {
            type: Object,
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
        this.$emit('preview', wishId)
        },

        handleToggleDropdown(wishId) {
            this.openDropdownId = this.openDropdownId === wishId ? null : wishId;
        },

        handleCloseDropdown() {
            this.openDropdownId = null;
        },

        filteredWishes(status) {
            return this.wishes.filter(wish => wish.status === status);
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
