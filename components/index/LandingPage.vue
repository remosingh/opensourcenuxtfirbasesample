<template>
  <div>
    <section1 />
    <section2 />
    <section3 />
    <section4 />
    <section5 />
    <section6 />

    <div class="container mx-auto my-8">
      <h1 class="text-4xl font-bold">Welcome to my landing page</h1>
      <p class="text-lg">
        This is a simple landing page built with Nuxt.js and Tailwind CSS.
      </p>
      <p v-if="walletAddress != ''">
        Your Address is: <span>{{ walletAddress }}</span>
      </p>
      <p v-else>No Wallet has been connected yet</p>
    </div>
  </div>
</template>

<script>
import section1 from "~/components/index/sections/section1.vue";
import section2 from "~/components/index/sections/section2.vue";
import section3 from "~/components/index/sections/section3.vue";
import section4 from "~/components/index/sections/section4.vue";
import section5 from "~/components/index/sections/section5.vue";
import section6 from "~/components/index/sections/section6.vue";

export default {
  components: {
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
  },
  data() {
    return {
      walletAddress: "",
    };
  },
  mounted() {
    this.getWalletAdress();
  },
  methods: {
    getWalletAdress() {
      this.walletAddress = localStorage.getItem("walletAddress");
    },
  },
};
</script>
