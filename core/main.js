require.config({
  paths: {
    babel: "babel",

    "babel-standalone":
      "https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min",
    vue: "https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min",
    "http-vue-loader":
      "https://cdn.jsdelivr.net/npm/http-vue-loader@1.4.2/src/httpVueLoader.min",
    axios: "https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min",
    "module-resolver":
      "https://cdn.jsdelivr.net/npm/babel-plugin-module-resolver@4.0.0/lib/index.min",
    vuex: "https://cdnjs.cloudflare.com/ajax/libs/vuex/3.0.1/vuex.min",
    "vue-router":
      "https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.2/vue-router.min",
  },
});

require(["babel!/src/main"]);
