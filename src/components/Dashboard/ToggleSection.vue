<template>
  <div>
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-2d3036 text-xl">{{ title }}</h3>
      <button class="bg-gray-200 text-gray-800 px-4 py-2 rounded-full" @click="toggleAll">Toggle all</button>

    </div>
    <hr class="mb-6">
    <div v-for="(option, index) in options" :key="index" class="flex items-center gap-4 mb-4 relative">
      <img
        :src="selectedOptions[index] ? '/assets/web-checkbox-17.svg' : '/assets/web-checkbox.svg'"
        alt="Toggle Checkbox"
        class="w-5 h-5 absolute cursor-pointer"
        @click="toggleCheckbox(index)"
      >
      <span class="ml-8 text-gray-600">{{ option }}</span> <!-- Adjust spacing for the checkbox -->
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ToggleSection",
  props: ['title', 'options'],
  data() {
    return {
      selectedOptions: this.options.map(() => false), // Initialize all checkboxes as unchecked
    };
  },
  methods: {
    toggleCheckbox(index) {
      this.selectedOptions[index] = !this.selectedOptions[index]; // Toggle the state
      this.emitChange();
    },
    emitChange() {
      this.$emit('update', this.selectedOptions);
    },
    toggleAll() {
      const newState = !this.selectedOptions.every(val => val);
      this.selectedOptions = this.selectedOptions.map(() => newState);
      this.emitChange();
    },
  },
};
</script>
