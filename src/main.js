import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from "./router";

Vue.use(VueRouter)
Vue.config.productionTip = false


Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
