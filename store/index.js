export const state = () => ({
    user: {},
    walletAddress: "",
    landingPageStatus: "landing"
  });

  export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
        if (!authUser) {
          state.user.id = "";
          state.user.email = "";
          state.user.emailVerified = false;
          state.user.displayName = "";
          state.user.photoURL = "";
          console.log("no user");
        } else {
          // Do this:
          state.user.id = authUser.uid;
          state.user.email = authUser.email;
          state.user.emailVerified = authUser.emailVerified;
          state.user.displayName = authUser.displayName;
          state.user.photoURL = authUser.photoURL;
          // console.log("user created with email " + state.user.email)
        }
      },
      SetWalletAddress(state, address) {
        state.walletAddress = address;
        localStorage.setItem('walletAddress', address)
      },
      SetLandingPageStatus(state, status) {
        state.landingPageStatus = status;
      },
  }

  