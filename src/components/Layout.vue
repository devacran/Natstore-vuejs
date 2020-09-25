<script>
import PxHeader from "./PxHeader.vue";
export default {
  name: "Layout",
  components: {
    PxHeader
  }
};
</script>
<template>
  <div>
    <PxHeader />
    <slot> </slot>
  </div>
</template>
