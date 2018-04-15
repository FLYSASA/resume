<template>
  <div id="app">
    <Topbar></Topbar>
    <Banner></Banner>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Banner from './components/Banner'

export default {
  name: 'App',
  components: {Topbar,Banner}
}
</script>

<style>
/* 字体图标 */
.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

#app {
  height: 100vh;
  font-size: 14px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
