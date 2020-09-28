<script>
import Layout from "../components/Layout.vue";
import pxMenu from "../components/pxMenu.vue";
import WishList from "../components/WishList.vue";

export default {
  name: "Home",
  components: {
    Layout,
    WishList,
    pxMenu
  }
};
</script>
<template>
  <Layout>
    <div class="container">
      <pxMenu />
      <WishList />
    </div>
  </Layout>
</template>
<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
}
</style>
