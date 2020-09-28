import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import { setWishItem } from "./actions";
import { initialState } from "./initialState";
Vue.use(Vuex);
Vue.config.productionTip = false;
const store = new Vuex.Store({
  state: { ...initialState },
  mutations: {
    setWishItem
  }
});

new Vue({
  store,
  router,
  render(h) {
    return h(App);
  }
}).$mount("#app");
