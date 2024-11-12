<template>
    <transition name="fade">
      <div class="fixed z-50 inset-0 overflow-y-auto py-4 px-4">
        <div class="flex items-center justify-center min-h-[90vh]">
          <div class="fixed inset-0 bg-black opacity-50" @click="close"></div>
          <div class="bg-white rounded-lg shadow-xl transform transition-all overflow-hidden max-w-sm md:max-w-3xl w-full">
            <div class="flex justify-between items-center mb-4 p-4 bg-gray-100">
              <div class="flex items-center">
                <img src="/assets/box-gift.svg" alt="Gift Box" class="h-6 w-6 mr-1" />
                <h3 class="text-2xl font-bold text-gray-900">{{ modalTitle }}</h3>
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
                <div>
                  <label class="block text-gray-700 mb-2" for="giftName">Gift name</label>
                  <input v-model="form.name" class="w-full p-3 bg-white border border-gray-300 rounded-md" type="text" id="giftName" placeholder="Hermes Birkin Bag" />
                </div>
  
                <div class="flex gap-4">
                  <div class="flex-1">
                    <label class="block text-gray-700 mb-2" for="quantity">Quantity</label>
                    <input v-model="form.quantity" class="w-full p-3 bg-white border border-gray-300 rounded-md" type="number" id="quantity" placeholder="1" />
                  </div>
                  <div class="flex-1">
                    <label class="block text-gray-700 mb-2" for="amount">Amount</label>
                    <div class="relative">
                      <span class="absolute inset-y-0 left-0 flex items-center pl-3">₦</span>
                      <input v-model="form.amount" class="w-full pl-8 p-3 bg-white border border-gray-300 rounded-md" type="text" id="amount" placeholder="80,000" />
                      <select v-model="form.currency" class="absolute right-3 top-1/2 transform bg-transparent -translate-y-1/2">
                        <option value="NGN">NGN</option>
                      </select>
                    </div>
                  </div>
                </div>
  
                <div>
                  <label class="block text-gray-700 mb-2" for="priority">Gift priority</label>
                  <select v-model="form.priority" class="w-full p-3 bg-white border border-gray-300 rounded-md">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
  
                <div>
                  <label class="block text-gray-700 font-medium mb-2" for="link">Link to the gift (optional)</label>
                  <div class="flex items-center border border-gray-300 rounded-md bg-white overflow-hidden">
                    <span class="pl-4 pr-2 text-gray-400">http://</span>
                    <input v-model="form.link" class="w-full p-3 bg-white border-l focus:outline-none" type="url" id="link" placeholder="www.example.com" />
                  </div>
                </div>
  
                <div>
                  <label class="block text-gray-700 mb-2" for="comment">Comment (Optional)</label>
                  <textarea v-model="form.comment" class="w-full p-3 bg-white border border-gray-300 rounded-md" id="comment" placeholder="Additional comments about this item e.g color, size, where to get it, etc." rows="3"></textarea>
                </div>
              </div>
            </div>
  
            <div class="p-6 flex lg:flex-row flex-col lg:justify-end lg:space-x-4">
              <button class="py-4 px-16 bg-gray-200 rounded-full" @click="close">Cancel</button>
              <button @click="saveWish" class="py-4 mt-4 lg:mt-0 px-16 bg-primaryColor text-white rounded-full">{{ buttonText }}</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  import { eventBus } from '@/eventBus.js';
  
  export default {
    props: {
      wishlistId: {
        type: Number,
        required: true,
      },
      wish: {
        type: Object,
        default: null,
      }
    },
    data() {
      return {
        isVisible: true,
        imagePreview: null,
        imageFile: null,
        form: {
          name: '',
          quantity: 1,
          amount: '',
          currency: 'NGN',
          priority: 'medium',
          link: '',
          comment: '',
        }
      };
    },
    computed: {
      modalTitle() {
        return this.wish ? 'Edit Wish' : 'Make a Wish';
      },
      buttonText() {
        return this.wish ? 'Save Changes' : 'Add Wish';
      }
    },
    watch: {
      wish: {
        immediate: true,
        handler(newWish) {
          if (newWish) {
            this.form = { ...newWish };
            this.imagePreview = newWish.photo || null;
          }
        }
      }
    },
    methods: {

  handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageFile = file;
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

  async saveWish() {
   
    const formData = new FormData();
    formData.append('wishlistId', this.wishlistId);

      if (this.imageFile) formData.append('photo', this.imageFile);
      formData.append('name', this.form.name);
      formData.append('quantity', this.form.quantity);
      formData.append('amount', this.form.amount);
      formData.append('currency', this.form.currency);
      formData.append('priority', this.form.priority);
      formData.append('link', this.form.link);
      formData.append('comment', this.form.comment);

  
    try {
      eventBus.setLoading(true);
      let response;

      if (this.wish) {
        formData.append('_method', 'put');
        console.log(formData);
        
        response =  await this.$axios.post(`${this.$baseURL}/wishes/${this.wish.id}`, formData, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
              'Content-Type': 'multipart/form-data'
            }
          })

          
          this.$emit('updateWish', response.data.data);
          console.log(response.data.data);
          
        }else{ 
          response =  await this.$axios.post(`${this.$baseURL}/wishlists/${this.wishlistId}/wishes`, formData, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
              'Content-Type': 'multipart/form-data'
            }
          });
          this.$emit('createWish', response.data.data);
        }
      this.$emit('addWish', response.data.data);
      console.log('Wish saved successfully:', response.data.data);
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'An error occurred. Please try again.';
      eventBus.onError(errorMsg);
      console.error('Error saving wish:', error);
    } finally {
      eventBus.setLoading(false);
    }
  },
  close() {
    this.isVisible = false;
    this.$emit('close');
  }
}

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
  