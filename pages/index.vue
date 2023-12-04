<template>
  <LandingPage /> <!-- Render the LandingPage component within this template. -->
</template>

<script>
import LandingPage from "~/components/index/LandingPage.vue"; // Import the LandingPage component.

export default {
  name: "IndexPage", // The name of this Vue component.
  components: {
    LandingPage, // Register the LandingPage component for use within this component.
  },
};
</script>
