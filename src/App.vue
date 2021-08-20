<template>
  <component :is="layout"></component>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>
<style scoped></style>
