<script>
import WishItem from "./WishItem.vue";
import WishItemEmpty from "./WishItemEmpty.vue";
export default {
  name: "WishList",
  components: {
    WishItem,
    WishItemEmpty
  },
  computed: {
    myWishList() {
      return this.$store.state.myWishList;
    }
  }
};
</script>
<template>
  <div>
    <div v-if="myWishList.length > 0" class="container">
      <header>
        <h2>My WishList</h2>
        <nav>
          <span>Ordenar Lista</span>
          <span>Eliminar Lista</span>
        </nav>
        <div class="buttons">
          <a class="btn">Share this list</a>
        </div>
      </header>
      <WishItem
        v-for="(product, i) in myWishList"
        :key="i"
        :product="product"
      />
    </div>
    <WishItemEmpty v-if="myWishList.length < 1" />
  </div>
</template>
<style scoped lang="scss">
.container {
  width: 100%;
}
header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
}
h2 {
  grid-column: span 2;
}
.btn {
  text-align: center;
  line-height: 30px;
  background-color: black;
  padding: 5px;
  color: white;
  width: 100px;
  height: 30px;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
nav {
  display: flex;
  align-items: center;
  span {
    margin-right: 1em;
  }
}
</style>
