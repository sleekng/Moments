// src/eventBus.js
import { reactive } from 'vue';

export const eventBus = reactive({
  loading: false,
  setLoading(value) {
    this.loading = value;
  },
  setLoading(value) {
    this.loading = value;
  },

  onSuccess(message) {
    this.message = message;
    this.type = 'success'; // Set type to success
  },

  onError(message) {
    this.message = message;
    this.type = 'error'; // Set type to error
  },

  clearMessage() {
    this.message = '';
    this.type = ''; // Reset type
  }
});
