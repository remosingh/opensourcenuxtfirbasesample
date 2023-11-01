<template>
  <div class="container mx-auto my-8">
    <form @submit="register">
      <input type="email" v-model="email" placeholder="Email" required />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
    <a href="/login">Login</a>
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
    async register(event) {
      event.preventDefault();
      try {
        await this.$fire.auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((response) => {
            console.log(response);
            // This is to update the user state values
          })
          .then(() => {
            console.log("this runs after createcompany commit");
          });
      } catch (e) {
        alert(e);
      }
    },
  },
};
</script>
