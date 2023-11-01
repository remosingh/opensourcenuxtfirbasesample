<template>
  <div id="howitworks" class="bg-primary-1-1 p-16 relative">
    <div class="relative">
      <h3 class="text-6xl">HOW IT WORKS</h3>
    </div>
    <div class="absolute inset-0 z-0">
      <img
        src="~assets/mini_star.svg"
        alt="Background SVG 1"
        class="w-16 h-16 object-cover"
      />
      <img
        src="~assets/mini_star.svg"
        alt="Background SVG 2"
        class="w-16 h-16 object-cover"
      />
      <!-- Add more SVGs as needed -->
    </div>
    <div class="max-w-2xl mx-auto relative mt-16">
      <div
        v-for="(step, index) in steps"
        v-bind:key="index"
        class="flex flex-col items-center"
      >
        <div class="flex items-center">
          <div
            class="w-8 h-8 bg-black rounded-full text-white flex items-center justify-center"
          >
            {{ index + 1 }}
          </div>
          <p class="text-2xl ml-4 bg-black rounded-3xl p-4 text-primary-1-1">{{ step.stepName }}</p>
        </div>
        <!-- Arrow -->
        <div class="flex items-center mt-4">
          <div v-if="index % 2 === 0">
            <div
              v-for="(instruction, index) in step.instructions"
              v-bind:key="index * 1.2"
              class="mt-8"
            >
              <p>{{ instruction }}</p>
            </div>
          </div>
          <img src="~assets/arrow_down.svg" class="h-64 px-8" alt="" />
          <div v-if="index % 2 != 0">
            <div
              v-for="(instruction, index) in step.instructions"
              v-bind:key="index * 1.2"
              class="mt-8"
            >
              <p>{{ instruction }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
          <button @click="updatePageStatus('subscribe')" class="bg-secondary-1-1 text-secondary-2-1 px-4 py-2 rounded-md mt-8 z-30 relative">
        Join the Game
      </button>
  </div>
</template>

<script>
export default {
  methods: {
        updatePageStatus(status) {
    this.$router.push('/');
    this.$store.commit("SetLandingPageStatus", status);
    }
  },
  data() {
    return {
      steps: [
        {
          stepName: "View Question",
          instructions: [
            "Every day, a new question is posted by the community.",
            "Review the daily question and understand the choices.",
          ],
        },
        {
          stepName: "Vote with ETH",
          instructions: [
            "Select your preferred option or propose your own.",
            "Enter the required amount of ETH to cast your vote.",
          ],
        },
        {
          stepName: "Vote Collection",
          instructions: [
            "Your ETH contribution is added to the central pool.",
            "Watch as the pool grows with each vote.",
          ],
        },
        {
          stepName: "Share Rewards",
          instructions: [
            "At the end of the day, 90% of the collected ETH is distributed.",
            "Wallets that voted for the majority option share the rewards equally.",
          ],
        },
      ],
    };
  },
};
</script>
