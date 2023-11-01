<template>
  <div class="bg-white p-16">
    <img src="~assets/starshell.svg" alt="" />
    <h3 class="md:text-6xl text-xl leading-loose tracking-wide font-bold">Why choose us?</h3>
      <p class="md:text-xl text-md leading-loose tracking-wide mt-8">{{ text }}</p>
  </div>
</template>


<script>
export default {
  data () {
    return {
      text: "Choose us for our cutting-edge technology that simplifies the complexities of voting and crypto. We're at the forefront of innovation, making participation easy and rewarding."
    }
  }
}
</script>