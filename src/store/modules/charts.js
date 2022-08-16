import axios from 'axios';

export default {
  namespaced: true,
  state: {
    charts: {},
  },
  getters: {
    getCharts(state) {
      return state.charts;
    },
  },
  mutations: {
    updateCharts(state, payload) {
      state.charts = payload;
    },
  },
  actions: {
    getCharts({ commit }) {
      axios.get('https://turntablechartsapi.azurewebsites.net/api/chart/list/1')
        .then((res) => commit('updateCharts', res.data))
        .catch((err) => console.log(err));
    },
  },
};
