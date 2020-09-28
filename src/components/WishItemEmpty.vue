<template lang="html">
  <div class="container">
    Aun no has añadido nada a tu lista

    <router-link to="/">IR A COMPRAR</router-link>
  </div>
</template>

<script>
export default {
  name: "WishItemEmpty"
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid black;
  font-size: 40px;
  color: lightgray;
}
</style>
