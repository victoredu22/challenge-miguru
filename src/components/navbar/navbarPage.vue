<template>
  <div class="d-flex mt-4">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li
          v-if="this.$route.name != 'Home'"
          class="breadcrumb-item active"
          aria-current="page"
        >
          {{ this.$route.name }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
};
</script>

<style></style>
