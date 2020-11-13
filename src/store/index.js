import Vue from 'vue'
import Vuex from 'vuex'
// import profile from '../axios/axiosinstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profiles: []
  },
  mutations: {
    FETCH_PROFILE (state, payload) {
      state.profiles = payload
    }
  },
  actions: {
    fetchProfile ({ commit }) {
      profile
        .get()
        .then(({ data }) => {
          commit('FETCH_PROFILE', data)
        })
        .catch(console.log)
    }
  },
  modules: {
  }
})
