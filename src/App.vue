<script>
import Home from "./pages/Home.vue";
import MyWishList from "./pages/MyWishList.vue";
export default {
  name: "App",
  props: ["path"],
  components: {
    Home,
    MyWishList
  }
};
</script>
<template>
  <div>
    <Home v-if="path === '/'" />
    <MyWishList v-if="path === '/wishlist'" />
  </div>
</template>
