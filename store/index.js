export const state = () => ({
  user: {}, // Initialize the 'user' state object to store user data.
});

  export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
        if (!authUser) {
                    // If no authenticated user is present:
          state.user.id = "";
          state.user.email = "";
          state.user.emailVerified = false;
          state.user.displayName = "";
          state.user.photoURL = "";
          console.log("no user");
        } else {
          // If an authenticated user is present:
          // Populate the 'user' state with user data from Firebase.
          // Do this:
          state.user.id = authUser.uid;
          state.user.email = authUser.email;
          state.user.emailVerified = authUser.emailVerified;
          state.user.displayName = authUser.displayName;
          state.user.photoURL = authUser.photoURL;
          // Uncomment the following line if you want to log a message when a user is created with an email.
          // console.log("user created with email " + state.user.email)
        }
      },
  }

  