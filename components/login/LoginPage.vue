<template>
  <div class="container mx-auto my-8">
    <form @submit="login">
      <input type="email" v-model="email" placeholder="Email" required />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login(event) {
        event.preventDefault();
      try {
        await this.$fire.auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then((response) => {
              console.log(response)
              this.$router.push("/");
          });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
