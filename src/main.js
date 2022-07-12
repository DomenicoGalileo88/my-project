import Vue from 'vue'
import App from './App.vue'

const bootstrap = require("bootstrap");
Vue.use(bootstrap);

import AOS from "aos";
import "aos/dist/aos.css";
 AOS.init();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
