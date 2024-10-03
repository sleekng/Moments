<template>
<transition name="fade">
    <div v-if="isVisible" class="fixed z-50 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen px-4 ">
            <div class="fixed inset-0 bg-black opacity-50" @click="close"></div>
            <div class="bg-white rounded-lg shadow-xl transform transition-all  p-6  max-h-[920px] max-w-[750]">
                <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center">
                        <img src="/assets/box-gift.svg" alt="Gift Box" class="h-7 w-7 mr-1" />
                        <h3 class="text-2xl font-bold text-gray-900">Create a new wishlist</h3>
                    </div>
                    <img src="/assets/close.svg" alt="Close" class="h-6 w-6 cursor-pointer" @click="close" />
                </div>

                <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-1">
                        <div class="bg-gray-100 rounded-lg flex items-center justify-center">
                            <img src="/assets/wishlist-category-placeholder.svg" alt="Placeholder" class=" object-cover w-full" />
                        </div>
                        <button class="w-full mt-4 py-2 bg-gray-200 rounded-full">Upload photo</button>
                    </div>
                    <div class="col-span-2 space-y-4">
                        <!-- Form Inputs -->
                        <div class="w-full space-y-4 ">
                            <!-- Category -->

                            <!-- Title -->
                            <div>
                                <label class="block text-gray-700 mb-2" for="title">Title</label>
                                <input class="w-full p-3 bg-white border border-gray-300 rounded-md" type="text" id="title" placeholder="25th Birthday" />
                            </div>

                            <!-- Event Date -->
                            <div class="relative">
                                <label class=" text-gray-700 mb-2 flex items-center gap-1" for="event-date">
                                    Event date
                                    <img src="/assets/help-circle.svg" class="w-4 h-4" alt="Help" />
                                </label>
                                <input class="w-full p-3 bg-white border border-gray-300 rounded-md" type="date" id="event-date" placeholder="DD/MM/YYYY" />
                            </div>

                            <!-- Description -->
                            <div>
                                <label class="block text-gray-700 mb-2" for="description">Description (Optional)</label>
                                <textarea class="w-full p-3 bg-white border border-gray-300 rounded-md" id="description" placeholder="Describe the event" rows="3"></textarea>
                            </div>

                            <!-- Tag People -->
                            <div>
                                <label class=" text-gray-700 mb-2 flex items-center gap-1" for="tag-people">
                                    Tag friends
                                    <img src="/assets/help-circle.svg" class="w-4 h-4" alt="Help" />
                                </label>
                                <div class="w-full p-3 bg-white border border-gray-300 rounded-md flex gap-2">
                                    <div class="bg-gray-200 p-1 rounded-full flex items-center">
                                        <img src="/assets/avatar.svg" class="w-4 h-4 mr-1" alt="Avatar" />
                                        <span class="text-sm mr-1">@ayomide_sm</span>
                                        <img src="/assets/close.svg" class="w-3 h-3 cursor-pointer" alt="Close" />
                                    </div>
                                    <div class="bg-gray-200 p-1 rounded-full flex items-center">
                                        <img src="/assets/avatar-2.svg" class="w-4 h-4 mr-1" alt="Avatar" />
                                        <span class="text-sm mr-1">@janedoe</span>
                                        <img src="/assets/close-2.svg" class="w-3 h-3 cursor-pointer" alt="Close" />
                                    </div>
                                    <div class="bg-gray-200 p-1 rounded-full flex items-center">
                                        <img src="/assets/avatar-3.svg" class="w-4 h-4 mr-1" alt="Avatar" />
                                        <span class="text-sm mr-1">@johnsmith</span>
                                        <img src="/assets/close-3.svg" class="w-3 h-3 cursor-pointer" alt="Close" />
                                    </div>
                                </div>
                            </div>

                            <!-- Who can see -->
                            <div>
                                <label class="block text-gray-700 mb-2">Who can see your wishlist?</label>
                                <div class="space-y-4">
                                    <!-- Anyone Option -->
                                    <div class="flex items-center gap-4" @click="selectedOption = 'anyone'">
                                        <div class="bg-gray-100 p-2 rounded-full">
                                            <img src="/assets/world.svg" class="w-5 h-5" alt="World" />
                                        </div>
                                        <div>
                                            <div class="font-medium text-gray-700">Anyone</div>
                                            <div class="text-sm text-[#6B7280]">Anyone on and off Moments Hub can see this list.</div>
                                        </div>
                                        <img :src="selectedOption === 'anyone' ? '/assets/web-radio-btn.svg' : '/assets/web-radio-btn-2.svg'" class="ml-auto w-5 h-5 cursor-pointer" alt="Radio button" />
                                    </div>

                                    <!-- Friends Option -->
                                    <div class="flex items-center gap-4" @click="selectedOption = 'friends'">
                                        <div class="bg-gray-100 p-2 rounded-full">
                                            <img src="/assets/people.svg" class="w-5 h-5" alt="People" />
                                        </div>
                                        <div>
                                            <div class="font-medium text-gray-700">Friends</div>
                                            <div class="text-sm text-[#6B7280]">Only the people you follow can see this list.</div>
                                        </div>
                                        <img :src="selectedOption === 'friends' ?  '/assets/web-radio-btn.svg' : '/assets/web-radio-btn-2.svg'" class="ml-auto w-5 h-5 cursor-pointer" alt="Radio button" />
                                    </div>

                                    <!-- People You Tagged Option -->
                                    <div class="flex items-center gap-4" @click="selectedOption = 'tagged'">
                                        <div class="bg-gray-100 p-2 rounded-full">
                                            <img src="/assets/people-2.svg" class="w-5 h-5" alt="People" />
                                        </div>
                                        <div>
                                            <div class="font-medium text-gray-700">People you tagged</div>
                                            <div class="text-sm text-[#6B7280]">Only the people you tagged can see this list.</div>
                                        </div>
                                        <img :src="selectedOption === 'tagged' ?  '/assets/web-radio-btn.svg' : '/assets/web-radio-btn-2.svg'" class="ml-auto w-5 h-5 cursor-pointer" alt="Radio button" />
                                    </div>

                                    <!-- Private Option -->
                                    <div class="flex items-center gap-4" @click="selectedOption = 'private'">
                                        <div class="bg-gray-100 p-2 rounded-full">
                                            <img src="/assets/lock.svg" class="w-5 h-5" alt="Lock" />
                                        </div>
                                        <div>
                                            <div class="font-medium text-gray-700">Private</div>
                                            <div class="text-sm text-[#6B7280]">Only you can see this list.</div>
                                        </div>
                                        <img :src="selectedOption === 'private' ?  '/assets/web-radio-btn.svg' : '/assets/web-radio-btn-2.svg'" class="ml-auto w-5 h-5 cursor-pointer" alt="Radio button" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-6 flex justify-end space-x-4">
                    <button class="py-2 px-12 bg-gray-200 rounded-full" @click="close">Cancel</button>
                    <button @click="createWishList" class="py-2 px-6 bg-primaryColor text-white rounded-full">Create Wishlist</button>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

  
<script>
export default {
    data() {
        return {
            isVisible: true,
            selectedOption: '', // Default selection
        };
    },
    methods: {
        close() {
            this.isVisible = false;
            this.$emit('close');
        },
        createWishList() {
            // Your logic to create a wishlist goes here
            this.$emit('createWishList')
            }
    },
};
</script>

  
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
