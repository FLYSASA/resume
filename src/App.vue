<template>
  <div id="app">
    <Topbar></Topbar>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'     //直接引入node_modules里的normalize组件,默认样式在各个浏览器上一样
import './assets/reset.css'              //重置某些样式,与上面不冲突,但是要写在后面

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
