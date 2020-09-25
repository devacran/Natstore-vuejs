<script>
import SearchBox from "./SearchBox.vue";
const menuLinks = [
  { title: "New Arrivals", link: "" },
  { title: "Clothing", link: "" },
  { title: "Sports", link: "" },
  { title: "The Brand", link: "" },
  { title: "Accesories", link: "" },
  { title: "Sale", link: "" }
];
export default {
  name: "Navbar",
  components: { SearchBox },
  data: () => ({
    menuLinks
  })
};
</script>
<template>
  <div>
    <div class="container">
      <div class="left-side">
        <a v-for="(link, i) in menuLinks" v-bind:key="i">{{ link.title }}</a>
      </div>
      <div class="right-side">
        <SearchBox />
        <div class="buttons">
          <div class="cart-button">
            <a href="/">
              <img src="../assets/cart.svg" />
            </a>
            <span> </span>
          </div>
          <div class="wish-button">
            <a href="/wishlist">
              <img src="../assets/WishIconInactive.png" />
            </a>
            <!-- <span>{myWishList.length}</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.left-side {
  display: flex;
  width: 70%;
  padding: 0 3em;
  justify-content: space-between;
  align-content: center;
  font-size: 18px;
}
.right-side {
  display: flex;
  height: 100%;
  justify-content: space-between;
}
.container {
  display: flex;
  height: 2em;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.navbar-link {
}
.cart-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 3em;
  color: black;
  a {
    height: 100%;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
.wish-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 3em;
  color: black;
  a {
    height: 100%;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
.buttons {
  display: flex;
  width: 6em;
}
</style>
