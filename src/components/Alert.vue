<template>
  <div v-if="visible" :class="['alert', alertType]">
    <span>{{ message }}</span>
    <button class="close-btn" @click="closeAlert">&times;</button>
  </div>
</template>

<script>
import { eventBus } from '@/eventBus.js';

export default {
  data() {
    return {
      visible: false,
      message: ''
    };
  },
  computed: {
    alertType() {
      return eventBus.type === 'success' ? 'alert-success' : 'alert-error';
    }
  },
  methods: {
    showAlert(msg) {
      this.message = msg;
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, 5000); // Auto-hide after 5 seconds
    },
    closeAlert() {
      this.visible = false;
    }
  },
  watch: {
    'eventBus.message'(newMessage) {
      if (newMessage) {
        this.showAlert(newMessage);
      }
    }
  }
};
</script>

<style scoped>
.alert {
  position: fixed;
  top: 20px;
  right: 20px;
  color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 3000;
  transition: opacity 0.5s ease;
}

.alert-success {
  background-color: green;
}

.alert-error {
  background-color: red;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1em;
  margin-left: 10px;
  cursor: pointer;
}
</style>
