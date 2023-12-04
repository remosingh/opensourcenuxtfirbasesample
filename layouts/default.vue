<template>
  <!-- The root element for the component, containing a container and child components. -->
  <div class="max-w-5xl mx-auto text-center">
    <!-- Include the 'navbar' component for navigation. -->
    <navbar />
    <!-- Render the content of the current route (Nuxt). -->
    <Nuxt class="" />
    <!-- Include the 'footercomp' component for displaying a footer. -->
    <footercomp />
  </div>
</template>

<script>
import navbar from "~/components/common/navbar.vue";
import footercomp from "~/components/common/footercomp.vue";

export default {
  components: {
    navbar, // Register the 'navbar' component for use in the template.
    footercomp, // Register the 'footercomp' component for use in the template.
  },
  computed: {
    user() {
      // A computed property that retrieves the user state from the Vuex store.
      return this.$store.state.user;
    },
  },
  methods: {
    async logout(user) {
      try {
        // Attempt to sign the user out using Firebase authentication.
        await this.$fire.auth.signOut();
        console.log("user logged out"); // Log success message.
        this.$router.push("/"); // Redirect the user to the home page after logout.
      } catch (e) {
        alert(e); // Display an alert with any encountered errors.
      }
      console.log("log out pressed"); // Log that the logout button was pressed.
    },
  },
};
</script>
