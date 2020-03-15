import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/vuex'
import VueRouter from 'vue-router';
import Viewer from 'v-viewer';
import "./config/axios"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Viewer);

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
