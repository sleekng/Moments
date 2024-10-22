<template>
  <h1 class=" font-bold text-2xl mb-4 lg:hidden block">Privacy and safety</h1>
  <div class="w-3/4 space-y-8">
    <PrivacySection 
      title="Who can see my profile" 
      :options="profileVisibilityOptions" 
      :selected="selectedProfileVisibility"
      @update="updateProfileVisibility"
    />
    <PrivacySection 
      title="Who can see my reserved and received wishes" 
      :options="wishVisibilityOptions" 
      :selected="selectedWishVisibility"
      @update="updateWishVisibility"
    />
    <PrivacySection 
      title="Who can send me friend request" 
      :options="friendRequestOptions" 
      :selected="selectedFriendRequest"
      @update="updateFriendRequest"
    />
    <PrivacySection 
      title="Who can tag me to a wishlist" 
      :options="tagWishlistOptions" 
      :selected="selectedTagWishlist"
      @update="updateTagWishlist"
    />
    <PrivacySection 
      title="Who can nominate me for a wish" 
      :options="nominateWishOptions" 
      :selected="selectedNominateWish"
      @update="updateNominateWish"
    />
    <PrivacySection 
      title="Who can reserve my wish" 
      :options="reserveWishOptions" 
      :selected="selectedReserveWish"
      @update="updateReserveWish"
    />
    <PrivacySection 
      title="Who can see my birthday" 
      :options="birthdayVisibilityOptions" 
      :selected="selectedBirthdayVisibility"
      @update="updateBirthdayVisibility"
    />
  </div>
</template>

<script>
import PrivacySection from '@/components/Dashboard/PrivacySection.vue';

export default {
  name: "PrivacySettings",
  components: {
    PrivacySection,
  },
  data() {
    return {
      profileVisibilityOptions: ["Everyone", "Friends only", "No one"],
      selectedProfileVisibility: 0,  // Initial index for selected
      wishVisibilityOptions: ["Everyone", "Friends only", "No one"],
      selectedWishVisibility: 0,
      friendRequestOptions: ["Anyone", "Friends only"],
      selectedFriendRequest: 0,
      tagWishlistOptions: ["Everyone", "Friends only", "No one"],
      selectedTagWishlist: 0,
      nominateWishOptions: ["Everyone", "Friends only", "No one"],
      selectedNominateWish: 0,
      reserveWishOptions: ["Everyone", "Friends only"],
      selectedReserveWish: 0,
      birthdayVisibilityOptions: ["Everyone", "Friends only", "No one"],
      selectedBirthdayVisibility: 0,
    };
  },
  methods: {
    updateProfileVisibility(index) {
      this.selectedProfileVisibility = index;
    },
    updateWishVisibility(index) {
      this.selectedWishVisibility = index;
    },
    updateFriendRequest(index) {
      this.selectedFriendRequest = index;
    },
    updateTagWishlist(index) {
      this.selectedTagWishlist = index;
    },
    updateNominateWish(index) {
      this.selectedNominateWish = index;
    },
    updateReserveWish(index) {
      this.selectedReserveWish = index;
    },
    updateBirthdayVisibility(index) {
      this.selectedBirthdayVisibility = index;
    },
  },
};
</script>
