<template>
  <!-- Render the 'LoginPage' component within this template. -->
  <LoginPage />
</template>

<script>
import LoginPage from "~/components/login/LoginPage.vue"; // Import the 'LoginPage' component.

export default {
  name: "login", // Set the component's name to 'login'.

  components: {
    LoginPage, // Register the 'LoginPage' component for use within this component.
  },
};
</script>
