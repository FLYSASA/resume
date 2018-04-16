<template>
  <div id="app">
    <Topbar></Topbar>
    <Banner></Banner>
    <Skill></Skill>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Banner from './components/Banner'
import Skill from './components/Skill'

export default {
  name: 'App',
  components: {Topbar,Banner,Skill}
}
</script>

<style lang="scss">
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
  font-family: 	'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
section {
  padding: 10vh 0;
}
</style>
