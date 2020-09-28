<script>
import ProductCard from "./ProductCard.vue";
export default {
  name: "Catalog",
  components: { ProductCard },
  computed: {
    productList() {
      return this.$store.state.productList;
    }
  }
};
</script>
<template>
  <div>
    <div class="container">
      <nav>
        <div>New Arrival</div>
        <div>Special</div>
        <div>Featured</div>
      </nav>
      <div class="grid">
        <ProductCard
          :product="product"
          v-for="(product, i) in productList"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
nav {
  display: flex;
  height: 2em;
  align-items: center;
  margin-bottom: 20px;
  div {
    margin: 0 2em;
  }
}
.container {
  width: 100%;
  padding-top: 30px;
  background-color: #dcdcdc;
}
.grid {
  width: 100%;
  height: 700px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  background-color: #dcdcdc;
}
</style>
