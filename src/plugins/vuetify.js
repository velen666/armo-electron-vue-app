import Vue from 'vue';
import Vuetify, { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.teal.accent3,
        secondary: colors.teal.accent4,
        accent: '#004D40',
        info: '#FC642D',
        error: '#b71c1c',
      },
    },
  },
});
