import { createStore } from 'vuex';
import ChartModule from './modules/charts';
import MagazineModule from './modules/magazine';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    chart: ChartModule,
    magazine: MagazineModule,
  },
});
