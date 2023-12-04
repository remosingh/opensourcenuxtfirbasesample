<template>
  <div class="bg-secondary-2-1 pt-8">
    <div class="flex justify-around py-4 text-primary-2-1">
      <a class="" href="/">Home</a>
      <a v-if="user.email === '' || !user.email" href="/signup">Signup</a>
      <p v-if="user.email" @click="logout">Logout</p>
      <a href="/login" v-else>Login</a>
    </div>
  </div>
</template>

<script>
export default {
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
