<template>
    <div class="px-4 py-6 relative">
      <div class="absolute bg-gray-100 w-full left-0 top-0 ">
        <div class="flex items-center justify-between px-4 pt-6">
          <h2 class="text-xl font-semibold mb-4" style="font-family: Mukta">Your notifications</h2>
          <img src="/assets/settings.svg" alt="Settings" class="w-4 h-4 cursor-pointer">
        </div>
        <!-- Tabs -->
        <div class="flex justify-between text-center px-4 ">
          <span :class="{'font-bold text-black  border-b-4 border-black': activeTab === 'All'}" class="text-sm w-[93.5px] text-gray-500 cursor-pointer" @click="setActiveTab('All')">All</span>
          <span :class="{'font-bold text-black  border-b-4 border-black': activeTab === 'Friends'}" class="text-sm w-[93.5px] text-gray-500 cursor-pointer" @click="setActiveTab('Friends')">Friends</span>
          <span :class="{'font-bold text-black  border-b-4 border-black': activeTab === 'Wishlist'}" class="text-sm w-[93.5px] text-gray-500 cursor-pointer" @click="setActiveTab('Wishlist')">Wishlist</span>
          <span :class="{'font-bold text-black  border-b-4 border-black': activeTab === 'Birthdays'}" class="text-sm w-[93.5px] text-gray-500 cursor-pointer" @click="setActiveTab('Birthdays')">Birthdays</span>
        </div>
       
      </div>
      <div class="pt-20 h-[650px] overflow-y-auto">
        <!-- Notification Item Template -->
        <NotificationItem v-for="(notification, index) in filteredNotifications" :key="index" :notification="notification" />
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
    data() {
      return {
        activeTab: 'All',
   notifications: [
  {
    imgSrc: '/assets/profile-7.svg',
    user: '@ayomide_sm',
    text: "Congrats! @ayomide_sm has reserved a wish for you and requested your delivery address.",
    time: "2 mins ago",
    type: "wishlist",
    actions: [
      { text: "Share address", primary: true },
      { text: "Cancel reservation" }
    ]
  },
  {
    imgSrc: '/assets/profile-2.svg',
    user: '@johndoe',
    text: "@johndoe liked your wish",
    time: "5 mins ago",
    type: "wishlist",
    actions: []
  },
  {
    imgSrc: '/assets/profile-3.svg',
    user: '@janesmith',
    text: "@janesmith sent you a friend request",
    time: "10 mins ago",
    type: "friends",
    actions: [
      { text: "Accept", primary: true },
      { text: "Decline" }
    ]
  },
  {
    imgSrc: '/assets/profile-4.svg',
    user: '@emilybrown',
    text: "@emilybrown accepted your friend request",
    time: "15 mins ago",
    type: "friends",
    actions: []
  },
  {
    imgSrc: '/assets/profile-5.svg',
    user: '@michaeljohnson',
    text: "@michaeljohnson liked your birthday wishlist",
    time: "20 mins ago",
    type: "birthdays",
    actions: []
  },
  {
    imgSrc: '/assets/profile-6.svg',
    user: '@alexw',
    text: "@alexw reserved a wish from your holiday wishlist",
    time: "25 mins ago",
    type: "wishlist",
    actions: [
      { text: "Send details", primary: true },
      { text: "Cancel" }
    ]
  },
  {
    imgSrc: '/assets/profile-7.svg',
    user: '@sarahlee',
    text: "@sarahlee sent you a message",
    time: "30 mins ago",
    type: "messages",
    actions: []
  },
  {
    imgSrc: '/assets/profile-7.svg',
    user: '@markthompson',
    text: "@markthompson liked your holiday trip wishlist",
    time: "35 mins ago",
    type: "wishlist",
    actions: []
  },
  {
    imgSrc: '/assets/profile-7.svg',
    user: '@katherinec',
    text: "@katherinec invited you to her birthday event",
    time: "40 mins ago",
    type: "events",
    actions: [
      { text: "RSVP", primary: true },
      { text: "Decline" }
    ]
  },
  {
    imgSrc: '/assets/profile-7.svg',
    user: '@lucaswhite',
    text: "@lucaswhite sent you a delivery address for the reserved wish",
    time: "45 mins ago",
    type: "wishlist",
    actions: []
  },
  {
    imgSrc: '/assets/profile-7.svg',
    user: '@olivert',
    text: "@olivert accepted your wishlist invitation",
    time: "50 mins ago",
    type: "wishlist",
    actions: []
  },
  {
    imgSrc: '/assets/profile-7.svg',
    user: '@gracem',
    text: "@gracem sent you a reminder to update your wishlist",
    time: "55 mins ago",
    type: "reminder",
    actions: []
  },
  {
    imgSrc: '/assets/profile-7.svg',
    user: '@hannahb',
    text: "All wishes in your birthday wishlist has been fulfilled",
    time: "1 hour ago",
    type: "wishlist",
    actions: [{ text: "Move to archive" }]
  },
  {
    imgSrc: '/assets/profile-4.svg',
    user: '@danielj',
    text: "@danielj sent you a wishlist reservation request",
    time: "1 hour 10 mins ago",
    type: "wishlist",
    actions: [
      { text: "Accept", primary: true },
      { text: "Decline" }
    ]
  },
  {
    imgSrc: '/assets/profile-7.svg',
    user: '@damola',
    text: "Hey, @damola’s birthday is just around the corner, only 8 days away! She's got 10 new wishes this year",
    time: "1 hour 20 mins ago",
    type: "birthdays",
    actions: [{ text: "Check them out" }]
  },
  {
    imgSrc: '/assets/profile-7.svg',
    user: '@patrickm',
    text: "@patrickm birthday is today 🎂",
    time: "1 hour 30 mins ago",
    type: "birthdays",
    actions: [{ text: "View wishlist" }]
  },
  {
    imgSrc: '/assets/profile-7.svg',
    user: '@nataliee',
    text: "Your birthday is in 1 month 🎂",
    time: "1 hour 45 mins ago",
    type: "birthdays",
    actions: [  { text: "Create wishlist", primary: true },]
  },
  {
    imgSrc: '/assets/profile-7.svg',
    user: '@adamr',
    text: "@adamr reserved an item from your wishlist",
    time: "2 hours ago",
    type: "wishlist",
    actions: [
      { text: "Send details", primary: true },
      { text: "Cancel reservation" }
    ]
  },
  {
    imgSrc: '/assets/profile-7.svg',
    user: '@madisonw',
    text: "@madisonw liked your wedding wishlist",
    time: "2 hours 10 mins ago",
    type: "wedding",
    actions: []
  },
  {
    imgSrc: '/assets/profile-7.svg',
    user: '@ethanb',
    text: "@ethanb sent you a new wishlist request",
    time: "2 hours 20 mins ago",
    type: "wishlist",
    actions: [
      { text: "Accept", primary: true },
      { text: "Decline" }
    ]
  }
]

      };
    },
    computed: {
      filteredNotifications() {
        if (this.activeTab === 'All') return this.notifications;
        return this.notifications.filter(notification => notification.type === this.activeTab.toLowerCase());
      }
    },
    methods: {
      setActiveTab(tab) {
        this.activeTab = tab;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>
  