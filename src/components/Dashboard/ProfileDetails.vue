<template>
<div class="bg-white lg:rounded-t-lg  md:px-12 pt-4 md:pt-12 lg:pb-4">
    <div class="flex flex-col md:flex-row  lg:items-center md:items-start mb-4 lg:mb-8">

        <div class=" flex lg:block justify-between w-full lg:w-auto items-center">

            <!-- Avatar -->
            <img src="./assets/avatar.svg" alt="Avatar" class="h-16 w-16 md:h-32 md:w-32 rounded-full mb-4 md:mb-0 md:mr-6" />

            <!-- Action Buttons Mobile-->
            <div class="flex justify-center md:justify-start lg:mt-4 md:mt-0 space-x-4 lg:hidden ">
                <button @click="showAnalyticsModal" class="bg-gray-100 text-[#2D3036] py-2 px-4 md:px-6 rounded-full">
                    View analytics
                </button>
                <button class=" text-[#2D3036] py-2  md:px-6  rounded-full">
                    <img src="./assets/share-arrow-svgrepo-com-1.svg" alt="Share">
                </button>
            </div>
        </div>

        <!-- User Information -->
        <div class="flex-1 ">
            <div class="flex items-center justify-start mb-2">
                <h2 class="text-lg md:text-2xl font-medium mr-2">Ayomide Shotayo</h2>
                <p class="text-sm md:text-lg text-gray-600">@ayomide_sm</p>
            </div>
            <div class="flex items-center justify-start text-[#616874] mb-4">
                <span class="mr-2">🎂 Birthday, April 20</span>
                <span class="flex items-center">
                    <img src="./assets/frame-1618868316.svg" alt="Location" class="h-2.5 w-2.5 md:h-5 md:w-5 mr-1" />
                    Lagos, Nigeria
                </span>
            </div>
            <div class="flex justify-start text-[#616874] mb-4">
                <div class="mr-4">
                    <span class="font-bold text-black mr-1">10</span>Wishlist
                </div>
                <div class="mr-4">
                    <span class="font-bold text-black mr-1">200k</span>Friends
                </div>
                <div>
                    <span class="font-bold text-black mr-1">300</span>Likes
                </div>
            </div>
        </div>

        <div class=" flex items-start  self-start">
            <!-- Action Buttons Desktop -->
            <div class=" justify-center  md:justify-start mt-4 md:mt-0 space-x-4  hidden lg:flex">
                <button @click="showAnalyticsModal" class="bg-gray-100 text-[#2D3036] py-2 px-4 md:px-6 rounded-full">
                    View analytics
                </button>
                <button class="bg-gray-100 text-[#2D3036] py-2 px-6 rounded-full">
                    Share profile
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProfileDetails',
    methods: {
        showAnalyticsModal() {
            this.$emit('showAnalyticsModal');
        }
    }
};
</script>

<style scoped>
/* Additional styles if required */
</style>
