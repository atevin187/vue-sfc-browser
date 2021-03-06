import Vue from "vue";
import httpVueLoader from "http-vue-loader";

Vue.use(httpVueLoader);

new Vue({
  components: {
    app: "url:app.vue",
  },
  template: "<app />",
}).$mount("#app");
