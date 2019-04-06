<template>
  <footer :class="htmlHeight < viewportHeight ? 'footer_fixed-to-bottom' : null">
    <div class="container">
      <div class="footer-copyright">&copy; 2019 Matt Anderson</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    htmlHeight() {
      return document.getElementsByTagName("body")[0].scrollHeight;
    },
    viewportHeight() {
      return window.innerHeight;
    }
  }
};
</script>

<style>
</style>
