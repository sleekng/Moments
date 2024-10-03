<template>
<div class="flex p-4 rounded-lg bg-white shadow border mb-4 overflow-y-auto">
    <img :src="imgSrc" alt="Wishlist Image" class="w-36 h-36 rounded-xl object-cover">
    <div class="flex-1 flex flex-col justify-between px-6">
        <div>
            <h2 class="text-lg font-semibold text-gray-900">{{ title }}</h2>
        </div>
        <div class="flex justify-between space-x-8">
            <div>
                <p class="text-sm text-gray-500">Likes</p>
                <p class="text-xl font-bold text-gray-900">{{ likes }}</p>
            </div>
            <div>
                <p class="text-sm text-gray-500">Views</p>
                <p class="text-xl font-bold text-gray-900">{{ views }}</p>
            </div>
            <div>
                <p class="text-sm text-gray-500">Saves</p>
                <p class="text-xl font-bold text-gray-900">{{ saves }}</p>
            </div>
            <div>
                <p class="text-sm text-gray-500">Created</p>
                <p class="text-xl font-bold text-gray-900">{{ created }}</p>
            </div>
        </div>
    </div>
    <div class="flex flex-col justify-between  space-y-2 ">
        <div class="text-gray-500 text-sm font-semibold pr-4">Top wishes</div>
        <div class="flex space-x-2">
            <div v-for="wish in topWishes" :key="wish.label" class="relative">

                <div @click="preview" :class="classList" class="bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden relative card group ">
                    <div class="relative ">
                        <img :src="wish.img" alt="Wishlist Item" class="w-24 h-24  object-cover">
                    </div>
                    <!-- Wish Detail -->
                    <div class="absolute bottom-0 left-0 p-1 bg-gradient-to-t from-black z-50  to-transparent w-full text-white">
                        <h2 class="text-[8px] font-semibold">{{ title }}</h2>
                        <p class="text-lg">{{ wish.price }}</p>
                        <div class="flex justify-between items-center mt-2">
                            <div class="flex items-center">
                                <img src="/assets/heart.svg" alt="Likes" class="w-3 h-3 mr-2">
                                <span class="text-[9px]">{{ likes }}</span>
                            </div>
                            <div class="flex space-x-4">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        imgSrc: {
            type: String,
            required: true,
        },
        likes: {
            type: Number,
            required: true,
        },
        views: {
            type: String,
            required: true,
        },
        saves: {
            type: Number,
            required: true,
        },
        created: {
            type: String,
            required: true,
        },
        topWishes: {
            type: Array,
            required: true,
        },
    },
};
</script>
