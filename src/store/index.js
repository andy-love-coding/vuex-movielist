// 管理所有状态
import Vue from 'vue';
import Vuex from 'vuex';
// 引入模块
import movieList from './movielist.js';

Vue.use(Vuex);

// 创建一个对象
const store = new Vuex.Store({
  modules: {
    movieList
  }
});

export default store;
