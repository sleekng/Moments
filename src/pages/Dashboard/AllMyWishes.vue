<template>
<div class="bg-gray-100 pb-10">
    <AppHeader @showCategoryModal="$emit('showCategoryModal')" />
    <div class="container mx-auto pt-20">
        <WishDetails />

        <!-- Pass activeTab and method to handle tab switch -->
        <TabNavigationsWish :activeTab="activeTab" @switchTab="setActiveTab" />
        <!-- Wishes Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-4 lg:px-12 py-6 pb-12 bg-white rounded-b-lg" @mouseleave="handleCloseDropdown">
            <div v-if="activeTab == 'myWishes'" class="flex flex-col items-center justify-center bg-gray-100 h-full rounded-lg p-4 py-8  cursor-pointer" @click="showCreateWishModal = true">
                <div class="flex items-center justify-center w-12 h-12 bg-black rounded-full mb-4">
                    <img src="/assets/add.svg" alt="Add" class="h-5 w-5">
                </div>
                <div class="text-lg font-medium text-center text-gray-800 leading-relaxed">Make a Wish</div>
            </div>

            <WishCard v-for="(wish, index) in filteredWishes" :key="index" :wish="wish" @preview="prevWish" :openDropdownId="openDropdownId" @toggleDropdown="handleToggleDropdown" @closeDropdown="handleCloseDropdown" />

        </div>

    </div>
    <WishDetailView v-if="showWishDetailsModal" @close="closeWishDetailsModal" :wish="showPrevWish" />
    <CreateWishModal
      v-if="showCreateWishModal"
      @addWish="AddWish"
      @close="closeCreateWishModal"
    />
    </div>
</template>

<script>
import AppHeader from '@/components/Dashboard/AppHeader.vue';
import WishDetails from '@/components/Dashboard/WishDetails.vue';
import TabNavigationsWish from '@/components/Dashboard/TabNavigationsWish.vue';
import WishCard from '@/components/Dashboard/WishCard.vue';
import WishDetailView from '@/components/Dashboard/WishDetailView.vue';
import CreateWishModal from '@/components/Dashboard/CreateWishModal.vue';

export default {

    name: "All Wishes",

    components: {
        AppHeader,
        WishDetails,
        TabNavigationsWish,
        WishCard,
        WishDetailView,
        CreateWishModal
    },

    data() {
        return {
            showPrevWish: null,
            openDropdownId: null, // Track which dropdown is open by its ID
            showWishDetailsModal: false,
            showCreateWishModal:false,
            activeTab: 'myWishes', // Track the active tab
            wishes: [{
                    id: 1,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Hermes Birkin Bag',
                    price: '$400',
                    likes: 200,
                    status: 'myWishes',
                },
                {
                    id: 2,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Apple Watch',
                    price: '$350',
                    likes: 150,
                    status: 'reserved',
                },
                {
                    id: 3,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Diamond Ring',
                    price: '$2000',
                    likes: 1000,
                    status: 'reserved',
                },
                {
                    id: 4,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'MacBook Pro',
                    price: '$2500',
                    likes: 800,
                    status: 'myWishes',
                },
                {
                    id: 5,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'iPhone 14',
                    price: '$1000',
                    likes: 600,
                },
                {
                    id: 6,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Seiko Watch',
                    price: '$500',
                    likes: 250,
                    status: 'reserved',
                },
                {
                    id: 7,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Luxury Handbag',
                    price: '$1500',
                    likes: 300,
                    status: 'received',
                },
                {
                    id: 8,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Nike Sneakers',
                    price: '$200',
                    likes: 450,
                    status: 'received',
                },
                {
                    id: 9,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'GoPro Camera',
                    price: '$450',
                    likes: 670,
                    status: 'received',
                },
                {
                    id: 10,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Samsung Galaxy S21',
                    price: '$900',
                    likes: 500,
                    status: 'received',
                },
                {
                    id: 11,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'PlayStation 5',
                    price: '$500',
                    likes: 800,
                    status: 'myWishes',
                },
                {
                    id: 12,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Canon DSLR Camera',
                    price: '$1200',
                    likes: 950,
                    status: 'reserved',
                },
                {
                    id: 13,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Chanel Perfume',
                    price: '$300',
                    likes: 400,
                    status: 'received',
                },
                {
                    id: 14,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Gucci Belt',
                    price: '$450',
                    likes: 380,
                    status: 'myWishes',
                },
                {
                    id: 15,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'AirPods Pro',
                    price: '$250',
                    likes: 720,
                    status: 'myWishes',
                },
                {
                    id: 16,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Sony Headphones',
                    price: '$350',
                    likes: 620,
                    status: 'received',
                },
                {
                    id: 17,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Rolex Watch',
                    price: '$8000',
                    likes: 1200,
                    status: 'myWishes',
                },
                {
                    id: 18,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Tesla Model 3',
                    price: '$35000',
                    likes: 4500,
                    status: 'reserved',
                },
                {
                    id: 19,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Louis Vuitton Shoes',
                    price: '$1100',
                    likes: 850,
                    status: 'received',
                },
                {
                    id: 20,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Oculus VR Headset',
                    price: '$400',
                    likes: 950,
                    status: 'myWishes',
                },
            ],
        };

    },

    computed: {
        filteredWishes() {
            // Filter wishes based on the active tab
            return this.wishes.filter(wish => wish.status === this.activeTab);
        },
        showPrevWish() {
            return this.wishes.find(wish => wish.id === this.showPrevWish);
        },

    },

    methods: {

        closeCreateWishModal(){
            this.showCreateWishModal = false
        },

        prevWish(wishId) {
            this.showWishDetailsModal = true
            this.showPrevWish = this.showPrevWish === wishId ? null : wishId
        },

        closeWishDetailsModal() {
            this.showWishDetailsModal = false; // Hide the wish details modal
            this.showPrevWish = null
        },
        setActiveTab(tab) {
            this.activeTab = tab;
        },
        handleToggleDropdown(wishId) {
            this.openDropdownId = this.openDropdownId === wishId ? null : wishId;
        },
        handleCloseDropdown() {
            this.openDropdownId = null;
        },
    },

};
</script>
