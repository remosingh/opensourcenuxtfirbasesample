<template>
  <div
    class=""
  >
    <!-- <div class="flex items-center justify-center h-fit">
          <img src="~assets/sun.svg" alt="" class=""/>

    </div> -->

    <h1 class="text-primary-1-1 md:text-6xl text-2xl font-normal text-center">
      Your Vote, Your Share: Ethical Democracy
    </h1>
    <h2
      class="text-primary-2-1 md:text-2xl text-lg font-normal text-center mt-8"
    >
      Promote ethical democracy and share in the rewards. Your vote matters, and
      so do you.
    </h2>
    <div class="flex items-center justify-center mt-8 gap-4">
      <button @click="updatePageStatus('subscribe')" class="bg-secondary-1-1 text-secondary-2-1 px-4 py-2 rounded-md">
        Join the Game
      </button>
      <button
        @click="goto('#howitworks')"
        class="bg-secondary-2-1 text-secondary-1-1 px-4 py-2 rounded-md"
      >
        How it Works
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goto(page) {
      this.$router.push(page);
    },
    updatePageStatus(status) {
    this.$store.commit("SetLandingPageStatus", status);
    }
  },
};
</script>
