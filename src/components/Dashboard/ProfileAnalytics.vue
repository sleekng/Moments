<template>
<div class="bg-white rounded-2xl p-4 mx-auto ">

    <!-- Header -->
    <div class="flex items-center mb-8">
        <img src="/assets/close.svg" class="w-8 h-8 mr-4 cursor-pointer" alt="Close" @click="$emit('close')" />
        <h1 class="text-2xl font-bold text-gray-900">Profile Analytics</h1>
    </div>

    <!-- Displaying Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <SummaryCard v-for="item in summaryItems" :key="item.title" :title="item.title" :value="item.value" :icon="item.icon" :icon-bg-class="item.bgColor" />
    </div>

    <!-- Wishlist Section -->
    <div class="bg-white p-6 rounded-lg shadow border">
        <h2 class="text-xl font-semibold mb-4 text-gray-900">Top performing wishlist</h2>
        <WishlistItem v-for="wishlist in wishlists" :key="wishlist.id" :title="wishlist.title" :img-src="wishlist.imgSrc" :likes="wishlist.likes" :views="wishlist.views" :saves="wishlist.saves" :created="wishlist.created" :top-wishes="wishlist.topWishes" />
    </div>
</div>
</template>

  
<script>
import SummaryCard from './SummaryCard.vue';
import WishlistItem from './WishlistItem.vue';

export default {
    components: {
        SummaryCard,
        WishlistItem,
    },
    data() {
        return {
            summaryItems: [{
                    title: 'Total Impressions',
                    value: '50.1k',
                    icon: './assets/stat.svg',
                    bgColor: 'bg-purple-100'
                },
                {
                    title: 'Total Friends',
                    value: '3384',
                    icon: './assets/people.svg',
                    bgColor: 'bg-blue-100'
                },
                {
                    title: 'Total Likes',
                    value: '20.1k',
                    icon: './assets/heart-svgrepo-com-1.svg',
                    bgColor: 'bg-red-100'
                },
                {
                    title: 'Total Views',
                    value: '20.1k',
                    icon: './assets/eye.svg',
                    bgColor: 'bg-green-100'
                }
            ],
            wishlists: [
                {
                    id: 1,
                    title: 'My Birthday Wishlist',
                    imgSrc: './assets/wishlist-category-placeholder.svg',
                    likes: 2000,
                    views: '20.1k',
                    saves: 3,
                    created: 'May 3, 2024',
                    topWishes: [{
                            label: '500',
                            img: './assets/image-59.svg'
                        },
                        {
                            label: '400',
                            img: './assets/image-59-2.svg'
                        },
                        {
                            label: '300',
                            img: './assets/image-59-3.svg'
                        },
                        {
                            label: '200',
                            img: './assets/image-59-4.svg'
                        },
                        {
                            label: '100',
                            img: './assets/image-59-5.svg'
                        },
                    ],
                },
                {
                    id: 1,
                    title: 'My Birthday Wishlist',
                    imgSrc: './assets/wishlist-category-placeholder.svg',
                    likes: 2000,
                    views: '20.1k',
                    saves: 3,
                    created: 'May 3, 2024',
                    topWishes: [{
                            label: '500',
                            img: './assets/image-59.svg'
                        },
                        {
                            label: '400',
                            img: './assets/image-59-2.svg'
                        },
                        {
                            label: '300',
                            img: './assets/image-59-3.svg'
                        },
                        {
                            label: '200',
                            img: './assets/image-59-4.svg'
                        },
                        {
                            label: '100',
                            img: './assets/image-59-5.svg'
                        },
                    ],
                },
                {
                    id: 1,
                    title: 'My Birthday Wishlist',
                    imgSrc: './assets/wishlist-category-placeholder.svg',
                    likes: 2000,
                    views: '20.1k',
                    saves: 3,
                    created: 'May 3, 2024',
                    topWishes: [{
                            label: '500',
                            img: './assets/image-59.svg'
                        },
                        {
                            label: '400',
                            img: './assets/image-59-2.svg'
                        },
                        {
                            label: '300',
                            img: './assets/image-59-3.svg'
                        },
                        {
                            label: '200',
                            img: './assets/image-59-4.svg'
                        },
                        {
                            label: '100',
                            img: './assets/image-59-5.svg'
                        },
                    ],
                },
                {
                    id: 1,
                    title: 'My Birthday Wishlist',
                    imgSrc: './assets/wishlist-category-placeholder.svg',
                    likes: 2000,
                    views: '20.1k',
                    saves: 3,
                    created: 'May 3, 2024',
                    topWishes: [{
                            label: '500',
                            img: './assets/image-59.svg'
                        },
                        {
                            label: '400',
                            img: './assets/image-59-2.svg'
                        },
                        {
                            label: '300',
                            img: './assets/image-59-3.svg'
                        },
                        {
                            label: '200',
                            img: './assets/image-59-4.svg'
                        },
                        {
                            label: '100',
                            img: './assets/image-59-5.svg'
                        },
                    ],
                },
                {
                    id: 1,
                    title: 'My Birthday Wishlist',
                    imgSrc: './assets/wishlist-category-placeholder.svg',
                    likes: 2000,
                    views: '20.1k',
                    saves: 3,
                    created: 'May 3, 2024',
                    topWishes: [{
                            label: '500',
                            img: './assets/image-59.svg'
                        },
                        {
                            label: '400',
                            img: './assets/image-59-2.svg'
                        },
                        {
                            label: '300',
                            img: './assets/image-59-3.svg'
                        },
                        {
                            label: '200',
                            img: './assets/image-59-4.svg'
                        },
                        {
                            label: '100',
                            img: './assets/image-59-5.svg'
                        },
                    ],
                },
                // More wishlist data here...
            ],
        };
    },
};
</script>
