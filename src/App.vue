<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--HelloWorld msg="Welcome to Your Vue.js App"/-->
    <div>
      <h1>Contador</h1>
      <p>{{ count }} </p>
    </div>

    <div>
      <button v-on:click="increment">+</button>
      <button v-on:click="decrement">-</button>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {

  },

  /* computed: {
    count () {
      return this.$store.state.count
    }
  }, */
  computed: mapState(['count'])
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
