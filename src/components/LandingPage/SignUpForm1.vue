<template>
<div class="w-full lg:w-4/6 p-4 py-8 lg:p-8 flex overflow-y-auto flex-col justify-start items-center">
    <!-- Logo -->
    <OptinLogo />

    <!-- Success Message (conditioned on showSuccess) -->
    <div v-if="showSuccess" class="w-full bg-green-100 p-2 rounded-md flex justify-between items-center mb-8">
        <div class="flex items-center">
            <img src="/assets/checkmark.svg" class="w-6 h-6 mr-2" alt="Checkmark" />
            <span class="text-green-700">Your email has been verified</span>
        </div>
        <img src="/assets/close.svg" class="w-4 h-4 cursor-pointer" alt="Close" @click="showSuccess = false" />
    </div>

    <!-- Registration Form -->
    <div class="w-full">
        <h2 class="text-xl font-bold mb-4 text-gray-800">STEP 1 OF 2</h2>
    </div>
    <div class="w-full h-2 bg-gray-300 rounded-full mb-8">
        <div class=" h-2 bg-primaryColor rounded-full w-[50%]" ></div>
    </div>

    <h2 class="text-2xl font-bold mb-8 text-gray-800 self-start">
        Share a bit about yourself, so we can sprinkle some magic on your experience
    </h2>

    <!-- Form Inputs -->
    <div class="w-full grid grid-cols-2 gap-4 mb-8">
        <!-- First Name -->
        <div class="lg:col-span-1 col-span-2">
            <label class="block text-gray-700 mb-2" for="first-name">First Name</label>
            <input v-model="firstName" class="w-full p-3 bg-white border border-gray-300 rounded-md" type="text" id="first-name" />
        </div>

        <!-- Last Name -->
        <div class="lg:col-span-1 col-span-2">
            <label class="block text-gray-700 mb-2" for="last-name">Last Name</label>
            <input v-model="lastName" class="w-full p-3 bg-white border border-gray-300 rounded-md" type="text" id="last-name" />
        </div>

        <!-- Username -->
        <div class="col-span-2">
            <label class="block text-gray-700 mb-2" for="username">Username</label>
            <input v-model="username" class="w-full p-3 bg-white border border-gray-300 rounded-md" type="text" id="username" />
        </div>

        <!-- Gender -->
        <div class="lg:col-span-1 col-span-2 relative">
            <label class="block text-gray-700 mb-2" for="gender">Gender</label>
            <div class="relative">
                <select v-model="selectedGender" class="w-full p-3 bg-white border border-gray-300 rounded-md appearance-none pr-10" id="gender">
                    <option v-for="gender in genders" :key="gender" :value="gender">{{ gender }}</option>
                </select>
                <img src="/assets/dropdown.svg" class="absolute top-4 right-4 w-4 h-4" alt="Dropdown" />
            </div>
        </div>

        <!-- Birthday -->
        <div class="lg:col-span-1 col-span-2 relative">
            <label class="text-gray-700 mb-2 flex items-center gap-1" for="birthday">
                Birthday
                <img src="/assets/help-circle.svg" class="w-4 h-4" alt="Help" />
            </label>
            <div class="relative flex gap-2">
                <select v-model="month" class="w-full p-3 bg-white border border-gray-300 rounded-md" id="month">
                    <option value="" disabled selected>Month</option>
                    <option v-for="(m, index) in months" :key="index" :value="index+1">{{ m }}</option>
                </select>

                <input v-model="day" class="w-full p-3 bg-white border border-gray-300 rounded-md" type="number" id="day" min="1" max="31" placeholder="Day" />
            </div>
        </div>

        <!-- State -->
        <div class="lg:col-span-1 col-span-2 relative">
            <label class="block text-gray-700 mb-2" for="state">State</label>
            <div class="relative">
                <select v-model="selectedState" class="w-full p-3 bg-white border border-gray-300 rounded-md appearance-none pr-10" id="state">
                    <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
                </select>
                <img src="/assets/dropdown-2.svg" class="absolute top-4 right-4 w-4 h-4" alt="Dropdown" />
            </div>
        </div>

        <!-- Country -->
        <div class="lg:col-span-1 col-span-2 relative">
            <label class="block text-gray-700 mb-2" for="country">Country</label>
            <div class="relative">
                <select v-model="selectedCountry" class="w-full p-3 bg-white border border-gray-300 rounded-md appearance-none pr-10" id="country">
                    <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
                </select>
                <img src="/assets/dropdown-3.svg" class="absolute top-4 right-4 w-4 h-4" alt="Dropdown" />
            </div>
        </div>
    </div>

    <div class="w-full">
        <button @click="submitForm" class="max-w-fit px-24 py-3 bg-primaryColor text-white font-semibold text-lg rounded-full shadow-lg">
            Next
        </button>
    </div>
</div>
</template>

  
<script>
import axios from 'axios';
import OptinLogo from '../Dashboard/OptinLogo.vue';
import { eventBus } from '@/eventBus.js';
export default {
    components: {
        OptinLogo
    },
    data() {
        return {
            firstName: '',
            lastName: '',
            username: '',
            selectedGender: '',
            month: null,
            day: null,
            selectedState: '',
            selectedCountry: '',
            genders: ['male', 'female', 'non-binary', 'other'],
            states: ['California', 'New York', 'Texas', 'Florida', 'Illinois'],
            countries: ['United States', 'Canada', 'United Kingdom', 'Australia', 'India'],
            showSuccess: false,
        };
    },
    computed: {
        formattedBirthday() {
            if (this.month && this.day) {
                return `${String(this.month).padStart(2, '0')}/${String(this.day).padStart(2, '0')}`;
            } else {
                return "";
            }
        },
        months() {
            return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        }
    },
    methods: {
        async submitForm() {
            try {
                
                eventBus.setLoading(true);
                const response = await this.$axios.post(
                    `${this.$baseURL}/profile`, {
                        first_name: this.firstName,
                        last_name: this.lastName,
                        username: this.username,
                        gender: this.selectedGender,
                        dob: this.formattedBirthday,
                        country: this.selectedCountry,
                        state: this.selectedState,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': `Bearer ${this.getAuthToken()}`,
                        }
                    }
                );

                if (response.data.success) {

          const user = response.data.data; 

          localStorage.setItem("user", JSON.stringify(user));
                    this.showSuccess = true;
                    console.log('Registration successful:', response.data.message);
                    // Redirect to /additional-info after success
                    this.$router.push('/additional-info');
                }
            } catch (error) {
                const errorMsg = error.response?.data?.message || 'An error occurred. Please try again.';
                eventBus.onError(errorMsg); // Trigger the alert
                
                console.error('Error in registration:', error.response ? error.response.data : error);
                // Handle error response
            }
            finally {
    eventBus.setLoading(false);
  }
        },
        getAuthToken() {
            return localStorage.getItem('authToken') || '';
        }
    }

};
</script>

  
<style scoped>
/* Add your styles here */
</style>
