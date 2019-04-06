import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { GET_URLS } from './env'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loaded: false,
    spacexData: [],
    missions: []
  },
  mutations: {
    getSpacexData(state, payload) {
      var newData = Array(payload);
      state.spacexData = [...state.spacexData, ...newData[0]];
    },
    loaded(state) {
      state.loaded = true;
    }
  },
  actions: {
    getSpacexData({ commit, dispatch }) {
      axios.get(GET_URLS.SPACEX)
        .then(({ data }) => {
          commit('getSpacexData', data);
          dispatch('loaded');
        })
        .catch(err => {
          // eslint-disable-next-line
          console.error(err);
        })
    },
    loaded({ commit }) {
      commit('loaded');
    }
  },
  getters: {
    isLoaded: ({ loaded }) => {
      return loaded;
    }
  }
})
