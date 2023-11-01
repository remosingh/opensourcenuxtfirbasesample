<template>
  <div class="max-w-5xl mx-auto text-center">
    <navbar/>
    <Nuxt class=""/>
    <footercomp/>
  </div>
</template>

<script>
import navbar from "~/components/common/navbar.vue";
import footercomp from "~/components/common/footercomp.vue";


export default {
  components: {
    navbar,
    footercomp
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    async logout(user) {
      try {
        await this.$fire.auth.signOut();
        console.log("user logged out");
        this.$router.push("/");
      } catch (e) {
        alert(e);
      }
      console.log("log out pressed");
    },
  },
};
</script>
