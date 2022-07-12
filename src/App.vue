<template>
  <WykresZadanie />

  <router-view/>

</template>

<script>
import WykresZadanie from './components/WykresZadanie.vue'


export default {
  name: 'App',
  components: {
    WykresZadanie
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
}
.navbar-brand { font-size: unset; }

</style>
