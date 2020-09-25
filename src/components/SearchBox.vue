<script>
export default {
  name: "SearchBox"
};
</script>
<template>
  <div class="container">
    <input />
    <div class="icon">
      GO
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  height: 100%;
  width: -webkit-fill-available;
}
.container a:visited {
  color: white;
}
input {
  padding-left: 1em;
  border: none;
  outline: none;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 2em;
  color: white;
  background-color: black;
}
</style>
