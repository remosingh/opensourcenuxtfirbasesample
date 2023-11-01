<template>
  <div class="">
    <!-- <div class="flex items-center justify-center h-fit">
          <img src="~assets/sun.svg" alt="" class=""/>

    </div> -->
    <div class="bg-grey p-8 rounded-md">
      <div class="flex justify-between">
        <p class="text-xl font-bold">Voting Tips</p>
      </div>
      <div class="border-solid border-slate-700 border-2 rounded-md p-8 mt-8">
        <ul class="text-lg font-bold text-left">
          <li>Do not try to “game” the voting</li>
          <li class="my-8">
            Vote for what you believe in and stay consistent with your beliefs
          </li>
          <li>
            Maybe you won’t win every question, but due to the sheer variety of
            questions, there will be some which you will be aligned with
          </li>
        </ul>
      </div>
      <button
        @click="updatePageStatus('preview')"
        class="bg-secondary-1-1 text-secondary-2-1 px-4 py-2 rounded-md mt-8"
      >
        Back
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
