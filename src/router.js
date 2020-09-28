import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import MyWishList from "./views/MyWishList.vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: MyWishList
    }
  ]
});
