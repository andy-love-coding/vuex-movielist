// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// 引用bootstrap样式
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '@/assets/css/index.css';

// 引入vuex的store对象
import store from '@/store/index.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
});
