import Vue from 'vue'
import App from './App.vue'

// per fare sidebar infinita 
import InfiniteSlideBar from "vue-infinite-slide-bar";
Vue.component("infinite-slide-bar", InfiniteSlideBar);
// bootstrap framework
const bootstrap = require("bootstrap");
Vue.use(bootstrap);
// per attivare animazioni allo scroll della pagina
import AOS from "aos";
import "aos/dist/aos.css";
 AOS.init();

 // per scroll link navbar
import VueSmoothScroll from "vue2-smooth-scroll";
Vue.use(VueSmoothScroll);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
