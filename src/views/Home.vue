<script>
import Layout from "../components/Layout.vue";
import Banner from "../components/Banner.vue";
import Catalog from "../components/Catalog.vue";

export default {
  name: "Home",
  components: {
    Layout,
    Banner,
    Catalog
  }
};
</script>
<template>
  <div>
    <Layout>
      <Banner></Banner>
      <Catalog></Catalog>
    </Layout>
  </div>
</template>
