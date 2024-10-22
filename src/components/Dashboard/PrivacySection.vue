<template>
  <div>
    <h3 class="text-2d3036 text-lg font-medium mb-4">{{ title }}</h3>
    <hr class="mb-6">
    <div v-for="(option, index) in options" :key="index" class="flex items-center gap-4 mb-4">
      <img
        :src="selectedOption === index ? '/assets/web-radio-btn.svg' : '/assets/web-radio-btn-18.svg'"
        alt="Radio Button"
        class="w-5 h-5 cursor-pointer"
        @click="selectOption(index)"
      >
      <span class="text-gray-600">{{ option }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivacySection",
  props: ['title', 'options', 'selected'],
  data() {
    return {
      selectedOption: this.selected,
    };
  },
  methods: {
    selectOption(index) {
      this.selectedOption = index;
      this.$emit('update', index);  // Emit event to parent
    },
  },
};
</script>
