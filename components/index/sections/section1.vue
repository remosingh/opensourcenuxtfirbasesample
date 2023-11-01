<template>
  <div
    class="bg-secondary-2-1 flex items-center justify-center h-fit py-20 relative"
  >
    <img
      id="rotating-svg"
      src="~assets/Star.svg"
      alt=""
      class="w-4/6 h-4/6 relative z-10"
    />
    <!-- Div centered on top of the SVG -->
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 z-20 w-full"
    >
      <landing v-if="landingPageStatus === 'landing'" />
      <subscribe v-if="landingPageStatus === 'subscribe'" />
      <preview v-if="landingPageStatus === 'preview'" />
      <paypreview v-if="landingPageStatus === 'paypreview'" />
      <thankyou v-if="landingPageStatus === 'thankyou'" />
      <tips v-if="landingPageStatus === 'tips'" />
    </div>
  </div>
</template>

<script>
import landing from "~/components/index/sections/section1comps/landing.vue";
import subscribe from "~/components/index/sections/section1comps/subscribe.vue";
import preview from "~/components/index/sections/section1comps/preview.vue";
import paypreview from "~/components/index/sections/section1comps/paypreview.vue";
import thankyou from "~/components/index/sections/section1comps/thankyou.vue";
import tips from "~/components/index/sections/section1comps/tips.vue";

export default {
  computed: {
    landingPageStatus() {
      return this.$store.state.landingPageStatus;
    },
  },
  components: {
    landing,
    subscribe,
    preview,
    paypreview,
    thankyou,
    tips,
  },
  mounted() {
    // Select the SVG element by its id
    const svg = document.getElementById("rotating-svg");

    // Add a scroll event listener to the window
    window.addEventListener("scroll", () => {
      // Get the current scroll position
      const scrollY = window.scrollY * 0.25;

      // Rotate the SVG based on the scroll position
      svg.style.transform = `rotate(${scrollY}deg)`;
    });
  },
};
</script>
