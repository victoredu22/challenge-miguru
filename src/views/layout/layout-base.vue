<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-5 col-11 mt-4">
      <div class="row">
        <div class="col-10 pt-3 mt-3">
          <h1 class="title">Challenge Code</h1>
          <img
            src="https://miguru.ai/miguru_logo.svg"
            class="ml-2"
            width="90px"
          />
        </div>
      </div>
      <navbar-page />
      <router-view />
    </div>
  </div>
</template>

<script>
import navbarPage from '../../components/navbar/navbarPage.vue';
export default {
  components: { navbarPage },};
</script>

<style></style>
