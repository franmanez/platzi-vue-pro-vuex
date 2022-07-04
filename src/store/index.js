import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    getDouble (state, getters) {
      return state.count * 2
    }
  },
  mutations: {
    increment (state, payload) {
      if (payload.number) state.count += payload.number
      else state.count++
    },
    decrement (state) {
      this.state.count--
    }
  },
  actions: {
    incrementAsync (context, payload) {
      setTimeout(() => {
        context.commit('increment', payload)
      }, 2000)
    },

    incrementAsyncPromise (context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('increment', payload)
          resolve()
        }, 2000)
      })
    }
  },
  modules: {
  }
})

export default store
