import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MoviesPlayingNow from '@/views/MoviesPlayingNow.vue';
import TopRatedMovies from '../views/TopRatedMovies.vue';
import PopularShows from '../views/PopularShows.vue';
import TopRatedShows from '../views/TopRatedShows.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/movies-playing-now',
    name: 'moviesplayingnow',
    component: MoviesPlayingNow,
  },
  {
    path: '/top-rated-movies',
    name: 'topratedmovies',
    component: TopRatedMovies,
  },
  {
    path: '/popular-shows',
    name: 'popularshows',
    component: PopularShows,
  },
  {
    path: '/top-rated-shows',
    name: 'topratedshows',
    component: TopRatedShows,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
