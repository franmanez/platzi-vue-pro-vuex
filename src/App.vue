<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--HelloWorld msg="Welcome to Your Vue.js App"/-->
    <div>
      <h1>Contador</h1>
      <p>{{ count }} </p>
      <p>{{ getDouble }} </p>
    </div>

    <div>
      <button v-on:click="increment">+</button>
      <button v-on:click="decrement">-</button>
    </div>

    <div>
      <button v-on:click="increment10">+10</button>
      <button v-on:click="incrementAsync">+Async</button>
      <button v-on:click="incrementAsyncPromise">+Async Promise</button>
    </div>

    <div>
      <Child></Child>
    </div>

  </div>
</template>

<script>
import Child from './Child.vue'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Child
  },

  /* computed: {
    count () {
      return this.$store.state.count
    }
  }, */
  computed: {
    ...mapState(['count']),

    ...mapGetters(['getDouble'])

    // como tenemos el mapGetters, ya no hace falta este método.
    /* double () {
      return this.$store.getters.getDouble
    } */

  },

  methods: {
    ...mapMutations(['increment', 'decrement']),

    // como tenemos el mapMutations, ya no hace falta el método increment y decrement.
    // increment10 si, porque le definimos un comportamiento diferente.
    /*
    increment () {
      this.$store.commit('increment')
    }

    decrement () {
      this.$store.commit('decrement')
    },
    */

    increment10 () {
      this.$store.commit('increment', {
        number: 10
      })
    },

    incrementAsync () {
      this.$store.dispatch('incrementAsync', {
        number: 100
      })
    },

    incrementAsyncPromise () {
      this.$store.dispatch('incrementAsyncPromise', {
        number: 100
      })
        .then(() => {
          alert('ACTION TERMINADA cuando acaba la promesa')
        })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
