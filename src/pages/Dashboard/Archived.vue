<template>
<div class="bg-gray-100 py-10  pt-32">
    <AppHeader  @showCategoryModal="$emit('showCategoryModal')" />
    <div class="container mx-auto  rounded-lg  bg-white">

        <div class="text-2xl px-12 py-10 font-bold">
            Archived Wishlists
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 px-4 lg:px-12  pb-12 bg-white rounded-b-lg" >

         <WishlistCard v-for="wishlist in wishlists" :key="wishlist.id" :wishlist="wishlist" :openDropdownId="openDropdownId" @toggleDropdown="handleToggleDropdown" @closeDropdown="handleCloseDropdown" />
        </div>
    </div>
</div>
</template>

<script>
import AppHeader from '@/components/Dashboard/AppHeader.vue';

import WishlistCard from '@/components/Dashboard/WishlistCard.vue';

export default {
    components: {
        AppHeader,
        WishlistCard,
    },
    data() {
        return {
            
            openDropdownId:null,
            wishlists: [{
                    id: 1,
                    title: 'My 25th Birthday',
                    imgSrc: '/assets/13-1.svg',
                    category: 'Birthday wishlist',
                    wishes: 10,
                    status: 'saved', // Example status
                },
                {
                    id: 2,
                    title: 'Holiday trip',
                    imgSrc: '/assets/9-594697.svg',
                    category: 'Holiday wishlist',
                    wishes: 15,
                    status: 'myWishes', // Example status
                },
                {
                    id: 6,
                    title: 'Holiday trip',
                    imgSrc: '/assets/9-594697.svg',
                    category: 'Holiday wishlist',
                    wishes: 15,
                    status: 'myWishes', // Example status
                },
                {
                    id: 3,
                    title: 'Holiday trip',
                    imgSrc: '/assets/9-594697.svg',
                    category: 'Holiday wishlist',
                    wishes: 15,
                    status: 'reserved', // Example status
                },
                {
                    id: 4,
                    title: 'Holiday trip1',
                    imgSrc: '/assets/9-594697.svg',
                    category: 'Holiday wishlist',
                    wishes: 15,
                    status: 'reserved', // Example status
                },
                {
                    id: 5,
                    title: 'Holiday trip2',
                    imgSrc: '/assets/9-594697.svg',
                    category: 'Holiday wishlist',
                    wishes: 15,
                    status: 'reserved', // Example status
                },
                // Add more wishlist data here
            ],
        };
    },

  
    methods:{
        handleToggleDropdown(wishlistId) {
            // If the clicked dropdown is already open, close it
            this.openDropdownId = this.openDropdownId === wishlistId ? null : wishlistId;
        },
        handleCloseDropdown() {
            // If the clicked dropdown is already open, close it
            this.openDropdownId = null;
        }
    }

};
</script>
