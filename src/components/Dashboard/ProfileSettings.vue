<template>
    <h1 class=" font-bold text-2xl mb-4 lg:hidden block">Your profile</h1>
  <div class="lg:w-3/4 space-y-8 pb-8">
    <!-- Profile Image Section -->
    <div class="flex lg:flex-row flex-col items-center gap-4">
      <img :src="avatarSrc" alt="Avatar" class="lg:w-20 lg:h-20 w-24 h-24 rounded-full" />
      <input type="file" ref="fileInput" @change="previewImage" style="display: none;" />
      <button @click="triggerFileInput" class="bg-gray-200 px-4 py-2 rounded-full text-gray-800">
        Change photo
      </button>
    </div>

    <!-- Input Fields -->
    <div class="space-y-4">
      <div>
        <label class="block text-gray-700 font-medium mb-1">First Name</label>
        <input
          type="text"
          v-model="formData.firstName"
          class="w-full p-3 bg-gray-50 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">Last Name</label>
        <input
          type="text"
          v-model="formData.lastName"
          class="w-full p-3 bg-gray-50 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">Gender</label>
        <select v-model="formData.gender" class="w-full p-3 bg-gray-50 border border-gray-300 rounded-md">
          <option v-for="option in genders" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">State</label>
        <select v-model="formData.state" class="w-full p-3 bg-gray-50 border border-gray-300 rounded-md">
          <option v-for="option in states" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">Country</label>
        <select v-model="formData.country" class="w-full p-3 bg-gray-50 border border-gray-300 rounded-md">
          <option v-for="option in countries" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>
    </div>

    <!-- Save Button -->
    <div class="text-right">
      <button @click="saveChanges" class="bg-primaryColor text-white px-6 py-3 rounded-full">
        Save Changes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileSettings",
  data() {
    return {
      avatarSrc: '/assets/avatar.svg',
      formData: {
        firstName: 'Ayomide',
        lastName: 'Shotayo',
        gender: 'Female',
        state: 'Lagos',
        country: 'Nigeria'
      },
      genders: ['Male', 'Female', 'Other'],
      states: ['Lagos', 'Abuja', 'Kano'],
      countries: ['Nigeria', 'Ghana', 'Kenya']
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    previewImage(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.avatarSrc = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select a valid image file.');
      }
    },
    saveChanges() {
      console.log('Profile data saved:', this.formData);
      // Implement logic to save the profile changes here
    }
  }
};
</script>
