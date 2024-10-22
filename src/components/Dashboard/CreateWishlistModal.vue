<template>
<transition name="fade">
    <div v-if="isVisible" class="fixed z-50 inset-0 overflow-y-auto py-4 px-4 ">
        <div class="flex items-center justify-center  ">
            <div class="fixed inset-0 bg-black opacity-50" @click="close"></div>
            <div class="bg-white rounded-lg shadow-xl transform transition-all   overflow-hidden  lg:max-w-[750]">
                <div class="flex justify-between items-center mb-4 p-4 bg-gray-100">
                    <div class="flex items-center">
                        <img src="./assets/box-gift.svg" alt="Gift Box" class="h-6 w-6 mr-1" />
                        <h3 class="text-2xl font-bold text-gray-900">Create a new wishlist</h3>
                    </div>
                    <img src="/assets/close.svg" alt="Close" class="h-6 w-6 cursor-pointer" @click="close" />
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 p-6">

                    <div class="col-span-1">
                        <div class="bg-gray-100 rounded-lg overflow-hidden  w-[200px] h-[200px] flex items-center justify-center">
                            <img :src="imagePreview || '/assets/wishlist-category-placeholder.svg'" alt="Placeholder" class="object-cover w-full h-full" />
                        </div>
                        <label class=" my-4 py-2 bg-gray-200 rounded-full block text-center cursor-pointer w-[200px]">
                            Upload photo
                            <input type="file" accept="image/*" class="hidden" @change="handleImageUpload" />
                        </label>
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
                                <div class="w-full p-3 bg-white border border-gray-300 rounded-md grid grid-cols-2 lg:grid-cols-3 gap-2 overflow-x-auto">
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

                <div class="p-6 flex lg:flex-row flex-col  lg:justify-end lg:space-x-4">
                    <button class="py-4 px-12 bg-gray-200 rounded-full" @click="close">Cancel</button>
                    <button @click="createWishList" class="py-4 mt-4 lg:mt-0 px-6 bg-primaryColor text-white rounded-full">Create Wishlist</button>
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
            imagePreview: null, // To preview the uploaded image
            form: {
                title: '',
                eventDate: '',
                description: '',
                // Add other form fields here if needed
            },
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
        },
        handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                this.previewImage(file);
            }
        },
        previewImage(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.imagePreview = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        async createWishList() {
            // Prepare FormData to send the image and other form data to the server
            const formData = new FormData();
            formData.append('file', this.imageFile);
            formData.append('title', this.form.title);
            formData.append('eventDate', this.form.eventDate);
            formData.append('description', this.form.description);
            // Add any other form fields if necessary

            try {
                // Send the form data including the image to the server
                const response = await this.$axios.post('https://your-api-endpoint.com/upload-wishlist', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                const filePath = response.data.filePath; // Assuming the server returns the file path
                console.log('Wishlist created successfully:', filePath);

            } catch (error) {
                console.error('Error creating wishlist:', error);
            }
        },
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
