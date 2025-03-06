<template>
  <div class="px-4 py-6 relative">
    <div class="absolute bg-gray-100 w-full left-0 top-0">
      <div class="flex items-center justify-between px-4 pt-6">
        <h2 class="text-xl font-semibold mb-4" style="font-family: Mukta">Your notifications</h2>
        <img src="/assets/settings.svg" alt="Settings" class="w-4 h-4 cursor-pointer" @click="navigateToSettings">
      </div>
      <div class="flex justify-between text-center px-4">
        <span :class="{'font-bold text-black border-b-4 border-black': activeTab === 'All'}" class="text-sm w-[93.5px] text-gray-500 cursor-pointer" @click="setActiveTab('All')">All</span>
        <span :class="{'font-bold text-black border-b-4 border-black': activeTab === 'Friend'}" class="text-sm w-[93.5px] text-gray-500 cursor-pointer" @click="setActiveTab('Friend')">Friend</span>
        <span :class="{'font-bold text-black border-b-4 border-black': activeTab === 'Wishlist'}" class="text-sm w-[93.5px] text-gray-500 cursor-pointer" @click="setActiveTab('Wishlist')">Wishlist</span>
        <span :class="{'font-bold text-black border-b-4 border-black': activeTab === 'Birthdays'}" class="text-sm w-[93.5px] text-gray-500 cursor-pointer" @click="setActiveTab('Birthdays')">Birthdays</span>
      </div>
    </div>
    <div class="pt-20 h-[650px] pb-10 overflow-y-auto">
      <NotificationItem v-for="notification in filteredNotifications" :key="notification.id" :notification="notification" @shareAddress="shareAddress" @cancelReservation="cancelReservation"   @refreshNotifications="refreshNotifications" />
      <div v-if="filteredNotifications.length === 0" class="flex flex-col items-center justify-center h-full">
        <img src="/assets/notification-bell.svg" alt="No Notifications" class="w-12 h-12 mb-4" />
        <p class="text-center text-gray-500">You don't have any notifications at the moment.</p>
      </div>
    </div> 
  </div>
</template>

<script>
import NotificationItem from './NotificationItem.vue';

export default {
  name: 'NotificationDropdown',
  components: {
    NotificationItem
  },
  props: {
    notifications: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeTab: 'All',
    };
  },
  computed: {
    filteredNotifications() {
      if (this.activeTab === 'All') {
        return this.notifications;
      } else {
        return this.notifications.filter(notification => notification.type.toLowerCase() === this.activeTab.toLowerCase());
      }
    }
  },
  methods: {
    refreshNotifications() {
    this.$emit('refreshNotifications');
    },
    navigateToSettings() {
      this.$router.push({ path: '/account', query: { page: 'notification' } });
    },
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    shareAddress(wishID) {
      this.$emit('shareAddress', wishID);
    },
    cancelReservation(wishID) {
      
      this.$emit('cancelReservation', wishID);
    }
  }
};
</script>
