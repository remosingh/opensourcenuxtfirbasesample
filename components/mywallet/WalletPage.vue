<template>
  <div>
    <p v-if="walletAddress != ''">
      Your Address is: <span>{{ walletAddress }}</span>
    </p>
    <p v-else-if="localWalletAddress != ''">
      Your Address is: <span>{{ localWalletAddress }}</span>
    </p>
    <p v-else>No Wallet has been connected yet</p>
    <button @click="connectWallet">Connect Wallet</button>
    <button @click="disconnectWallet">Dis-Connect Wallet</button>
  </div>
</template>

<script>
import { ethers } from "ethers";

export default {
  data() {
    return {
      localWalletAddress: "",
    };
  },
  mounted() {
    this.getWalletAdress();
  },
  computed: {
    walletAddress() {
      return this.$store.state.walletAddress;
    },
  },
  methods: {
    getWalletAdress() {
      this.localWalletAddress = localStorage.getItem("walletAddress");
    },
    async connectWallet() {
      if (typeof window.ethereum !== "undefined") {
        try {
          // Request access to the user's accounts
          await window.ethereum.request({ method: "eth_requestAccounts" });
          // Connect to the wallet using ethers.js provider
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          // Retrieve the connected wallet address
          const walletAddress = await signer.getAddress();
          this.$store.commit("SetWalletAddress", walletAddress);
          console.log("Connected Wallet Address:", walletAddress);
          // You can use the "signer" object for further wallet interactions using ethers.js
        } catch (error) {
          console.error("Failed to connect wallet:", error);
        }
      } else {
        console.error("No crypto wallet detected.");
        // Handle the case when a crypto wallet is not available
      }
    },
    disconnectWallet() {
      localStorage.setItem('walletAddress', '')
      this.getWalletAdress()
    }
  },
};
</script>
