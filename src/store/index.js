import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
  },
  mutations: {
    increment (state) {
      return this.state.count++
    },
    decrement (state) {
      return this.state.count--
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
