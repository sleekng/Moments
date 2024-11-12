<template>
<transition name="fade">
    <div  class="fixed z-50 inset-0 overflow-y-auto py-4 px-4">
        <div class="flex items-center justify-center min-h-[90vh]">
            <div class="fixed inset-0 bg-black opacity-50" @click="close"></div>
            <div class="bg-white rounded-lg shadow-xl transform transition-all overflow-hidden max-w-sm md:max-w-3xl w-full">
                <div class="flex justify-between items-center mb-4 p-4 bg-gray-100">
                    <div class="flex items-center">
                        <img src="/assets/box-gift.svg" alt="Gift Box" class="h-6 w-6 mr-1" />
                        <h3 class="text-2xl font-bold text-gray-900">Make a Wish</h3>
                    </div>
                    <img src="/assets/close.svg" alt="Close" class="h-6 w-6 cursor-pointer" @click="close" />
                </div>

                <div class="grid md:grid-cols-3 gap-4 p-6">
                    <div class="md:col-span-1">
                        <div class="bg-gray-100 rounded-lg overflow-hidden w-[200px] h-[200px] flex items-center justify-center">
                            <img :src="imagePreview || '/assets/wishlist-category-placeholder.svg'" alt="Placeholder" class="object-cover w-full h-full" />
                        </div>
                        <label class="my-4 py-2 bg-gray-200 rounded-full block text-center cursor-pointer w-[200px]">
                            Upload photo
                            <input type="file" accept="image/*" class="hidden" @change="handleImageUpload" />
                        </label>
                    </div>
                    <div class="md:col-span-2 space-y-4">
                        <!-- Gift Name -->
                        <div>
                            <label class="block text-gray-700 mb-2" for="giftName">Gift name</label>
                            <input v-model="form.giftName" class="w-full p-3 bg-white border border-gray-300 rounded-md" type="text" id="giftName" placeholder="Hermes Birkin Bag" />
                        </div>

                        <!-- Quantity and Amount -->
                        <div class="flex gap-4">
                            <div class="flex-1">
                                <label class="block text-gray-700 mb-2" for="quantity">Quantity</label>
                                <input v-model="form.quantity" class="w-full p-3 bg-white border border-gray-300 rounded-md" type="number" id="quantity" placeholder="10" />
                            </div>
                            <div class="flex-1">
                                <label class="block text-gray-700 mb-2" for="amount">Amount</label>
                                <div class="relative">
                                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">$</span>
                                    <input v-model="form.amount" class="w-full pl-8 p-3 bg-white border border-gray-300 rounded-md" type="text" id="amount" placeholder="1,000.00" />
                                    <select v-model="form.currency" class="absolute right-3 top-1/2 transform bg-transparent -translate-y-1/2">
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBP</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- Gift Priority -->
                        <div>
                            <label class="block text-gray-700 mb-2" for="priority">Gift priority</label>
                            <select v-model="form.priority" class="w-full p-3 bg-white border border-gray-300 rounded-md">
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>

                        <!-- Link to the gift -->
                        <div>
  <label class="block text-gray-700 font-medium mb-2" for="link" style="font-size: 16px; line-height: 1.5;">
    Link to the gift (optional)
  </label>
  <div class="flex items-center border border-gray-300 rounded-md bg-white overflow-hidden">
    <span class="pl-4 pr-2 text-gray-400" style="font-size: 16px; line-height: 1.5;">
      http://
    </span>
    <input
      v-model="form.link"
      class="w-full p-3 bg-white border-l focus:outline-none"
      type="url"
      id="link"
      placeholder="www.untitledui.com"
      style="font-size: 16px; line-height: 1.5; color: #6b7280;"
    />
  </div>
</div>


                        <!-- Comment -->
                        <div>
                            <label class="block text-gray-700 mb-2" for="comment">Comment (Optional)</label>
                            <textarea v-model="form.comment" class="w-full p-3 bg-white border border-gray-300 rounded-md" id="comment" placeholder="Additional comments about this item e.g color, size, where to get it, etc." rows="3"></textarea>
                        </div>

                        <!-- Nominated People -->
                        <div>
                            <label class="text-gray-700 mb-2 flex " for="nominate">
                                Nominate someone or multiple people to get you this item
                                <img src="/assets/help-circle.svg" class="w-4 h-4 ml-1" alt="Help" />
                            </label>
                            <div class="w-full p-4 bg-white border border-gray-300 rounded-md grid grid-cols-2 lg:grid-cols-3 gap-2 overflow-x-auto">
                                <div v-for="person in form.nominatedPeople" :key="person" class="bg-gray-200 p-1 w-full rounded-full flex items-center">
                                    <img :src="`/assets/${person.avatar}`" class="w-4 h-4 mr-1" alt="Avatar" />
                                    <span class="text-sm mr-1">{{ person.name }}</span>
                                    <img src="/assets/close-2.svg" class="w-3 h-3 cursor-pointer" alt="Close" @click="removePerson(person)" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-6 flex lg:flex-row flex-col  lg:justify-end lg:space-x-4">
                    <button class="py-4 px-16 bg-gray-200 rounded-full" @click="close">Cancel</button>
                    <button @click="addWish" class="py-4 mt-4 lg:mt-0 px-16 bg-primaryColor text-white rounded-full">Add Wish</button>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

  
<script>
export default {
    name: 'CreateWishModal',
    data() {
        return {
            isVisible: true,
            imagePreview: null,
            form: {
                giftName: null,
                quantity: null,
                amount: null,
                currency: 'USD',
                priority: 'Medium',
                link: null,
                comment: null,
                nominatedPeople: [{
                        name: '@ayomide_sm',
                        avatar: 'avatar-2.svg'
                    },
                    {
                        name: '@janedoe',
                        avatar: 'avatar-2.svg'
                    },
                    {
                        name: '@janedoe',
                        avatar: 'avatar-2.svg'
                    },
                    {
                        name: '@janedoe',
                        avatar: 'avatar-2.svg'
                    },
                ],
            },
        };
    },
    methods: {
        close() {
            this.$emit('close');
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
        addWish() {
            // Your logic to add a wish goes here
            this.$emit('addWish');
        },
        removePerson(person) {
            this.form.nominatedPeople = this.form.nominatedPeople.filter(p => p !== person);
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
