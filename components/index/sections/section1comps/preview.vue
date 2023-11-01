<template>
  <div class="max-h-[50vh] md:max-h-[60vh] lg:max-h-[75vh] overflow-y-auto">
    <!-- <div class="flex items-center justify-center h-fit">
          <img src="~assets/sun.svg" alt="" class=""/>

    </div> -->

    <h1 class="text-primary-1-1 md:text-6xl text-2xl font-normal text-center">
      Question <span class="text-xl">preview</span>
    </h1>
    <h2
      class="text-primary-2-1 md:text-2xl text-lg font-normal text-center mt-8"
    >
      {{ question.text }}
    </h2>
      <div v-for="(option, index) in question.options" v-bind:key="index" class="mt-8">
        <div class="flex lg:justify-center items-center mb-8">
          <p class="text-primary-1-1 basis-3/4">{{ option }}</p>
          <button
            @click="updatePageStatus('paypreview')"
            class="bg-secondary-1-1 text-secondary-2-1 px-4 py-2 rounded-md"
          >
            Vote
          </button>
        </div>
      </div>
    <div class="bg-white rounded-md mt-8 py-4 md:w-1/2 mx-auto text-center">
      <p class="text-secondary-1-1">Voting Fee: 0.1 Eth</p>
      <p class="text-secondary-1-1">Total Votes: 1.2k</p>
      <p class="text-secondary-1-1">Eth Pool: 120 Eth</p>
      <p class="text-secondary-1-1">Eth Pool for Rewards: 108 Eth</p>
    </div>
    <button
      @click="updatePageStatus('tips')"
      class="bg-primary-1-1 text-secondary-2-1 px-4 py-2 rounded-md mt-8"
    >
      Click here for tips
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: {
        text: "Which factor has the most significant influence on shaping one's identity and worldview?",
        options: [
          "Cultural Background and Heritage",
          "Education and Intellectual Development",
          "Personal Experiences and Interactions",
          "Media and Information Sources",
          "Socioeconomic Status and Upbringing",
          "Genetic and Biological Factors",
          "Political Beliefs and Affiliations",
          "Geographic Location and Environment",
          "Religious Beliefs and Values",
          "Peer Group and Social Circles",
        ],
      },
    };
  },
  methods: {
    updatePageStatus(status) {
      this.$store.commit("SetLandingPageStatus", status);
    },
  },
};
</script>
