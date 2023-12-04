<template>
  <div>
    <!-- The root element for this component. -->
    <section1 /> <!-- Render the 'section1' component. -->
  </div>
</template>

<script>
import section1 from "~/components/index/sections/section1.vue";

export default {
  components: {
    section1, // Register the 'section1' component for use in this component.
  },
  data() {
    return {
      dataObjectName: "", // Initialize a data property called 'dataObjectName'.
    };
  },
  mounted() {
    // Code to be executed when this component is mounted in the DOM.
  },
  methods: {
    // Custom methods for this component can be defined here.
  },
};
</script>
