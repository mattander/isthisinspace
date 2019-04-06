<template>
  <main class="home">
    <section class="container">
      <h1>Look for things in space</h1>
      <p class="text-green">
        {{loaded ? 'loaded' : null}}
      </p>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  computed: {
    loaded() {
      return this.$store.getters.isLoaded;
    }
  },
  mounted() {
    this.$store.dispatch("getSpacexData");
  }
};
</script>
