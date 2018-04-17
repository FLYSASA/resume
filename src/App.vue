<template>
  <div id="app">
    <Topbar></Topbar>
    <Banner></Banner>
    <Skill></Skill>
    <Project></Project>
    <Myblog></Myblog>
    <Contact></Contact>
    <Gotop></Gotop>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Banner from './components/Banner'
import Skill from './components/Skill'
import Project from './components/Project'
import Myblog from './components/Myblog'
import Contact from './components/Contact'
import Gotop from './components/Gotop'

export default {
  name: 'App',
  components: {Topbar,Banner,Skill,Project,Myblog,Contact,Gotop}
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
  .title{
    text-align: center;
    margin-bottom: 5vh;
    h2{
      font-size: 30px;
    }
    p{
      margin-top: 1vh;
      font-style: italic;
    }
  }
}
</style>
