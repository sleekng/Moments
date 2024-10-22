<template>
  <div class="w-3/4 space-y-16 pb-8">
    <!-- Email Notifications -->
    <div>
      <h1 class=" font-bold text-2xl mb-4 lg:hidden block">Notification</h1>

      <ToggleSection title="Email Notifications" :options="emailNotifications" @update="updateEmailSelections" />
    </div>

    <!-- Push Notifications -->
    <div>
  
      <ToggleSection title="Push Notifications" :options="pushNotifications" @update="updatePushSelections" />
    </div>

  </div>
</template>

<script>
import ToggleSection from '@/components/Dashboard/ToggleSection.vue';

export default {
  name: "NotificationSettings",
  components: {
    ToggleSection,
  },
  data() {
    return {
      emailNotifications: [
        "Someone likes my wishlist",
        "Someone likes my wish",
        "New friend request",
        "Accepted friend request",
        "Someone tags me to their wish",
        "Someone reserves my wish",
        "Someone fulfills my wish",
        "Send a reminder four weeks before my birthday and remind me to update my list",
        "Send reminders for upcoming birthdays"
      ],
      pushNotifications: [
        "Someone likes my wishlist",
        "Someone likes my wish",
        "New friend request",
        "Accepted friend request",
        "Someone tags me to their wish",
        "Someone reserves my wish",
        "Someone fulfills my wish",
        "Send a reminder four weeks before my birthday and remind me to update my list",
        "Send reminders for upcoming birthdays"
      ],
      selectedEmailNotifications: [], // To track selected email notifications
      selectedPushNotifications: [] // To track selected push notifications
    };
  },
  methods: {
    updateEmailSelections(selections) {
      this.selectedEmailNotifications = selections;
    },
    updatePushSelections(selections) {
      this.selectedPushNotifications = selections;
    },
  },
};
</script>
