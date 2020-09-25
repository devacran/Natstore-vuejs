<script>
export default {
  name: "ProductCard",
  props: ["pancho"],
  methods: {
    click() {
      console.log(this.pancho);
    }
  }
};
</script>
<template>
  <div>
    {{ this.pancho }}
    <button v-on:click="click"></button>
  </div>
</template>
<style></style>
