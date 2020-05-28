require.config({
  paths: {
    vue: "https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min",
    "http-vue-loader":
      "https://cdn.jsdelivr.net/npm/http-vue-loader@1.4.2/src/httpVueLoader.min",
  },
});

require(["vue", "http-vue-loader"], (Vue, httpVueLoader) => {
  Vue.use(httpVueLoader);

  new Vue({
    components: {
      app: "url:app.vue",
    },
    template: "<app />",
  }).$mount("#app");
});
