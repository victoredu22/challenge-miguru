<template>
  <div>
    <div
      class="scrollPokemon"
      v-infinite-scroll="getHouses"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="limit"
    >
      <div v-for="(house, key) in houses" :key="key">
        <entry-house :data="house" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import EntryHouse from "./EntryHouse.vue";
import { formatIdUrl } from "../../helper/formatIdUrl";

import { axiosNotToken } from "../../helper/axios";

export default {
  components: { EntryHouse },
  data: () => ({
    limit: 20,
    contador: 1,
    busy: false,
  }),
  computed: {
    ...mapState("house", ["houses"]),
  },
  methods: {
    ...mapActions("house", ["startHouses"]),
    async getHouses() {
      this.busy = true;
      const { data } = await axiosNotToken(
        `houses?page=${this.contador}&pageSize=10"`
      );

      const houses = data.map((elem) => ({
        name: elem.name,
        region: elem.region,
        words: elem.words,
        currentLord: elem.currentLord,
        idCurrentLord: formatIdUrl(elem.currentLord),
        idUrlHouse: formatIdUrl(elem.url)
      }));
      
      if (data) {
        this.contador += 1;
      }

      if (houses.length > 0) {
        this.startHouses(this.houses.concat(houses));
        this.busy = false;
      }
    },
  },
};
</script>

<style></style>
