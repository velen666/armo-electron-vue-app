<template>
  <nav>
    <v-app-bar dark app flat>
      <v-app-bar-nav-icon id="drawerIcon" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">themoviedb</span>
        <span>.org</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="teal darken-2">
      <v-layout column align-center>
        <v-flex class="my-5">
          <v-img max-width="100px" src="../assets/logo.png"></v-img>
        </v-flex>
      </v-layout>

      <v-list flat>
        <v-list-item v-for="link in links" :key="link.route" link :to="link.route" exact="true">
          <v-list-item-icon>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-home', text: 'Home', route: '/' },
        {
          icon: 'mdi-filmstrip',
          text: 'Movies Playing Now',
          route: '/movies-playing-now',
        },
        {
          icon: 'mdi-trophy',
          text: 'Top Rated Movies',
          route: '/top-rated-movies',
        },
        {
          icon: 'mdi-television-classic',
          text: 'Popular Shows',
          route: '/popular-shows',
        },
        {
          icon: 'mdi-medal',
          text: 'Top Rated Shows',
          route: '/top-rated-shows',
        },
        {
          icon: 'mdi-information',
          text: 'About',
          route: '/about',
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
