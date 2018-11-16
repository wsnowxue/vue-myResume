<template>
  <div id="app">
    <Vheader></Vheader>
    <router-view></router-view>
    <Vside></Vside>
  </div>
</template>

<script>
import Vheader from './components/Vheader.vue'
import Vside from './components/Vside.vue'

export default {
  name: 'app',
  components: {
    Vheader,
    Vside,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
}
html,body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
