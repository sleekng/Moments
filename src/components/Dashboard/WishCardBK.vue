<template>
<div>

    <div @click="preview" :class="classList" class="bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden relative card group flex-shrink-0  md:w-auto">
        <div class="relative ">
            <img :src="wish.image" alt="Wishlist Item" class="w-full h-[200px] md:h-[360px] object-cover">
            <!-- Toggle Menu Button, shown only on hover -->
            <button @click.stop="toggleMenu" v-if="wish.status !='saved'" class="absolute z-30 top-3 right-2 p-1 bg-gray-200 rounded-full toggle-menu-button transition-opacity opacity-0 group-hover:opacity-100">
                <img src="/assets/frame-1618868216.svg" alt="Menu" class="h-6 w-6" />
            </button>

            <!-- DropdownMenu Received-->
            <template v-if="wish.status == 'received'">
                <div v-if="isDropdownOpen" @mouseleave="closeMenu" class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">
                    <div class="flex items-center p-2  hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                        <img src="/assets/edit.svg" class="w-4 h-4" alt="Edit" />
                        <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Edit wish</span>
                    </div>
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                        <img src="/assets/close-circle.svg" class="w-4 h-4" alt="Delete" />
                        <span class="ml-2 text-gray-800  w-full hover:text-primaryColor font-medium">Delete</span>
                    </div>
                </div>
            </template>

            <!-- DropdownMenu Reserved-->
            <template v-if="wish.status == 'reserved'">
                <div v-if="isDropdownOpen" @mouseleave="closeMenu" class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">

                        <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 2.0625C6.072 2.0625 2.0625 6.072 2.0625 11C2.0625 15.928 6.072 19.9375 11 19.9375C15.928 19.9375 19.9375 15.928 19.9375 11C19.9375 6.072 15.928 2.0625 11 2.0625ZM15.6512 8.00433L9.87617 14.8793C9.81298 14.9549 9.73426 15.0159 9.64536 15.0583C9.55646 15.1007 9.45948 15.1235 9.361 15.125H9.34908C9.2528 15.125 9.1576 15.1047 9.06965 15.0656C8.98169 15.0264 8.90294 14.9692 8.8385 14.8977L6.3635 12.1477C6.254 12.0299 6.18918 11.8775 6.18028 11.717C6.17138 11.5564 6.21897 11.3978 6.31479 11.2687C6.41061 11.1395 6.54861 11.048 6.70485 11.01C6.8611 10.972 7.02572 10.9898 7.17017 11.0605C7.25267 11.1018 7.326 11.1586 7.38467 11.2273L9.33075 13.3907L14.5988 7.12067C14.7181 6.98837 14.8841 6.90755 15.0618 6.89522C15.2395 6.88289 15.4151 6.94002 15.5515 7.05458C15.6879 7.16913 15.7746 7.33217 15.7932 7.50933C15.8117 7.68649 15.7608 7.86396 15.6512 8.00433Z" fill="#000000" />
                        </svg>

                        <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Mark as fulfilled</span>
                    </div>
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                        <img src="/assets/gift-icon.svg" class="w-4 h-4" alt="Edit" />
                        <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Add to my wishlist</span>
                    </div>
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                        <img src="/assets/close-circle.svg" class="w-4 h-4" alt="Delete" />
                        <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Cancel reservation</span>
                    </div>
                </div>
            </template>

            <!-- DropdownMenu FulFilled-->
            <template v-if="wish.status == 'fulfilled'">
                <div v-if="isDropdownOpen" @mouseleave="closeMenu" class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">

                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer  border-gray-200">
                        <img src="/assets/gift-icon.svg" class="w-4 h-4" alt="Edit" />
                        <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Add to my wishlist</span>
                    </div>
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                        <img src="/assets/close-circle.svg" class="w-4 h-4" alt="Delete" />
                        <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Remove from fulfilled</span>
                    </div>
                </div>
            </template>

            <!-- DropdownMenu myWishes -->
            <template v-if="wish.status == 'myWishes'">
                <div v-if="isDropdownOpen" @mouseleave="closeMenu" class="w-60 bg-white rounded-lg shadow-lg p-2 border border-gray-200 absolute top-8 z-40 right-4">
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer">
                        <img src="/assets/share.svg" class="w-4 h-4" alt="Share" />
                        <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Share wishlist with friends</span>
                    </div>
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                        <img src="/assets/edit.svg" class="w-4 h-4" alt="Edit" />
                        <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Edit wishlist</span>
                    </div>
                    <div class="flex items-center p-2 hover:bg-primaryMainBright cursor-pointer border-t border-gray-200">
                        <img src="/assets/close-circle.svg" class="w-4 h-4" alt="Delete" />
                        <span class="ml-2 text-gray-800 w-full hover:text-primaryColor font-medium">Delete</span>
                    </div>
                </div>
            </template>

        </div>

        <!-- Received Indicator -->
        <div v-if="wish.status == 'received'" class="absolute top-4 left-2 lg:left-4 bg-green-100 text-green-800 py-1 px-2 lg:px-4 rounded-full flex items-center">
            <img src="/assets/checkmark.svg" alt="Checkmark" class="w-[12px] lg:w-[20px]" style=" margin-right: 8px;">
            <span class="font-medium text-sm">Received</span>
        </div>

        <!-- Reserved Indicator -->
        <div v-if="wish.status == 'reserved'" class="absolute top-4 left-2 lg:left-4 bg-[#FEF8EF] text-[#DE900B] py-1 px-2 lg:px-4 rounded-full flex items-center">
            <svg class="w-[12px] lg:w-[20px]" style=" margin-right: 8px;" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2.0625C6.072 2.0625 2.0625 6.072 2.0625 11C2.0625 15.928 6.072 19.9375 11 19.9375C15.928 19.9375 19.9375 15.928 19.9375 11C19.9375 6.072 15.928 2.0625 11 2.0625ZM15.6512 8.00433L9.87617 14.8793C9.81298 14.9549 9.73426 15.0159 9.64536 15.0583C9.55646 15.1007 9.45948 15.1235 9.361 15.125H9.34908C9.2528 15.125 9.1576 15.1047 9.06965 15.0656C8.98169 15.0264 8.90294 14.9692 8.8385 14.8977L6.3635 12.1477C6.254 12.0299 6.18918 11.8775 6.18028 11.717C6.17138 11.5564 6.21897 11.3978 6.31479 11.2687C6.41061 11.1395 6.54861 11.048 6.70485 11.01C6.8611 10.972 7.02572 10.9898 7.17017 11.0605C7.25267 11.1018 7.326 11.1586 7.38467 11.2273L9.33075 13.3907L14.5988 7.12067C14.7181 6.98837 14.8841 6.90755 15.0618 6.89522C15.2395 6.88289 15.4151 6.94002 15.5515 7.05458C15.6879 7.16913 15.7746 7.33217 15.7932 7.50933C15.8117 7.68649 15.7608 7.86396 15.6512 8.00433Z" fill="#DE900B" />
            </svg>

            <span v-if="isDashboard" class="font-medium text-xs lg:text-sm">Reserved by you</span>
            <span v-else class="font-medium text-sm">Reserved</span>
        </div>

        <!-- FulFilled Indicator -->
        <div v-if="wish.status == 'fulfilled'" class="absolute top-4 left-2 lg:left-4 bg-green-100 text-green-800 py-1 px-2 lg:px-4 rounded-full flex items-center">
            <img src="/assets/checkmark.svg" alt="Checkmark" class="w-[12px] lg:w-[20px]" style=" margin-right: 8px;">
            <span class="font-medium text-xs lg:text-sm">Fulfilled by you</span>
        </div>

        <!-- Saved Indicator -->
        <div v-if="wish.status == 'saved'" class="absolute top-4 left-2 lg:left-4  bg-primaryMainBright text-primaryColor py-1 px-2 lg:px-4 rounded-full flex items-center">
            <span class="font-medium text-xs lg:text-sm">Birthday wishlist</span>
        </div>

        <!-- Wish Details -->
        <div class="absolute bottom-0 left-0 p-2 lg:p-4 bg-gradient-to-t from-black to-transparent w-full text-white">
            <h2 class="text-sm md:text-lg font-semibold">{{ wish.title }}</h2>
            <p class="text-sm md:text-lg">{{ wish.price }}</p>
            <div class="flex justify-between items-center mt-2">
                <div class="flex items-center">
                    <img src="/assets/heart.svg" alt="Likes" class="w-3 h-3 md:w-5 md:h-5 mr-2" />
                    <span class="text-xs md:text-sm">{{ wish.likes }}</span>
                </div>
                <div class="flex space-x-2 md:space-x-4">
                    <button class="border-white border p-1 md:p-2 rounded-full focus:outline-none shadow-sm">
                        <img src="/assets/bookmark.svg" alt="Save" class="w-3 h-3 md:w-5 md:h-5" />
                    </button>
                    <button class="border-white border p-1 md:p-2 rounded-full focus:outline-none shadow-sm">
                        <img src="/assets/share-2.svg" alt="Share" class="w-3 h-3 md:w-5 md:h-5" />
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Show this if url is dashboard -->
    <div v-if="isDashboard" class="flex lg:flex-row flex-col lg:items-center lg:space-x-2 mt-2 pb-2">
        <div class="flex  items-center space-x-1">
            <span class="text-gray-600 font-normal text-sm">For</span>
            <img src="/assets/avatar.svg" alt="Avatar" class="w-6 h-6 rounded-full">
            <span class="text-primaryColor font-medium">@ayomide_sm</span>
        </div>
        <div class="flex items-center lg:space-x-2">
            <img src="/assets/ellipse-20.svg" alt="Ellipse" class="w-1 h-1 hidden lg:inline-block">
            <span class="text-gray-600 font-normal text-sm">May 15, 2024</span>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'WishCard',

    props: {
        wish: {
            type: Object,
            required: true,
        },
        classList: {
            type: String,
            required: true,
        },

        openDropdownId: {
            type: Number,
            required: true,
        },
    },

    computed: {

        isDashboard() {
            return this.$route.path === '/dashboard';
        },

        isDropdownOpen() {
            // Check if this card's dropdown should be open
            return this.openDropdownId === this.wish.id;
        },
    },
    methods: {
        toggleMenu() {
            // Emit the event to the parent to toggle this dropdown
            this.$emit('toggleDropdown', this.wish.id);
        },
        preview() {
            // Emit the event to the parent to toggle this dropdown
            this.$emit('preview', this.wish.id);
        },
        closeMenu() {
            // Emit the event to the parent to toggle this dropdown
            this.$emit('closeDropdown', this.wish.id);
        },
    },
};
</script>

<style scoped>
.group:hover .toggle-menu-button {
    opacity: 1;
}
</style>
