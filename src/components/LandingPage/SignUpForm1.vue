<template>
<div class="lg:w-4/6 p-4 py-8 lg:p-8 flex flex-col justify-center items-center w-full">

    <!-- Logo -->
    <div class="lg:flex justify-start w-full hidden">
        <div class="w-16 h-16 mb-8">
            <img src="/assets/Logo-single.svg" alt="Logo" />
        </div>
    </div>

    <!-- Success Message -->
    <div class="w-full bg-green-100 p-2 rounded-md flex justify-between items-center mb-8">
        <div class="flex items-center">
            <img src="/assets/checkmark.svg" class="w-6 h-6 mr-2" alt="Checkmark" />
            <span class="text-green-700">Your email has been verified</span>
        </div>
        <img src="/assets/close.svg" class="w-4 h-4 cursor-pointer" alt="Close" />
    </div>

    <div class="w-full">
        <h2 class="text-xl font-bold mb-4 text-gray-800">STEP 1 OF 2</h2>
    </div>
    <div class="w-full h-2 bg-gray-300 rounded-full mb-8">
        <div class="h-full bg-primaryColor rounded-full" style="width: 50%;"></div>
    </div>

    <h2 class="text-2xl font-bold mb-8 text-gray-800">
        Share a bit about yourself, so we can sprinkle some magic on your experience
    </h2>

    <!-- Form Inputs -->
    <div class="w-full grid grid-cols-2 gap-4 mb-8">
        <!-- First Name -->
        <div class="lg:col-span-1 col-span-2">
            <label class="block text-gray-700 mb-2" for="first-name">First Name</label>
            <input class="w-full p-3 bg-white border border-gray-300 rounded-md" type="text" id="first-name" />
        </div>

        <!-- Last Name -->
        <div class="lg:col-span-1 col-span-2">
            <label class="block text-gray-700 mb-2" for="last-name">Last Name</label>
            <input class="w-full p-3 bg-white border border-gray-300 rounded-md" type="text" id="last-name" />
        </div>

        <!-- Username -->
        <div class="col-span-2">
            <label class="block text-gray-700 mb-2" for="username">Username</label>
            <input class="w-full p-3 bg-white border border-gray-300 rounded-md" type="text" id="username" />
        </div>

        <!-- Gender -->
        <div class="lg:col-span-1 col-span-2 relative">
            <label class="block text-gray-700 mb-2" for="gender">Gender</label>
            <div class="relative">
                <select class="w-full p-3 bg-white border border-gray-300 rounded-md appearance-none pr-10" id="gender" v-model="selectedGender">

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
                <!-- Month Dropdown -->
                <select class="w-full p-3 bg-white border border-gray-300 rounded-md" id="month" v-model="month">
                    <option value="" disabled selected>Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>

                <!-- Day Input -->
                <input class="w-full p-3 bg-white border border-gray-300 rounded-md" type="number" id="day" min="1" max="31" placeholder="Day" v-model="day" />
            </div>

        </div>
        <!-- State -->
        <div class="lg:col-span-1 col-span-2 relative">
            <label class="block text-gray-700 mb-2" for="state">State</label>
            <div class="relative">
                <select class="w-full p-3 bg-white border border-gray-300 rounded-md appearance-none pr-10" id="state" v-model="selectedState">

                    <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
                </select>
                <img src="/assets/dropdown-2.svg" class="absolute top-4 right-4 w-4 h-4" alt="Dropdown" />
            </div>
        </div>

        <!-- Country -->
        <div class="lg:col-span-1 col-span-2 relative">
            <label class="block text-gray-700 mb-2" for="country">Country</label>
            <div class="relative">
                <select class="w-full p-3 bg-white border border-gray-300 rounded-md appearance-none pr-10" id="country" v-model="selectedCountry">

                    <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
                </select>
                <img src="/assets/dropdown-3.svg" class="absolute top-4 right-4 w-4 h-4" alt="Dropdown" />
            </div>
        </div>
    </div>

    <div class="w-full">
        <button class="max-w-fit px-24 py-3 bg-primaryColor text-white font-semibold text-lg rounded-full shadow-lg">
            Next
        </button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            selectedGender: '',
            month: null,
            day: null,
            selectedState: '',
            selectedCountry: '',
            birthday: this.formattedBirthday,
            genders: ['Male', 'Female', 'Non-binary', 'Other'],
            states: ['California', 'New York', 'Texas', 'Florida', 'Illinois'],
            countries: ['United States', 'Canada', 'United Kingdom', 'Australia', 'India'],
        };
    },
    computed: {
        // Combines month and day to form the birthday string
        formattedBirthday() {
            if (this.month && this.day) {
                return `${String(this.month).padStart(2, '0')}-${String(this.day).padStart(2, '0')}`;
            } else {
                return "Please select both month and day.";
            }
        },
    },
}
</script>

<style  scoped>

</style>
