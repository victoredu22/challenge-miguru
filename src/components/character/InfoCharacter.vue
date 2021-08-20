<template>
  <div class="container">
    <div class="d-flex flex-wrap mt-4">
      <div class="col-12">
        <div class="d-flex justify-content-center">
          <h3><i class="fas fa-user"></i> {{ data.name }}</h3>
        </div>
        <div class="d-flex justify-content-center flex-wrap mb-3">
          <div class="divGenre">
            <i v-if="data.gender  === 'Female'" class="fas fa-venus"></i>
            <i v-if="data.gender  === 'Male'" class="fas fa-mars"></i>
            {{ data.gender }}
          </div>
          <div v-if="data.born" class="divInfo">
            <i class="fas fa-baby-carriage"></i> {{ data.born }}
          </div>
          <div v-if="data.died" class="divInfo divDead">
            <i class="fas fa-cross"></i> {{ data.died }}
          </div>
          <div v-if="data.culture" class="divInfo divCulture">
            <i class="fas fa-users"></i> {{ data.culture }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    data:''
  }
};
</script>
