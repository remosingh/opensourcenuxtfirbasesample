<template>
  <div class="">
    <!-- <div class="flex items-center justify-center h-fit">
          <img src="~assets/sun.svg" alt="" class=""/>

    </div> -->

    <h1 class="text-primary-1-1 md:text-6xl text-2xl font-normal text-center">
      Thank You! Voting will Close in 13 hours
    </h1>
    <h2
      class="text-primary-2-1 md:text-2xl text-lg font-normal text-center mt-8"
    >
      Majority option voters will receive the Eth Pool for Rewards, divided equally.
    </h2>
    <div class="bg-white rounded-md mt-8 py-4 md:w-1/2 mx-auto text-center">
      <p class="text-secondary-1-1">Voting Fee: 0.1 Eth</p>
      <p class="text-secondary-1-1">Total Votes: 1.2k</p>
      <p class="text-secondary-1-1">Eth Pool: 120 Eth</p>
      <p class="text-secondary-1-1">Eth Pool for Rewards: 108 Eth</p>
    </div>
                <button
          @click="updatePageStatus('landing')"
          class="bg-primary-1-1 text-secondary-2-1 px-4 py-2 rounded-md mt-8"
        >
          Back Home
        </button>
  </div>
</template>

<script>
export default {
  methods: {
    updatePageStatus(status) {
      this.$store.commit("SetLandingPageStatus", status);
    },
  },
};
</script>
