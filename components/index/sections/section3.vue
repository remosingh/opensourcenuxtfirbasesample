<template>
  <div class="bg-white p-16">
    <img src="~assets/starshell.svg" alt="" />
    <h3 class="text-6xl mt-16">FAQs</h3>
    <div class="mt-8 text-left" v-for="(faq, index) in faqs" v-bind:key="index">
      <p class="md:text-4xl text-xl leading-loose tracking-wide">{{ faq.question }}</p>
      <p class="md:text-lg text-md leading-loose tracking-wide mt-4">{{ faq.answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "How Does the Voting Process Work?",
          answer:
            "The voting process is straightforward. You can review the daily question, select your preferred option, and enter the required amount of ETH to cast your vote. Your choice is securely recorded on the blockchain.",
        },
        {
          question: "What Is the Purpose of Cryptocurrency in Voting?",
          answer:
            "Cryptocurrency enhances the voting process by providing security, transparency, and rewards. It ensures the integrity of the votes and allows for equitable distribution of rewards.",
        },
        {
          question: "How Are Rewards Distributed?",
          answer:
            "Rewards are distributed at the end of the day, with 90% of the collected ETH shared equally among wallets that voted for the majority option. Your reward is based on your participation.",
        },
        {
          question: "How Is Transparency Ensured in the Voting System?",
          answer:
            "Transparency is a core feature. The blockchain technology we use ensures that all voting records are immutable and visible to all users, providing a high level of transparency and security.",
        },
        {
          question:
            "What Sets Your Platform Apart from Traditional Voting Systems?",
          answer:
            "Our platform offers a unique blend of crypto-powered voting, transparency, and rewards. Unlike traditional systems, it empowers users to actively participate, be rewarded, and witness their impact in real-time.",
        },
      ],
    };
  },
};
</script>
