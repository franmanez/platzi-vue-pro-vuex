<template>
  <div id="main">
    <h1>Child</h1>
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
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Child',
  components: {

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
