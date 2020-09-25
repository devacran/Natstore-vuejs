<script>
import Layout from "../components/Layout.vue";
import WishList from "../components/WishList.vue";

export default {
  name: "Home",
  components: {
    Layout,
    WishList
  }
};
</script>
<template>
  <Layout>
    <div class="container">
      <div class="menu" />
      <WishList />
    </div>
  </Layout>
</template>
<style scoped lang="scss">
.menu {
  width: 100%;
  background-color: #cbcbcb;
}
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
}
</style>
