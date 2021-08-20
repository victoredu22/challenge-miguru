<template>
    <div class="divTitles mt-4">
      <div class="row justify-content-around">
        <div class="col-12">
          <p class="float-start titleCard">
            <i class="fas fa-journal-whills"></i>
            Titles:
          </p>
        </div>
        <div
          v-for="(elem, key) in data.titles"
          :key="key"
          class="col-5 divCharacter mb-2 text-center"
        >
          {{ elem ? elem : 'n/a' }}
        </div>
      </div>
    </div>
    
</template>
<script>
export default {
  props:{
    data:[]
  }
};
</script>

<style></style>
