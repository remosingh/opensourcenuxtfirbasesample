<template>
  <div class="">
    <!-- <div class="flex items-center justify-center h-fit">
          <img src="~assets/sun.svg" alt="" class=""/>

    </div> -->

    <h1 class="text-primary-1-1 md:text-6xl text-2xl font-normal text-center">
      Testing, Tweaking, and Almost There: Subscribe Now
    </h1>
    <h2
      class="text-primary-2-1 md:text-2xl text-lg font-normal text-center mt-8"
    >
      We're in the final stages of testing and refinement. Subscribe now to be
      the first to know when we launch!
    </h2>
    <input
      class="bg-secondary-1-1 rounded-md p-2 mt-8"
      type="email"
      v-model="email"
      placeholder="Enter Email Address"
      @input="validateEmail"
    />
    <span v-if="emailError" class="text-red-500">{{ emailError }}</span>

    <div class="mt-8">
      <button
        @click="updatePageStatus('preview')"
        class="bg-secondary-1-1 text-secondary-2-1 px-4 py-2 rounded-md"
      >
        Subscribe to Preview Question
      </button>
      <button
        @click="updatePageStatus('landing')"
        class="bg-secondary-2-1 text-secondary-1-1 px-4 py-2 rounded-md"
      >
        Back
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emailError: "",
    };
  },
  methods: {
    validateEmail() {
      if (this.email.trim() === "") {
        this.emailError = "Email is required";
      } else if (!this.isValidEmail(this.email)) {
        this.emailError = "Please enter a valid email address";
      } else {
        this.emailError = ""; // Clear the error message when the email is valid
      }
    },
    isValidEmail(email) {
      // Use a regular expression for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    updatePageStatus(status) {
      if (status != "landing") {
        if (this.email === "") {
          alert("Email is required");
        } else if (this.emailError != "") {
          alert(this.emailError);
        } else {
          this.saveText();
          this.$store.commit("SetLandingPageStatus", status);
        }
      } else {
        this.$store.commit("SetLandingPageStatus", status);
      }
    },
    async saveText() {
      if (this.email === "") {
        alert("Email is required");
      } else if (this.emailError != "") {
        alert(this.emailError);
      } else {
        const messageRef = this.$fire.firestore.collection("message").doc();
        try {
          await messageRef.set({
            email: this.email,
            date: new Date(),
          });
        } catch (e) {
          alert(e);
          return;
        }
      }
    },
  },
};
</script>
