<template>
  <div class="relative h-screen">
    <div class="absolute inset-0">
      <img src="~assets/landingimage.jpg" alt="Image" class="w-full h-full object-cover filter grayscale">
    </div>
    <div class="px-8 absolute inset-0 flex items-center justify-center text-white md:text-6xl text-xl leading-loose tracking-wide">
      {{text}}
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      text:'"this is a remarkable force of empowerment and democratization. It holds the promise of amplifying voices & ensuring fair and transparent voting systems."'
    }
  }
}
</script>