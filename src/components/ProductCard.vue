<script>
export default {
  name: "ProductCard",
  props: ["product", "styleType"],
  methods: {
    handleClick() {
      this.$store.commit("setWishItem", this.product);
    }
  },
  computed: {
    isFav() {
      console.log(this.product.isFavorite);
      return this.product.isFavorite;
    },
    containerClass() {
      return `
      width: 300px;
      height: 300px;
      border: 1px solid transparent;
      ${this.styleType !== "wish" ? "background-color: white" : ""}
      `;
    },
    imgContainerClass() {
      return `
        position: relative;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        margin: 10px;
        background-color: green;
        ${
          this.styleType === "wish"
            ? "margin: 0px; width: 100%; height: 100%;"
            : ""
        }
        `;
    }
  }
};
</script>
<template>
  <div :style="containerClass">
    <div :style="imgContainerClass">
      <div v-if="styleType !== 'wish'" class="wish-button">
        <a v-on:click="handleClick">
          <img v-if="!isFav" src="../assets/WishIconInactive.png" />
        </a>
        <a v-on:click="handleClick"
          ><img v-if="isFav" src="../assets/WishIconActive.png"
        /></a>
      </div>
      <img class="product-img" :src="this.product.img" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.wish-button {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
}
.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
