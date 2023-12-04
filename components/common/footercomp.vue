<template>
  <footer class="bg-gray-900 py-6 text-gray-300 px-4">
    <div class="container mx-auto">
      <div class="md:flex justify-between items-center">
        <div>
          <p class="text-2xl font-semibold">Your Website</p>
          <p class="text-sm">A description of your website goes here.</p>
        </div>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-blue-500">Home</a>
          <a href="#" class="hover:text-blue-500">About</a>
          <a href="#" class="hover:text-blue-500">Services</a>
          <a href="#" class="hover:text-blue-500">Contact</a>
        </div>
      </div>
      <div class="mt-4 text-center">
        <p class="text-sm">&copy; {{ new Date().getFullYear() }} Your Website. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  // Your Vue component configuration goes here
}
</script>

<style scoped>
/* Add custom CSS for your footer here */
</style>