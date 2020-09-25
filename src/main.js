import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
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
  data() {
    return { path: window.location.pathname };
  },
  render(h) {
    return h(App, { props: { path: this.path } });
  }
}).$mount("#app");
