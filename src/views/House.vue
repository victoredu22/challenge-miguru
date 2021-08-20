<template>
  <div class="animate__animated animate__fadeIn">
    <entry-house :data="house"/>
    <info-house :data="house" />
  </div>
</template>

<script>
import EntryHouse from '../components/houses/EntryHouse.vue';
import InfoHouse from '../components/houses/InfoHouse.vue';

import { axiosNotToken } from '../helper/axios'
import { formatIdUrl } from '../helper/formatIdUrl';
export default {
  components: { EntryHouse,InfoHouse  },
  data:()=>({
    house:''
  }),
  methods:{
    async getHouse(idHouse){
      const {data} = await axiosNotToken(`houses/${idHouse}`);
      this.house = {idUrlHouse:formatIdUrl(data.url),  ...data};
     
    }
  },
  created(){
    this.getHouse(this.$route.params.id);
  }
}
</script>