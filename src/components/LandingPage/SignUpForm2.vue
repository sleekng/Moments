<template>
<div class="lg:w-1/2 relative lg:overflow-y-auto  p-4 py-8 lg:p-8 flex flex-col justify-center items-center">
    
    <div class=" w-full lg:top-0 lg:p-8 flex flex-col justify-center items-center bg-white lg:absolute ">
        <!-- Logo -->
        <div class="lg:flex justify-start w-full hidden">
            <div class="w-16 h-16 mb-8">
                <img src="/assets/Logo-single.svg" alt="Logo" />
            </div>
        </div>

        <div class="w-full">
            <h2 class="text-xl font-bold mb-4 text-gray-800">STEP 2 OF 2</h2>
        </div>
        <div class="w-full h-2 bg-gray-300 rounded-full mb-8">
            <div class="h-full bg-primaryColor rounded-full" style="width: 100%;"></div>
        </div>

        <h2 class="text-2xl font-bold mb-8 text-gray-800">Let’s create your first wishlist and help you get set up</h2>

    </div>

    <div class=" mb-10 relative left-hand lg:top-[338px] w-full ">
        <!-- Form Inputs -->
        <div class="w-full space-y-4 ">
            <!-- Category -->

            <div class="relative">
                <label class="block text-gray-700 mb-2" for="category">Category</label>
                <div class="relative">
                    <select class="w-full p-3 bg-white border border-gray-300 rounded-md appearance-none pr-10" id="category" v-model="selectedCategory">

                        <option disabled value="">Select category</option>
                        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
                    </select>
                    <img src="/assets/dropdown.svg" class="absolute top-4 right-4 w-4 h-4" alt="Dropdown" />
                </div>
            </div>

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

        <div class="w-full flex space-x-2  items-center mt-8">
            <button class="w-2/5 py-3 bg-primaryColor text-white font-semibold text-lg rounded-full shadow-lg">
                Create wishlist
            </button>
            <button class=" px-4 py-3 bg-transparent text-gray-700 font-semibold text-lg rounded-full -300">
                Skip for later
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'CreateWishlist',

    data() {
        return {
            selectedCategory: '',
            categories: ['Fish', 'Banana'],
            selectedOption: '', // Default selection
        };
    }
};
</script>

<style  scoped>

</style>
