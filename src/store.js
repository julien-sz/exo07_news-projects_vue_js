import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news:[]
  },
  mutations: {
    set_news (state,  payload ){
      state.news = payload;
    }
  },
  actions: {
    getNews({ commit }, payload) {
      commit('set_news', payload)
    }
  },

})
