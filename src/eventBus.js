// src/eventBus.js
import { reactive } from 'vue';

export const eventBus = reactive({
  loading: false,
  setLoading(value) {
    this.loading = value;
  },
  onSuccess(message) {
    this.message = message;
  }
});
