import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify'
import "vuetify/dist/vuetify.min.css";

import Routes from "./components/Routes/router.js"
import store from './store'


Vue.config.productionTip = false

new Vue({
  store,
  router:Routes,
  vuetify,
  render: h => h(App),
  
  }).$mount('#app')
