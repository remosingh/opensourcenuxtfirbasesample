<template>
  <!-- Render the SignUpPage component. -->
  <SignUpPage />
</template>

<script>
import SignUpPage from "~/components/signup/SignUpPage.vue"; // Import the SignUpPage component.

export default {
  name: "signup", // The name of this Vue component.
  components: {
    SignUpPage, // Register the SignUpPage component for use in this template.
  },
};
</script>
