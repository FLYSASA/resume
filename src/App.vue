<template>
  <div id="app">
    <Topbar></Topbar>
  </div>
</template>

<script>
import Topbar from './components/Topbar'

export default {
  name: 'App',
  components: {Topbar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
