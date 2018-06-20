// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
Vue.config.productionTip = false
import VueCookie from 'vue-cookies'
Vue.use(VueCookie)
import axios from 'axios';
Vue.prototype.$axios = axios;
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'

import Header from './components/Header'
//import VeeValidate from 'vee-validate';
//Vue.use(VeeValidate);
// 导入 table 和 分页组件
import {VTable,VPagination} from 'vue-easytable'
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.component('v-header', Header);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
