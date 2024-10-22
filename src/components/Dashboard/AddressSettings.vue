<template>
    <h1 class=" font-bold text-2xl mb-4 lg:hidden block">Delivery location</h1>
    <div class="lg:w-3/4 space-y-8">
      <!-- Tip Section -->
      <div class="flex bg-gray-200 p-4 rounded-lg">
        <img src="/assets/information.svg" alt="Information Icon" class="w-5 h-5 mr-3" />
        <p class="text-gray-800">
          Tip: For your safety, we recommend setting a public address for general use and a private address for trusted friends. Your privacy is important to us!
        </p>
      </div>
  
      <!-- Address Sections -->
      <div>
        <div v-if="privateAddress">
          <div class="mb-10">
            <div class="flex justify-between items-center mb-2">
              <h3 class="text-xl font-medium text-gray-900">{{ privateAddress.type }} address</h3>
              <div class="flex space-x-2">
                <button class="text-blue-600" @click="editAddress(privateAddress, 'Private')">Edit address</button>
                <span>|</span>
                <button class="text-blue-600" @click="removeAddress(privateAddress.type)">Remove address</button>

              </div>
            </div>
            <hr>
            <div class="flex items-start mt-4">
              <img src="/assets/location.svg" alt="Location Icon" class="w-5 h-5 mr-2" />
              <div class="text-gray-700">
                <p>{{ privateAddress.details.street }}</p>
                <p>{{ privateAddress.details.apartment }}</p>
                <p>{{ privateAddress.details.city }}, {{ privateAddress.details.country }}</p>
                <p>{{ privateAddress.details.zipCode }}</p>
                <p class="mt-2 text-sm text-gray-600">
                  Phone number: <span class="text-gray-800">{{ privateAddress.details.phone }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="mb-10">
          <h3 class="text-xl font-medium text-gray-900">Private address</h3>
          <button class="text-blue-600 mt-2" @click="openModal('Private')">Add address</button>
          <hr>
          <button class="flex items-center bg-gray-100 py-2 px-4 mt-4 rounded-full">
            <img src="/assets/add.svg" alt="Add" class="w-4 h-4 mr-2" />
            <span class="text-gray-700 font-medium" @click="openModal('Private')">Add private address</span>
          </button>
        </div>
  
        <div v-if="publicAddress">
          <div class="mb-10">
            <div class="flex justify-between items-center mb-2">
              <h3 class="text-xl font-medium text-gray-900">{{ publicAddress.type }} address</h3>
              <div class="flex space-x-2">
                <button class="text-blue-600" @click="editAddress(publicAddress, 'Public')">Edit address</button>
                <span>|</span>
                <button class="text-blue-600" @click="removeAddress(publicAddress.type)">Remove address</button>

              </div>
            </div>
            <hr>
            <div class="flex items-start mt-4">
              <img src="/assets/location.svg" alt="Location Icon" class="w-5 h-5 mr-2" />
              <div class="text-gray-700">
                <p>{{ publicAddress.details.street }}</p>
                <p>{{ publicAddress.details.apartment }}</p>
                <p>{{ publicAddress.details.city }}, {{ publicAddress.details.country }}</p>
                <p>{{ publicAddress.details.zipCode }}</p>
                <p class="mt-2 text-sm text-gray-600">
                  Phone number: <span class="text-gray-800">{{ publicAddress.details.phone }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <h3 class="text-xl font-medium text-gray-900">Public address</h3>
          <button class="text-blue-600 mt-2" @click="openModal('Public')">Add address</button>
          <hr>
          <button class="flex items-center bg-gray-100 py-2 px-4 mt-4 rounded-full">
            <img src="/assets/add-2.svg" alt="Add" class="w-4 h-4 mr-2" />
            <span class="text-gray-700 font-medium" @click="openModal('Public')">Add public address</span>
          </button>
        </div>
      </div>
    </div>
  
    <!-- Address Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 px-4 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg p-4 lg:p-8 w-full max-w-lg">
        <div class="flex justify-between items-center mb-6">
          <div class="flex items-center gap-2">
            <img src="/assets/location.svg" alt="Location" class="w-7 h-7 border-gray-400 border rounded" />
            <h3 class="text-xl font-bold text-gray-900">{{ isEditing ? `Edit ${modalType.toLowerCase()} address` : `Add ${modalType.toLowerCase()} address` }}</h3>
          </div>
          <img src="/assets/close.svg" alt="Close" class="w-5 h-5 cursor-pointer" @click="closeModal" />
        </div>
  
        <div class="space-y-4">
          <div class="bg-gray-100 p-4 rounded-lg text-sm text-gray-800">
            <p>Tip: For your safety, we recommend setting a public address for general use and a private address for trusted friends. Your privacy is important to us!</p>
          </div>
  
          <div>
            <label for="street-address" class="block text-sm text-gray-700 mb-1">Street Address</label>
            <input id="street-address" v-model="addressForm.street" class="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter street address" />
          </div>
  
          <div>
            <label for="apartment-details" class="block text-sm text-gray-700 mb-1">Apartment, suite, unit, building, floor, etc. (Optional)</label>
            <input id="apartment-details" v-model="addressForm.apartment" class="w-full p-3 border border-gray-300 rounded-md" placeholder="Apartment, suite, unit, building, floor, etc." />
          </div>
  
          <div class="flex gap-4">
            <div class="w-full">
              <label for="country" class="block text-sm text-gray-700 mb-1">Country/Region</label>
              <select id="country" v-model="addressForm.country" class="w-full p-3 border border-gray-300 rounded-md">
                <option>Select country/region</option>
              </select>
            </div>
            <div class="w-full">
              <label for="state" class="block text-sm text-gray-700 mb-1">State</label>
              <select id="state" v-model="addressForm.state" class="w-full p-3 border border-gray-300 rounded-md">
                <option>Select state</option>
              </select>
            </div>
          </div>
  
          <div class="flex gap-4">
            <div class="w-full">
              <label for="city" class="block text-sm text-gray-700 mb-1">City</label>
              <select id="city" v-model="addressForm.city" class="w-full p-3 border border-gray-300 rounded-md">
                <option>Select city</option>
              </select>
            </div>
            <div class="w-full">
              <label for="zip-code" class="block text-sm text-gray-700 mb-1">ZIP Code</label>
              <input id="zip-code" v-model="addressForm.zipCode" class="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter ZIP code" />
            </div>
          </div>
  
          <div>
            <label for="phone-number" class="block text-sm text-gray-700 mb-1">Phone Number</label>
            <input id="phone-number" v-model="addressForm.phone" class="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter phone number" />
            <p class="text-sm text-gray-600">May be used to assist delivery</p>
          </div>
  
          <button class="bg-primaryColor text-white px-12 py-2 rounded-full mt-4" @click="saveAddress">
            {{ isEditing ? 'Save changes' : 'Add address' }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddressSettings",
  
    data() {
      return {
        addresses: [
        {
          type: "Private",
          details: {
            street: "12, street address, Ifako",
            apartment: "Apartment",
            city: "Lagos",
            country: "Nigeria",
            zipCode: "100245",
            phone: "+23478362739"
          }
        },
        {
          type: "Public",
          details: {
            street: "12, street address, Ifako",
            apartment: "Apartment",
            city: "Lagos",
            country: "Nigeria",
            zipCode: "100245",
            phone: "+23478362739"
          }
        }
        ],
        showModal: false,
        modalType: "",
        addressForm: {
          street: '',
          apartment: '',
          country: '',
          state: '',
          city: '',
          zipCode: '',
          phone: ''
        },
        isEditing: false
      };
    },
    computed: {
      privateAddress() {
        return this.addresses.find(addr => addr.type === "Private");
      },
      publicAddress() {
        return this.addresses.find(addr => addr.type === "Public");
      }
    },
    methods: {
      openModal(type) {
        this.modalType = type;
        this.resetForm();
        this.isEditing = false;
        this.showModal = true;
      },
      editAddress(address, type) {
        this.modalType = type;
        this.addressForm = { ...address.details };
        this.isEditing = true;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
      saveAddress() {
        if (this.isEditing) {
          console.log(`Edit ${this.modalType.toLowerCase()} address:`, this.addressForm);
        } else {
          console.log(`Add ${this.modalType.toLowerCase()} address:`, this.addressForm);
          this.addresses.push({ type: this.modalType, details: { ...this.addressForm } });
        }
        this.closeModal();
      },
      resetForm() {
        this.addressForm = {
          street: '',
          apartment: '',
          country: '',
          state: '',
          city: '',
          zipCode: '',
          phone: ''
        };
      },
      removeAddress(type) {
        this.addresses = this.addresses.filter(addr => addr.type !== type);
      }
    }
  };
  </script>
  