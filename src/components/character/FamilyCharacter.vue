<template>
  <div class="container mt-4">
    <div class="row justify-content-around text-center">
      <div class="col-4 divCharacter mb-3 border">
        Mother:
          <a v-if="data.nameMother" :href="'/character/'+ formatIdUrl(data.mother)">
             {{ data.nameMother }}
          </a>
          <span v-else>n/a</span>
      </div>
      <div class="col-4 divCharacter mb-3 border">
        Father:
          <a v-if="data.nameFather" :href="'/character/'+ formatIdUrl(data.father)">
             {{ data.nameFather }}
          </a>
          <span v-else>n/a</span>
      </div>
      <div class="col-4 divCharacter mb-3 border">
        Spouse:
          <a v-if="data.nameSpouse" :href="'/character/'+ formatIdUrl(data.spouse)">
             {{ data.nameSpouse }}
          </a>
          <span v-else>n/a</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: "",
  },
  methods:{
    formatIdUrl(param){
      if(param){
        const urlParts = param.split("/");
        const id = urlParts[urlParts.length - 1];
        return id;
      }
    }
  },
};
</script>
<style>
span {
  font-weight: 500;
}
</style>
