<template>
  <div class="p-4 border-b border-gray-200 flex items-start space-x-3">
    <img :src="notification.notifier?.avatar || '/assets/avatar.svg'" alt="Profile" class="w-10 h-10 rounded-full">
    <div class="w-full">
      <p class="text-sm text-gray-700">
        <strong>{{ notification.notifier?.username || 'Unknown User' }}</strong> {{ notification.data.message }}
      </p>
      <div v-if="notification.type === 'wishlist' || notification.type === 'birthdays'" class="mt-2 flex w-full items-center space-x-3 p-2 border border-gray-300 rounded-lg">
        <div @click="navigateTo(notificationLink)" class="flex items-center space-x-3 cursor-pointer">
          <img :src="notification.action.photo || '/assets/default-image.svg'" alt="Product" class="w-16 h-16 object-cover rounded-md">
          <div>
            <p class="text-sm font-medium text-gray-800">{{ notification.action.name }}</p>
            <div v-if="notification.action.priority" :class="priorityClass(notification.action.priority)" class="inline-flex items-center text-sm font-medium py-1 px-2 rounded-full">
              {{ notification.action.priority }} priority
              <img :src="priorityIcon(notification.action.priority)" alt="Priority" class="ml-2 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      <p class="text-xs text-gray-500 mt-1">{{ formatDate(notification.created_at) }}</p>
      <div v-if="notificationActions.length" class="flex mt-2 space-x-2">
        <button v-for="action in notificationActions" :key="action.text" :class="actionClass(action.primary)" @click="handleAction(action)">
          {{ action.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationItem',
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  emits: ['shareAddress'],
  computed: {
    notificationLink() {
      if (this.notification.type === 'wishlist') {
        return { name: 'Wishlist', params: { id: this.notification.action.wishlist_id } };
      } else if (this.notification.type === 'birthdays' || this.notification.type === 'friend') {
        return { name: 'UsersProfile', params: { username: this.notification.notifier?.username } };
      }
      return null;
    },
    notificationActions() {
      const actions = [];
      const message = this.notification.data.message;

      if (message.includes('fulfilled your wish')) {
        actions.push({ text: 'Move to archive', primary: true });
      } else if (message.includes('birthday is just around the corner')) {
        actions.push({ text: 'Check them out', primary: true });
      } else if (message.includes('birthday is today')) {
        actions.push({ text: 'View wishlist', primary: true });
      } else if (message.includes('birthday is in 1 month')) {
        actions.push({ text: 'Create wishlist', primary: true });
      } else if (message.includes('sent you a friend request')) {
        actions.push({ text: 'Accept', primary: true }, { text: 'Decline', primary: false });
      } else if (message.includes('requested your delivery address')) {
        actions.push({ text: 'Share address', primary: true }, { text: 'Cancel reservation', primary: false });
      }

      return actions;
    }
  },
  methods: {
    navigateTo(link) {
      if (link) {
        const resolved = this.$router.resolve(link);
        window.location.href = resolved.href;
      }
    },
    formatDate(date) {
      const dateObj = new Date(date);
      return dateObj.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });
    },
    priorityClass(priority) {
      switch (priority) {
        case 'low':
          return 'bg-[#FAFFFF] border border-[#37B1B5] text-[#37B1B5]';
        case 'medium':
          return 'bg-[#FCF8EE] border border-[#DAA520] text-[#DAA520]';
        case 'high':
          return 'bg-red-100 border border-red-600 text-red-600';
        default:
          return '';
      }
    },
    priorityIcon(priority) {
      switch (priority) {
        case 'low':
          return '/assets/gift.svg';
        case 'medium':
          return '/assets/star.svg';
        case 'high':
          return '/assets/frame-1618868307.svg';
        default:
          return '';
      }
    },
    actionClass(isPrimary) {
      return isPrimary ? 'bg-primaryColor text-white py-1 px-3 rounded-full' : 'bg-gray-200 text-gray-700 py-1 px-3 rounded-full';
    },
    async handleAction(action) {
      const friendId = this.notification.notifier?.id;
      try {
        if (action.text === 'Accept') {
          await this.$axios.put(`${this.$baseURL}/friends/${friendId}`, { status: 'accepted' }, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
          });
          console.log('Friend request accepted');
        } else if (action.text === 'Decline') {
          await this.$axios.put(`${this.$baseURL}/friends/${friendId}`, { status: 'rejected' }, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
          });
          console.log('Friend request declined');
        } else if (action.text === 'Share address') {
          this.$emit('shareAddress', this.notification.action_id);
        }
         else if (action.text === 'Cancel reservation') {
          
          this.$emit('cancelReservation', this.notification.action_id);
        }
      } catch (error) {
        console.error('Error handling action:', error);
      }
    }
  }
};
</script>
