<template>
  <div class="divTitles mt-4 mb-4">
    <div class="row justify-content-around">
      <div class="d-flex">
        <p class="float-start titleCard">
          <i :class="data.icon"></i>
          {{ data.name }}:
        </p>
      </div>
      <div
        v-for="(elem, key) in data.elementos"
        :key="key"
        class="col-5 divCharacter mb-2 text-center"
      >
        <a v-if="data.name === 'Allegiances'" :href="'/house/' + elem.id">
          {{ elem.name }}
        </a>
        <label v-else>{{ elem ? elem : "n/a" }}</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: "",
  },
};
</script>

<style></style>
