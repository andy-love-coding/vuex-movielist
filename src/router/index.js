import Vue from 'vue';
import Router from 'vue-router';
import MovieList from '@/views/movieList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: {name: 'in_theaters'}
    },
    {
      name: 'in_theaters',
      path: '/in_theaters',
      component: MovieList
    },
    {
      name: 'coming_soon',
      path: '/coming_soon',
      component: MovieList
    },
    {
      name: 'top250',
      path: '/top250',
      component: MovieList
    }
  ]
});
