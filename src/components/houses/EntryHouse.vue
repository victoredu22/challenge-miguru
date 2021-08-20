<template>
  <div class="d-flex flex-wrap mb-3 divHouses mt-4">
    <div class="col-12">
      <a
        class="float-start titleCard"
        :href="'../house/' + data.idUrlHouse"
      >
        <i class="fas fa-home"></i> {{ data.name }}
      </a>

    </div>
    <div class="container">
      <div class="d-flex flex-wrap">
        <div class="col-4">
          <p class="float-start crowlands">
            <i class="fas fa-map-marked-alt"></i>
            {{ data.region }}
          </p>
        </div>
        <div class="col-4">
          <p class="float-start detailFire">
            <i class="fab fa-leanpub"></i>
            {{ data.words ? data.words : "n/a" }}
          </p>
        </div>
        <div class="col-4">
          <a
            v-if="data.idCurrentLord"
            class="float-start currentLord"
            :href="'/character/' + data.idCurrentLord"
          >
            <i class="fas fa-user"></i> Current Lord
          </a>
          <span v-else class="float-start currentLord"><i class="fas fa-user"></i> n/a</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: [],
  },
};
</script>

<style></style>
