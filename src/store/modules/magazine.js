import axios from 'axios';

export default {
  namespaced: true,
  state: {
    magazine: {},
  },
  getters: {
    getMagazine(state) {
      return state.magazine;
    },
  },
  mutations: {
    updateMagazine(state, payload) {
      state.magazine = payload;
    },
  },
  actions: {
    getMagazine({ commit }, edition) {
      axios.get(`https://turntablechartsapi.azurewebsites.net/api/author/magazine/edition/${edition}`)
        .then((res) => commit('updateMagazine', res.data.magazineData))
        .catch((err) => console.log(err));
    },
    // eslint-disable-next-line no-empty-pattern
    getMagazineById({ }, id) {
      return axios.get(`https://turntablechartsapi.azurewebsites.net/api/author/magazine/${id}`);
    },
  },
};
