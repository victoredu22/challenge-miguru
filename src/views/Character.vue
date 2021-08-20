<template>
  <div  class="animate__animated animate__fadeIn">
    <info-character :data="character" />
    <section-character
      :data="{
        icon: 'fas fa-journal-whills',
        name: 'Titles',
        elementos: character.titles,
      }"
    />
    <family-character :data="character" />

    <section-character
      :data="{
        icon: 'fas fa-user-tag',
        name: 'Aliases',
        elementos: character.aliases,
      }"
    />
    <section-character
      :data="{
        icon: 'fas fa-user-friends',
        name: 'Allegiances',
        elementos: housesCharacter,
      }"
    />
  </div>
</template>

<script>
import FamilyCharacter from "../components/character/FamilyCharacter.vue";
import InfoCharacter from "../components/character/InfoCharacter.vue";
import SectionCharacter from "../components/character/SectionCharacter.vue";
import { axiosNotToken } from "../helper/axios";
import { getCharacterById } from "../helper/formatChracter";
import { formatIdUrl } from "../helper/formatIdUrl";
export default {
  components: { InfoCharacter, SectionCharacter, FamilyCharacter },
  data: () => ({
    character: {},
    housesCharacter: [],
  }),
  methods: {
    async loadCharacter(idCharacter) {
      const { data } = await axiosNotToken(`characters/${idCharacter}`);

      //Obtengo el id
      const getIdsHouses = data.allegiances.map((elem) => formatIdUrl(elem));
      console.log(data.father);

      //Busco nombres de los familiares segun url
      const { name: nameFather } = await getCharacterById(data.father);
      const { name: nameMother } = await getCharacterById(data.mother);
      const { name: nameSpouse } = await getCharacterById(data.spouse);

      this.character = {
        nameFather,
        nameMother,
        nameSpouse,
        ...data,
      };

      //Agrego los nombres de la casas
      const nameHouses = getIdsHouses.map((elem, key) => this.descHouse(elem));
    },
    async descHouse(idHouse) {
      const { data } = await axiosNotToken(`houses/${idHouse}`);
      this.housesCharacter = [
        { id: idHouse, name: data.name },
        ...this.housesCharacter,
      ];
    },
  },
  created() {
    this.loadCharacter(this.$route.params.id);
  },
};
</script>

<style></style>
