import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/js/all.js';
import '../src/assets/styles.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

var infiniteScroll =  require('vue-infinite-scroll');
Vue.use(infiniteScroll)


Vue.use(VueAxios, axios)
Vue.config.productionTip = false
import "animate.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
