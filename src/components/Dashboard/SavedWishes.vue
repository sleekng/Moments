<template>
<!-- Wishes Grid -->
<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-4 lg:px-12 py-6 pb-12 bg-white rounded-b-lg" @mouseleave="handleCloseDropdown">
    <WishCard v-for="(wish, index) in wishes" :key="index" :wish="wish" @preview = "preview" :openDropdownId="openDropdownId" @toggleDropdown="handleToggleDropdown" @closeDropdown="handleCloseDropdown" />
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
