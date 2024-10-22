<template>
<div class="bg-gray-100">
    <AppHeader @showCategoryModal="$emit('showCategoryModal')" />
    <div class="container mx-auto lg:pt-20 lg:py-20">
        <div class="flex justify-center items-center pt-20 mt-10 rounded-t-lg bg-black lg:bg-white">
            <SearchComponent @startSearch="startSearch" @selectOption="selectOption" :selectedOption="selectedOption" />
        </div>
        <TabNavigationsWishlist2 v-if="!isSearching" :activeTab="activeTab" @switchTab="setActiveTab" class=" pt-4 lg:pt-20" />
        <FriendorWishlist v-if="!isSearching" :activeTab="activeTab" :wishlists="wishlists" @preview="prevWish" />
         
        <SearchResultsComponent  v-if="isSearching" :results="searchResults" :search="search" :selectedOption="selectedOption" />

        
        <!-- Conditionally show the modals -->
        <CategoryPopup v-if="showCategoryModal" @close="closeCategoryModal" @showCreateWishlistModal="showCreateWishlistModal = true" />
        <CreatedWishlistModal v-if="showCreatedWishlistModal" @close="closeCreatedWishlistModal" title="New Wishlist Created! ✨" description="Your wishlist is live and ready to shine! Start adding those dream wish items and share it with friends to get the gifts you’ve been wishing for." viewWishlistText="View Wishlist" makeAWishText="Make a Wish" />
        <CreateWishlistModal @createWishList="createWishList" v-if="showCreateWishlistModal" @close="closeCreateWishlistModal" />
        <WishDetailView v-if="showWishDetailsModal" @close="closeWishDetailsModal" :wish="showPrevWish" />
    </div>
</div>
</template>

  
<script>
import AppHeader from '@/components/Dashboard/AppHeader.vue';
import TabNavigationsWishlist2 from '@/components/Dashboard/TabNavigationsWishlist2.vue';
import FriendorWishlist from '@/components/Dashboard/FriendorWishlist.vue';
import Popup from '@/components/Dashboard/Popup.vue';
import CategoryPopup from '@/components/Dashboard/CategoryPopup.vue';
import CreateWishlistModal from '@/components/Dashboard/CreateWishlistModal.vue';
import SearchComponent from '@/components/Dashboard/SearchComponent.vue';
import SearchResultsComponent from '@/components/Dashboard/SearchResultsComponent.vue';
import CreatedWishlistModal from '@/components/Dashboard/CreatedWishlistModal.vue';
import WishDetailView from '@/components/Dashboard/WishDetailView.vue';

export default {
    components: {
        AppHeader,
        TabNavigationsWishlist2,
        FriendorWishlist,
        Popup,
        CategoryPopup,
        CreateWishlistModal,
        SearchComponent,
        SearchResultsComponent,
        CreatedWishlistModal,
        WishDetailView,
    },
    data() {
        return {
            search: null,
            showPrevWish: null,
            showWishDetailsModal: false,
            showCreatedWishlistModal: false,
            showCategoryModal: false,
            showInitialModal: true,
            showCreateWishlistModal: false,
            openDropdownId: null,
            activeTab: 'Wishes',
            wishlists: [{
                    id: 1,
                    title: 'My 25th Birthday',
                    imgSrc: '/assets/13-1.svg',
                    category: 'Birthday wishlist',
                    wishes: 10,
                    status: 'raining'
                },
                {
                    id: 2,
                    title: 'Holiday trip',
                    imgSrc: '/assets/9-594697.svg',
                    category: 'Holiday wishlist',
                    wishes: 15,
                    status: 'recently-added'
                },
                {
                    id: 3,
                    title: 'Dream Wedding',
                    imgSrc: '/assets/13-2.svg',
                    category: 'Wedding wishlist',
                    wishes: 8,
                    status: 'reserved-for-friends'
                },
                {
                    id: 4,
                    title: 'Summer Vacation',
                    imgSrc: '/assets/9-3.svg',
                    category: 'Vacation wishlist',
                    wishes: 12,
                    status: 'trending'
                },
                {
                    id: 5,
                    title: 'Gadget Wishlist',
                    imgSrc: '/assets/14-1.svg',
                    category: 'Tech wishlist',
                    wishes: 18,
                    status: 'popular'
                },
                {
                    id: 6,
                    title: 'Holiday trip',
                    imgSrc: '/assets/9-594697.svg',
                    category: 'Holiday wishlist',
                    wishes: 15,
                    status: 'trending'
                },
                {
                    id: 7,
                    title: 'New Year Resolutions',
                    imgSrc: '/assets/11-1.svg',
                    category: 'Personal wishlist',
                    wishes: 7,
                    status: 'reserved-for-friends'
                },
                {
                    id: 8,
                    title: 'Travel Essentials',
                    imgSrc: '/assets/12-1.svg',
                    category: 'Travel wishlist',
                    wishes: 9,
                    status: 'recently-added'
                },
                {
                    id: 9,
                    title: 'Christmas Gifts',
                    imgSrc: '/assets/13-3.svg',
                    category: 'Christmas wishlist',
                    wishes: 20,
                    status: 'raining'
                },
                {
                    id: 10,
                    title: 'Fitness Goals',
                    imgSrc: '/assets/15-1.svg',
                    category: 'Health wishlist',
                    wishes: 11,
                    status: 'reserved-for-friends'
                },
                {
                    id: 11,
                    title: 'Back to School',
                    imgSrc: '/assets/16-1.svg',
                    category: 'School wishlist',
                    wishes: 5,
                    status: 'trending'
                },
                {
                    id: 12,
                    title: 'Dream Car',
                    imgSrc: '/assets/17-1.svg',
                    category: 'Auto wishlist',
                    wishes: 1,
                    status: 'popular'
                },
                {
                    id: 13,
                    title: 'Birthday Bash',
                    imgSrc: '/assets/13-4.svg',
                    category: 'Birthday wishlist',
                    wishes: 13,
                    status: 'reserved'
                },
                {
                    id: 14,
                    title: 'Music Wishlist',
                    imgSrc: '/assets/14-2.svg',
                    category: 'Music wishlist',
                    wishes: 6,
                    status: 'raining'
                },
                {
                    id: 15,
                    title: 'Home Renovation',
                    imgSrc: '/assets/18-1.svg',
                    category: 'Home wishlist',
                    wishes: 3,
                    status: 'recently-added'
                },
                {
                    id: 16,
                    title: 'Luxury Watches',
                    imgSrc: '/assets/19-1.svg',
                    category: 'Fashion wishlist',
                    wishes: 16,
                    status: 'reserved'
                },
                {
                    id: 17,
                    title: 'Photography Gear',
                    imgSrc: '/assets/20-1.svg',
                    category: 'Tech wishlist',
                    wishes: 10,
                    status: 'popular'
                },
                {
                    id: 18,
                    title: 'Art Collection',
                    imgSrc: '/assets/21-1.svg',
                    category: 'Art wishlist',
                    wishes: 9,
                    status: 'reserved'
                },
                {
                    id: 19,
                    title: 'Charity Wishlist',
                    imgSrc: '/assets/22-1.svg',
                    category: 'Giving wishlist',
                    wishes: 12,
                    status: 'raining'
                },
                {
                    id: 20,
                    title: 'Anniversary Celebration',
                    imgSrc: '/assets/23-1.svg',
                    category: 'Anniversary wishlist',
                    wishes: 8,
                    status: 'recently-added'
                },
                {
                    id: 21,
                    title: 'Business Startup',
                    imgSrc: '/assets/24-1.svg',
                    category: 'Business wishlist',
                    wishes: 4,
                    status: 'popular'
                },
                {
                    id: 22,
                    title: 'New House Furniture',
                    imgSrc: '/assets/25-1.svg',
                    category: 'Home wishlist',
                    wishes: 14,
                    status: 'reserved-for-friends'
                },
                {
                    id: 23,
                    title: 'Camping Adventure',
                    imgSrc: '/assets/26-1.svg',
                    category: 'Adventure wishlist',
                    wishes: 6,
                    status: 'raining'
                },
                {
                    id: 24,
                    title: 'Family Reunion',
                    imgSrc: '/assets/27-1.svg',
                    category: 'Family wishlist',
                    wishes: 10,
                    status: 'trending'
                },
                {
                    id: 25,
                    title: 'DIY Projects',
                    imgSrc: '/assets/28-1.svg',
                    category: 'Hobby wishlist',
                    wishes: 11,
                    status: 'recently-added'
                },
                {
                    id: 26,
                    title: 'Birthday Gifts',
                    imgSrc: '/assets/13-5.svg',
                    category: 'Birthday wishlist',
                    wishes: 12,
                    status: 'reserved'
                },
                {
                    id: 27,
                    title: 'Luxury Handbags',
                    imgSrc: '/assets/29-1.svg',
                    category: 'Fashion wishlist',
                    wishes: 15,
                    status: 'popular'
                },
                {
                    id: 28,
                    title: 'Road Trip',
                    imgSrc: '/assets/9-1.svg',
                    category: 'Holiday wishlist',
                    wishes: 8,
                    status: 'trending'
                },
                {
                    id: 29,
                    title: 'Winter Wonderland',
                    imgSrc: '/assets/30-1.svg',
                    category: 'Holiday wishlist',
                    wishes: 9,
                    status: 'raining'
                },
                {
                    id: 30,
                    title: 'New Year Party',
                    imgSrc: '/assets/11-2.svg',
                    category: 'Event wishlist',
                    wishes: 10,
                    status: 'recently-added'
                },
                {
                    id: 31,
                    title: 'Spring Break',
                    imgSrc: '/assets/31-1.svg',
                    category: 'Vacation wishlist',
                    wishes: 7,
                    status: 'popular'
                },
                {
                    id: 32,
                    title: 'Wedding Gifts',
                    imgSrc: '/assets/32-1.svg',
                    category: 'Wedding wishlist',
                    wishes: 10,
                    status: 'reserved'
                },
                {
                    id: 33,
                    title: 'Concert Tickets',
                    imgSrc: '/assets/33-1.svg',
                    category: 'Music wishlist',
                    wishes: 12,
                    status: 'trending'
                },
                {
                    id: 34,
                    title: 'Luxury Skincare',
                    imgSrc: '/assets/34-1.svg',
                    category: 'Fashion wishlist',
                    wishes: 5,
                    status: 'raining'
                },
                {
                    id: 35,
                    title: 'Dream Vacation',
                    imgSrc: '/assets/35-1.svg',
                    category: 'Travel wishlist',
                    wishes: 9,
                    status: 'popular'
                },
                {
                    id: 36,
                    title: 'Birthday Surprises',
                    imgSrc: '/assets/13-6.svg',
                    category: 'Birthday wishlist',
                    wishes: 11,
                    status: 'recently-added'
                },
                {
                    id: 37,
                    title: 'Luxury Cars',
                    imgSrc: '/assets/36-1.svg',
                    category: 'Auto wishlist',
                    wishes: 7,
                    status: 'trending'
                },
                {
                    id: 38,
                    title: 'Backyard Remodel',
                    imgSrc: '/assets/37-1.svg',
                    category: 'Home wishlist',
                    wishes: 8,
                    status: 'reserved-for-friends'
                },
                {
                    id: 39,
                    title: 'Golf Equipment',
                    imgSrc: '/assets/38-1.svg',
                    category: 'Sport wishlist',
                    wishes: 4,
                    status: 'popular'
                },
                {
                    id: 40,
                    title: 'Fashion Week Essentials',
                    imgSrc: '/assets/39-1.svg',
                    category: 'Fashion wishlist',
                    wishes: 13,
                    status: 'recently-added'
                },
            ],
            users: [{
                    id: 1,
                    name: 'Ayomide Shotayo',
                    username: '@ayomide_sm',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 10,
                    friends: '200k',
                    likes: 300,
                    friendStatus: 'not-friends',
                },
                {
                    id: 2,
                    name: 'Samuel Doe',
                    username: '@sam_doe',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 8,
                    friends: '150k',
                    likes: 500,
                    friendStatus: 'friends',
                },
                {
                    id: 3,
                    name: 'Mia Johnson',
                    username: '@mia_j',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 5,
                    friends: '100k',
                    likes: 450,
                    friendStatus: 'not-friends',
                },
                {
                    id: 4,
                    name: 'Elena Martin',
                    username: '@elena_m',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 12,
                    friends: '250k',
                    likes: 600,
                    friendStatus: 'friends',
                },
                {
                    id: 5,
                    name: 'John Smith',
                    username: '@johnsmith',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 7,
                    friends: '300k',
                    likes: 350,
                    friendStatus: 'not-friends',
                },
                {
                    id: 6,
                    name: 'Sophia Lee',
                    username: '@sophia_lee',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 6,
                    friends: '190k',
                    likes: 270,
                    friendStatus: 'friends',
                },
                {
                    id: 7,
                    name: 'Oliver Brown',
                    username: '@oliverb',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 10,
                    friends: '220k',
                    likes: 310,
                    friendStatus: 'friends',
                },
                {
                    id: 8,
                    name: 'Emma Davis',
                    username: '@emmad',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 9,
                    friends: '180k',
                    likes: 290,
                    friendStatus: 'not-friends',
                },
                {
                    id: 9,
                    name: 'Liam Wilson',
                    username: '@liamwilson',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 11,
                    friends: '210k',
                    likes: 410,
                    friendStatus: 'friends',
                },
                {
                    id: 10,
                    name: 'Chloe Nguyen',
                    username: '@chloen',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 8,
                    friends: '170k',
                    likes: 370,
                    friendStatus: 'not-friends',
                },
                {
                    id: 11,
                    name: 'Ethan Garcia',
                    username: '@ethang',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 7,
                    friends: '240k',
                    likes: 330,
                    friendStatus: 'friends',
                },
                {
                    id: 12,
                    name: 'Ava Taylor',
                    username: '@avataylor',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 9,
                    friends: '260k',
                    likes: 350,
                    friendStatus: 'not-friends',
                },
                {
                    id: 13,
                    name: 'William Anderson',
                    username: '@william_a',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 6,
                    friends: '160k',
                    likes: 250,
                    friendStatus: 'friends',
                },
                {
                    id: 14,
                    name: 'Amelia Clark',
                    username: '@amelia_c',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 5,
                    friends: '140k',
                    likes: 280,
                    friendStatus: 'not-friends',
                },
                {
                    id: 15,
                    name: 'James Lee',
                    username: '@jameslee',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 10,
                    friends: '230k',
                    likes: 320,
                    friendStatus: 'friends',
                },
                {
                    id: 16,
                    name: 'Lily Perez',
                    username: '@lilyp',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 8,
                    friends: '210k',
                    likes: 270,
                    friendStatus: 'not-friends',
                },
                {
                    id: 17,
                    name: 'Henry Thompson',
                    username: '@henry_t',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 6,
                    friends: '190k',
                    likes: 230,
                    friendStatus: 'friends',
                },
                {
                    id: 18,
                    name: 'Sophie Martinez',
                    username: '@sophiem',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 7,
                    friends: '170k',
                    likes: 260,
                    friendStatus: 'not-friends',
                },
                {
                    id: 19,
                    name: 'Mason Robinson',
                    username: '@mason_r',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 9,
                    friends: '220k',
                    likes: 310,
                    friendStatus: 'friends',
                },
                {
                    id: 20,
                    name: 'Isabella Lewis',
                    username: '@isabellal',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 8,
                    friends: '180k',
                    likes: 290,
                    friendStatus: 'not-friends',
                },
                {
                    id: 21,
                    name: 'Logan White',
                    username: '@loganwhite',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 7,
                    friends: '250k',
                    likes: 340,
                    friendStatus: 'friends',
                },
                {
                    id: 22,
                    name: 'Grace Walker',
                    username: '@gracew',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 6,
                    friends: '230k',
                    likes: 270,
                    friendStatus: 'not-friends',
                },
                {
                    id: 23,
                    name: 'Lucas Young',
                    username: '@lucas_y',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 11,
                    friends: '210k',
                    likes: 360,
                    friendStatus: 'friends',
                },
                {
                    id: 24,
                    name: 'Charlotte King',
                    username: '@charlottek',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 5,
                    friends: '240k',
                    likes: 300,
                    friendStatus: 'not-friends',
                },
                {
                    id: 25,
                    name: 'Benjamin Scott',
                    username: '@benjamins',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 9,
                    friends: '180k',
                    likes: 310,
                    friendStatus: 'friends',
                },
                {
                    id: 26,
                    name: 'Mila Harris',
                    username: '@mila_h',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 6,
                    friends: '200k',
                    likes: 290,
                    friendStatus: 'not-friends',
                },
                {
                    id: 27,
                    name: 'Daniel Ramirez',
                    username: '@danielr',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 8,
                    friends: '220k',
                    likes: 330,
                    friendStatus: 'friends',
                },
                {
                    id: 28,
                    name: 'Evelyn Carter',
                    username: '@evelync',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 10,
                    friends: '210k',
                    likes: 310,
                    friendStatus: 'not-friends',
                },
                {
                    id: 29,
                    name: 'Matthew Gonzales',
                    username: '@mattgonz',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 7,
                    friends: '230k',
                    likes: 350,
                    friendStatus: 'friends',
                },
                {
                    id: 30,
                    name: 'Harper Flores',
                    username: '@harperf',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 5,
                    friends: '160k',
                    likes: 260,
                    friendStatus: 'not-friends',
                },
                {
                    id: 31,
                    name: 'Sebastian Powell',
                    username: '@sebastianp',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 9,
                    friends: '250k',
                    likes: 370,
                    friendStatus: 'friends',
                },
                {
                    id: 32,
                    name: 'Ella Hughes',
                    username: '@ellah',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 6,
                    friends: '180k',
                    likes: 270,
                    friendStatus: 'not-friends',
                },
                {
                    id: 33,
                    name: 'Jackson Ward',
                    username: '@jacksonw',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 10,
                    friends: '220k',
                    likes: 340,
                    friendStatus: 'friends',
                },
                {
                    id: 34,
                    name: 'Avery Hall',
                    username: '@averyh',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 7,
                    friends: '190k',
                    likes: 310,
                    friendStatus: 'not-friends',
                },
                {
                    id: 35,
                    name: 'Owen Allen',
                    username: '@owen_a',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 8,
                    friends: '200k',
                    likes: 320,
                    friendStatus: 'friends',
                },
                {
                    id: 36,
                    name: 'Scarlett Howard',
                    username: '@scarlett_h',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 6,
                    friends: '180k',
                    likes: 280,
                    friendStatus: 'not-friends',
                },
                {
                    id: 37,
                    name: 'Gabriel Phillips',
                    username: '@gabrielp',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 9,
                    friends: '240k',
                    likes: 350,
                    friendStatus: 'friends',
                },
                {
                    id: 38,
                    name: 'Victoria Torres',
                    username: '@victoriat',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 8,
                    friends: '170k',
                    likes: 300,
                    friendStatus: 'not-friends',
                },
                {
                    id: 39,
                    name: 'Dylan Brooks',
                    username: '@dylan_b',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 7,
                    friends: '230k',
                    likes: 310,
                    friendStatus: 'friends',
                },
                {
                    id: 40,
                    name: 'Layla Sanders',
                    username: '@laylas',
                    imgSrc: '/assets/profile-7.svg',
                    wishlists: 6,
                    friends: '160k',
                    likes: 280,
                    friendStatus: 'not-friends',
                }
            ],
            isSearching: false,
            searchResults: [],
            selectedOption: 'Friends', // 'Friends' or 'Wishlist'
        };
    },
    methods: {
        prevWish(wishId) {
            this.showWishDetailsModal = true;
            this.showPrevWish = this.showPrevWish === wishId ? null : wishId;
        },
        closeWishDetailsModal() {
            this.showWishDetailsModal = false;
            this.showPrevWish = null;
        },
        createWishList() {
            this.showCreatedWishlistModal = true;
            this.showCreateWishlistModal = false;
        },
        closeCreatedWishlistModal() {
            this.showCreateWishlistModal = false;
        },
        addNewWishList() {
            this.showCategoryModal = true;
        },
        closeCategoryModal() {
            this.showCategoryModal = false;
        },
        setActiveTab(tab) {
            this.activeTab = tab;
        },
        closeInitialModal() {
            this.showInitialModal = false;
        },
        closeCreateWishlistModal() {
            this.showCreateWishlistModal = false;
        },
        handleToggleDropdown(wishlistId) {
            this.openDropdownId = this.openDropdownId === wishlistId ? null : wishlistId;
        },
        handleCloseDropdown() {
            this.openDropdownId = null;
        },
        startSearch(query) {
            this.search = query;
            if (query) {
                if (this.selectedOption === 'Friends') {
                    this.searchResults = this.users.filter(user =>
                        user.name.toLowerCase().includes(query.toLowerCase()) ||
                        user.username.toLowerCase().includes(query.toLowerCase())
                    );
                } else {
                    this.searchResults = this.wishlists.filter(wishlist =>
                        wishlist.title.toLowerCase().includes(query.toLowerCase()) ||
                        wishlist.category.toLowerCase().includes(query.toLowerCase())
                    );
                }
                this.isSearching = true;
            } else {
                this.isSearching = false;
            }
        },
        selectOption(option) {
            this.selectedOption = option;
            this.isSearching = false; // Reset search state when option changes
        }
    },
};
</script>
