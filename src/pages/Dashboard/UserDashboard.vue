<template>
<div class="bg-gray-100">
    <AppHeader />
    <div class="container mx-auto pt-20">
        <ProfileCover />
        <ProfileDetails />
        <TabNavigationsWishlist :activeTab="activeTab" @switchTab="setActiveTab" />

        <div v-if="activeTab == 'myWishes'" class="grid grid-cols-4 gap-6 px-12 bg-white" @mouseleave="handleCloseDropdown">
            <div class="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-4 my-8 cursor-pointer" @click=" addNewWishList">
                <div class="flex items-center justify-center w-12 h-12 bg-black rounded-full mb-4">
                    <img src="/assets/add.svg" alt="Add" class="h-5 w-5" />
                </div>
                <div class="text-lg font-medium text-center text-gray-800 leading-relaxed">
                    Make a New wishlist
                </div>
            </div>

            <WishlistCard v-for="wishlist in filteredWishlist" :key="wishlist.id" :wishlist="wishlist" :openDropdownId="openDropdownId" @toggleDropdown="handleToggleDropdown" @closeDropdown="handleCloseDropdown" />
        </div>

        <ReservedWishes v-if="activeTab == 'reserved'" :wishes="wishes" @preview="prevWish" />
        <SavedWishes v-if="activeTab == 'saved'" :wishes="filteredSavedWish" @preview="prevWish" />

        <!-- Conditionally show the modals -->
        <Popup v-if="showInitialModal" @close="closeInitialModal" />

        <CategoryPopup v-if="showCategoryModal" @close="closeCategoryModal" @showCreateWishlistModal="showCreateWishlistModal = true" />

        <CreatedWishlistModal v-if="showCreatedWishlistModal" @close="closeCreatedWishlistModal" title=" New Wishlist Created! ✨" description=" Your wishlist is live and ready to shine! Start adding those dream wish items and share it with friends to get the gifts you’ve been wishing for." viewWishlistText="View Wishlist" makeAWishText="Make a Wish" />

        <CreateWishlistModal @createWishList="createWishList" v-if="showCreateWishlistModal" @close="closeCreateWishlistModal" />

        <WishDetailView v-if="showWishDetailsModal" @close="closeWishDetailsModal" :wish="showPrevWish" />

        <!-- New Analytics Modal -->
        <AnalyticsModal v-if="showAnalyticsModal" :wishlists="wishlists" @close="closeAnalyticsModal" />
    </div>
</div>
</template>

<script>
import AppHeader from '@/components/Dashboard/AppHeader.vue';
import ProfileCover from '@/components/Dashboard/ProfileCover.vue';
import ProfileDetails from '@/components/Dashboard/ProfileDetails.vue';
import TabNavigationsWishlist from '@/components/Dashboard/TabNavigationsWishlist.vue';
import WishlistCard from '@/components/Dashboard/WishlistCard.vue';
import Popup from '@/components/Dashboard/Popup.vue';
import CreateWishlistModal from '@/components/Dashboard/CreateWishlistModal.vue';
import CategoryPopup from '@/components/Dashboard/CategoryPopup.vue';
import ReservedWishes from '@/components/Dashboard/ReservedWishes.vue';
import SavedWishes from '@/components/Dashboard/SavedWishes.vue';

import CreatedWishlistModal from '@/components/Dashboard/CreatedWishlistModal.vue';

import WishDetailView from '@/components/Dashboard/WishDetailView.vue';
import AnalyticsModal from '@/components/Dashboard/AnalyticsModal.vue'; // import the new AnalyticsModal component

export default {
    components: {
        AppHeader,
        CreatedWishlistModal,
        ProfileCover,
        ProfileDetails,
        TabNavigationsWishlist,
        WishlistCard,
        Popup,
        CategoryPopup,
        CreateWishlistModal,
        ReservedWishes,
        SavedWishes,
        WishDetailView,
        AnalyticsModal // register the new component
    },
    data() {
        return {

            showAnalyticsModal:true, 
            showPrevWish: null,
            showWishDetailsModal: false,

            showCreatedWishlistModal: false,
            showCategoryModal: false, // Control modal visibility
            showInitialModal: true, // Control initial modal visibility
            showCreateWishlistModal: false, // Control create wishlist modal visibility
            openDropdownId: null, // Track which dropdown is open by its ID
            activeTab: 'myWishes', // Track the active tab
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
            wishes: [{
                    id: 1,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Hermes Birkin Bag',
                    price: '$400',
                    likes: 200,
                    status: 'myWishes'
                },
                {
                    id: 2,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Apple Watch',
                    price: '$350',
                    likes: 150,
                    status: 'reserved'
                },
                {
                    id: 3,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Diamond Necklace',
                    price: '$2000',
                    likes: 1000,
                    status: 'reserved'
                },
                {
                    id: 4,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'MacBook Pro',
                    price: '$2500',
                    likes: 800,
                    status: 'myWishes'
                },
                {
                    id: 5,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'iPhone 14 Pro Max',
                    price: '$1200',
                    likes: 600,
                    status: 'myWishes'
                },
                {
                    id: 6,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Seiko Dive Watch',
                    price: '$500',
                    likes: 250,
                    status: 'reserved'
                },
                {
                    id: 7,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Luxury Leather Handbag',
                    price: '$1500',
                    likes: 300,
                    status: 'received'
                },
                {
                    id: 8,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Nike Air Max Sneakers',
                    price: '$200',
                    likes: 450,
                    status: 'received'
                },
                {
                    id: 9,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'GoPro Hero Camera',
                    price: '$450',
                    likes: 670,
                    status: 'received'
                },
                {
                    id: 10,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Samsung Galaxy S21 Ultra',
                    price: '$900',
                    likes: 500,
                    status: 'received'
                },
                {
                    id: 11,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Fender Stratocaster Guitar',
                    price: '$1200',
                    likes: 700,
                    status: 'fulfilled'
                },
                {
                    id: 12,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'PlayStation 5',
                    price: '$500',
                    likes: 1100,
                    status: 'fulfilled'
                },
                {
                    id: 13,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'DJI Drone',
                    price: '$1200',
                    likes: 900,
                    status: 'fulfilled'
                },
                {
                    id: 14,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Canon EOS R5 Camera',
                    price: '$3900',
                    likes: 950,
                    status: 'myWishes'
                },
                {
                    id: 15,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Bose Noise Cancelling Headphones',
                    price: '$300',
                    likes: 800,
                    status: 'reserved'
                },
                {
                    id: 16,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Oculus Quest 2 VR Headset',
                    price: '$400',
                    likes: 1200,
                    status: 'reserved'
                },
                {
                    id: 17,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Ray-Ban Sunglasses',
                    price: '$180',
                    likes: 500,
                    status: 'received'
                },
                {
                    id: 18,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Gucci Loafers',
                    price: '$700',
                    likes: 950,
                    status: 'myWishes'
                },
                {
                    id: 19,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Yamaha Electric Keyboard',
                    price: '$600',
                    likes: 400,
                    status: 'received'
                },
                {
                    id: 20,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Samsung 4K TV',
                    price: '$1200',
                    likes: 600,
                    status: 'fulfilled'
                },
                {
                    id: 21,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Tag Heuer Carrera Watch',
                    price: '$1800',
                    likes: 700,
                    status: 'received'
                },
                {
                    id: 22,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Microsoft Surface Laptop',
                    price: '$1500',
                    likes: 800,
                    status: 'myWishes'
                },
                {
                    id: 23,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Louis Vuitton Scarf',
                    price: '$300',
                    likes: 500,
                    status: 'reserved'
                },
                {
                    id: 24,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Chanel Perfume',
                    price: '$120',
                    likes: 1000,
                    status: 'received'
                },
                {
                    id: 25,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Sonos Wireless Speaker',
                    price: '$350',
                    likes: 950,
                    status: 'fulfilled'
                },
                {
                    id: 26,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Fitbit Charge 5',
                    price: '$180',
                    likes: 600,
                    status: 'fulfilled'
                },
                {
                    id: 27,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Razer Gaming Mouse',
                    price: '$80',
                    likes: 500,
                    status: 'reserved'
                },
                {
                    id: 28,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'KitchenAid Stand Mixer',
                    price: '$400',
                    likes: 750,
                    status: 'myWishes'
                },
                {
                    id: 29,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Moncler Down Jacket',
                    price: '$1300',
                    likes: 800,
                    status: 'received'
                },
                {
                    id: 30,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Apple iPad Pro',
                    price: '$1000',
                    likes: 900,
                    status: 'reserved'
                },
                {
                    id: 31,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Beats Studio Headphones',
                    price: '$350',
                    likes: 600,
                    status: 'received'
                },
                {
                    id: 32,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Peloton Bike',
                    price: '$2200',
                    likes: 1100,
                    status: 'fulfilled'
                },
                {
                    id: 33,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Montblanc Pen',
                    price: '$600',
                    likes: 500,
                    status: 'fulfilled'
                },
                {
                    id: 34,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Leica M11 Camera',
                    price: '$9000',
                    likes: 1200,
                    status: 'myWishes'
                },
                {
                    id: 35,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Dyson Airwrap Styler',
                    price: '$500',
                    likes: 950,
                    status: 'reserved'
                },
                {
                    id: 36,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Tesla Model S',
                    price: '$89900',
                    likes: 1500,
                    status: 'myWishes'
                },
                {
                    id: 37,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Burberry Trench Coat',
                    price: '$1800',
                    likes: 900,
                    status: 'received'
                },
                {
                    id: 38,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Apple AirPods Max',
                    price: '$550',
                    likes: 700,
                    status: 'fulfilled'
                },
                {
                    id: 39,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Nintendo Switch OLED',
                    price: '$350',
                    likes: 1100,
                    status: 'reserved'
                },
                {
                    id: 40,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Tiffany & Co. Bracelet',
                    price: '$1200',
                    likes: 1000,
                    status: 'myWishes'
                },
                {
                    id: 41,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Tiffany & Co. Bracelet',
                    price: '$1200',
                    likes: 1000,
                    status: 'saved'
                },
                {
                    id: 42,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Tiffany & Co. Bracelet 42',
                    price: '$1200',
                    likes: 1000,
                    status: 'saved'
                },
                {
                    id: 43,
                    image: './assets/wishlist-category-placeholder.svg',
                    title: 'Tiffany & Co. Bracelet 43',
                    price: '$1200',
                    likes: 1000,
                    status: 'saved'
                },
            ]
        };
    },
    computed: {
        filteredWishlist() {
            // Filter wishes based on the active tab
            return this.wishlists.filter((wishlist) => wishlist.status === this.activeTab);
        },
        showPrevWish() {
            return this.wishes.find(wish => wish.id === this.showPrevWish);
        },
        filteredSavedWish() {
            return this.wishes.filter((wishes) => wishes.status === this.activeTab);
        },
    },
    methods: {

        closeAnalyticsModal() {
            this.showAnalyticsModal = false; // Hide the analytics modal
        },

        prevWish(wishId) {
            this.showWishDetailsModal = true
            this.showPrevWish = this.showPrevWish === wishId ? null : wishId
        },
        closeWishDetailsModal() {
            this.showWishDetailsModal = false; // Hide the wish details modal
            this.showPrevWish = null
        },

        createWishList() {
            this.showCreatedWishlistModal = true

            this.showCreateWishlistModal = false; // Hide the create wishlist modal

        },

        closeCreatedWishlistModal() {
            this.showCreateWishlistModal = false;
        },

        addNewWishList() {
            this.showCategoryModal = true
        },
        closeCategoryModal() {
            this.showCategoryModal = false

        },

        setActiveTab(tab) {
            this.activeTab = tab;
        },
        closeInitialModal() {
            this.showInitialModal = false; // Hide the initial modal
        },
        closeCreateWishlistModal() {
            this.showCreateWishlistModal = false; // Hide the create wishlist modal
        },
        handleToggleDropdown(wishlistId) {
            // If the clicked dropdown is already open, close it
            this.openDropdownId = this.openDropdownId === wishlistId ? null : wishlistId;
        },
        handleCloseDropdown() {
            // If the clicked dropdown is already open, close it
            this.openDropdownId = null;
        },
    },
};
</script>
