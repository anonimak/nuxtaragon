import Vue from 'vue';
import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/vendor/font-awesome/css/font-awesome.css";
import "@/assets/scss/argon.scss";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import VueLazyload from "vue-lazyload";

Vue.use(globalComponents);
Vue.use(globalDirectives);
Vue.use(VueLazyload);

Object.entries(globalComponents).forEach(([name, component]) => {
  Vue.component(name, component)
})

Vue.directive("click-outside", globalDirectives);