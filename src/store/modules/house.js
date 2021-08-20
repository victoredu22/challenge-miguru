export default{
  namespaced:true,
  state:{
    houses:[]
  },
  mutations:{
    startHouses(state,payload){
      state.houses = payload;
    }
  },
  actions:{
    startHouses({commit},payload){
      commit('startHouses',payload)
    }
  }
}