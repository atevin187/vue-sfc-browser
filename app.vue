<template>
  <div id="app">
    <hello-world />
  </div>
</template>

<script>
module.exports = {
  components: {
    "hello-world": "url:components/hello-world.vue"
  }
};
</script>

<style>
#app {
  background-color: #ffe;
}
</style>