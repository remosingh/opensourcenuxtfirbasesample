<template>
  <div class="">
    <!-- <div class="flex items-center justify-center h-fit">
          <img src="~assets/sun.svg" alt="" class=""/>

    </div> -->
    <div class="bg-grey p-8 rounded-md">
      <div class="flex justify-between">
        <p class="text-xl font-bold">Voting Fee Alert (Preview)</p>
        <p class="cursor-pointer" @click="updatePageStatus('preview')">X</p>
      </div>
      <div class="border-solid border-slate-700 border-2 rounded-md p-8 mt-8">
        <p class="text-lg font-bold text-left">
          Your are about to pay <span class="rounded-md bg-primary-1-1 p-2">0.1 Eth</span> to Vote
        </p>
        <p class="text-primary-1-1 text-lg font-bold text-left mt-8">
          Which factor has the most significant influence on shaping one's
          identity and worldview?
        </p>
        <p class="text-lg font-bold text-left mt-8">Voting for:</p>
        <p class="text-primary-1-1 text-lg font-bold text-left mt-8">
          Option 1: Cultural Background and Heritage
        </p>
      </div>
      <button
        @click="updatePageStatus('thankyou')"
        class="bg-secondary-1-1 text-secondary-2-1 px-4 py-2 rounded-md mt-8"
      >
        Continue
      </button>
    </div>
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
