<template>
  <v-container>
    <media-nav
      :pageTitle="pageTitle"
      :sortCriteria="sortCriteria"
      @popularity="sortBy('popularity')"
      @vote_average="sortBy('vote_average')"
      @release_date="sortBy('release_date')"
    ></media-nav>
    <media-grid :movies="movies" :imageURL="imageURL"></media-grid>
    <div class="text-center" v-if="showPagination">
      <v-pagination color="primary" v-model="page" :length="3" :value="page"></v-pagination>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import config from '../config/index';
import MediaGrid from '../components/MediaGrid.vue';
import MediaNav from '../components/MediaNav.vue';

export default {
  components: {
    mediaGrid: MediaGrid,
    mediaNav: MediaNav,
  },
  data() {
    return {
      movies: [],
      pageTitle: 'Movies Playing Now',
      imageURL: 'https://image.tmdb.org/t/p/w1280',
      sortCriteria: 'Most Popular',
      sortedBy: 'popularity',
      page: 1,
      showPagination: false,
    };
  },
  methods: {
    init() {
      const key = config.apiKey;
      axios
        .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${this.page}`)
        .then((response) => {
          this.movies = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.sortBy(this.sortedBy);
          this.showPagination = true;
        });
    },
    sortBy(prop) {
      if (prop === 'popularity') {
        this.sortCriteria = 'Most Popular';
      } else if (prop === 'vote_average') {
        this.sortCriteria = 'Highest Rated';
      } else if (prop === 'release_date') {
        this.sortCriteria = 'Release Date';
      }
      this.sortedBy = prop;
      this.movies.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
    },
  },
  watch: {
    page: {
      function(page) {
        this.page = page;
        this.init();
      },
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
</style>
